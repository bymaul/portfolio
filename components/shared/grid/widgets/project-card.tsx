import Anchor from '@/components/ui/custom-link';
import Card from '@/components/ui/card';
import { toKebabCase } from '@/lib/utils';
import projectImage from '@/public/projects/next-blog-starter.png';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

export default function ProjectCard() {
    const projectName = 'Next Blog Starter';

    return (
        <Card className='group relative bg-red-100'>
            <Image
                src={projectImage}
                alt={toKebabCase(projectName)}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover'
                placeholder='blur'
                priority
                draggable='false'
            />
            <div className='absolute bottom-3 left-3'>
                <Anchor
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full'
                    href={`/projects/${toKebabCase(projectName)}`}
                    aria-label={projectName}>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline'>
                        {projectName}
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Anchor>
            </div>
        </Card>
    );
}
