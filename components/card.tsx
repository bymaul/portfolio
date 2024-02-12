import { cn } from '@/lib/utils';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export default function Card({ className, children }: Readonly<CardProps>) {
    return (
        <div
            className={cn(
                'h-full cursor-grab select-none overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-lg dark:bg-dark-900',
                className
            )}>
            {children}
        </div>
    );
}
