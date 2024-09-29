import socials from '@/config/socials';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Anchor from '../ui/anchor';
import Card from '../ui/card';

export default function Contact() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='font-calistoga text-2xl max-md:text-center'>
                Have an interesting project in mind? 👋
            </h2>
            <p className='leading-relaxed max-md:hidden'>
                If you have a project that you want to get started, think you
                need my help with something or just fancy saying hey, then get
                in touch.
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <Anchor
                    as='a'
                    className='cancel-drag px-4 py-2'
                    href='mailto:maulanaajk@gmail.com'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    Contact Me
                </Anchor>
                <div className='inline-flex gap-6'>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className='cancel-drag'
                            aria-label={`My ${social.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            {<social.icon size='1.3rem' />}
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
}
