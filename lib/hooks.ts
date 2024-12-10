'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { breakpoints } from './consts';

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newBreakpoint = Object.keys(breakpoints).find((key) => width > breakpoints[key]) ?? 'xxs';
            setBreakpoint(newBreakpoint);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { breakpoint, setBreakpoint };
}

function useMounted(delay: number = 0) {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, delay);
    }, [delay]);

    return isMounted;
}

export { useBreakpoint, useMounted };
