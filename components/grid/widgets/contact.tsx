import socials from '@/config/socials';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../../ui/card';

export default function Contact() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='font-pixelify-sans text-2xl max-md:text-center'>Have an interesting project in mind? 👋</h2>
            <p className='leading-relaxed max-md:hidden'>
                If you have a project that you want to get started, think you need my help with something or just fancy
                saying hey, then get in touch.
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <a
                    className='cancel-drag group inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white p-3 px-4 py-2 whitespace-nowrap ring-2 ring-gray-200/45 outline-hidden transition-all duration-300 focus-within:ring-4 focus-within:outline-hidden hover:ring-4 dark:text-black dark:ring-gray-200/30'
                    href='mailto:maulanaajk@gmail.com'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    Contact Me
                </a>
                <div className='inline-flex gap-5'>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className='cancel-drag'
                            aria-label={`My ${social.name}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {<social.icon size='1.5rem' 
                                className='cancel-drag group inline-flex items-center justify-center rounded-full text-neutral-700 dark:text-slate-300 hover:text-neutral-900 dark:hover:text-slate-100 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:scale-110'
                            />}
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
}
