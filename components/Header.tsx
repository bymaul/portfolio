'use client';

import { BiHome, BiMoon, BiSun } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const { resolvedTheme, setTheme } = useTheme();
    const pathname = usePathname();

    return (
        <header className='max-w-screen-md mx-auto px-4'>
            <div className='flex justify-between items-center py-8'>
                {pathname !== '/' && (
                    <Link href='/'>
                        <div className='border border-slate-900 dark:border-slate-200 p-2 transition duration-300 rounded-lg'>
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
                        className='border border-slate-900 dark:border-slate-200 p-2 transition duration-300 rounded-lg'
                    >
                        {resolvedTheme === 'light' ? <BiMoon /> : <BiSun />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
