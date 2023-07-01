import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

export default function Projects() {
    return (
        <main className='max-w-screen-md mx-auto space-y-12 px-4'>
            <section className='pt-14'>
                <div className='pb-5'>
                    <h2 className='font-semibold text-3xl text-slate-900 dark:text-white leading-relaxed'>
                        My Projects
                    </h2>
                    <p className='text-slate-400'>Explore some of the projects I&apos;ve been working in.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-7'>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className='border border-slate-900 dark:border-slate-200 rounded-xl overflow-hidden relative max-w-[400px]'
                        >
                            <div className='absolute z-10 bottom-5 left-5'>
                                <Link
                                    href={project.url}
                                    className='py-2 px-4 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg  underline inline-flex gap-x-2 items-center border border-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300'
                                    target='_blank'
                                >
                                    <BiLinkExternal />
                                    {project.name}
                                </Link>
                            </div>
                            <div className='absolute z-10 top-5 right-5 left-5'>
                                <div className='flex items-center justify-end gap-2 flex-wrap'>
                                    {project.tags.map((tag, i) => (
                                        <span
                                            className='py-1 px-3 text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-md border border-slate-900'
                                            key={i}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Image
                                src={project.photo ? project.photo : 'https://fakeimg.pl/400x400/?text=Thumbnail'}
                                alt={project.name}
                                width={400}
                                height={400}
                                className='object-cover'
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
