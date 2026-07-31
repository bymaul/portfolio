import GridItem from '@/components/shared/grid/item';
import GridLayout from '@/components/shared/grid/layout';
import Card from '@/components/ui/card';
import { gridItems as homeGridItems } from '@/config/grid';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import type { LayoutItem } from 'react-grid-layout';
import { FaArrowRight } from 'react-icons/fa6';

export type ContentData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    date?: string;
  };
};

interface EntriesGridProps {
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

const baseItemIds = ['description', 'location', 'theme', 'contact'];

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
    <Card className="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-white/40 hover:shadow-2xl dark:hover:bg-white/5">
      <div className="relative z-10 flex h-full flex-col justify-between p-5 focus:outline-none md:p-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
              {badge}
            </span>
          </div>
          <h2 className="font-pixelify-sans text-xl leading-tight font-bold text-neutral-900 drop-shadow-sm md:text-3xl dark:text-white">
            {title}
          </h2>
          <p className="pointer-events-none text-neutral-600 max-lg:line-clamp-2 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <div className="mt-6 flex items-center">
          <Link
            className="cancel-drag group/btn inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900/5 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition-all hover:bg-neutral-900/10 hover:shadow-md dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            href={href}
          >
            <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" />
            {cta}
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-10 -left-10 z-0 size-40 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/30" />
    </Card>
  );
}

const getBadgeText = (date?: string) => (date ? formatDate(date) : 'Article');

export default function EntriesGrid({ view, posts, projects }: EntriesGridProps) {
  const baseItems = homeGridItems
    .filter((item) => baseItemIds.includes(item.i))
    .map((item) => <GridItem key={item.i} id={item.i} component={item.component} />);

  const entries: ContentData[] = view === 'articles' ? posts : projects;
  const isArticles = view === 'articles';
  const prefix = isArticles ? 'post' : 'project';
  const hrefBase = isArticles ? '/posts' : '/projects';

  const ids = [...entries.map((_, i) => `${prefix}-${i}`), 'contact'];
  const newLayouts = {
    lg: generateLayout(ids, 'lg'),
    md: generateLayout(ids, 'md'),
    sm: generateLayout(ids, 'sm'),
  };

  const newItems = entries.map((entry, i) => (
    <div key={`${prefix}-${i}`} className="h-full">
      <EntryCard
        href={`${hrefBase}/${entry.slug}`}
        badge={isArticles ? getBadgeText(entry.metadata.date) : 'Project'}
        title={entry.metadata.title}
        description={entry.metadata.description}
        cta={isArticles ? 'Read Article' : 'View Project'}
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
