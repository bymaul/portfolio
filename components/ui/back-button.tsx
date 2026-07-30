'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FaX } from 'react-icons/fa6';

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        if (
            typeof window !== 'undefined' &&
            window.history.length > 1 &&
            document.referrer.includes(window.location.host)
        ) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <button
            onClick={handleBack}
            aria-label='Close and return'
            className={cn(
                'group inline-flex size-12 items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border p-0',
                'bg-white/40 text-neutral-900 backdrop-blur-md border-white/60 shadow-md',
                'transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-lg',
                'dark:bg-neutral-900/40 dark:text-white dark:border-white/10 dark:hover:bg-neutral-900/60',
            )}>
            <FaX />
        </button>
    );
}
