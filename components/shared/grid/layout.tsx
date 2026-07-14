'use client';

import { breakpoints, cols, rowHeights } from '@/config/consts';
import { useBreakpoint, useMounted } from '@/hooks';
import { cn } from '@/lib/utils';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridLayout({ layouts, className, children }: Readonly<ResponsiveProps>) {
    const { breakpoint, setBreakpoint } = useBreakpoint();
    const isMounted = useMounted();

    return (
        <section
            className={cn(
                'mx-auto max-w-300 max-lg:max-w-200 max-md:max-w-93.75 max-sm:max-w-80',
                isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                'transition-[opacity,transform] duration-700',
                className,
            )}>
            <ResponsiveGridLayout
                layouts={layouts}
                breakpoints={breakpoints}
                cols={cols}
                isBounded
                isResizable={false}
                rowHeight={rowHeights[breakpoint]}
                useCSSTransforms={false}
                measureBeforeMount
                draggableCancel='.cancel-drag'
                onBreakpointChange={setBreakpoint}
                isDraggable={['lg', 'md'].includes(breakpoint)}
                margin={[16, 16]}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}
