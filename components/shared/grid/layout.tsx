'use client';

import { breakpoints, cols, rowHeights } from '@/config/consts';
import { useBreakpoint, useMounted } from '@/hooks';
import { cn } from '@/lib/utils';
import { Responsive, useContainerWidth, type ResponsiveGridLayoutProps } from 'react-grid-layout';
import { absoluteStrategy } from 'react-grid-layout/core';

type GridLayoutProps = Readonly<Pick<ResponsiveGridLayoutProps, 'layouts' | 'children'> & { className?: string }>;

export default function GridLayout({ layouts, className, children }: GridLayoutProps) {
    const { breakpoint, setBreakpoint } = useBreakpoint();
    const isMounted = useMounted();

    const { width, containerRef, mounted } = useContainerWidth({
        measureBeforeMount: true,
    });

    return (
        <section
            ref={containerRef}
            className={cn(
                'mx-auto max-w-300 max-lg:max-w-200 max-md:max-w-93.75 max-sm:max-w-80',
                isMounted ? 'opacity-100' : 'opacity-0',
                'transition-opacity duration-700',
                className,
            )}>
            {mounted && (
                <Responsive
                    width={width}
                    layouts={layouts}
                    breakpoints={breakpoints}
                    cols={cols}
                    rowHeight={rowHeights[breakpoint]}
                    margin={[16, 16]}
                    dragConfig={{
                        enabled: ['lg', 'md'].includes(breakpoint),
                        bounded: true,
                        cancel: '.cancel-drag',
                    }}
                    resizeConfig={{ enabled: false }}
                    positionStrategy={absoluteStrategy}
                    onBreakpointChange={setBreakpoint}>
                    {children}
                </Responsive>
            )}
        </section>
    );
}
