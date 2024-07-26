'use client';

import usePageTransition from '@/hooks/use-page-transition';
import { cn } from '@/lib/utils';

export default function Content({
    children,
    className,
}: React.HTMLAttributes<HTMLElement>) {
    const isMounted = usePageTransition();

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
