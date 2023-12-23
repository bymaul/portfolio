'use client';

import Link from 'next/link';
import Container from '../Container';
import { useLayoutEffect, useState } from 'react';

export default function FooterLayout() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
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
    );
}
