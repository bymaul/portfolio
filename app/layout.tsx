import { siteConfig } from '@/config/site';
import { calistoga, poppins } from '@/utils/fonts';
import { cn } from '@/utils/lib';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider } from './providers';

import './globals.css';

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={cn(poppins.className, calistoga.variable, 'bg-gray-100 antialiased dark:bg-dark-950')}>
                <ThemeProvider attribute='class' enableSystem={false}>
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
