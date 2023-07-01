'use client';

import { BiMoon, BiSun } from 'react-icons/bi';
import { useTheme } from 'next-themes';

export default function Header() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <header className='max-w-screen-md mx-auto px-4'>
            <nav className='flex justify-end items-center py-8'>
                <button
                    onClick={() => {
                        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
                    }}
                    type='button'
                    className='border border-slate-900 dark:border-slate-200 text-xl p-2 transition duration-300 rounded-lg '
                >
                    {resolvedTheme === 'light' ? <BiMoon /> : <BiSun />}
                </button>
            </nav>
        </header>
    );
}
