import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';
import React from 'react';

export const metadata = {
    title: 'My Projects',
    description: "Explore some of the projects I've been working in.",
};

export default function Projects() {
    return (
        <main className='max-w-screen-md mx-auto space-y-12 px-4'>
            <section className='pt-14'>
                <div className='pb-5'>
                    <h1 className='font-semibold text-3xl text-slate-900 dark:text-white leading-relaxed'>
                        My Projects
                    </h1>
                    <p className='text-slate-400'>Explore some of the projects I&apos;ve been working in.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-7'>
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            name={project.name}
                            url={project.url}
                            image={project.image}
                            tags={project.tags}
                            placeholder={project.placeholder}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
