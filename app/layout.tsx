import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from './providers';
import { WEBSITE_HOST_URL } from '@/lib/constants';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

const meta = {
    title: 'Maulana Ahmad Aji Triadi — Web Developer',
    description: `I'm a web developer based in Yogyakarta, Indonesia.`,
    image: `${WEBSITE_HOST_URL}/images/og-image.png`,
};

export const metadata: Metadata = {
    title: {
        default: meta.title,
        template: '%s',
    },
    description: meta.description,
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: WEBSITE_HOST_URL,
        siteName: meta.title,
        locale: 'en-US',
        type: 'website',
        images: [
            {
                url: meta.image,
            },
        ],
    },
    twitter: {
        title: meta.title,
        description: meta.description,
        images: meta.image,
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: WEBSITE_HOST_URL,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${poppins.className} bg-gray-100 dark:bg-dark-950 antialiased`}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    );
}
