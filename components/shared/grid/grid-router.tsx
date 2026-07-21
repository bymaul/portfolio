import GridItem from '@/components/shared/grid/item';
import GridLayout from '@/components/shared/grid/layout';
import Card from '@/components/ui/card';
import { gridItems as homeGridItems, layouts as homeLayouts } from '@/config/grid';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
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

type Bp = 'lg' | 'md' | 'sm';

const bpConfig: Record<Bp, { colStartY: number[]; itemH: number }> = {
    lg: { colStartY: [1, 1], itemH: 1 },
    md: { colStartY: [3, 1], itemH: 2 },
    sm: { colStartY: [20], itemH: 2 },
};

const generateLayout = (ids: string[], bp: Bp): LayoutItem[] => {
    const { colStartY, itemH } = bpConfig[bp];
    const colY = [...colStartY];
    const w = 2;

    return ids.map((id) => {
        let col = 0;
        for (let c = 1; c < colY.length; c++) {
            if (colY[c] < colY[col]) col = c;
        }
        const y = colY[col];
        colY[col] += itemH;
        return { i: id, x: col * w, y, w, h: itemH };
    });
};

const baseLayouts = {
    lg: [
        { i: 'description', x: 0, y: 0, w: 2, h: 1 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'theme', x: 3, y: 0, w: 1, h: 1 },
    ],
    md: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 2, h: 1 },
        { i: 'theme', x: 0, y: 2, w: 2, h: 1 },
    ],
    sm: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 0, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 0, y: 5, w: 2, h: 1 },
    ],
};

function EntryCard({
    href,
    badge,
    title,
    description,
    cta,
}: {
    href: string;
    badge: string;
    title: string;
    description: string;
    cta: string;
}) {
    return (
        <Card className='group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
            <div className='relative z-10 flex h-full flex-col justify-between p-5 md:p-8 focus:outline-none'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                        <span className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                            {badge}
                        </span>
                    </div>
                    <h2 className='font-pixelify-sans text-xl md:text-3xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white'>
                        <Link
                            href={href}
                            className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors before:absolute before:inset-0'>
                            {title}
                        </Link>
                    </h2>
                    <p className='max-lg:line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400 pointer-events-none'>
                        {description}
                    </p>
                </div>
                <div className='mt-6 flex items-center'>
                    <div className='cancel-drag inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-xs font-bold text-white shadow-lg transition-transform group-hover:scale-105 dark:bg-white dark:text-black text-center md:text-left'>
                        {cta}
                    </div>
                </div>
            </div>
            <div className='absolute -left-10 -top-10 z-0 size-40 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/30 pointer-events-none' />
        </Card>
    );
}

const getBadgeText = (date?: string) => (date ? formatDate(date) : 'Article');

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

    const baseItems = homeGridItems
        .filter((item) => ['description', 'location', 'theme', 'contact'].includes(item.i))
        .map((item) => <GridItem key={item.i} id={item.i} component={item.component} />);

    const entries: ContentData[] = view === 'articles' ? posts : projects;
    const prefix = view === 'articles' ? 'post' : 'project';
    const hrefBase = view === 'articles' ? '/posts' : '/projects';

    const ids = [...entries.map((_, i) => `${prefix}-${i}`), 'contact'];
    const newLayouts = {
        lg: generateLayout(ids, 'lg'),
        md: generateLayout(ids, 'md'),
        sm: generateLayout(ids, 'sm'),
    };

    const newItems = entries.map((entry, i) => (
        <div key={`${prefix}-${i}`} className='h-full'>
            <EntryCard
                href={`${hrefBase}/${entry.slug}`}
                badge={view === 'articles' ? getBadgeText(entry.metadata.date) : 'Project'}
                title={entry.metadata.title}
                description={entry.metadata.description}
                cta={view === 'articles' ? 'Read Article' : 'View Project'}
            />
        </div>
    ));

    const mergedLayouts = {
        lg: [...baseLayouts.lg, ...newLayouts.lg],
        md: [...baseLayouts.md, ...newLayouts.md],
        sm: [...baseLayouts.sm, ...newLayouts.sm],
    };

    return <GridLayout layouts={mergedLayouts}>{[...baseItems, ...newItems]}</GridLayout>;
}
