import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../Card';
import Button from '../Button';
import Image from 'next/image';
import projectImage from '@/public/next-blog-starter.png';

export default function ProjectOne() {
    return (
        <Card className='relative bg-red-100 dark:bg-red-100 group'>
            <Image
                src={projectImage}
                alt='next-blog-starter'
                className='absolute inset-0 w-full h-full object-cover'
                priority
            />
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag w-10 h-10 justify-end group-hover:w-full transition-all ease-in-out'
                    href='https://next-blog-starter-bymaul.vercel.app/'
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    <span className='group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in whitespace-nowrap'>
                        next-blog
                    </span>
                    <div>
                        <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                    </div>
                </Button>
            </div>
        </Card>
    );
}
