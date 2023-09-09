'use client';

import projectsData from '@/data/projects';
import { cn } from '@/utils/utils';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const parentHeight = document.getElementById('projects')?.clientHeight;

    return (
        <div
            style={{ height: showMore ? `${parentHeight}px` : '380px' }}
            className='relative transition-[height] duration-[1s] ease-in-out overflow-hidden'>
            <div id='projects' className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6 pb-14'>
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
                className={cn(
                    'absolute bottom-0 left-0 right-0 z-10 transition-[height] duration-[2s]  bg-gradient-to-t from-white dark:from-slate-950 to-transparent',
                    showMore ? 'h-0' : 'h-32'
                )}>
                <div className='flex justify-center items-end h-full'>
                    <button
                        onClick={handleShowMore}
                        className={cn(
                            'rounded-md transition duration-300 py-2 px-4',
                            'text-sm text-white dark:text-slate-900 whitespace-nowrap',
                            'border border-slate-900 dark:border-slate-200',
                            'bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100'
                        )}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </div>
    );
}
