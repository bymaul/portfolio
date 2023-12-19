import Link from 'next/link';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa6';
import Card from '../Card';
import Button from '../Button';

export default function LinkedIn() {
    return (
        <Card className='bg-[#0A66C2] dark:bg-[#0A66C2]'>
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag'
                    href='https://linkedin.com/in/maulana-ahmad'
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                    <span className='sr-only'>LinkedIn</span>
                </Button>
            </div>
            <div className='h-full p-6 md:py-6 md:px-10 flex flex-col gap-4 justify-center items-center'>
                <FaLinkedin size='4rem' color='white' />
            </div>
        </Card>
    );
}
