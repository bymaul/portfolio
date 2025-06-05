import Container from '@/components/ui/container';
import GridLayout from '@/components/grid/layout';
import { gridItems, layouts } from '@/config/grid';
import { siteConfig } from '@/config/site';
import GridItem from '@/components/grid/item';

export default function Home() {
    return (
        <>
            <Container as='header' className='flex items-center justify-between py-0'>
                <h1 className='hidden'>{siteConfig.title}</h1>
            </Container>
            <main className='py-8'>
                <GridLayout layouts={layouts}>
                    {gridItems.map((item) => (
                        <GridItem key={item.i} id={item.i} component={item.component} />
                    ))}
                </GridLayout>
            </main>
        </>
    );
}
