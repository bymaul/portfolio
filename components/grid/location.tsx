'use client';

import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Map, { MapRef } from 'react-map-gl';
import Button from '../button';
import Card from '../card';

const maxZoom: number = 11;
const minZoom: number = 5;

export default function Location() {
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const [currentZoom, setCurrentZoom] = useState<number>(maxZoom);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const mapRef = useRef<MapRef>(null);

    const { resolvedTheme } = useTheme();

    const handleZoomIn = () => {
        if (!isButtonDisabled) {
            setCurrentZoom((prevZoom) => prevZoom + 1);
            mapRef.current?.zoomIn();
            disableButton();
        }
    };

    const handleZoomOut = () => {
        if (!isButtonDisabled) {
            setCurrentZoom((prevZoom) => prevZoom - 1);
            mapRef.current?.zoomOut();
            disableButton();
        }
    };

    const disableButton = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 300);
    };

    return (
        <Card className='relative'>
            <div className='size-full'>
                <Map
                    mapboxAccessToken={mapboxToken}
                    mapStyle={
                        resolvedTheme === 'dark'
                            ? 'mapbox://styles/mapbox/dark-v11?optimize=true'
                            : 'mapbox://styles/mapbox/streets-v12?optimize=true'
                    }
                    ref={mapRef}
                    scrollZoom={false}
                    dragPan={false}
                    doubleClickZoom={false}
                    attributionControl={false}
                    dragRotate={false}
                    pitchWithRotate={false}
                    touchZoomRotate={false}
                    antialias={true}
                    initialViewState={{
                        latitude: -7.7962967,
                        longitude: 110.3667211,
                        zoom: 10,
                    }}
                    maxZoom={10}
                    minZoom={4}>
                    <div className='absolute inset-x-3 bottom-3 flex items-center justify-between'>
                        <Button
                            className={
                                currentZoom === minZoom
                                    ? 'invisible'
                                    : 'cancel-drag'
                            }
                            aria-label='Zoom Out'
                            type='button'
                            onClick={handleZoomOut}>
                            <FaMinus />
                        </Button>
                        <Button
                            className={
                                currentZoom === maxZoom
                                    ? 'invisible'
                                    : 'cancel-drag'
                            }
                            aria-label='Zoom In'
                            type='button'
                            onClick={handleZoomIn}>
                            <FaPlus />
                        </Button>
                    </div>
                </Map>
            </div>
        </Card>
    );
}
