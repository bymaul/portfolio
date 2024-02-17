import fs from 'fs';
import path from 'path';

interface BaseMetadata {
    title: string;
    description: string;
}

interface PostMetadata extends BaseMetadata {
    date: string;
}

interface ProjectMetadata extends BaseMetadata {
    links: string;
    images?: string;
}

function parseFrontmatter<T extends BaseMetadata>(fileContent: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    let content = fileContent.replace(frontmatterRegex, '').trim();
    let frontMatterLines = frontMatterBlock.trim().split('\n');
    let metadata: Partial<T> = {};

    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1');
        metadata[key.trim() as keyof T] = value as T[keyof T];
    });

    return { metadata: metadata as T, content };
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile<T extends BaseMetadata>(filePath: string) {
    let rawContent = fs.readFileSync(filePath, 'utf-8');
    return parseFrontmatter<T>(rawContent);
}

function getMDXData<T extends BaseMetadata>(dir: string) {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        let { metadata, content } = readMDXFile<T>(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));
        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getAllPosts() {
    return getMDXData<PostMetadata>(path.join(process.cwd(), 'content/posts'));
}

export function getAllProjects() {
    return getMDXData<ProjectMetadata>(
        path.join(process.cwd(), 'content/projects')
    );
}
