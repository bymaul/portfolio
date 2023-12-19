import { FaSpotify } from 'react-icons/fa6';
import NowPlaying from './Partial/NowPlaying';
import Card from '../Card';

export default function Spotify() {
    return (
        <Card>
            <div className='h-full p-6 md:py-6 md:px-10 flex flex-col gap-3 justify-between'>
                <FaSpotify size='3.5rem' color='#1DB954' />
                <NowPlaying />
            </div>
        </Card>
    );
}
