export type Projects = {
    name: string;
    image?: string;
    tags: string[];
    repo: string;
    url?: string;
};

const projects: Projects[] = [
    {
        name: 'laravel-pos',
        image: '/images/projects/laravel-pos.png',
        tags: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL'],
        repo: 'https://github.com/bymaul/laravel-pos',
    },
    {
        name: 'lorem-travel',
        image: '/images/projects/lorem-travel.png',
        tags: ['Next.js', 'React', 'Tailwind'],
        repo: 'https://github.com/bymaul/lorem-travel',
        url: 'https://lorem-travel.vercel.app',
    },
    {
        name: 'laravel-ecommerce',
        image: '/images/projects/laravel-ecommerce.png',
        tags: ['Laravel', 'Inertia', 'React', 'Tailwind', 'MySQL'],
        repo: 'https://github.com/bymaul/laravel-ecommerce',
    },
];

export default projects;
