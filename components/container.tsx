import { cn } from '@/lib/utils';

export default function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'mx-auto px-4 py-6',
                'max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]',
                className
            )}>
            {children}
        </div>
    );
}
