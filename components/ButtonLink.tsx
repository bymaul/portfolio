import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const styles = cva('rounded-md inline-flex items-center gap-x-3 transition duration-300 whitespace-nowrap', {
    variants: {
        color: {
            primary:
                'border border-slate-900 dark:border-slate-200 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100',
            secondary:
                'border border-slate-900 dark:border-slate-200 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
        },
        size: {
            sm: 'py-2 px-4',
            md: 'py-3 px-4',
        },
    },
    defaultVariants: {
        color: 'primary',
        size: 'md',
    },
});

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof styles> {
    href: string;
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md';
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, color, size, ...props }) => {
    return (
        <Link href={href} className={styles({ color, size })} {...props}>
            {children}
        </Link>
    );
};
