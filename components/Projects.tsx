'use client';

import projectsData from '@/data/projects';
import clsx from 'clsx';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const [overlayHeight, setOverlayHeight] = useState(true);

    const handleShowMore = () => {
        setShowMore(!showMore);
        setOverlayHeight(!overlayHeight);
    };

    return (
        <div
            className={clsx(
                'relative',
                overlayHeight ? 'max-h-[520px] sm:max-h-[360px] overflow-hidden' : 'max-h-full pb-14'
            )}>
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6'>
                {projectsData.map((project, i) => (
                    <ProjectCard
                        key={i}
                        name={project.name}
                        image={project.image}
                        tags={project.tags}
                        repo={project.repo}
                        url={project.url}
                    />
                ))}
            </div>
            <div
                className={clsx(
                    'absolute bottom-0 left-0 right-0 z-10',
                    showMore ? '' : 'h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent'
                )}>
                <div className='flex justify-center items-end h-full'>
                    <button
                        onClick={handleShowMore}
                        className={clsx(
                            'rounded-md transition duration-300 whitespace-nowrap',
                            'py-2 px-4 text-sm text-white dark:text-slate-900',
                            'border border-slate-900 dark:border-slate-200 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100'
                        )}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </div>
    );
}
