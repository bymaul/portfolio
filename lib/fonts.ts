import { Manrope, Calistoga } from 'next/font/google';

export const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-manrope',
});

export const calistoga = Calistoga({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-calistoga',
});
