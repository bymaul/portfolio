'use client';

import Button from '@/components/button';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function NotFound() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 0);
    }, []);

    return (
        <div
            style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 500ms, transform 500ms',
            }}
            className='flex min-h-screen flex-col items-center justify-center gap-4 px-4'>
            <h1 className='text-center text-9xl font-bold'>404</h1>
            <h2 className='text-center text-3xl font-semibold'>
                Page Not Found
            </h2>
            <p className='text-center '>
                Sorry, we couldn&apos;t find what you were looking for.
            </p>
            <Button as={Link} className='px-4 py-2' href='/'>
                <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:-rotate-180' />
                Back to Home
            </Button>
        </div>
    );
}
