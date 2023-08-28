import {
    SiBootstrap,
    SiJquery,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiReact,
    SiSass,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

export type Stacks = {
    name: string;
    slug: string;
    icon: React.ReactNode;
};

const stacks: Stacks[] = [
    {
        name: 'Laravel',
        slug: 'laravel',
        icon: <SiLaravel />,
    },
    {
        name: 'React',
        slug: 'react',
        icon: <SiReact />,
    },
    {
        name: 'Next.js',
        slug: 'next.js',
        icon: <SiNextdotjs />,
    },
    {
        name: 'jQuery',
        slug: 'jquery',
        icon: <SiJquery />,
    },
    {
        name: 'TypeScript',
        slug: 'typescript',
        icon: <SiTypescript />,
    },
    {
        name: 'Sass',
        slug: 'Sass',
        icon: <SiSass />,
    },
    {
        name: 'Bootstrap',
        slug: 'bootstrap',
        icon: <SiBootstrap />,
    },
    {
        name: 'Tailwind',
        slug: 'tailwind',
        icon: <SiTailwindcss />,
    },
    {
        name: 'MySQL',
        slug: 'mysql',
        icon: <SiMysql />,
    },
    {
        name: 'MongoDB',
        slug: 'mongodb',
        icon: <SiMongodb />,
    },
];

export default stacks;
