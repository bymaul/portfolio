import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

interface SpotifyTrack {
    name: string;
    album: {
        name: string;
        artists: Array<{ name: string }>;
        images: Array<{ url: string }>;
    };
    external_urls: {
        spotify: string;
    };
}

interface SpotifyApi {
    is_playing: boolean;
    item: SpotifyTrack;
    currently_playing_type: string;
}

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN ?? '';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_URL =
    'https://api.spotify.com/v1/me/player/currently-playing';

const getBasicToken = () =>
    Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
        'base64'
    );

const getAccessToken = async (): Promise<string> => {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${getBasicToken()}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }).toString(),
    });

    const data = await response.json();
    return data.access_token;
};

const getNowPlaying = async (): Promise<SpotifyApi> => {
    const accessToken = await getAccessToken();
    const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch currently playing track');
    }

    return response.json();
};

const formatResponse = (data: SpotifyApi) => ({
    isPlaying: data.is_playing,
    title: data.item.name,
    album: data.item.album.name,
    artist: data.item.album.artists.map((artist) => artist.name).join(', '),
    albumImageUrl: data.item.album.images[0]?.url,
    songUrl: data.item.external_urls.spotify,
});

export async function GET() {
    try {
        const data = await getNowPlaying();

        if (!data.is_playing || data.currently_playing_type !== 'track') {
            return NextResponse.json({ isPlaying: false });
        }

        return NextResponse.json(formatResponse(data));
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
        return NextResponse.json({ isPlaying: false });
    }
}
