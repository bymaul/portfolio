'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

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
                'transition-all duration-500'
            )}>
            {children}
        </main>
    );
}
