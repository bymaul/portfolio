import { IconType } from 'react-icons/lib';
import {
    SiBootstrap,
    SiJquery,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiInertia,
    SiTailwindcss,
} from 'react-icons/si';

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
        name: 'Inertia.js',
        slug: 'inertia.js',
        icon: SiInertia,
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
        name: 'MongoDB',
        slug: 'mongodb',
        icon: SiMongodb,
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
];

export default stacks;
