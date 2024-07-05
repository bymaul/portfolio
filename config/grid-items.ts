import Article from '@/components/grid/article';
import Contact from '@/components/grid/contact';
import Description from '@/components/grid/description';
import FirstProject from '@/components/grid/first-project';
import LinkedIn from '@/components/grid/linkedin';
import Location from '@/components/grid/location';
import SecondProject from '@/components/grid/second-project';
import Spotify from '@/components/grid/spotify';
import Theme from '@/components/grid/theme';
import ThirdProject from '@/components/grid/third-project';

interface GridItem {
    i: string;
    component: () => JSX.Element;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: Description },
    { i: 'location', component: Location },
    { i: 'project-1', component: FirstProject },
    { i: 'linkedin', component: LinkedIn },
    { i: 'theme', component: Theme },
    { i: 'project-2', component: SecondProject },
    { i: 'spotify', component: Spotify },
    { i: 'project-3', component: ThirdProject },
    { i: 'article', component: Article },
    { i: 'contact', component: Contact },
];
