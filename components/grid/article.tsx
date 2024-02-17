import { getAllPosts } from '@/lib/mdx';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function Article() {
    const post = getAllPosts()[0];

    return (
        <Card>
            <div className='flex h-full flex-col justify-center gap-6 p-6 md:px-10 md:py-6'>
                <h2 className='cancel-drag line-clamp-1 text-2xl font-semibold'>
                    <Link href={`/posts/${post.slug}`}>
                        {post.metadata.title}
                    </Link>
                </h2>
                <p className='line-clamp-3 max-[1199px]:line-clamp-1 max-[799px]:line-clamp-3 max-[374px]:line-clamp-2'>
                    {post.metadata.description}
                </p>
                <div className='inline-flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between'>
                    <Button
                        as={Link}
                        className='cancel-drag px-4 py-2'
                        href={`/posts/${post.slug}`}>
                        <FaArrowRight className=' -rotate-45 transition-transform duration-300 group-hover:rotate-0' />{' '}
                        Read More
                        <span className='sr-only'>{post.metadata.title}</span>
                    </Button>
                    <small className='text-gray-600 dark:text-gray-400'>
                        {format(parseISO(post.metadata.date), 'LLL d, yyyy')}
                    </small>
                </div>
            </div>
        </Card>
    );
}
