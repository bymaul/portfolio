import Button from '@/components/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaX } from 'react-icons/fa6';

interface PostProps {
    params: { slug: string };
}

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: PostProps) => {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) return;

    const { title, description, date, url } = post;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: date,
            url: `${siteConfig.url}${url}`,
            authors: 'Maulana',
            images: siteConfig.image,
        },
        twitter: {
            title,
            description,
            images: siteConfig.image,
        },
        alternates: {
            canonical: `${siteConfig.url}${url}`,
        },
    };
};

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: ({ className, alt, ...props }) => (
        <Image className={cn('rounded-lg', className)} alt={alt} {...props} />
    ),
};

const PostPage = ({ params }: PostProps) => {
    const post = allPosts.find((post) => post.slug === params.slug);

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
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <header className='flex justify-center items-center pb-10'>
                <Button
                    as={Link}
                    className='inline-flex hover:scale-125 hover:mb-6'
                    href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Button>
            </header>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className='text-center'>
                <h1 className='text-3xl font-bold leading-relaxed'>
                    {post.title}
                </h1>
                <small className='text-gray-600 dark:text-gray-400 mt-2'>
                    <time dateTime={post.date}>
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>{' '}
                    • <span>{post.readingTime.text}</span>
                </small>
            </section>
            <article className='pt-8 prose dark:prose-invert'>
                <MDXContent components={mdxComponents} />
            </article>
        </>
    );
};

export default PostPage;
