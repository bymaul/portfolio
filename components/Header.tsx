'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHouse } from 'react-icons/fa6';

export default function Header() {
    const pathname = usePathname();

    return (
        <header>
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
            </nav>
        </header>
    );
}
