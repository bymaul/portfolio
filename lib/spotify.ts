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

export const getNowPlaying = async () => {
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
