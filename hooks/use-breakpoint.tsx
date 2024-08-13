'use client';

import { breakpoints } from '@/config/grid';
import { useEffect, useState } from 'react';

export default function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newBreakpoint =
                Object.keys(breakpoints).find(
                    (key) => width > breakpoints[key]
                ) ?? 'xxs';
            setBreakpoint(newBreakpoint);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { breakpoint, setBreakpoint };
}
