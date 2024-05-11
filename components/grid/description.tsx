import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../card';

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                <Image
                    src={profile}
                    alt='Maulana Ahmad Aji Triadi'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='text-balance leading-relaxed'>
                I&apos;m <span className='text-xl font-semibold'>Maulana</span>,
                a web developer from Yogyakarta, Indonesia.{' '}
                <span className='hidden md:inline'>
                    I&apos;m interested in Laravel, Go, Node, and React.
                </span>
            </p>
        </Card>
    );
}
