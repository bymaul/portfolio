import Image from 'next/image';
import { FaMicrochip, FaArrowUpRightFromSquare } from 'react-icons/fa6';
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
                <div className='absolute z-20 bottom-0 left-0 p-4'>
                    <ButtonLink
                        href={url}
                        color='secondary'
                        size='sm'
                        textSize='sm'
                        target='_blank'
                        rel='noopener noreferrer'
                        underline>
                        <FaArrowUpRightFromSquare />
                        {name}
                    </ButtonLink>
                </div>
                <Image src={image} alt={name} width={400} height={400} />
            </div>
            {tags?.length && (
                <div className='mt-4 flex gap-x-4'>
                    <div className='py-1'>
                        <FaMicrochip />
                    </div>
                    <div className='flex flex-wrap items-center justify-start gap-2'>
                        {tags.sort().map((tag, i) => (
                            <span
                                className='py-1 px-3 text-xs bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-md transition duration-300 cursor-default'
                                key={i}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
