'use client';

import Button from '@/components/Button';
import { LatLngTuple, Map } from 'leaflet';
import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const center: LatLngTuple = [-7.7962967, 110.3667211];
const maxZoom: number = 11;
const minZoom: number = 5;

const darkThemeUrl =
    'https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}';
const lightThemeUrl =
    'https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}';

const DynamicMap = () => {
    const [isZoom, setIsZoom] = useState<number>(maxZoom);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const mapRef = useRef<Map>(null);

    const { resolvedTheme } = useTheme();

    const handleZoomIn = () => {
        if (!isButtonDisabled) {
            setIsZoom((prevZoom) => prevZoom + 1);
            mapRef.current?.zoomIn();
            disableButton();
        }
    };

    const handleZoomOut = () => {
        if (!isButtonDisabled) {
            setIsZoom((prevZoom) => prevZoom - 1);
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
        <div className='relative size-full'>
            <MapContainer
                ref={mapRef}
                className='size-full'
                center={center}
                zoom={maxZoom}
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
                    maxZoom={maxZoom}
                    minZoom={minZoom}
                    accessToken={
                        process.env.NEXT_PUBLIC_JAWG_ACCESS_TOKEN || ''
                    }
                />
            </MapContainer>
            <div className='absolute bottom-3 left-3 right-3 flex justify-between items-center'>
                <Button
                    className={isZoom === minZoom ? 'invisible' : 'cancel-drag'}
                    aria-label='Zoom Out'
                    type='button'
                    disabled={isButtonDisabled}
                    onClick={handleZoomOut}>
                    <FaMinus />
                </Button>
                <Button
                    className={isZoom === maxZoom ? 'invisible' : 'cancel-drag'}
                    aria-label='Zoom In'
                    type='button'
                    disabled={isButtonDisabled}
                    onClick={handleZoomIn}>
                    <FaPlus />
                </Button>
            </div>
        </div>
    );
};

export default DynamicMap;
