'use client';

import Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { Map, MapRef } from 'react-map-gl/mapbox';

const MAX_ZOOM = 8;
const MIN_ZOOM = 3;
const INITIAL_VIEW_STATE = { latitude: -7.7962967, longitude: 110.3667211, zoom: MAX_ZOOM };
const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function LocationCard() {
    const [currentZoom, setCurrentZoom] = useState(MAX_ZOOM);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const mapRef = useRef<MapRef>(null);
    const { theme } = useTheme();

    const handleZoom = (zoomIn: boolean) => {
        setCurrentZoom((prev) => {
            const newZoom = prev + (zoomIn ? 1 : -1);
            if (newZoom >= MIN_ZOOM && newZoom <= MAX_ZOOM) {
                zoomIn ? mapRef.current?.zoomIn() : mapRef.current?.zoomOut();
                return newZoom;
            }
            return prev;
        });
    };

    const mapStyle = `mapbox://styles/mapbox/${theme === 'dark' ? 'dark-v11' : 'streets-v12'}`;

    return (
        <Card className='relative size-full overflow-hidden'>
            <Map
                mapboxAccessToken={mapboxToken}
                mapStyle={mapStyle}
                ref={mapRef}
                scrollZoom={false}
                dragPan={false}
                doubleClickZoom={false}
                attributionControl={false}
                dragRotate={false}
                onLoad={() => setIsMapLoaded(true)}
                initialViewState={INITIAL_VIEW_STATE}
                maxZoom={MAX_ZOOM}
                minZoom={MIN_ZOOM}>
                {isMapLoaded ? (
                    <div className='absolute inset-x-4 bottom-4 flex items-center justify-between'>
                        <Button isVisible={currentZoom > MIN_ZOOM} onClick={() => handleZoom(false)}>
                            <FaMinus />
                        </Button>
                        <Button isVisible={currentZoom < MAX_ZOOM} onClick={() => handleZoom(true)}>
                            <FaPlus />
                        </Button>
                    </div>
                ) : (
                    <div className='absolute inset-0 size-full bg-white/20 backdrop-blur-md animate-pulse dark:bg-black/20' />
                )}
            </Map>
        </Card>
    );
}

function Button({
    isVisible,
    ...props
}: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement> & { isVisible: boolean }>) {
    return (
        <button
            className={cn(
                'cancel-drag flex size-10 items-center justify-center rounded-full shadow-lg transition-all duration-300',
                // Glassy button style floating over the map
                'bg-white/60 text-neutral-800 backdrop-blur-md hover:bg-white/90 dark:bg-neutral-900/60 dark:text-white dark:hover:bg-neutral-900/90',
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
            type='button'
            {...props}
        />
    );
}
