import Container from '@/components/container';
import FooterLayout from '@/components/layout/footer-layout';
import GridLayout from '@/components/layout/grid-layout';
import ThemeToggle from '@/components/theme-toggle';
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
