import socials from '@/config/socials';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function Contact() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='text-2xl font-semibold max-md:text-center'>
                Have an interesting project in mind? 👋
            </h2>
            <p className='leading-relaxed max-md:hidden'>
                If you have a project that you want to get started, think you
                need my help with something or just fancy saying hey, then get
                in touch.
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <Button
                    as={Link}
                    className='cancel-drag px-4 py-2'
                    href='mailto:maulanaajk@gmail.com'
                    target='_blank'
                    rel='noreferrer'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    Contact Me
                </Button>
                <div className='inline-flex gap-6'>
                    {socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            className='cancel-drag'
                            aria-label={`My ${social.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            {<social.icon size='1.3rem' />}
                        </Link>
                    ))}
                </div>
            </div>
        </Card>
    );
}
