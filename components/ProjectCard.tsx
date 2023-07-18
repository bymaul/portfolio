import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import { ButtonLink } from './ButtonLink';

type Props = {
    name: string;
    image?: string;
    tags?: string[];
    url: string;
};

export default function ProjectCard({ name, image = '/images/placeholder.svg', url, tags }: Props) {
    return (
        <div className='rounded-xl overflow-hidden relative max-w-[350px]'>
            <div className='absolute z-20 bottom-0 left-0 p-4'>
                <ButtonLink
                    href={url}
                    color='secondary'
                    size='sm'
                    textSize='sm'
                    underline
                    target='_blank'
                    rel='noopener noreferrer'>
                    <BiLinkExternal />
                    {name}
                </ButtonLink>
            </div>
            {/* {tags?.length && (
                <div className='absolute z-10 top-0 right-0 left-0 p-4'>
                    <div className='flex flex-row-reverse items-center justify-start gap-2 flex-wrap'>
                        {tags.map((tag, i) => (
                            <span
                                className='py-1 px-3 text-xs bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-md border border-slate-900 transition duration-300 cursor-default'
                                key={i}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )} */}
            <Image src={image} alt={name} width={400} height={400} />
        </div>
    );
}
