import Link from 'next/link';
import Card from '@/components/ui/card';
import GridItem from '@/components/shared/grid/item';
import GridLayout from '@/components/shared/grid/layout';
import { gridItems as homeGridItems, layouts as homeLayouts } from '@/config/grid';
import type { LayoutItem } from 'react-grid-layout';

export type ContentData = {
    slug: string;
    metadata: {
        title: string;
        description: string;
        date?: string;
    };
};

interface GridRouterProps {
    view: string;
    posts: ContentData[];
    projects: ContentData[];
}

const generateLayout = (itemsCount: number, prefix: string, bp: string, isArticles: boolean): LayoutItem[] => {
    const w = 2;
    let h = 2;
    if (bp === 'lg' && isArticles) h = 1;

    return Array.from({ length: itemsCount }).map((_, i) => {
        if (bp === 'sm') {
            return { i: `${prefix}-${i}`, x: 0, y: 2 + i * h, w, h };
        } else {
            return {
                i: `${prefix}-${i}`,
                x: ((i + 1) % 2) * 2,
                y: Math.floor((i + 1) / 2) * h,
                w,
                h,
            };
        }
    });
};

export default function GridRouter({ view, posts, projects }: GridRouterProps) {
    if (view === 'home' || (view !== 'articles' && view !== 'projects')) {
        return (
            <GridLayout layouts={homeLayouts}>
                {homeGridItems.map((item) => (
                    <GridItem key={item.i} id={item.i} component={item.component} />
                ))}
            </GridLayout>
        );
    }

    const keptKeys = ['description', 'location', 'theme', 'contact'];

    const baseLayouts = {
        lg: [
            { i: 'description', x: 0, y: 0, w: 2, h: 1 },
            { i: 'location', x: 2, y: 0, w: 1, h: 1 },
            { i: 'theme', x: 3, y: 0, w: 1, h: 1 },
            { i: 'contact', x: 2, y: 1, w: 2, h: 1 },
        ],
        md: [
            { i: 'description', x: 0, y: 0, w: 2, h: 2 },
            { i: 'location', x: 2, y: 0, w: 2, h: 1 },
            { i: 'theme', x: 2, y: 2, w: 1, h: 1 },
            { i: 'contact', x: 0, y: 2, w: 2, h: 2 },
        ],
        sm: [
            { i: 'description', x: 0, y: 0, w: 2, h: 2 },
            { i: 'location', x: 0, y: 2, w: 2, h: 1 },
            { i: 'theme', x: 0, y: 4, w: 1, h: 1 },
            { i: 'contact', x: 0, y: 2, w: 2, h: 2 },
        ],
    };

    const baseItems = homeGridItems
        .filter((item) => keptKeys.includes(item.i))
        .map((item) => <GridItem key={item.i} id={item.i} component={item.component} />);

    let newLayouts = { lg: [] as LayoutItem[], md: [] as LayoutItem[], sm: [] as LayoutItem[] };
    let newItems: React.ReactNode[] = [];

    if (view === 'articles') {
        newLayouts = {
            lg: generateLayout(posts.length, 'post', 'lg', true),
            md: generateLayout(posts.length, 'post', 'md', true),
            sm: generateLayout(posts.length, 'post', 'sm', true),
        };

        newItems = posts.map((post, i) => (
            <div key={`post-${i}`} className='h-full'>
                <Card className='group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
                    <div className='relative z-10 flex h-full flex-col justify-between p-5 md:p-8 focus:outline-none'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <time className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                                    {post.metadata.date
                                        ? new Date(post.metadata.date).toLocaleDateString('en-US', {
                                              month: 'long',
                                              day: 'numeric',
                                              year: 'numeric',
                                          })
                                        : 'Article'}
                                </time>
                            </div>
                            <h2 className='font-pixelify-sans text-xl md:text-3xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white'>
                                <Link
                                    href={`/posts/${post.slug}`}
                                    className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors before:absolute before:inset-0'>
                                    {post.metadata.title}
                                </Link>
                            </h2>
                            <p className='max-lg:line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400 pointer-events-none'>
                                {post.metadata.description}
                            </p>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <div className='cancel-drag inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-xs font-bold text-white shadow-lg transition-transform group-hover:scale-105 dark:bg-white dark:text-black text-center md:text-left'>
                                Read Article
                            </div>
                        </div>
                    </div>
                    <div className='absolute -left-10 -top-10 z-0 size-40 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/30 pointer-events-none' />
                </Card>
            </div>
        ));
    } else if (view === 'projects') {
        newLayouts = {
            lg: generateLayout(projects.length, 'project', 'lg', false),
            md: generateLayout(projects.length, 'project', 'md', false),
            sm: generateLayout(projects.length, 'project', 'sm', false),
        };

        newItems = projects.map((project, i) => (
            <div key={`project-${i}`} className='h-full'>
                <Card className='group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
                    <div className='relative z-10 flex h-full flex-col justify-between p-5 md:p-8 focus:outline-none'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <span className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                                    Project
                                </span>
                            </div>
                            <h2 className='font-pixelify-sans text-xl md:text-3xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white'>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors before:absolute before:inset-0'>
                                    {project.metadata.title}
                                </Link>
                            </h2>
                            <p className='max-lg:line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400 pointer-events-none'>
                                {project.metadata.description}
                            </p>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <div className='cancel-drag inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-xs font-bold text-white shadow-lg transition-transform group-hover:scale-105 dark:bg-white dark:text-black text-center md:text-left'>
                                View Project
                            </div>
                        </div>
                    </div>
                    <div className='absolute -left-10 -top-10 z-0 size-40 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/30 pointer-events-none' />
                </Card>
            </div>
        ));
    }

    const mergedLayouts = {
        lg: [...baseLayouts.lg, ...newLayouts.lg],
        md: [...baseLayouts.md, ...newLayouts.md],
        sm: [...baseLayouts.sm, ...newLayouts.sm],
    };

    return <GridLayout layouts={mergedLayouts}>{[...baseItems, ...newItems]}</GridLayout>;
}
