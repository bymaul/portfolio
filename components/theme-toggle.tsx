'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import Button from './button';

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const handleClick = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    return (
        <Button
            className={
                !isMounted
                    ? 'translate-y-12 opacity-0'
                    : 'translate-y-0 opacity-100'
            }
            onClick={handleClick}
            aria-label='Theme Toggle'>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
    );
}
