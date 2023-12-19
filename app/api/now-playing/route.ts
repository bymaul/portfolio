import { getNowPlaying } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
    const res = await getNowPlaying();

    if (res.status === 204 || res.status > 400 || res.data.currently_playing_type !== 'track') {
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
