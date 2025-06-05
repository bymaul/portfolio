'use client';

import { breakpoints, cols, rowHeights } from '@/utils/consts';
import { useBreakpoint, useMounted } from '@/utils/hooks';
import { cn } from '@/utils/lib';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridLayout({ layouts, className, children }: Readonly<ResponsiveProps>) {
    const { breakpoint, setBreakpoint } = useBreakpoint();
    const isMounted = useMounted();

    return (
        <section
            className={cn(
                'mx-auto max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]',
                isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                'transition-[opacity,_transform] duration-700',
                className
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
