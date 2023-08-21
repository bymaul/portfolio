import Image from 'next/image';
import { FaArrowRight, FaLayerGroup } from 'react-icons/fa6';
import { ButtonLink } from './ButtonLink';

type Props = {
    name: string;
    image?: string;
    tags?: string[];
    url: string;
};

export default function ProjectCard({ name, image = '/images/placeholder.svg', url, tags }: Props) {
    return (
        <div className='max-w-[350px]'>
            <div className='relative rounded-xl overflow-hidden'>
                <div className='absolute z-10 bottom-0 left-0 p-4'>
                    <ButtonLink
                        href={url}
                        color='secondary'
                        size='sm'
                        textSize='sm'
                        target='_blank'
                        rel='noopener noreferrer'
                        underline
                        className='group'>
                        <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                        {name}
                    </ButtonLink>
                </div>
                <Image src={image} alt={name} width={400} height={400} />
            </div>
            {tags?.length && (
                <div className='mt-4 flex gap-x-4'>
                    <div className='py-1'>
                        <FaLayerGroup />
                    </div>
                    <div className='flex flex-wrap items-center justify-start gap-2'>
                        {tags.sort().map((tag, i) => (
                            <span key={i} className='py-1 px-3 text-xs bg-slate-100 dark:bg-slate-800 rounded-md'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
