import EntriesGrid, { type ContentData } from '@/components/shared/grid/entries-grid';
import HomeGrid from '@/components/shared/grid/home-grid';

interface GridRouterProps {
  view: string;
  posts: ContentData[];
  projects: ContentData[];
}

export default function GridRouter({ view, posts, projects }: GridRouterProps) {
  const isHomeView = view !== 'articles' && view !== 'projects';

  if (isHomeView) {
    return <HomeGrid />;
  }

  return <EntriesGrid view={view} posts={posts} projects={projects} />;
}
