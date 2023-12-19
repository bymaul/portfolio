import { cn } from '@/lib/utils';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                'h-full bg-white dark:bg-dark-900 rounded-3xl select-none cursor-grab overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500',
                className
            )}>
            {children}
        </div>
    );
}
