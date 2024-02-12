'use client';

import Button from '@/components/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function Template({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <main
            className={cn(
                isMounted
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0',
                'transition-all duration-500',
                'mx-auto max-w-prose px-4 py-10'
            )}>
            <header className='flex items-center justify-center pb-10'>
                <Button
                    as={Link}
                    className='inline-flex hover:mb-6 hover:scale-125'
                    href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Button>
            </header>
            {children}
        </main>
    );
}
