'use client';

import { Spotify } from '@/types/spotify';
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa6';
import useSWR from 'swr';
import Card from '../card';

function NowPlaying() {
    const { data } = useSWR<Spotify>('/api/now-playing', (url: string) =>
        fetch(url).then((r) => r.json())
    );

    if (!data)
        return (
            <div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='inline-flex items-center justify-center gap-1'>
                            <div className='h-1 w-1 rounded-full bg-[#1DB954]' />
                            <div className='h-1 w-1 rounded-full bg-[#1DB954]' />
                            <div className='h-1 w-1 rounded-full bg-[#1DB954]' />
                        </div>
                        <div className='h-4 animate-pulse rounded-md bg-gray-300'>
                            <span className='invisible'>Now Playing</span>
                        </div>
                    </div>
                    <div className='h-6 animate-pulse rounded-md bg-gray-300'>
                        <span className='invisible'>Song Title</span>
                    </div>
                    <div className='h-4 animate-pulse rounded-md bg-gray-300'>
                        <span className='invisible'>Artist</span>
                    </div>
                </div>
            </div>
        );

    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='inline-flex items-center justify-center gap-1'>
                    {data?.isPlaying ? (
                        <>
                            <div className='w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#1DB954]' />
                            <div className='w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#1DB954]' />
                            <div className='w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#1DB954]' />
                        </>
                    ) : (
                        <>
                            <div className='h-1 w-1 rounded-full bg-[#1DB954]' />
                            <div className='h-1 w-1 rounded-full bg-[#1DB954]' />
                            <div className='h-1 w-1 rounded-full bg-[#1DB954]' />
                        </>
                    )}
                </div>
                <p className='text-sm'>
                    {data?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}
                </p>
            </div>
            <Link
                className='cancel-drag line-clamp-3 text-2xl font-semibold'
                href={
                    data?.isPlaying
                        ? data?.songUrl
                        : 'https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=15c53cbc7c774697'
                }
                target='_blank'
                rel='nofollow noopener noreferrer'>
                {data?.isPlaying ? data?.title : 'Pink + White'}
            </Link>
            <p>{data?.isPlaying ? data?.artist : 'Frank Ocean'}</p>
        </div>
    );
}

export default function Spotify() {
    return (
        <Card>
            <div className='flex h-full flex-col justify-between gap-3 p-6 md:px-10 md:py-6'>
                <FaSpotify size='3.5rem' color='#1DB954' />
                <NowPlaying />
            </div>
        </Card>
    );
}
