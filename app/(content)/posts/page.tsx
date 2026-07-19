import GridLayout from '@/components/shared/grid/layout';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export const metadata = {
    title: 'Articles',
    description: 'My latest thoughts, tutorials, and insights.',
};

export default function PostsPage() {
    const posts = getAllPosts();

    const generateLayout = (itemsPerRow: number, itemWidth: number, itemHeight: number) => {
        return posts.map((_, i) => ({
            i: `post-${i}`,
            x: (i % itemsPerRow) * itemWidth,
            y: Math.floor(i / itemsPerRow) * itemHeight,
            w: itemWidth,
            h: itemHeight,
        }));
    };

    const layouts = {
        lg: generateLayout(2, 2, 1),
        md: generateLayout(2, 2, 1),
        sm: generateLayout(1, 2, 1),
    };

    return (
        <>
            <Container as='header' className='py-8'>
                <h1 className='font-pixelify-sans text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white'>
                    Articles
                </h1>
                <p className='text-neutral-600 dark:text-neutral-400'>
                    A collection of my latest thoughts, tutorials, and insights.
                </p>
            </Container>

            <main className='pb-12'>
                <GridLayout layouts={layouts}>
                    {posts.map((post, i) => (
                        <div key={`post-${i}`} className='h-full'>
                            <Card className='group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
                                <div className='relative z-10 flex flex-col h-full p-5 md:p-8 focus:outline-none'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <time className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'>
                                            {new Date(post.metadata.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </time>
                                    </div>

                                    <h2 className='font-pixelify-sans text-xl md:text-2xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white mb-2'>
                                        <Link
                                            href={`/posts/${post.slug}`}
                                            className='cancel-drag hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'>
                                            {post.metadata.title}
                                        </Link>
                                    </h2>

                                    <p className='line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400 grow pointer-events-none'>
                                        {post.metadata.description}
                                    </p>

                                    <div className='mt-6 flex items-center'>
                                        <Link
                                            href={`/posts/${post.slug}`}
                                            className='cancel-drag inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-black'>
                                            Read Article
                                        </Link>
                                    </div>
                                </div>

                                <div className='absolute -right-10 -bottom-10 z-0 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-500/20 pointer-events-none' />
                            </Card>
                        </div>
                    ))}
                </GridLayout>
            </main>
        </>
    );
}
