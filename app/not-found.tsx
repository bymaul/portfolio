'use client';

import Button from '@/components/button';
import Container from '@/components/container';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function NotFound() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <Container
            as='main'
            className='flex min-h-screen items-center justify-center'>
            <div
                className='space-y-4 text-center'
                style={{
                    opacity: isMounted ? 1 : 0,
                    transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 500ms, transform 500ms',
                }}>
                <h1 className='text-7xl font-bold md:text-9xl'>404</h1>
                <h2 className='text-xl font-semibold md:text-3xl'>
                    Page Not Found
                </h2>
                <p>Sorry, we couldn&apos;t find what you were looking for.</p>
                <Button as={Link} href='/' className='px-4 py-2'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:-rotate-180' />
                    Back to Home
                </Button>
            </div>
        </Container>
    );
}
