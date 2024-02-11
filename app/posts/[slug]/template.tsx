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
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12',
                'transition-all duration-500',
                'max-w-prose mx-auto py-10 px-4'
            )}>
            <header className='flex justify-center items-center pb-10'>
                <Button
                    as={Link}
                    className='inline-flex hover:scale-125 hover:mb-6'
                    href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Button>
            </header>
            {children}
        </main>
    );
}
