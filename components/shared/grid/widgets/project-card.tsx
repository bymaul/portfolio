import Link from 'next/link';
import Card from '@/components/ui/card';
import { FaArrowRight } from 'react-icons/fa6';
import { getLatestProject } from '@/lib/mdx';

export default function ProjectCard() {
    const project = getLatestProject();

    if (!project) {
        return (
            <Card className='items-center justify-center p-6'>
                <p>No projects yet.</p>
            </Card>
        );
    }

    return (
        <Card className='group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
            <div className='relative z-10 flex h-full flex-col justify-between p-5 md:p-8 focus:outline-none'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                            Featured Project
                        </h3>
                    </div>

                    <h2 className='font-pixelify-sans text-xl md:text-3xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white'>
                        <Link
                            href={`/projects/${project.slug}`}
                            className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'>
                            {project.metadata.title}
                        </Link>
                    </h2>
                    <p className='max-lg:line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400 pointer-events-none'>
                        {project.metadata.description}
                    </p>
                </div>

                <div className='mt-6 flex items-center'>
                    <Link
                        href={`/projects/${project.slug}`}
                        className='cancel-drag inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-black text-center md:text-left'>
                        View Project
                    </Link>
                </div>
            </div>

            <div className='absolute -left-10 -top-10 z-0 size-40 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/30 pointer-events-none' />
        </Card>
    );
}
