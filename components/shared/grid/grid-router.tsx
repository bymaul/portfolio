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

const generateLayout = (
    itemsCount: number,
    prefix: string,
    itemsPerRow: number,
    itemWidth: number,
    itemHeight: number,
    startY: number,
): LayoutItem[] => {
    return Array.from({ length: itemsCount }).map((_, i) => ({
        i: `${prefix}-${i}`,
        x: (i % itemsPerRow) * itemWidth,
        y: startY + Math.floor(i / itemsPerRow) * itemHeight,
        w: itemWidth,
        h: itemHeight,
    }));
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

    const isArticles = view === 'articles';
    const activeKey = isArticles ? 'article' : 'project';
    const keptKeys = ['description', activeKey];

    const baseLayouts = {
        lg: [
            { i: 'description', x: 0, y: 0, w: 2, h: 1 },
            { i: activeKey, x: 2, y: 0, w: isArticles ? 2 : 1, h: isArticles ? 1 : 2 },
        ],
        md: [
            { i: 'description', x: 0, y: 0, w: 2, h: 2 },
            { i: activeKey, x: 2, y: 0, w: isArticles ? 2 : 1, h: 2 },
        ],
        sm: [
            { i: 'description', x: 0, y: 0, w: 2, h: 2 },
            { i: activeKey, x: 0, y: 2, w: isArticles ? 2 : 1, h: 2 },
        ],
    };

    const baseItems = homeGridItems
        .filter((item) => keptKeys.includes(item.i))
        .map((item) => <GridItem key={item.i} id={item.i} component={item.component} />);

    const offsets = {
        lg: isArticles ? 1 : 2,
        md: 2,
        sm: 4,
    };

    let newLayouts = { lg: [] as LayoutItem[], md: [] as LayoutItem[], sm: [] as LayoutItem[] };
    let newItems: React.ReactNode[] = [];

    if (isArticles) {
        newLayouts = {
            lg: generateLayout(posts.length, 'post', 2, 2, 2, offsets.lg),
            md: generateLayout(posts.length, 'post', 2, 2, 2, offsets.md),
            sm: generateLayout(posts.length, 'post', 1, 2, 2, offsets.sm),
        };

        newItems = posts.map((post, i) => (
            <div key={`post-${i}`} className='h-full'>
                <Card className='group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
                    <div className='relative z-10 flex flex-col h-full p-5 md:p-8 focus:outline-none'>
                        {post.metadata.date && (
                            <time className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 block'>
                                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </time>
                        )}
                        <h2 className='font-pixelify-sans text-xl md:text-2xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white mb-2 mt-2'>
                            <Link
                                href={`/posts/${post.slug}`}
                                className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors before:absolute before:inset-0'>
                                {post.metadata.title}
                            </Link>
                        </h2>
                        <p className='line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400 grow pointer-events-none'>
                            {post.metadata.description}
                        </p>
                        <div className='mt-6 flex items-center font-bold text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                            Read Article &rarr;
                        </div>
                    </div>
                    <div className='absolute -right-10 -bottom-10 z-0 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/20 pointer-events-none' />
                </Card>
            </div>
        ));
    } else if (view === 'projects') {
        newLayouts = {
            lg: generateLayout(projects.length, 'project', 2, 2, 2, offsets.lg),
            md: generateLayout(projects.length, 'project', 2, 2, 2, offsets.md),
            sm: generateLayout(projects.length, 'project', 1, 2, 2, offsets.sm),
        };

        newItems = projects.map((project, i) => (
            <div key={`project-${i}`} className='h-full'>
                <Card className='group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
                    <div className='relative z-10 flex flex-col h-full p-5 md:p-8 focus:outline-none'>
                        <h2 className='font-pixelify-sans text-xl md:text-2xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white mb-2 mt-4'>
                            <Link
                                href={`/projects/${project.slug}`}
                                className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors before:absolute before:inset-0'>
                                {project.metadata.title}
                            </Link>
                        </h2>
                        <p className='line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400 grow pointer-events-none'>
                            {project.metadata.description}
                        </p>
                        <div className='mt-6 flex items-center font-bold text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                            View Project &rarr;
                        </div>
                    </div>
                    <div className='absolute -right-10 -bottom-10 z-0 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/20 pointer-events-none' />
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
