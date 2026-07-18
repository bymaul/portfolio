'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/card';

interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    albumImageUrl?: string;
    songUrl?: string;
}

export default function NowPlayingCard() {
    const [data, setData] = useState<SpotifyData | null>(null);

    useEffect(() => {
        const fetchNowPlaying = () =>
            fetch('/api/now-playing')
                .then((r) => r.json())
                .then(setData)
                .catch(() => {});

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 15000);
        window.addEventListener('focus', fetchNowPlaying);

        return () => {
            clearInterval(interval);
            window.removeEventListener('focus', fetchNowPlaying);
        };
    }, []);

    return (
        <Card
            style={{
                backgroundImage: data?.albumImageUrl
                    ? `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1)), url(${data.albumImageUrl})`
                    : '',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='flex h-full flex-col justify-end overflow-hidden'>
            <div className='text-dark-50 z-10 flex flex-col gap-1 px-8 pb-3'>
                {!data ? (
                    <>
                        <div className='h-6 w-3/4 animate-pulse rounded bg-white/20' />
                        <div className='h-4 w-1/2 animate-pulse rounded bg-white/20' />
                    </>
                ) : (
                    <>
                        <h2
                            className='font-pixelify-sans text-2xl line-clamp-2 md:line-clamp-1 lg:line-clamp-2'
                            title={data.title}>
                            <a
                                href={data.songUrl ?? '#'}
                                target='_blank'
                                rel='nofollow noopener noreferrer'
                                className='cancel-drag'>
                                {data.title ?? 'Failed to load'}
                            </a>
                        </h2>
                        <p className='truncate font-medium' title={data.artist}>
                            {data.artist ?? 'Spotify disconnected'}
                        </p>
                    </>
                )}
            </div>

            <div className='border-dark-50 text-dark-400 dark:border-dark-800 dark:bg-dark-900 z-10 flex items-center gap-3 border-t bg-white px-8 py-3'>
                {data?.isPlaying ? (
                    <div className='inline-flex h-3 items-end gap-0.5'>
                        {[0.85, 0.62, 1.26, 0.85, 0.49, 1.26].map((dur, i) => (
                            <div
                                key={i}
                                className='w-1 animate-[playing_1s_ease_infinite] rounded-full bg-[#1DB954]'
                                style={{ animationDuration: `${dur}s`, height: '100%' }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='h-2 w-2 rounded-full bg-gray-400' />
                )}
                <p className='text-sm'>{data?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}</p>
            </div>
        </Card>
    );
}
