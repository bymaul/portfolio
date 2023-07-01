export type Projects = {
    name: string;
    tags: string[];
    photo?: string;
    url: string;
};

const projects: Projects[] = [
    {
        name: 'laravel-payment-gateway',
        tags: ['Laravel', 'Inertia', 'React', 'Tailwind CSS', 'MySQL'],
        url: 'https://github.com/bymaul/laravel-payment-gateway',
    },
    {
        name: 'sistem-penjualan',
        tags: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL'],
        url: 'https://github.com/bymaul/sistem-penjualan',
    },
];

export default projects;
