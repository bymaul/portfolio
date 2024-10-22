import { CustomMDX } from '@/components/mdx';
import Anchor from '@/components/ui/anchor';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaX } from 'react-icons/fa6';

import '@/styles/mdx.css';

interface Content {
    params: { slug: string };
}

export const generateStaticParams = async () =>
    getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: Content) => {
    const { slug } = await params;

    const post = getAllPosts().find((post) => post.slug === slug);
    if (!post) return;

    const { title, description, date } = post.metadata;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: date,
            url: `${siteConfig.url}/posts/${post.slug}`,
            authors: 'Maulana',
            images: siteConfig.image,
        },
        twitter: {
            title,
            description,
            images: siteConfig.image,
        },
        alternates: {
            canonical: `${siteConfig.url}/posts/${post.slug}`,
        },
    };
};

const PostPage = async ({ params }: Content) => {
    const { slug } = await params;

    const post = getAllPosts().find((post) => post.slug === slug);

    if (!post) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.metadata.title,
        description: post.metadata.description,
        datePublished: post.metadata.date,
        author: [
            {
                '@type': 'Person',
                name: 'Maulana',
                url: siteConfig.url,
            },
        ],
    };

    return (
        <div className='mx-auto max-w-prose px-4 py-10'>
            <Script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className='flex items-center justify-center pb-10'>
                <Anchor
                    className='inline-flex hover:mb-6 hover:scale-125'
                    href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Anchor>
            </header>
            <section className='text-center'>
                <h1 className='font-calistoga text-3xl leading-relaxed'>
                    {post.metadata.title}
                </h1>
                <small className='mt-2 text-gray-600 dark:text-gray-400'>
                    <time dateTime={post.metadata.date}>
                        {formatDate(post.metadata.date)}
                    </time>
                </small>
            </section>
            <article className='prose px-4 py-8 dark:prose-invert'>
                <CustomMDX source={post.content} />
            </article>
        </div>
    );
};

export default PostPage;
