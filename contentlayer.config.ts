import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        excerpt: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
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
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, codeOptions]],
    },
});
