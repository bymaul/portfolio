import Button from '@/components/Button';
import { WEBSITE_HOST_URL } from '@/lib/constants';
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
    if (!post) return;

    const { title, description, date, url } = post;

    const meta = {
        images: `${WEBSITE_HOST_URL}/images/og-image.png`,
    };

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: date,
            url: `${WEBSITE_HOST_URL}${url}`,
            authors: 'Maulana',
            images: meta.images,
        },
        twitter: {
            title,
            description,
            images: meta.images,
        },
        alternates: {
            canonical: `${WEBSITE_HOST_URL}${url}`,
        },
    };
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: [
            {
                '@type': 'Person',
                name: 'Maulana',
                url: WEBSITE_HOST_URL,
            },
        ],
    };

    return (
        <>
            <header className='flex justify-center items-center py-10'>
                <Button
                    as={Link}
                    className='inline-flex hover:scale-125 hover:mb-6'
                    href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Button>
            </header>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
                <p className='text-xs text-gray-600 dark:text-gray-400 mt-2'>
                    <time dateTime={post.date}>
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>{' '}
                    • <span>{post.readingTime.text}</span>
                </p>
            </div>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className='py-8 prose dark:prose-invert mx-auto px-4'>
                <MDXContent components={mdxComponents} />
            </article>
        </>
    );
};

export default PostLayout;
