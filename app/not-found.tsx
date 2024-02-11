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
            className='flex flex-col gap-4 items-center justify-center px-4 min-h-screen'>
            <h1 className='text-9xl font-bold text-center'>404</h1>
            <h2 className='text-3xl font-semibold text-center'>
                Page Not Found
            </h2>
            <p className='text-center '>
                Sorry, we couldn&apos;t find what you were looking for.
            </p>
            <Button as={Link} className='py-2 px-4' href='/'>
                <FaArrowRight className='group-hover:-rotate-180 -rotate-45 transition-transform duration-300' />
                Back to Home
            </Button>
        </div>
    );
}
