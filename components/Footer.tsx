import socials from '@/data/socials';
import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa6';
import { ButtonLink } from './ButtonLink';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
    return (
        <footer className='text-slate-900 dark:text-white pt-12 max-w-screen-md mx-auto px-4'>
            <div className='bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 text-slate-900 dark:text-white'>
                <h2 className='font-semibold'>Have an interesting project in mind? 👋</h2>
                <p className='py-10'>
                    I am a fresh graduate with a strong passion for learning and a specific interest in web programming.
                    I approach my work with enthusiasm and a high level of commitment to continuous personal and
                    professional growth. I thrive on challenges and view them as opportunities to enhance my skills and
                    knowledge in the field.
                    <br />
                    <br />I am currently in Yogyakarta, Indonesia (UTC+7) 🇮🇩
                </p>
                <div className='flex flex-col sm:flex-row flex-wrap items-center gap-10'>
                    <ButtonLink
                        color='primary'
                        href='mailto:maulanaajk@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaPaperPlane />
                        Hire Me!
                    </ButtonLink>
                    <div className='flex flex-wrap items-center gap-8 text-xl'>
                        {socials.map((social, i) => (
                            <Link
                                key={i}
                                href={social.url}
                                target='_blank'
                                aria-label={`My ${social.name}`}
                                rel='noopener noreferrer'>
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-8 mb-6'>
                <div className='text-sm'>
                    <p>
                        Crafted by{' '}
                        <Link href='/' className='font-semibold'>
                            Maulana
                        </Link>
                    </p>
                </div>
                <ThemeToggle />
            </div>
        </footer>
    );
}
