'use client';

import Button from '@/components/Button';
import clsx from 'clsx';
import { LatLngTuple, Map } from 'leaflet';
import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const center: LatLngTuple = [-7.789676, 110.363197];
const defaultZoom: number = 11;

const darkThemeUrl =
    'https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}';
const lightThemeUrl =
    'https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}';

const DynamicMap = () => {
    const [isZoomValue, setIsZoomValue] = useState(defaultZoom);
    const mapRef = useRef<Map>(null);

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
                    maxZoom={defaultZoom}
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
                        isZoomValue === defaultZoom ? 'hidden' : '',
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
