import projectImage from '@/public/projects/laravel-pos.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function ProjectThree() {
    return (
        <Card className='group relative bg-blue-100 dark:bg-blue-100'>
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
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full'
                    href='/projects/laravel-pos'>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline'>
                        Point of Sales
                    </span>
                    <span className='sr-only'>Point of Sales</span>
                    <div>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </div>
                </Button>
            </div>
        </Card>
    );
}
