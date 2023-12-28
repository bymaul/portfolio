import { siteConfig } from '@/config/site';
import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
    const routes = [''].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));

    const posts = allPosts.map((post) => ({
        url: `${siteConfig.url}${post.url}`,
        lastModified: post.date,
    }));

    return [...routes, ...posts];
}
