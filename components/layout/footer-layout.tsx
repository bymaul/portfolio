'use client';

import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import Container from '../container';
import { cn } from '@/lib/utils';

export default function FooterLayout() {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <Container
            as='footer'
            className={cn(isMounted ? 'opacity-100' : 'opacity-0', 'pb-8')}>
            <p className='text-center text-sm'>
                Crafted by{' '}
                <Link
                    href={'https://github.com/bymaul/'}
                    target='_blank'
                    className='font-semibold'>
                    Maulana
                </Link>
            </p>
        </Container>
    );
}
