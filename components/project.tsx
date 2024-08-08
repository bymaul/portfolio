import { cn, toKebabCase } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from './button';
import Card from './card';

export default function Project({
    projectName,
    projectImage,
    backgroundColor,
}: {
    projectName: string;
    projectImage: string | StaticImageData;
    backgroundColor: string;
}) {
    return (
        <Card className={cn('group relative', backgroundColor)}>
            <Image
                src={projectImage}
                alt={toKebabCase(projectName)}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover'
                placeholder='blur'
                priority
            />
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full'
                    href={`/projects/${toKebabCase(projectName)}`}
                    aria-label={projectName}>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline'>
                        {projectName}
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Button>
            </div>
        </Card>
    );
}
