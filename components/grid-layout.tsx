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
                className
            )}>
            <ResponsiveGridLayout
                style={{
                    opacity: isMounted ? 1 : 0,
                    transform: isMounted
                        ? 'translateY(0)'
                        : 'translateY(-48px)',
                    transition: 'opacity 500ms, transform 500ms',
                }}
                margin={[16, 16]}
                {...responsiveProps}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}
