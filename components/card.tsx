import { cn } from '@/lib/utils';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                'h-full cursor-grab select-none overflow-hidden rounded-3xl bg-white active:cursor-grabbing dark:bg-dark-900',
                'shadow-sm transition-shadow duration-500 hover:shadow-lg',
                className
            )}>
            {children}
        </div>
    );
}
