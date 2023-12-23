import FooterLayout from '@/components/Layout/FooterLayout';
import GridLayout from '@/components/Layout/GridLayout';
import HeaderLayout from '@/components/Layout/HeaderLayout';
import { gridItems, lgLayout, mdLayout, smLayout } from '@/lib/layouts';

export default function Home() {
    return (
        <>
            <HeaderLayout />
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
