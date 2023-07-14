'use client';

import { BiHome, BiMoon, BiSun } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
    const { resolvedTheme, setTheme, theme } = useTheme();
    const pathname = usePathname();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = document.documentElement.scrollTop;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <header
            className={`max-w-screen-md mx-auto px-4 z-50 sticky top-0 transition-transform duration-300 ${
                visible ? 'translate-y-1' : '-translate-y-20'
            }`}
        >
            <div className='flex justify-between items-center py-8'>
                {pathname !== '/' && (
                    <Link href='/'>
                        <div className='bg-white dark:bg-slate-950 border border-slate-900 dark:border-slate-200 p-2 rounded-lg'>
                            <BiHome />
                        </div>
                    </Link>
                )}
                <nav className='flex flex-grow justify-end'>
                    <button
                        onClick={() => {
                            setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
                        }}
                        type='button'
                        aria-label='Toggle theme'
                        className='bg-white dark:bg-slate-950 border border-slate-900 dark:border-slate-200 p-2 rounded-lg'
                    >
                        {theme === 'light' ? <BiMoon /> : <BiSun />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
