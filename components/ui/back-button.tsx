import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaX } from 'react-icons/fa6';

export default function BackButton() {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex size-12 items-center justify-center gap-3 overflow-hidden rounded-full border p-0 whitespace-nowrap',
        'border-white/60 bg-white/40 text-neutral-900 shadow-md backdrop-blur-md',
        'transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-lg',
        'dark:border-white/10 dark:bg-neutral-900/40 dark:text-white dark:hover:bg-neutral-900/60',
      )}
    >
      <FaX />
    </Link>
  );
}
