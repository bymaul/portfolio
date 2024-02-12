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
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0',
                'transition-all duration-500'
            )}>
            {children}
        </main>
    );
}
