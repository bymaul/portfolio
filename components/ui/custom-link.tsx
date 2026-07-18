import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

export default function CustomLink({ ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                'group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full transition-all duration-300',
                'bg-white/40 text-neutral-900 shadow-md backdrop-blur-md border border-white/60',
                'hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-lg',
                'dark:bg-neutral-900/40 dark:text-white dark:border-white/10',
                'dark:hover:bg-neutral-900/60',
                props.className,
            )}
        />
    );
}
