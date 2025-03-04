'use client';

import { cn } from '@/utils/lib';
import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Map, { MapRef } from 'react-map-gl';
import Card from '../ui/card';

const MAX_ZOOM = 8;
const MIN_ZOOM = 3;
const INITIAL_VIEW_STATE = {
    latitude: -7.7962967,
    longitude: 110.3667211,
    zoom: MAX_ZOOM,
};

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Location() {
    const [currentZoom, setCurrentZoom] = useState(MAX_ZOOM);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    const mapRef = useRef<MapRef>(null);

    const { theme } = useTheme();

    const handleZoom = (zoomIn: boolean) => {
        if (isButtonDisabled) return;

        setCurrentZoom((prevZoom) => {
            const newZoom = prevZoom + (zoomIn ? 1 : -1);
            if (newZoom >= MIN_ZOOM && newZoom <= MAX_ZOOM) {
                zoomIn ? mapRef.current?.zoomIn() : mapRef.current?.zoomOut();
                setIsButtonDisabled(true);
                setTimeout(() => setIsButtonDisabled(false), 300);
                return newZoom;
            }
            return prevZoom;
        });
    };

    const mapStyle = `mapbox://styles/mapbox/${theme === 'dark' ? 'dark-v11' : 'streets-v12'}`;

    return (
        <Card className='relative size-full'>
            <Map
                mapboxAccessToken={mapboxToken}
                mapStyle={mapStyle}
                ref={mapRef}
                scrollZoom={false}
                dragPan={false}
                doubleClickZoom={false}
                attributionControl={false}
                dragRotate={false}
                pitchWithRotate={false}
                touchZoomRotate={false}
                antialias
                reuseMaps
                onLoad={() => setIsMapLoaded(true)}
                initialViewState={INITIAL_VIEW_STATE}
                maxZoom={MAX_ZOOM}
                minZoom={MIN_ZOOM}>
                {isMapLoaded && (
                    <div className='absolute inset-x-3 bottom-3 flex items-center justify-between'>
                        <Button
                            isVisible={currentZoom > MIN_ZOOM}
                            onClick={() => handleZoom(false)}
                            aria-label='Zoom Out'>
                            <FaMinus />
                        </Button>
                        <Button
                            isVisible={currentZoom < MAX_ZOOM}
                            onClick={() => handleZoom(true)}
                            aria-label='Zoom In'>
                            <FaPlus />
                        </Button>
                    </div>
                )}
            </Map>
        </Card>
    );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isVisible: boolean;
}

function Button({ isVisible, ...props }: Readonly<ButtonProps>) {
    return (
        <button
            className={cn(
                'group inline-flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-white p-3 whitespace-nowrap transition-all duration-300',
                'ring-2 ring-gray-200/45 outline-hidden focus-within:ring-4 focus-within:outline-hidden hover:ring-4 dark:text-black dark:ring-gray-200/30',
                isVisible ? 'cancel-drag' : 'invisible'
            )}
            type='button'
            {...props}
        />
    );
}
