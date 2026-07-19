import { getAllProjects } from '@/lib/mdx';
import Container from '@/components/ui/container';
import Card from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
    title: 'Projects',
    description: 'A collection of projects I have worked on.',
};

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <Container className='py-12 max-w-5xl mx-auto'>
            <div className='mb-10'>
                <h1 className='font-pixelify-sans text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white'>
                    My Projects
                </h1>
                <p className='text-neutral-600 dark:text-neutral-400'>
                    A collection of projects I have built and contributed to.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {projects.map((project) => (
                    <Card
                        key={project.slug}
                        className='group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-white/40 dark:hover:bg-white/5 flex flex-col p-6 h-full'>
                        <div className='relative z-10 flex flex-col h-full'>
                            <h2 className='text-2xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors'>
                                {/* Wrap link using before:inset-0 to make the whole card clickable cleanly */}
                                <Link href={`/projects/${project.slug}`} className='before:absolute before:inset-0'>
                                    {project.metadata.title}
                                </Link>
                            </h2>
                            <p className='text-sm text-neutral-600 dark:text-neutral-400 grow mb-6'>
                                {project.metadata.description}
                            </p>
                            <div className='mt-auto flex items-center font-bold text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                                View Project &rarr;
                            </div>
                        </div>
                        <div className='absolute -right-10 -bottom-10 z-0 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/20 pointer-events-none' />
                    </Card>
                ))}
            </div>
        </Container>
    );
}
