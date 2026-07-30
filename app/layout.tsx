import Navbar from '@/components/shared/navbar';
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          pixelifySans.variable,
          'text-neutral-900 antialiased dark:text-neutral-100',
          'relative min-h-screen overflow-x-hidden bg-gray-50 dark:bg-[#0a0a0a]',
        )}
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="animate-blob absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-400/20 opacity-70 mix-blend-multiply blur-3xl filter dark:bg-blue-600/10" />
            <div className="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-purple-400/20 opacity-70 mix-blend-multiply blur-3xl filter dark:bg-purple-600/10" />
            <div className="animate-blob animation-delay-4000 absolute -bottom-32 left-1/2 h-96 w-96 rounded-full bg-emerald-400/20 opacity-70 mix-blend-multiply blur-3xl filter dark:bg-emerald-600/10" />
          </div>

          <div className="relative z-10">
            <Navbar />
            <div className="pb-14">{children}</div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
