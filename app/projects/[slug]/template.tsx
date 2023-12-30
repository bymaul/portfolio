'use client';

import { cn } from '@/lib/utils';
import { useLayoutEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <main
            className={cn(
                isMounted
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12',
                'transition-all duration-500'
            )}>
            <div className='max-w-screen-xl mx-auto px-4 py-8'>{children}</div>
        </main>
    );
}
