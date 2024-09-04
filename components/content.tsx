'use client';

import { useMounted } from '@/lib/hooks';
import { cn } from '@/lib/utils';

export default function Content({
    children,
    className,
}: React.HTMLAttributes<HTMLElement>) {
    const isMounted = useMounted();

    return (
        <main
            className={cn(
                isMounted
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-12 opacity-0',
                'transition-all duration-500',
                className
            )}>
            {children}
        </main>
    );
}
