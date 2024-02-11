import Link from 'next/link';
import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import Button from '../button';
import Card from '../card';

export default function Github() {
    return (
        <Card className='bg-[#181717] dark:bg-[#181717]'>
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag'
                    href='https://github.com/bymaul/'
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                    <span className='sr-only'>Github</span>
                </Button>
            </div>
            <div className='h-full p-6 md:py-6 md:px-10 flex flex-col gap-4 justify-center items-center'>
                <FaGithub size='4rem' color='white' />
            </div>
        </Card>
    );
}
