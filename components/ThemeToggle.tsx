'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default function ThemeToggle() {
    const [loaded, setLoaded] = useState(false);
    const { resolvedTheme, setTheme, theme } = useTheme();

    useEffect(() => setLoaded(true), []);

    if (!loaded) {
        return null;
    }

    const themeToggle = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={themeToggle}
            type='button'
            aria-label='Theme toggle'
            className='bg-slate-100 dark:bg-slate-800 p-3 rounded-full'>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
}
