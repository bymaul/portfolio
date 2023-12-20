import { WEBSITE_HOST_URL } from '@/lib/constants';
import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
    const routes = [''].map((route) => ({
        url: `${WEBSITE_HOST_URL}${route}`,
        lastModified: new Date(),
    }));

    const posts = allPosts.map((post) => ({
        url: `${WEBSITE_HOST_URL}${post.url}`,
        lastModified: post.date,
    }));

    return [...routes, ...posts];
}
