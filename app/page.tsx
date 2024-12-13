import Container from '@/components/ui/container';
import Grid from '@/components/ui/grid';
import { gridItems, layouts } from '@/config/grid';

export default function Home() {
    return (
        <>
            <Container as='header' className='flex items-center justify-between py-0'>
                <h1 className='hidden'>Maulana Ahmad Aji Triadi</h1>
            </Container>
            <main className='py-8'>
                <Grid lgLayout={layouts.lgLayout} mdLayout={layouts.mdLayout} smLayout={layouts.smLayout}>
                    {gridItems.map((item) => (
                        <div key={item.i}>{<item.component />}</div>
                    ))}
                </Grid>
            </main>
        </>
    );
}
