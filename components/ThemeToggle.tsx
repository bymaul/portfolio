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

    return (
        <button
            onClick={() => {
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
            }}
            type='button'
            aria-label='Theme toggle'
            className='bg-white dark:bg-slate-950 border border-slate-900 dark:border-slate-200 p-2 rounded-lg'>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
}
