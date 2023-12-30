import { siteConfig } from '@/config/site';
import { allPosts, allProjects } from 'contentlayer/generated';

export default async function sitemap() {
    const routes = [''].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));

    const posts = allPosts.map((post) => ({
        url: `${siteConfig.url}${post.url}`,
        lastModified: post.date,
    }));

    const projects = allProjects.map((projects) => ({
        url: `${siteConfig.url}${projects.url}`,
        lastModified: new Date(),
    }));

    return [...routes, ...posts, ...projects];
}
