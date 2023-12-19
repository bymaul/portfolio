import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import Button from './Button';

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);

    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const handleClick = () => {
        resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    return (
        <Button
            className={
                !isMounted
                    ? 'opacity-0 translate-y-12'
                    : 'opacity-100 translate-y-0'
            }
            onClick={handleClick}
            aria-label='Theme Toggle'>
            {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
    );
}
