import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Poppins } from 'next/font/google';
import './globals.css';
import Provider from './provider';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const metadata = {
    title: 'Maulana Ahmad Aji Triadi',
    description:
        'Hello, I am a fresh graduate with a strong passion for learning and a specific interest in web programming.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${poppins.variable} font-sans bg-white dark:bg-slate-950 antialiased transition-colors duration-300`}>
                <Provider>
                    <Header />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
