import { SiLaravel, SiReact, SiTailwindcss, SiBootstrap, SiMysql } from 'react-icons/si';

export type Stacks = {
    name: string;
    slug: string;
    icon: any;
};

const stacks: Stacks[] = [
    {
        name: 'Laravel',
        slug: '/tags/laravel',
        icon: <SiLaravel />,
    },
    {
        name: 'React',
        slug: '/tags/react',
        icon: <SiReact />,
    },
    {
        name: 'Tailwind CSS',
        slug: '/tags/tailwind',
        icon: <SiTailwindcss />,
    },
    {
        name: 'Bootstrap',
        slug: '/tags/bootstrap',
        icon: <SiBootstrap />,
    },
    {
        name: 'MySQL',
        slug: '/tags/mysql',
        icon: <SiMysql />,
    },
];

export default stacks;
