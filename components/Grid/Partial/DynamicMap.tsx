'use client';

import { LatLngTuple } from 'leaflet';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import Button from '@/components/Button';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const center: LatLngTuple = [-7.789676, 110.363197];

const darkThemeUrl =
    'https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}';
const lightThemeUrl =
    'https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}';

const DynamicMap = () => {
    const [isZoomValue, setIsZoomValue] = useState(10);
    const mapRef = useRef<MapContainerProps | any>(null);

    const { resolvedTheme } = useTheme();

    return (
        <div className='relative w-full h-full'>
            <MapContainer
                ref={mapRef}
                className='w-full h-full'
                center={center}
                zoom={10}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}
                doubleClickZoom={false}
                dragging={false}
                tap={false}
                touchZoom={false}
                boxZoom={false}
                keyboard={false}>
                <TileLayer
                    url={
                        resolvedTheme === 'dark' ? darkThemeUrl : lightThemeUrl
                    }
                    maxZoom={10}
                    minZoom={5}
                    accessToken={process.env.NEXT_PUBLIC_JAWG_ACCESS_TOKEN}
                />
            </MapContainer>
            <div className='absolute bottom-3 left-3 right-3'>
                <Button
                    className={clsx(
                        isZoomValue === 5 ? 'hidden' : '',
                        'cancel-drag float-left'
                    )}
                    aria-label='Zoom Out'
                    type='button'
                    onClick={() => {
                        setIsZoomValue(isZoomValue - 1);
                        mapRef.current?.zoomOut();
                    }}>
                    <FaMinus />
                </Button>
                <Button
                    className={clsx(
                        isZoomValue === 10 ? 'hidden' : '',
                        'cancel-drag float-right'
                    )}
                    aria-label='Zoom In'
                    type='button'
                    onClick={() => {
                        setIsZoomValue(isZoomValue + 1);
                        mapRef.current?.zoomIn();
                    }}>
                    <FaPlus />
                </Button>
            </div>
        </div>
    );
};

export default DynamicMap;
