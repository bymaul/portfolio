import { getLatestPost } from '@/utils/mdx';
import { formatDate } from '@/utils/lib';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Anchor from '../../ui/anchor';
import Card from '../../ui/card';

export default function Article() {
    const post = getLatestPost();

    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='font-pixelify-sans truncate text-2xl' title={post.metadata.title}>
                <Link href={`/posts/${post.slug}`} className='cancel-drag'>
                    {post.metadata.title}
                </Link>
            </h2>
            <p className='line-clamp-3 leading-relaxed max-md:line-clamp-4 max-sm:line-clamp-2'>
                {post.metadata.description}
            </p>
            <div className='inline-flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between'>
                <Anchor className='cancel-drag px-4 py-2' href={`/posts/${post.slug}`}>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' /> Read
                    More
                    <span className='sr-only'>{post.metadata.title}</span>
                </Anchor>
                <small className='text-gray-600 dark:text-gray-400'>{formatDate(post.metadata.date)}</small>
            </div>
        </Card>
    );
}
