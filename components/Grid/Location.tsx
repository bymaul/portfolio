import dynamic from 'next/dynamic';
import Card from '../Card';

const DynamicMap = dynamic(
    () => import('@/components/Grid/Partial/DynamicMap'),
    {
        ssr: false,
    }
);

export default function Map() {
    return (
        <Card className='relative bg-white'>
            <DynamicMap />
        </Card>
    );
}
