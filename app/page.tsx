'use client';

import Container from '@/components/Container';
import GridLayout from '@/components/Layout/GridLayout';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <header>
                <Container className='pt-10 pb-6 flex justify-end items-center'>
                    <ThemeToggle />
                </Container>
            </header>
            <main className='max-w-[1200px] mx-auto max-[1199px]:max-w-[800px] max-[799px]:max-w-[375px] max-[374px]:max-w-[320px] pb-8'>
                <GridLayout />
            </main>
            <footer className={isMounted ? 'opacity-100' : 'opacity-0'}>
                <Container className='pt-0 pb-10'>
                    <p className='text-sm text-center'>
                        Crafted by{' '}
                        <Link
                            href={'https://github.com/bymaul/'}
                            target='_blank'
                            className='font-semibold'>
                            Maulana
                        </Link>
                    </p>
                </Container>
            </footer>
        </>
    );
}
