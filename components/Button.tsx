import { cn } from '@/lib/utils';

interface ButtonProps<T extends React.ElementType> {
    as?: T;
}

export default function Button<T extends React.ElementType = 'button'>({
    as,
    ...props
}: ButtonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
    const Component = as || 'button';
    return (
        <Component
            {...props}
            className={cn(
                'p-3 flex justify-center items-center gap-3 overflow-hidden bg-white dark:text-black rounded-full ring-2 ring-opacity-30 ring-gray-200 group hover:ring-4 transition-all duration-300',
                props.className
            )}
        />
    );
}
