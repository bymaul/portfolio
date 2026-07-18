import { NextResponse } from 'next/server';

const { SPOTIFY_CLIENT_ID: id, SPOTIFY_CLIENT_SECRET: secret, SPOTIFY_REFRESH_TOKEN: refresh } = process.env;
const basic = Buffer.from(`${id}:${secret}`).toString('base64');
const headers = { 'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=5' };

const fetchSpotify = (url: string, token: string) =>
    fetch(url, { headers: { Authorization: `Bearer ${token}` }, next: { revalidate: 0 } });

export async function GET() {
    if (!id || !secret || !refresh) return NextResponse.json({ isPlaying: false });

    try {
        const { access_token } = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refresh }),
            next: { revalidate: 0 },
        }).then((res) => res.json());

        let res = await fetchSpotify('https://api.spotify.com/v1/me/player/currently-playing', access_token);
        let isPlaying = true;

        if (res.status === 204 || res.status > 400) {
            res = await fetchSpotify('https://api.spotify.com/v1/me/player/recently-played?limit=1', access_token);
            isPlaying = false;

            if (res.status === 204 || res.status > 400) return NextResponse.json({ isPlaying: false });
        }

        const data = await res.json();

        const track = isPlaying ? data.item : data.items?.[0]?.track;
        if (!track) return NextResponse.json({ isPlaying: false });

        return NextResponse.json(
            {
                isPlaying: isPlaying && data.is_playing,
                title: track.name,
                artist: track.artists.map((a: any) => a.name).join(', '),
                albumImageUrl: track.album.images[0]?.url || '',
                songUrl: track.external_urls.spotify,
            },
            { headers },
        );
    } catch (e) {
        return NextResponse.json({ isPlaying: false }, { status: 500 });
    }
}
