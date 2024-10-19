import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

export default function Anchor({
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                'group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 transition-all duration-300',
                'outline-none ring-2 ring-gray-200/45 focus-within:outline-none focus-within:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30',
                props.className
            )}
        />
    );
}
