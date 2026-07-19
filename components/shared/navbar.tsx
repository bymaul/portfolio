'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/posts' },
    { name: 'Projects', path: '/projects' },
];

export default function Navbar() {
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);
    const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const updateActiveBlock = () => {
            if (navRef.current) {
                const activeItem = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
                if (activeItem) {
                    setActiveStyle({
                        left: activeItem.offsetLeft,
                        width: activeItem.offsetWidth,
                        opacity: 1,
                    });
                }
            }
        };

        requestAnimationFrame(updateActiveBlock);

        window.addEventListener('resize', updateActiveBlock);
        return () => window.removeEventListener('resize', updateActiveBlock);
    }, [pathname]);

    return (
        <header className='fixed bottom-6 left-1/2 z-50 -translate-x-1/2'>
            <nav
                ref={navRef}
                className='relative flex items-center p-1.5 rounded-full bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-lg border border-black/10 dark:border-white/10 shadow-lg'>
                <div
                    className='absolute inset-y-1.5 rounded-full bg-white dark:bg-neutral-800 shadow-sm transition-all duration-300 ease-out z-0'
                    style={{
                        left: activeStyle.left,
                        width: activeStyle.width,
                        opacity: activeStyle.opacity,
                    }}
                />

                {navItems.map((item) => {
                    const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            data-active={isActive}
                            className={cn(
                                'relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full',
                                isActive
                                    ? 'text-emerald-600 dark:text-emerald-400'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200',
                            )}>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
