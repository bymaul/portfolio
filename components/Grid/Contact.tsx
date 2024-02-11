import socials from '@/config/socials';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function Contact() {
    return (
        <Card>
            <div className='h-full flex flex-col gap-6 justify-center p-6 md:py-6 md:px-10'>
                <h2 className='text-2xl font-semibold text-center sm:text-start'>
                    Have an interesting project in mind? 👋
                </h2>
                <p className='hidden sm:block'>
                    If you have a project that you want to get started, think
                    you need my help with something or just fancy saying hey,
                    then get in touch.
                </p>
                <div className='inline-flex flex-col min-[1199px]:flex-row items-center gap-6'>
                    <Button
                        as={Link}
                        className='cancel-drag py-2 px-4'
                        href='mailto:maulanaajk@gmail.com'
                        target='_blank'
                        rel='nofollow noopener noreferrer'>
                        <FaArrowRight className='group-hover:rotate-0 -rotate-45 transition-transform duration-300' />{' '}
                        Contact Me
                    </Button>
                    <div className='inline-flex gap-6'>
                        {socials.map((social, i) => (
                            <Link
                                key={i}
                                href={social.url}
                                className='cancel-drag'
                                target='_blank'
                                aria-label={`My ${social.name}`}
                                rel='nofollow noopener noreferrer'>
                                {<social.icon size='1.3rem' />}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
