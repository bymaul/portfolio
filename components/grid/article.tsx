import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function Article() {
    const post = getAllPosts()[0];

    return (
        <Card className='flex flex-col justify-center gap-6 p-6 md:px-10 md:py-6'>
            <h2
                className='cancel-drag truncate text-2xl font-semibold'
                title={post.metadata.title}>
                <Link href={`/posts/${post.slug}`}>{post.metadata.title}</Link>
            </h2>
            <p className='line-clamp-3 leading-relaxed max-[1199px]:line-clamp-1 max-[799px]:line-clamp-3 max-[374px]:line-clamp-2'>
                {post.metadata.description}
            </p>
            <div className='inline-flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between'>
                <Button
                    as={Link}
                    className='cancel-drag px-4 py-2'
                    href={`/posts/${post.slug}`}>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />{' '}
                    Read More
                    <span className='sr-only'>{post.metadata.title}</span>
                </Button>
                <small className='text-gray-600 dark:text-gray-400'>
                    {new Date(post.metadata.date).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </small>
            </div>
        </Card>
    );
}
