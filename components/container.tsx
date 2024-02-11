import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn(
                'max-w-[1200px] max-[1199px]:max-w-[800px] max-[799px]:max-w-[375px] max-[374px]:max-w-[320px] py-6 px-4 mx-auto',
                className
            )}>
            {children}
        </div>
    );
}
