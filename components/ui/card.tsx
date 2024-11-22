import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Card({
    className,
    children,
    ...props
}: Readonly<CardProps>) {
    return (
        <div className='size-full rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-lg'>
            <div
                {...props}
                className={cn(
                    'size-full overflow-hidden rounded-3xl',
                    'bg-white dark:bg-dark-900',
                    'cursor-grab select-none active:cursor-grabbing',
                    'dark:ring-1 dark:ring-dark-800',
                    className
                )}>
                {children}
            </div>
        </div>
    );
}
