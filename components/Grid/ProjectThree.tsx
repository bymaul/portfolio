import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../Card';
import Button from '../Button';
import Image from 'next/image';
import projectImage from '@/public/laravel-ecommerce.png';

export default function ProjectThree() {
    return (
        <Card className='relative bg-orange-100 group'>
            <Image
                src={projectImage}
                alt='laravel-ecommerce'
                className='absolute inset-0 w-full h-full object-cover'
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