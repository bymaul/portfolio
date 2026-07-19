import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Card({ className, children, style, ...props }: CardProps) {
    return (
        <div
            style={style}
            className={cn(
                'relative h-full w-full flex flex-col overflow-hidden rounded-3xl border transition-all duration-300',
                'bg-white/40 border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-xl cursor-grab',
                'dark:bg-neutral-900/40 dark:border-white/10 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]',
                'hover:-translate-y-1 hover:shadow-2xl hover:bg-white/50 dark:hover:bg-neutral-900/50',
                className,
            )}
            {...props}>
            <div className='pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 dark:ring-white/5' />
            {children}
        </div>
    );
}
