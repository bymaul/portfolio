import { MetadataRoute } from 'next';
import stacks from '@/data/stacks';

export default function sitemap(): MetadataRoute.Sitemap {
    const url = 'https://maul-portfolio.vercel.app';

    const routes = [''].map((route) => ({
        url: `${url}/${route}`,
        lastModified: new Date(),
    }));

    const stackSlugs = stacks.map((stack) => ({
        url: `${url}/stack/${stack.slug}`,
        lastModified: new Date(),
    }));

    return [...routes, ...stackSlugs];
}
