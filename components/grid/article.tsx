import { getAllPosts } from '@/lib/posts';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function Article() {
    const post = getAllPosts()[0];

    console.log(post);

    return (
        <Card>
            <div className='h-full flex flex-col gap-6 justify-center p-6 md:py-6 md:px-10'>
                <h2 className='cancel-drag text-2xl font-semibold line-clamp-1'>
                    <Link href={`/posts/${post.slug}`}>
                        {post.metadata.title}
                    </Link>
                </h2>
                <p className='line-clamp-3 max-[1199px]:line-clamp-1 max-[799px]:line-clamp-3 max-[374px]:line-clamp-2'>
                    {post.metadata.description}
                </p>
                <div className='inline-flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
                    <Button
                        as={Link}
                        className='cancel-drag px-4 py-2'
                        href={`/posts/${post.slug}`}>
                        <FaArrowRight className=' group-hover:rotate-0 -rotate-45 transition-transform duration-300' />{' '}
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
