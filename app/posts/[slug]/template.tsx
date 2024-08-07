'use client';

import Button from '@/components/button';
import ContentTemplate from '@/components/content-template';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { FaX } from 'react-icons/fa6';

export default function Template({ children }: PropsWithChildren) {
    return (
        <ContentTemplate className='mx-auto max-w-prose px-4 py-10'>
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
        </ContentTemplate>
    );
}
