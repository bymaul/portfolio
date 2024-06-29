'use client';

import { cn } from '@/lib/utils';
import { PropsWithChildren, useEffect, useState } from 'react';

interface ContentTemplateProps extends PropsWithChildren {
    className?: string;
}

export default function Content({ children, className }: ContentTemplateProps) {
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
                className
            )}>
            {children}
        </main>
    );
}
