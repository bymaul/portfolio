import projectImage from '@/public/projects/laravel-pos.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../Button';
import Card from '../Card';

export default function ProjectTwo() {
    return (
        <Card className='relative bg-blue-100 dark:bg-blue-100 group'>
            <Image
                src={projectImage}
                alt='laravel-pos'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                objectFit='cover'
                placeholder='blur'
            />
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag size-10 justify-end group-hover:w-full transition-all ease-in-out'
                    href='/projects/laravel-pos'>
                    <span className='group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in whitespace-nowrap'>
                        Point of Sales
                    </span>
                    <div>
                        <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                    </div>
                </Button>
            </div>
        </Card>
    );
}
