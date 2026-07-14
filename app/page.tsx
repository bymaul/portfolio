import GridItem from '@/components/shared/grid/item';
import GridLayout from '@/components/shared/grid/layout';
import Container from '@/components/ui/container';
import { gridItems, layouts } from '@/config/grid';
import { siteConfig } from '@/config/site';

export default function Main() {
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
