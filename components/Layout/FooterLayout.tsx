'use client';

import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import Container from '../Container';

export default function FooterLayout() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <footer className={isMounted ? 'opacity-100' : 'opacity-0'}>
            <Container className='py-8'>
                <p className='text-sm text-center'>
                    Crafted by{' '}
                    <Link
                        href={'https://github.com/bymaul/'}
                        target='_blank'
                        className='font-semibold'
                        rel='nofollow noopener noreferrer'>
                        Maulana
                    </Link>
                </p>
            </Container>
        </footer>
    );
}
