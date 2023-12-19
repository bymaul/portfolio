'use client';

import Container from '@/components/Container';
import GridLayout from '@/components/Layout/GridLayout';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
    return (
        <>
            <header>
                <Container className='pt-10 pb-6 flex justify-end items-center'>
                    <ThemeToggle />
                </Container>
            </header>
            <main className='max-w-[1200px] mx-auto max-[1199px]:max-w-[800px] max-[799px]:max-w-[375px] max-[374px]:max-w-[320px] pb-8'>
                <GridLayout />
            </main>
        </>
    );
}
