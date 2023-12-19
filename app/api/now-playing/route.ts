import { NextResponse } from 'next/server';

import { SpotifyApiTypes } from '@/types/spotify';
import axios from 'axios';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || '';

const basicToken = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
);

const getAccessToken = async () => {
    const res = await axios.post<{ access_token: string }>(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        }).toString(),
        {
            headers: {
                Authorization: `Basic ${basicToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );

    return res.data.access_token;
};

const getNowPlaying = async () => {
    const access_token = await getAccessToken();

    const response = await axios.get<SpotifyApiTypes>(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    return response;
};

export async function GET() {
    const res = await getNowPlaying();

    if (
        res.status === 204 ||
        res.status > 400 ||
        res.data.currently_playing_type !== 'track'
    ) {
        return NextResponse.json({ isPlaying: false });
    }

    const data = {
        isPlaying: res.data.is_playing,
        title: res.data.item.name,
        album: res.data.item.album.name,
        artist: res.data.item.album.artists[0].name,
        albumImageUrl: res.data.item.album.images[0].url,
        songUrl: res.data.item.external_urls.spotify,
    };

    return NextResponse.json(data);
}
