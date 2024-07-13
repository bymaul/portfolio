'use client';

import { useEffect, useState } from 'react';
import {
    Layout,
    ReactGridLayoutProps,
    Responsive,
    WidthProvider,
} from 'react-grid-layout';
import usePageTransition from '@/hooks/use-page-transition';
import { cn } from '@/lib/utils';

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
    const [breakpoint, setBreakpoint] = useState('');
    const isMounted = usePageTransition();

    const breakpoints = { lg: 1199, md: 799, sm: 374, xs: 319, xxs: 0 };
    const cols = { lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 };
    const rowHeights: { [key: string]: number } = {
        lg: 280,
        md: 180,
        sm: 164,
        xs: 136,
        xxs: 132,
    };

    useEffect(() => {
        const width = window.innerWidth;
        if (width > breakpoints.lg) setBreakpoint('lg');
        else if (width > breakpoints.md) setBreakpoint('md');
        else if (width > breakpoints.sm) setBreakpoint('sm');
        else if (width > breakpoints.xs) setBreakpoint('xs');
        else setBreakpoint('xxs');
    }, []);

    const responsiveProps = {
        layouts: {
            lg: lgLayout,
            md: mdLayout,
            sm: smLayout,
        },
        breakpoints,
        cols,
        isBounded: true,
        isResizable: false,
        rowHeight: rowHeights[breakpoint],
        useCSSTransforms: false,
        measureBeforeMount: true,
        draggableCancel: '.cancel-drag',
        onBreakpointChange: (newBreakpoint: string) => {
            setBreakpoint(newBreakpoint);
        },
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
                    transform: isMounted ? 'translateY(0)' : 'translateY(48px)',
                    transition: 'opacity 500ms, transform 500ms',
                }}
                margin={[16, 16]}
                {...responsiveProps}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}
