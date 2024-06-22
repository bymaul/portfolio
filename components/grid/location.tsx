'use client';

import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Map, { MapRef } from 'react-map-gl';
import Button from '../button';
import Card from '../card';

const MAX_ZOOM = 10;
const MIN_ZOOM = 4;
const INITIAL_VIEW_STATE = {
    latitude: -7.7962967,
    longitude: 110.3667211,
    zoom: MAX_ZOOM,
};

const mapboxToken: string | undefined =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Location() {
    const [currentZoom, setCurrentZoom] = useState<number>(MAX_ZOOM);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

    const mapRef = useRef<MapRef>(null);

    const { theme } = useTheme();

    const handleZoom = (zoomIn: boolean) => {
        if (!isButtonDisabled) {
            setCurrentZoom((prevZoom) => prevZoom + (zoomIn ? 1 : -1));
            zoomIn ? mapRef.current?.zoomIn() : mapRef.current?.zoomOut();
            disableButton();
        }
    };

    const disableButton = () => {
        setIsButtonDisabled(true);
        setTimeout(() => setIsButtonDisabled(false), 300);
    };

    return (
        <Card className='relative size-full'>
            <Map
                mapboxAccessToken={mapboxToken}
                mapStyle={`mapbox://styles/mapbox/${theme === 'dark' ? 'dark-v11' : 'streets-v12'}`}
                ref={mapRef}
                scrollZoom={false}
                dragPan={false}
                doubleClickZoom={false}
                attributionControl={false}
                dragRotate={false}
                pitchWithRotate={false}
                touchZoomRotate={false}
                antialias={true}
                onLoad={() => setIsMapLoaded(true)}
                initialViewState={INITIAL_VIEW_STATE}
                maxZoom={MAX_ZOOM}
                minZoom={MIN_ZOOM}>
                {isMapLoaded && (
                    <div className='absolute inset-x-3 bottom-3 flex items-center justify-between'>
                        <Button
                            className={
                                currentZoom === MIN_ZOOM
                                    ? 'invisible'
                                    : 'cancel-drag'
                            }
                            aria-label='Zoom Out'
                            type='button'
                            onClick={() => handleZoom(false)}>
                            <FaMinus />
                        </Button>
                        <Button
                            className={
                                currentZoom === MAX_ZOOM
                                    ? 'invisible'
                                    : 'cancel-drag'
                            }
                            aria-label='Zoom In'
                            type='button'
                            onClick={() => handleZoom(true)}>
                            <FaPlus />
                        </Button>
                    </div>
                )}
            </Map>
        </Card>
    );
}
