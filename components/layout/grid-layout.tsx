'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';

import '@/styles/react-grid-layout.css';
import { cn } from '@/lib/utils';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridLayoutProps {
    lgLayout: Layout[];
    mdLayout: Layout[];
    smLayout: Layout[];
    className?: string;
    children: React.ReactNode;
}

export default function GridLayout({
    lgLayout,
    mdLayout,
    smLayout,
    className,
    children,
}: Readonly<GridLayoutProps>) {
    const [breakpoint, setBreakpoint] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 0);
    }, []);

    useEffect(() => {
        if (window.innerWidth > 1199) {
            setBreakpoint('lg');
        } else if (window.innerWidth > 799) {
            setBreakpoint('md');
        } else if (window.innerWidth > 374) {
            setBreakpoint('sm');
        } else if (window.innerWidth > 319) {
            setBreakpoint('xs');
        } else {
            setBreakpoint('xxs');
        }
    }, []);

    const rowHeightValue: { [key: string]: number } = {
        lg: 280,
        md: 180,
        sm: 164,
        xs: 136,
        xxs: 132,
    };

    const responsiveProps = {
        layouts: {
            lg: lgLayout,
            md: mdLayout,
            sm: smLayout,
        },
        breakpoints: { lg: 1199, md: 799, sm: 374, xs: 319, xxs: 0 },
        cols: { lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 },
        isBounded: true,
        isResizable: false,
        rowHeight: rowHeightValue[breakpoint],
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
                'max-w-[1200px] max-[1199px]:max-w-[800px] max-[799px]:max-w-[375px] max-[374px]:max-w-[320px] mx-auto',
                className
            )}>
            <ResponsiveGridLayout
                style={{
                    opacity: isMounted ? 100 : 0,
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
