import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const styles = cva(
    'rounded-md inline-flex items-center justify-center gap-x-3 transition duration-300 whitespace-nowrap',
    {
        variants: {
            color: {
                primary:
                    'border border-slate-900 dark:border-slate-200 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100',
                secondary:
                    'border border-slate-900 dark:border-slate-200 bg-white dark:bg-slate-950 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
            },
            size: {
                sm: 'py-2 px-4',
                md: 'py-3 px-4',
            },
            textSize: {
                sm: 'text-sm',
                md: 'text-base',
            },
            underline: {
                true: 'underline',
            },
        },
        defaultVariants: {
            color: 'primary',
            size: 'md',
            textSize: 'md',
        },
    }
);

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof styles> {
    href: string;
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md';
    textSize?: 'sm' | 'md';
    underline?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    href,
    children,
    color,
    size,
    textSize,
    underline,
    className,
    ...props
}) => {
    return (
        <Link href={href} className={styles({ color, size, textSize, underline, className })} {...props}>
            {children}
        </Link>
    );
};
