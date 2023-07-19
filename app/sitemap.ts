import { MetadataRoute } from 'next';
import stacks from '@/data/stacks';

export default function sitemap(): MetadataRoute.Sitemap {
    const url = 'https://maul-portfolio.vercel.app';

    const stackSlugs = stacks.map((stack) => ({
        url: `${url}/stack/${stack.slug}`,
        lastModified: new Date(),
    }));

    const routes = ['', 'projects'].map((route) => ({
        url: `${url}/${route}`,
        lastModified: new Date(),
    }));

    return [...routes, ...stackSlugs];
}
