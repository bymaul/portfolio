import { allPosts } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../Button';
import Card from '../Card';

export default function Article() {
    const post = allPosts[0];

    return (
        <Card>
            <div className='h-full flex flex-col gap-6 justify-center p-6 md:py-6 md:px-10'>
                <h2 className='cancel-drag text-2xl font-semibold line-clamp-1'>
                    <Link href={post.url}>{post.title}</Link>
                </h2>
                <p className='line-clamp-1'>{post.excerpt}</p>
                <div className='inline-flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
                    <Button
                        as={Link}
                        className='cancel-drag px-4 py-2'
                        href={post.url}>
                        <FaArrowRight className=' group-hover:rotate-0 -rotate-45 transition-transform duration-300' />{' '}
                        Read More
                        <span className='sr-only'>{post.title}</span>
                    </Button>
                    <small>
                        <time dateTime={post.date} className='text-gray-400'>
                            {format(parseISO(post.date), 'LLL d, yy')}
                        </time>
                    </small>
                </div>
            </div>
        </Card>
    );
}
