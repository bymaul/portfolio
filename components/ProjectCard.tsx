import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

type Props = {
    name: string;
    image?: string;
    tags?: string[];
    url: string;
};

export default function ProjectCard({ name, url, image, tags }: Props) {
    return (
        <div className='rounded-xl overflow-hidden relative max-w-[400px]'>
            <div className='absolute z-20 bottom-0 left-0 p-4'>
                <Link
                    href={url}
                    className='py-2 px-4 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg  underline inline-flex gap-x-2 items-center border border-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300'
                    target='_blank'
                >
                    <BiLinkExternal />
                    {name}
                </Link>
            </div>
            {tags && (
                <div className='absolute z-10 top-0 right-0 left-0 p-4'>
                    <div className='flex flex-row-reverse items-center justify-start gap-2 flex-wrap'>
                        {tags.map((tag, i) => (
                            <span
                                className='py-1 px-3 text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-md border border-slate-900'
                                key={i}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            <Image
                src={image ? image : '/images/placeholder.svg'}
                alt={name}
                width={400}
                height={400}
                className='hover:scale-105 transition duration-300 object-cover object-center'
                draggable='false'
            />
        </div>
    );
}
