import { siteConfig } from '@/config/site';
import { poppins } from '@/lib/fonts';
import type { Metadata } from 'next';
import { ThemeProvider } from './providers';

import '@/styles/globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: '%s',
    },
    description: siteConfig.description,
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.title,
        locale: 'en-US',
        type: 'website',
        images: [
            {
                url: siteConfig.image,
            },
        ],
    },
    twitter: {
        title: siteConfig.title,
        description: siteConfig.description,
        images: siteConfig.image,
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
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
        canonical: siteConfig.url,
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
                className={cn(
                    poppins.className,
                    'bg-gray-100 antialiased dark:bg-dark-950'
                )}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    );
}
