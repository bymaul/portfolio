export type Projects = {
    name: string;
    image?: string;
    tags?: string[];
    url: string;
};

const projects: Projects[] = [
    {
        name: 'laravel-pos',
        image: '/images/projects/laravel-pos.png',
        tags: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL'],
        url: 'https://github.com/bymaul/laravel-pos',
    },
    {
        name: 'lorem-travel',
        image: '/images/projects/lorem-travel.png',
        tags: ['Next.js', 'React', 'Tailwind'],
        url: 'https://lorem-travel.vercel.app',
    },
    {
        name: 'laravel-ecommerce',
        image: '/images/projects/laravel-ecommerce.png',
        tags: ['Laravel', 'Inertia.js', 'React', 'Tailwind', 'MySQL'],
        url: 'https://github.com/bymaul/laravel-ecommerce',
    },
];

export default projects;
