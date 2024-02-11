import dynamic from 'next/dynamic';
import Card from '../../card';

const DynamicMap = dynamic(
    () => import('@/components/grid/location/dynamic-map'),
    {
        ssr: false,
    }
);

export default function Location() {
    return (
        <Card className='relative'>
            <DynamicMap />
        </Card>
    );
}
