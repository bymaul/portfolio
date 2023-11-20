'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHouse } from 'react-icons/fa6';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className='pt-8 max-w-screen-md mx-auto px-4'>
            <nav className='flex justify-between items-center'>
                {pathname !== '/' && (
                    <Link
                        href='/'
                        className='inline-flex items-center gap-x-3 bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-full'>
                        <FaHouse />
                        Home
                    </Link>
                )}
            </nav>
        </header>
    );
}
