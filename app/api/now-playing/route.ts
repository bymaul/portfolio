import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export interface SpotifyApi {
    is_playing: boolean;
    item: {
        name: string;
        album: {
            name: string;
            artists: Array<{ name: string }>;
            images: [{ url: string }];
        };
        external_urls: {
            spotify: string;
        };
    };
    currently_playing_type: string;
}

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN ?? '';

const basicToken = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString('base64');

const getAccessToken = async () => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basicToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }).toString(),
    });

    const data = await res.json();
    return data.access_token;
};

const getNowPlaying = async () => {
    const access_token = await getAccessToken();

    const response = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch currently playing track');
    }

    const data: SpotifyApi = await response.json();
    return data;
};

export async function GET() {
    try {
        const data = await getNowPlaying();

        if (!data.is_playing || data.currently_playing_type !== 'track') {
            return NextResponse.json({ isPlaying: false });
        }

        const response = {
            isPlaying: data.is_playing,
            title: data.item.name,
            album: data.item.album.name,
            artist: data.item.album.artists
                .map((artist) => artist.name)
                .join(', '),
            albumImageUrl: data.item.album.images[0].url,
            songUrl: data.item.external_urls.spotify,
        };

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ isPlaying: false });
    }
}
