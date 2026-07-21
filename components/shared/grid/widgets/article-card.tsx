import Card from '@/components/ui/card';
import { getFeaturedPost } from '@/lib/mdx';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function ArticleCard() {
    const post = getFeaturedPost();

    if (!post) {
        return (
            <Card className='items-center justify-center p-6'>
                <p>No articles found.</p>
            </Card>
        );
    }

    return (
        <Card className='group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5'>
            <div className='relative z-10 flex h-full flex-col justify-between p-8 focus:outline-none'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400'>
                            Featured Post
                        </h3>
                        <Link
                            href={`/posts/${post.slug}`}
                            className='cancel-drag flex size-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:bg-blue-400/10 dark:text-blue-400 hover:bg-blue-500/20'
                            aria-label='Read article'>
                            <FaArrowRight
                                size='0.8rem'
                                className='-rotate-45 transition-transform duration-300 group-hover:rotate-0'
                            />
                        </Link>
                    </div>

                    <h2 className='font-pixelify-sans text-2xl font-bold leading-tight text-neutral-900 drop-shadow-sm dark:text-white'>
                        <Link
                            href={`/posts/${post.slug}`}
                            className='cancel-drag hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                            {post.metadata.title}
                        </Link>
                    </h2>
                    <p className='line-clamp-3 text-neutral-600 dark:text-neutral-400 pointer-events-none'>
                        {post.metadata.description}
                    </p>
                </div>

                <div className='mt-6 flex items-center'>
                    <span className='rounded-full border border-neutral-900/10 bg-neutral-900/5 px-4 py-1.5 text-xs font-medium text-neutral-600 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-neutral-300'>
                        {new Date(post.metadata.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </span>
                </div>
            </div>

            <div className='absolute -bottom-10 -right-10 z-0 size-40 rounded-full bg-blue-500/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-500/30 pointer-events-none' />
        </Card>
    );
}
