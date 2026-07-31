'use client';

import Card from '@/components/ui/card';
import { useMounted } from '@/hooks';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default function ThemeToggle() {
  const isMounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!isMounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <Card className="group flex h-full flex-col items-center justify-center hover:bg-white/50 dark:hover:bg-white/5">
      <button
        className="cancel-drag relative flex h-12 w-24 cursor-pointer items-center rounded-full bg-neutral-900/10 p-1 shadow-inner backdrop-blur-md transition-all duration-300 dark:bg-white/10"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
        aria-pressed={isDark}
      >
        <div
          className={cn(
            'flex size-10 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300',
            isDark ? 'translate-x-12 bg-neutral-800' : 'bg-yellow-400',
          )}
        >
          {isDark ? <FaMoon size="1.2rem" /> : <FaSun size="1.2rem" />}
        </div>
      </button>
    </Card>
  );
}
