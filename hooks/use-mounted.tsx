import { useLayoutEffect, useState } from 'react';

export default function useMounted(delay = 0) {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, delay);
    }, []);

    return isMounted;
}
