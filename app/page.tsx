import Container from '@/components/Container';
import FooterLayout from '@/components/Layout/FooterLayout';
import GridLayout from '@/components/Layout/GridLayout';
import ThemeToggle from '@/components/ThemeToggle';
import { gridItems, lgLayout, mdLayout, smLayout } from '@/config/layouts';

export default function Home() {
    return (
        <>
            <header>
                <Container className='pt-9 flex justify-between items-center'>
                    <h1 className='invisible'>Maulana Ahmad Aji Triadi</h1>
                    <ThemeToggle />
                </Container>
            </header>
            <main>
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
