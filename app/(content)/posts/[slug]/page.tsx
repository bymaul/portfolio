import { CustomMDX } from '@/components/mdx/mdx';
import CustomLink from '@/components/ui/custom-link';
import Card from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaX } from 'react-icons/fa6';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () => getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
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
            images: siteConfig.ogImage,
        },
        twitter: { title, description, images: siteConfig.ogImage },
        alternates: { canonical: `${siteConfig.url}/posts/${post.slug}` },
    };
};

const PostPage = async ({ params }: { params: Params }) => {
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
                name: siteConfig.author,
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <header className='sticky top-6 z-50 flex items-center justify-center'>
                <CustomLink className='size-12 rounded-full p-0 shadow-xl backdrop-blur-xl' href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </CustomLink>
            </header>

            <main className='mx-auto max-w-4xl px-4 py-12'>
                <Script
                    id='json-ld'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Card className='h-auto p-8 md:p-12'>
                    <section className='border-b border-neutral-200/50 pb-10 text-center dark:border-white/10'>
                        <h1 className='font-pixelify-sans text-4xl leading-relaxed text-neutral-900 md:text-5xl dark:text-white'>
                            {post.metadata.title}
                        </h1>
                        <p className='mt-6 text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400'>
                            <time dateTime={post.metadata.date}>{formatDate(post.metadata.date)}</time>
                        </p>
                    </section>

                    <article className='prose prose-neutral prose-lg dark:prose-invert mx-auto max-w-none pt-10'>
                        <CustomMDX source={post.content} />
                    </article>
                </Card>
            </main>
        </>
    );
};

export default PostPage;
