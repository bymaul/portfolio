import { Pixelify_Sans, Poppins } from 'next/font/google';

export const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const pixelifySans = Pixelify_Sans({
    weight: ['600'],
    subsets: ['latin'],
    variable: '--font-pixelify-sans',
});
