import Card from '@/components/ui/card';
import socials from '@/config/socials';
import { FaArrowRight } from 'react-icons/fa6';

export default function ContactCard() {
    return (
        <Card className='group flex flex-col justify-center gap-6 p-8 hover:bg-white/50 dark:hover:bg-white/5'>
            <h2 className='font-pixelify-sans text-3xl font-bold text-neutral-900 dark:text-white max-md:text-center'>
                Have a project in mind? 👋
            </h2>
            <p className='leading-relaxed text-neutral-600 dark:text-neutral-400 max-md:hidden'>
                If you have a project that you want to get started, think you need my help with something, or just fancy
                saying hey, get in touch.
            </p>
            <div className='flex flex-col items-center gap-4 lg:flex-row'>
                <a
                    className='cancel-drag group/btn inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900/5 px-6 py-3 font-medium text-neutral-900 backdrop-blur-md transition-all hover:bg-neutral-900/10 hover:shadow-md dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                    href='mailto:maulanaajk@gmail.com'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover/btn:rotate-0' />
                    Contact Me
                </a>
                <div className='flex gap-3'>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className='cancel-drag flex size-12 items-center justify-center rounded-full bg-neutral-900/5 text-neutral-700 backdrop-blur-md transition-all hover:bg-neutral-900/10 hover:text-neutral-900 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white'
                            aria-label={`My ${social.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            <social.icon size='1.2rem' />
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
}
