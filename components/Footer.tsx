import Link from 'next/link';
import { ButtonLink } from './ButtonLink';
import {
    BiDownload,
    BiLogoFacebook,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiPaperPlane,
} from 'react-icons/bi';

export default function Footer() {
    return (
        <footer className='text-slate-900 dark:text-white pt-12 max-w-screen-md mx-auto px-4'>
            <section className='bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 text-slate-900 dark:text-white mb-12'>
                <h2 className='font-semibold'>Have an interesting project in mind? 👋</h2>
                <p className='py-10'>
                    I am a fresh graduate with a strong passion for learning and a specific interest in web programming.
                    I approach my work with enthusiasm and a high level of commitment to continuous personal and
                    professional growth. I thrive on challenges and view them as opportunities to enhance my skills and
                    knowledge in the field.
                    <br />
                    <br />I am currently in Yogyakarta, Indonesia (UTC+7) 🇮🇩
                </p>
                <div className='flex justify-between items-center gap-8 flex-wrap'>
                    <ButtonLink href='mailto:maulanaajk@gmail.com' color='primary'>
                        <BiPaperPlane />
                        Hire Me!
                    </ButtonLink>
                    <Link
                        href='/'
                        target='_blank'
                        className='underline inline-flex items-center gap-x-2'
                        rel='noopener'
                    >
                        <BiDownload />
                        Download CV
                    </Link>
                </div>
            </section>
            <nav className='flex justify-center items-center gap-x-8 text-xl'>
                <Link href='https://facebook.com/maulism' target='_blank' aria-label='My Facebook' rel='noopener'>
                    <BiLogoFacebook aria-label='Facebook' />
                </Link>
                <Link href='https://instagram.com/mavlism' target='_blank' aria-label='My Instagram' rel='noopener'>
                    <BiLogoInstagram aria-label='Instagram' />
                </Link>
                <Link href='https://github.com/bymaul/' target='_blank' aria-label='My Github' rel='noopener'>
                    <BiLogoGithub aria-label='Github' />
                </Link>
                <Link href='https://linkedin.com/in/maulism' target='_blank' aria-label='My LinkedIn' rel='noopener'>
                    <BiLogoLinkedin aria-label='LinkedIn' />
                </Link>
            </nav>
            <p className='my-8 text-center'>Made with ❤️ by Maulana</p>
        </footer>
    );
}
