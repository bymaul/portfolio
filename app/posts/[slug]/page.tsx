import { CustomMDX } from '@/components/mdx';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/posts';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';

interface PostProps {
    params: { slug: string };
}

export const generateStaticParams = async () =>
    getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: PostProps) => {
    const post = getAllPosts().find((post) => post.slug === params.slug);
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

const PostPage = ({ params }: PostProps) => {
    const post = getAllPosts().find((post) => post.slug === params.slug);

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
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className='text-center'>
                <h1 className='text-3xl font-bold leading-relaxed'>
                    {post.metadata.title}
                </h1>
                <small className='text-gray-600 dark:text-gray-400 mt-2'>
                    <time dateTime={post.metadata.date}>
                        {format(parseISO(post.metadata.date), 'LLLL d, yyyy')}
                    </time>
                </small>
            </section>
            <article className='py-8 prose dark:prose-invert'>
                <CustomMDX source={post.content} />
            </article>
        </>
    );
};

export default PostPage;
