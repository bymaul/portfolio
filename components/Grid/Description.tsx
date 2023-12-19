import Image from 'next/image';
import profile from '@/public/profile.jpg';
import Card from '../Card';

export default function Description() {
    return (
        <Card>
            <div className='h-full p-6 md:py-6 md:px-10 flex flex-col gap-4 justify-center'>
                <div className='w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-full'>
                    <Image
                        src={profile}
                        alt='Maulana Ahmad Aji Triadi'
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <p>
                    I&apos;m{' '}
                    <span className='text-xl font-semibold'>Maulana</span>, a
                    developer from Yogyakarta, Indonesia. I&apos;m interested in
                    Laravel, Go, Node, React, and Product Designer.
                </p>
            </div>
        </Card>
    );
}
