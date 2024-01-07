import {
    defineDocumentType,
    defineNestedType,
    makeSource,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/${post._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            resolve: (post) =>
                post._raw.flattenedPath.split('/').slice(1).join('/'),
        },
        readingTime: {
            type: 'json',
            resolve: (doc) => readingTime(doc.body.raw),
        },
    },
}));

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        links: { type: 'json', required: true },
        images: { type: 'json' },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/${post._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            resolve: (post) =>
                post._raw.flattenedPath.split('/').slice(1).join('/'),
        },
    },
}));

const codeOptions = {
    theme: 'github-dark',
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    onVisitLine(node: { children: string | any[] }) {
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },
};

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post, Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, codeOptions]],
    },
});
