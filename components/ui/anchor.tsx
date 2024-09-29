import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

type AnchorProps = {
    as?: 'a' | 'link';
    href: string;
    className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
    Omit<LinkProps, 'href'>;

const baseStyles =
    'group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 transition-all duration-300 outline-none ring-2 ring-gray-200/45 focus-within:outline-none focus-within:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30';

export default function Anchor({
    as = 'a',
    href,
    className,
    ...props
}: AnchorProps) {
    const Component = as === 'link' ? Link : 'a';

    return (
        <Component
            href={href}
            className={cn(baseStyles, className)}
            {...props}
        />
    );
}
