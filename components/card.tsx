import { cn } from '@/lib/utils';

export default function Card({
    className,
    children,
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'h-full overflow-hidden rounded-3xl bg-white dark:bg-dark-900',
                'cursor-grab select-none active:cursor-grabbing',
                'dark:ring-1 dark:ring-dark-800',
                'shadow-sm hover:shadow-lg',
                className
            )}>
            {children}
        </div>
    );
}
