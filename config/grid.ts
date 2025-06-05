import { Description, Location, Project, Spotify, Article, Theme, LinkedIn, Contact } from '@/components/grid/widgets';
import { Layout } from 'react-grid-layout';

interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: Description },
    { i: 'location', component: Location },
    { i: 'project', component: Project },
    { i: 'spotify', component: Spotify },
    { i: 'article', component: Article },
    { i: 'theme', component: Theme },
    { i: 'linkedin', component: LinkedIn },
    { i: 'contact', component: Contact },
];

type Layouts = 'lg' | 'md' | 'sm';

export const layouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: 'description', x: 0, y: 0, w: 2, h: 1 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'project', x: 3, y: 0, w: 1, h: 2 },
        { i: 'spotify', x: 0, y: 1, w: 1, h: 1 },
        { i: 'article', x: 1, y: 1, w: 2, h: 1 },
        { i: 'theme', x: 0, y: 2, w: 1, h: 1 },
        { i: 'linkedin', x: 1, y: 2, w: 1, h: 1 },
        { i: 'contact', x: 2, y: 2, w: 2, h: 1 },
    ],
    md: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 2, h: 1 },
        { i: 'linkedin', x: 2, y: 1, w: 1, h: 1 },
        { i: 'project', x: 3, y: 1, w: 1, h: 2 },
        { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 2, y: 2, w: 1, h: 1 },
        { i: 'article', x: 0, y: 3, w: 2, h: 2 },
        { i: 'contact', x: 2, y: 3, w: 2, h: 2 },
    ],
    sm: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 0, y: 2, w: 2, h: 1 },
        { i: 'linkedin', x: 0, y: 3, w: 1, h: 1 },
        { i: 'project', x: 1, y: 3, w: 1, h: 2 },
        { i: 'theme', x: 0, y: 4, w: 1, h: 1 },
        { i: 'spotify', x: 0, y: 5, w: 2, h: 2 },
        { i: 'article', x: 0, y: 7, w: 2, h: 2 },
        { i: 'contact', x: 0, y: 9, w: 2, h: 2 },
    ],
};

const projectLargeLayout: Layout[] = [
    { i: 'images-1', x: 0, y: 0, w: 2, h: 1 },
    { i: 'images-2', x: 2, y: 0, w: 1, h: 1 },
    { i: 'images-3', x: 3, y: 0, w: 1, h: 2 },
    { i: 'images-4', x: 0, y: 1, w: 1, h: 1 },
    { i: 'images-5', x: 1, y: 1, w: 2, h: 1 },
];

export const projectLayouts: { [key in Layouts]: Layout[] } = {
    lg: projectLargeLayout,
    md: projectLargeLayout,
    sm: [
        { i: 'images-1', x: 0, y: 0, w: 2, h: 1 },
        { i: 'images-2', x: 0, y: 1, w: 1, h: 1 },
        { i: 'images-3', x: 1, y: 1, w: 1, h: 2 },
        { i: 'images-4', x: 0, y: 2, w: 1, h: 1 },
        { i: 'images-5', x: 2, y: 3, w: 2, h: 1 },
    ],
};
