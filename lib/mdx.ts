import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface BaseMetadata {
    title: string;
    description: string;
}

interface PostMetadata extends BaseMetadata {
    date: string;
    featured?: boolean;
}

interface ProjectMetadata extends BaseMetadata {
    links: { name: string; url: string }[];
    images?: { i: string; url: string }[];
}

type MDXData<T extends BaseMetadata> = {
    metadata: T;
    slug: string;
    content: string;
};

function getMDXData<T extends BaseMetadata>(dir: string): MDXData<T>[] {
    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((dirent) => dirent.isFile() && path.extname(dirent.name) === '.mdx')
        .map((dirent) => {
            const filePath = path.join(dir, dirent.name);
            const fileContent = fs.readFileSync(filePath, 'utf-8');

            const { data, content } = matter(fileContent);

            return {
                metadata: data as T,
                slug: path.basename(dirent.name, path.extname(dirent.name)),
                content,
            };
        });
}

export const getAllPosts = (): MDXData<PostMetadata>[] => {
    const posts = getMDXData<PostMetadata>(path.join(process.cwd(), 'content/posts'));

    return posts.sort((a, b) => {
        if (!a.metadata.date || !b.metadata.date) return 0;
        return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    });
};

export const getFeaturedPost = (): MDXData<PostMetadata> | null => {
    const posts = getAllPosts();
    return posts.findLast((post) => post.metadata.featured) || null;
};

export const getAllProjects = (): MDXData<ProjectMetadata>[] =>
    getMDXData<ProjectMetadata>(path.join(process.cwd(), 'content/projects'));

export const getLatestProject = (): MDXData<ProjectMetadata> | null => {
    const projects = getAllProjects();
    return projects.length > 0 ? projects[0] : null;
};
