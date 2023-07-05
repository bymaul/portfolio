import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';
import stacks from '@/data/stacks';
import { notFound } from 'next/navigation';

type StackProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return stacks.map((stack) => ({
        slug: stack.slug,
    }));
}

function getProjects(slug: string) {
    const project = projects.filter((p) => p.tags.some((t) => t.toLowerCase() === slug.toLowerCase()));

    return project;
}

export default function Stack({ params }: StackProps) {
    const { slug } = params;
    const projects = getProjects(slug);
    if (!projects.length) {
        notFound();
    }

    return (
        <main className='max-w-screen-md mx-auto px-4 pt-14'>
            <div className='pb-5'>
                <h1 className='font-semibold text-3xl text-slate-900 dark:text-white leading-relaxed capitalize'>
                    My {stacks.find((stack) => stack.slug === slug)?.name} Projects
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
                    />
                ))}
            </div>
        </main>
    );
}
