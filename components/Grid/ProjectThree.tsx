import projectImage from '@/public/projects/laravel-ecommerce.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../Button';
import Card from '../Card';

export default function ProjectThree() {
    return (
        <Card className='relative bg-orange-100 dark:bg-orange-100 group'>
            <Image
                src={projectImage}
                alt='laravel-ecommerce'
                fill
                objectFit='cover'
                placeholder='blur'
            />
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag w-10 h-10 justify-end group-hover:w-full transition-all ease-in-out'
                    href='https://github.com/bymaul/laravel-ecommerce'
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    <span className='group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in whitespace-nowrap'>
                        laravel-ecom
                    </span>
                    <div>
                        <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                    </div>
                </Button>
            </div>
        </Card>
    );
}
