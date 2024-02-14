import projectImage from '@/public/projects/api-collection.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function ProjectTwo() {
    return (
        <Card className='group relative bg-orange-100 dark:bg-orange-100'>
            <Image
                src={projectImage}
                alt='api-collection'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                objectFit='cover'
                placeholder='blur'
            />
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full'
                    href='/projects/api-collection'>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline'>
                        API Collection
                    </span>
                    <div>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </div>
                </Button>
            </div>
        </Card>
    );
}