import {
    SiBootstrap,
    SiJquery,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiSass,
    SiTailwindcss,
} from 'react-icons/si';
import { IconType } from 'react-icons/lib';

export type Stacks = {
    name: string;
    slug: string;
    icon: IconType;
};

const stacks: Stacks[] = [
    {
        name: 'Laravel',
        slug: 'laravel',
        icon: SiLaravel,
    },
    {
        name: 'React',
        slug: 'react',
        icon: SiReact,
    },
    {
        name: 'Next.js',
        slug: 'next.js',
        icon: SiNextdotjs,
    },
    {
        name: 'jQuery',
        slug: 'jquery',
        icon: SiJquery,
    },
    {
        name: 'Sass',
        slug: 'sass',
        icon: SiSass,
    },
    {
        name: 'Bootstrap',
        slug: 'bootstrap',
        icon: SiBootstrap,
    },
    {
        name: 'Tailwind',
        slug: 'tailwind',
        icon: SiTailwindcss,
    },
    {
        name: 'PostgreSQL',
        slug: 'postgresql',
        icon: SiPostgresql,
    },
    {
        name: 'MySQL',
        slug: 'mysql',
        icon: SiMysql,
    },
    {
        name: 'MongoDB',
        slug: 'mongodb',
        icon: SiMongodb,
    },
];

export default stacks;
