export type Projects = {
    name: string;
    image?: string;
    tags: string[];
    url: string;
};

const projects: Projects[] = [
    {
        name: 'lorem-travel',
        image: '/images/projects/lorem-travel.png',
        tags: ['Next.js', 'React', 'Tailwind'],
        url: 'https://github.com/bymaul/lorem-travel',
    },
    {
        name: 'laravel-ecommerce',
        image: '/images/projects/laravel-ecommerce.png',
        tags: ['Laravel', 'Inertia', 'React', 'Tailwind', 'MySQL'],
        url: 'https://github.com/bymaul/laravel-ecommerce',
    },
    {
        name: 'sistem-penjualan',
        image: '/images/projects/sistem-penjualan.png',
        tags: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL'],
        url: 'https://github.com/bymaul/sistem-penjualan',
    },
];

export default projects;
