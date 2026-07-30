import Link from 'next/link';
import Card from '@/components/ui/card';

export default function ProjectCard() {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-white/40 hover:shadow-2xl dark:hover:bg-white/5">
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-5 text-center focus:outline-none md:p-8">
        <h2 className="font-pixelify-sans text-2xl leading-tight font-bold text-neutral-900 drop-shadow-sm md:text-3xl dark:text-white">
          My Projects
        </h2>
        <p className="mb-2 text-neutral-600 dark:text-neutral-400">
          Explore all the projects I&apos;ve built.
        </p>
        <Link
          href="/?view=projects"
          className="cancel-drag mt-2 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-black"
        >
          View All Projects
        </Link>
      </div>

      <div className="pointer-events-none absolute -top-10 -left-10 z-0 size-40 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/30" />
    </Card>
  );
}
