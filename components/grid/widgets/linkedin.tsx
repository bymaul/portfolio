'use client';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa6';
import Anchor from '../../ui/anchor';
import Card from '../../ui/card';
import { useTheme } from 'next-themes';

export default function LinkedIn() {
    const { theme } = useTheme();
    return (
        <Card className='relative flex h-full flex-col items-center justify-center bg-[#0A66C2] dark:bg-neutral-800/70'>
            <div className='absolute bottom-3 left-3'>
                <Anchor className='cancel-drag' href='https://linkedin.com/in/maulana-ahmad' target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>LinkedIn</span>
                </Anchor>
            </div>
            {
                theme === 'dark' ? (
                    <FaLinkedin size='4rem' color='#0A66C2' />
                ) : (
                    <FaLinkedin size='4rem' color='white' />
                )
            }
        </Card>
    );
}
