'use client';

import Anchor from '@/components/ui/anchor';
import Container from '@/components/ui/container';
import { useMounted } from '@/utils/hooks';
import { cn } from '@/utils/lib';
import { FaArrowRight } from 'react-icons/fa6';

export default function NotFound() {
    const isMounted = useMounted();

    return (
        <Container as='main' className='flex min-h-screen items-center justify-center'>
            <div
                className={cn(
                    'space-y-4 text-center',
                    isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                    'transition-[opacity,_transform] duration-700'
                )}>
                <h1 className='font-pixelify-sans text-7xl md:text-9xl'>404</h1>
                <h2 className='font-pixelify-sans text-xl md:text-3xl'>Page Not Found</h2>
                <p>Sorry, we couldn&apos;t find what you were looking for.</p>
                <Anchor href='/' className='px-4 py-2'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:-rotate-180' />
                    Back to Home
                </Anchor>
            </div>
        </Container>
    );
}
