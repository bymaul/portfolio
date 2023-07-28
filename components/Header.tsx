'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHouse } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';

export default function Header() {
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
    }, [prevScrollPos]);

    return (
        <header
            className={`z-50 sticky top-0 transition-transform duration-300 ${
                visible ? 'translate-y-0' : '-translate-y-20'
            }`}>
            <nav className='flex justify-between items-center py-8 max-w-screen-md mx-auto px-4'>
                <div>
                    {pathname !== '/' && (
                        <Link href='/'>
                            <div className='bg-white dark:bg-slate-950 border border-slate-900 dark:border-slate-200 p-2 rounded-lg'>
                                <FaHouse />
                            </div>
                        </Link>
                    )}
                </div>
                <ThemeToggle />
            </nav>
        </header>
    );
}
