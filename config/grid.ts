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
import { Layout } from 'react-grid-layout';

interface GridItem {
    i: string;
    component: React.ComponentType;
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

type Layouts = 'lg' | 'md' | 'sm';

export const layouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: 'description', x: 0, y: 0, w: 2, h: 1 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'project-1', x: 3, y: 0, w: 1, h: 2 },
        { i: 'spotify', x: 0, y: 1, w: 1, h: 1 },
        { i: 'linkedin', x: 1, y: 1, w: 1, h: 1 },
        { i: 'project-2', x: 2, y: 1, w: 1, h: 2 },
        { i: 'article', x: 0, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 3, y: 2, w: 1, h: 1 },
        { i: 'project-3', x: 0, y: 3, w: 2, h: 1 },
        { i: 'contact', x: 2, y: 3, w: 2, h: 1 },
    ],
    md: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 2, h: 1 },
        { i: 'linkedin', x: 2, y: 1, w: 1, h: 1 },
        { i: 'project-1', x: 3, y: 1, w: 1, h: 2 },
        { i: 'project-2', x: 2, y: 2, w: 1, h: 2 },
        { i: 'theme', x: 3, y: 3, w: 1, h: 1 },
        { i: 'project-3', x: 0, y: 5, w: 2, h: 1 },
        { i: 'article', x: 0, y: 3, w: 2, h: 2 },
        { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
        { i: 'contact', x: 2, y: 4, w: 2, h: 2 },
    ],
    sm: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 0, y: 2, w: 2, h: 1 },
        { i: 'linkedin', x: 0, y: 3, w: 1, h: 1 },
        { i: 'project-1', x: 1, y: 3, w: 1, h: 2 },
        { i: 'project-2', x: 0, y: 4, w: 1, h: 2 },
        { i: 'theme', x: 1, y: 5, w: 1, h: 1 },
        { i: 'spotify', x: 0, y: 6, w: 2, h: 2 },
        { i: 'project-3', x: 0, y: 8, w: 2, h: 1 },
        { i: 'article', x: 0, y: 9, w: 2, h: 2 },
        { i: 'contact', x: 2, y: 11, w: 2, h: 2 },
    ],
};
