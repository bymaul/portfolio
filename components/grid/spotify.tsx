'use client';

import useSWR from 'swr';
import Card from '../ui/card';
import { cn } from '@/lib/utils';

interface Spotify {
    isPlaying: boolean;
    title: string;
    album: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Spotify() {
    const { data, isLoading, error } = useSWR<Spotify>('/api/now-playing', fetcher);

    if (isLoading) return <NowPlayingLoading />;
    if (error) return <ErrorFallback />;

    return (
        <Card
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1)),
                    url(${data?.albumImageUrl ?? ''})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='flex h-full flex-col justify-end gap-3 bg-cover'>
            <div className='px-8 text-dark-50'>
                <h2
                    className='line-clamp-2 font-calistoga text-2xl md:line-clamp-1 lg:line-clamp-2'
                    title={data?.title}>
                    <a
                        href={data?.songUrl ?? '#'}
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        className='cancel-drag'>
                        {data?.title}
                    </a>
                </h2>
                <p className='truncate font-medium' title={data?.artist}>
                    {data?.artist}
                </p>
            </div>
            <CardFooter isPlaying={data?.isPlaying} />
        </Card>
    );
}

function LoadingText({ className }: Readonly<{ className?: string }>) {
    return (
        <div className={`${className} h-4 animate-pulse rounded-md bg-gray-300`}>
            <span className='invisible'>Placeholder</span>
        </div>
    );
}

function CardFooter({ isPlaying }: Readonly<{ isPlaying?: boolean }>) {
    return (
        <div className='flex items-center gap-3 border-t border-dark-50 bg-white px-8 py-2 text-dark-400 dark:border-dark-800 dark:bg-dark-900'>
            {isPlaying && (
                <div className='inline-flex items-center justify-center gap-1'>
                    <div className='w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_0.49s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#1DB954]' />
                </div>
            )}
            <p className='text-sm'>{isPlaying ? 'Now Playing' : 'Offline. Last Played'}</p>
        </div>
    );
}

function NowPlayingLoading() {
    return (
        <Card className='flex h-full flex-col justify-end gap-2'>
            <div className='flex flex-col gap-3 px-8'>
                <LoadingText className='h-6' />
                <LoadingText />
            </div>
            <CardFooter />
        </Card>
    );
}

function ErrorFallback() {
    return (
        <Card className='flex h-full flex-col justify-end gap-3'>
            <div className='flex flex-col gap-3 px-8'>
                <h2 className='font-calistoga text-2xl'>Failed to load</h2>
                <p className='font-medium'>Failed to load</p>
            </div>
            <CardFooter />
        </Card>
    );
}
