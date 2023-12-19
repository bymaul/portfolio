import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaX } from 'react-icons/fa6';

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) notFound();
    return { title: post.title };
};

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: ({ className, alt, ...props }) => (
        <Image className={cn('rounded-lg', className)} alt={alt} {...props} />
    ),
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );

    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <>
            <header className='flex justify-center items-center py-10'>
                <Button
                    as={Link}
                    className='inline-flex hover:scale-125 hover:mb-6'
                    href='/'>
                    <FaX />
                </Button>
            </header>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
                <time
                    dateTime={post.date}
                    className='mb-1 text-xs text-gray-500'>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <article className='py-8 prose dark:prose-invert mx-auto px-4'>
                <MDXContent components={mdxComponents} />
            </article>
        </>
    );
};

export default PostLayout;
