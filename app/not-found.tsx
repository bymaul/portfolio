'use client';

import { useMounted } from '@/hooks';
import { FaArrowRight } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/container';
import CustomLink from '@/components/ui/custom-link';

export default function NotFound() {
    const isMounted = useMounted();

    return (
        <Container as='main' className='flex min-h-screen items-center justify-center'>
            <div
                className={cn(
                    'space-y-4 text-center',
                    isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                    'transition-[opacity,transform] duration-700',
                )}>
                <h1 className='font-pixelify-sans text-7xl md:text-9xl'>404</h1>
                <h2 className='font-pixelify-sans text-xl md:text-3xl'>Page Not Found</h2>
                <p>Sorry, we couldn&apos;t find what you were looking for.</p>
                <CustomLink href='/' className='px-4 py-2'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:-rotate-180' />
                    Back to Home
                </CustomLink>
            </div>
        </Container>
    );
}
