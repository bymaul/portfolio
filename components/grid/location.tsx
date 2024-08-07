'use client';

import { useTheme } from 'next-themes';
import { useRef, useState, useCallback } from 'react';
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

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Location() {
    const [currentZoom, setCurrentZoom] = useState(MAX_ZOOM);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const mapRef = useRef<MapRef>(null);
    const { theme } = useTheme();

    const handleZoom = useCallback(
        (zoomIn: boolean) => {
            if (isButtonDisabled) return;

            setCurrentZoom((prevZoom) => {
                const newZoom = prevZoom + (zoomIn ? 1 : -1);
                if (newZoom >= MIN_ZOOM && newZoom <= MAX_ZOOM) {
                    zoomIn
                        ? mapRef.current?.zoomIn()
                        : mapRef.current?.zoomOut();
                    setIsButtonDisabled(true);
                    setTimeout(() => setIsButtonDisabled(false), 300);
                    return newZoom;
                }
                return prevZoom;
            });
        },
        [isButtonDisabled]
    );

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
                antialias={true}
                onLoad={() => setIsMapLoaded(true)}
                initialViewState={INITIAL_VIEW_STATE}
                maxZoom={MAX_ZOOM}
                minZoom={MIN_ZOOM}>
                {isMapLoaded && (
                    <div className='absolute inset-x-3 bottom-3 flex items-center justify-between'>
                        <ZoomButton
                            isVisible={currentZoom > MIN_ZOOM}
                            onClick={() => handleZoom(false)}
                            icon={<FaMinus />}
                            label='Zoom Out'
                        />
                        <ZoomButton
                            isVisible={currentZoom < MAX_ZOOM}
                            onClick={() => handleZoom(true)}
                            icon={<FaPlus />}
                            label='Zoom In'
                        />
                    </div>
                )}
            </Map>
        </Card>
    );
}

interface ZoomButtonProps {
    isVisible: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}

const ZoomButton: React.FC<ZoomButtonProps> = ({
    isVisible,
    onClick,
    icon,
    label,
}) => (
    <Button
        className={isVisible ? 'cancel-drag' : 'invisible'}
        aria-label={label}
        type='button'
        onClick={onClick}>
        {icon}
    </Button>
);
