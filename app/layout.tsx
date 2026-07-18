import { siteConfig } from '@/config/site';
import { pixelifySans, poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';
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
                url: siteConfig.ogImage,
            },
        ],
    },
    twitter: {
        title: siteConfig.title,
        description: siteConfig.description,
        images: siteConfig.ogImage,
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
            <body
                className={cn(
                    poppins.className,
                    pixelifySans.variable,
                    'antialiased text-neutral-900 dark:text-neutral-100',
                    'bg-gray-50 dark:bg-[#0a0a0a] min-h-screen relative overflow-x-hidden',
                )}>
                <ThemeProvider attribute='class' enableSystem={false}>
                    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
                        <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob' />
                        <div className='absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000' />
                        <div className='absolute -bottom-32 left-1/2 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000' />
                    </div>

                    <div className='relative z-10'>{children}</div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
