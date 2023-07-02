import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

type Props = {
    name: string;
    url: string;
    image?: string;
    // tags: string[];
};

export default function ProjectCard({ name, url, image /* tags */ }: Props) {
    return (
        <div className='border border-slate-900 dark:border-slate-200 rounded-xl overflow-hidden relative max-w-[400px]'>
            <div className='absolute z-10 bottom-0 left-0 p-4'>
                <Link
                    href={url}
                    className='py-2 px-4 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg  underline inline-flex gap-x-2 items-center border border-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300'
                    target='_blank'
                >
                    <BiLinkExternal />
                    {name}
                </Link>
            </div>
            {/* <div className='absolute z-20 inset-0 p-4'>
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
            </div> */}
            <Image
                src={image ? image : 'https://fakeimg.pl/400x400/?text=Project&font=bebas'}
                alt={name}
                width={400}
                height={400}
                className='hover:scale-105 transition duration-300 object-cover object-center'
            />
        </div>
    );
}
