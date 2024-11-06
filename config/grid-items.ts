import * as GridComponents from '@/components/grid';

export interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: GridComponents.Description },
    { i: 'location', component: GridComponents.Location },
    { i: 'project-1', component: GridComponents.FirstProject },
    { i: 'linkedin', component: GridComponents.LinkedIn },
    { i: 'theme', component: GridComponents.Theme },
    { i: 'project-2', component: GridComponents.SecondProject },
    { i: 'spotify', component: GridComponents.Spotify },
    { i: 'project-3', component: GridComponents.ThirdProject },
    { i: 'article', component: GridComponents.Article },
    { i: 'contact', component: GridComponents.Contact },
];
