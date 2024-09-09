'use client';

import { useMounted } from '@/lib/hooks';
import { cn } from '@/lib/utils';

export default function Content({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
    const isMounted = useMounted();

    return (
        <main
            className={cn(
                isMounted
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-6 opacity-0',
                'transition-[opacity,_transform] duration-700',
                className
            )}>
            {children}
        </main>
    );
}
