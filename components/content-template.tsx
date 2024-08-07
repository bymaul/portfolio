'use client';

import useMounted from '@/hooks/use-mounted';
import { cn } from '@/lib/utils';

export default function ContentTemplate({
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
