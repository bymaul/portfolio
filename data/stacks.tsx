import { SiLaravel, SiReact, SiTailwindcss, SiBootstrap, SiMysql } from 'react-icons/si';

export type Stacks = {
    name: string;
    slug: string;
    icon: any;
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
        name: 'Tailwind CSS',
        slug: 'tailwind',
        icon: <SiTailwindcss />,
    },
    {
        name: 'Bootstrap',
        slug: 'bootstrap',
        icon: <SiBootstrap />,
    },
    {
        name: 'MySQL',
        slug: 'mysql',
        icon: <SiMysql />,
    },
];

export default stacks;
