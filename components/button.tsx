import { cn } from '@/lib/utils';

interface ButtonProps<T extends React.ElementType> {
    as?: T;
}

export default function Button<T extends React.ElementType = 'button'>({
    as,
    ...props
}: ButtonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
    const Component = as ?? 'button';
    return (
        <Component
            {...props}
            className={cn(
                'group flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 transition-all duration-300',
                'ring-2 ring-gray-200/45 focus-within:outline-none focus-within:ring-4 hover:ring-4 dark:text-black  dark:ring-gray-200/30',
                props.className
            )}
        />
    );
}
