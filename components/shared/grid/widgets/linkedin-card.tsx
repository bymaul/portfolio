import CustomLink from '@/components/ui/custom-link';
import Card from '@/components/ui/card';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa6';

export default function LinkedInCard() {
    return (
        <Card className='group flex h-full flex-col items-center justify-center bg-[#0A66C2]/10 transition-colors hover:bg-[#0A66C2]/20 dark:bg-[#0A66C2]/20 dark:hover:bg-[#0A66C2]/30'>
            <div className='absolute bottom-4 left-4'>
                <CustomLink
                    className='cancel-drag flex size-10 items-center justify-center rounded-full bg-white/30 text-[#0A66C2] backdrop-blur-md transition-all hover:bg-white/60 dark:bg-black/30 dark:text-white dark:hover:bg-black/50'
                    href='https://linkedin.com/in/maulana-ahmad'
                    target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>LinkedIn</span>
                </CustomLink>
            </div>
            <FaLinkedin size='4.5rem' className='text-[#0A66C2] drop-shadow-md dark:text-white/90' />
        </Card>
    );
}
