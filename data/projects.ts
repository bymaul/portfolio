export type Projects = {
    name: string;
    image?: string;
    placeholder?: string;
    tags: string[];
    url: string;
};

const projects: Projects[] = [
    {
        name: 'lorem-travel',
        image: '/images/projects/lorem-travel.png',
        placeholder:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAMAAADXEh96AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAABvUExURdTn1M7l0uXp5eTs5djp3L7a1LLTz7nY0drq2eHr6Zi4znSar4+ptd7r4t3s3Obs6Km4wZ2zvLjBwOPu5eXt5efq59DS0MTEwdjd2efx6cvSypCbhri9tJOXnK6ytefv6NXX0tHU01dfZn6Dif///4cq8NsAAAAEdFJOU/7+/v66Skr8AAAAAWJLR0QktAb5mQAAAAd0SU1FB+cHCgUYBne7QmkAAAAySURBVAjXY2BgYWVjZ2Tg4OTi5uFl4OMXEBQSZhARFROXkGSQkpaRlZNnYFJQVFJmBgAmqQJ3d8PBLAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNy0xMFQwNToyMzo0NyswMDowMBflCh8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDctMTBUMDU6MjM6NDcrMDA6MDBmuLKjAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA3LTEwVDA1OjI0OjA2KzAwOjAw8UyNSwAAAABJRU5ErkJggg==',
        tags: ['Next.js', 'React', 'Tailwind'],
        url: 'https://github.com/bymaul/lorem-travel',
    },
    {
        name: 'laravel-ecommerce',
        image: '/images/projects/laravel-ecommerce.png',
        placeholder:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAMAAADXEh96AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAABmUExURf7Suv/mzfq8pfzQuP7Xv/7cw/7gx//ky/zm2/nu6fbt5/bv6frz7f3x5fbo5Ojq7Nna2+jq6/fw6/Xn4ubo6tbX2Pbu6fXa0e3h3ObZ1Oba1e7k3/bl2/rAqfvErfvIsfvMtf////MgAFwAAAAEdFJOU/7+/v66Skr8AAAAAWJLR0QhxGwNFgAAAAd0SU1FB+cHCgUYBne7QmkAAAAySURBVAjXY2BgYWVjZ2Tg4OTi5uFl4OMXEBAUYhAWERUVEWMQl5CUkpZhYJKVk1dgBgAktQJKEGnpXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNy0xMFQwNToyMzo0NyswMDowMBflCh8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDctMTBUMDU6MjM6NDcrMDA6MDBmuLKjAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA3LTEwVDA1OjI0OjA2KzAwOjAw8UyNSwAAAABJRU5ErkJggg==',
        tags: ['Laravel', 'Inertia', 'React', 'Tailwind', 'MySQL'],
        url: 'https://github.com/bymaul/laravel-ecommerce',
    },
    {
        name: 'sistem-penjualan',
        image: '/images/projects/sistem-penjualan.png',
        placeholder:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAMAAADXEh96AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAABvUExURbfG2+Hs6JSmz7HB2b7N3sjW4dLf5Nrn5pmu28LP5Nfg6t3m7OLq7d/p62uI2NDZ8fj4+vb4+/X2+ejt8l17z9DZ8vr7/ff4/Pf4+uzv83qRy6u528HL4cXP4svV5crU4pOlz5ep0J6w06e41v///+ql+7wAAAAEdFJOU/7+/v66Skr8AAAAAWJLR0QktAb5mQAAAAd0SU1FB+cHCgUYBne7QmkAAAAySURBVAjXY2BgYWVjZ2Tg4OTi5uFl4OMXEBQSZhARFROXkGSQkpaRlZNnYFJQVFJmBgAmqQJ3d8PBLAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNy0xMFQwNToyMzo0NyswMDowMBflCh8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDctMTBUMDU6MjM6NDcrMDA6MDBmuLKjAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA3LTEwVDA1OjI0OjA2KzAwOjAw8UyNSwAAAABJRU5ErkJggg==',
        tags: ['Laravel', 'Bootstrap', 'jQuery', 'MySQL'],
        url: 'https://github.com/bymaul/sistem-penjualan',
    },
];

export default projects;
