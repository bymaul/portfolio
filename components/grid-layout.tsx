'use client';

import { breakpoints, cols, rowHeights } from '@/config/grid';
import { cn } from '@/lib/utils';
import {
    Layout,
    ReactGridLayoutProps,
    Responsive,
    WidthProvider,
} from 'react-grid-layout';

import { useBreakpoint, useMounted } from '@/hooks';
import '@/styles/react-grid-layout.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridLayoutProps extends ReactGridLayoutProps {
    lgLayout: Layout[];
    mdLayout: Layout[];
    smLayout: Layout[];
}

export default function GridLayout({
    lgLayout,
    mdLayout,
    smLayout,
    className,
    children,
}: GridLayoutProps) {
    const { breakpoint, setBreakpoint } = useBreakpoint();
    const isMounted = useMounted();

    const responsiveProps = {
        layouts: { lg: lgLayout, md: mdLayout, sm: smLayout },
        breakpoints,
        cols,
        isBounded: true,
        isResizable: false,
        rowHeight: rowHeights[breakpoint],
        useCSSTransforms: false,
        measureBeforeMount: true,
        draggableCancel: '.cancel-drag',
        onBreakpointChange: setBreakpoint,
    };

    return (
        <section
            className={cn(
                'mx-auto max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]',
                isMounted ? 'opacity-100' : 'opacity-0',
                isMounted ? 'translate-y-0' : '-translate-y-12',
                'transition-all duration-500',
                className
            )}>
            <ResponsiveGridLayout margin={[16, 16]} {...responsiveProps}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}
