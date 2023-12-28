import Container from '@/components/Container';
import FooterLayout from '@/components/Layout/FooterLayout';
import GridLayout from '@/components/Layout/GridLayout';
import ThemeToggle from '@/components/ThemeToggle';
import { gridItems, lgLayout, mdLayout, smLayout } from '@/config/layouts';

export default function Home() {
    return (
        <>
            <header>
                <Container className='pt-10 pb-6 flex justify-end items-center'>
                    <div className='sr-only'>
                        <h1>Maulana Ahmad Aji Triadi</h1>
                    </div>
                    <ThemeToggle />
                </Container>
            </header>
            <main className='max-w-[1200px] mx-auto max-[1199px]:max-w-[800px] max-[799px]:max-w-[375px] max-[374px]:max-w-[320px] pb-8'>
                <GridLayout
                    lgLayout={lgLayout}
                    mdLayout={mdLayout}
                    smLayout={smLayout}>
                    {gridItems.map((item) => (
                        <div key={item.i}>{<item.component />}</div>
                    ))}
                </GridLayout>
            </main>
            <FooterLayout />
        </>
    );
}
