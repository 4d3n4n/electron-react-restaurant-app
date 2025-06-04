// src/components/CustomGoogleMap.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './customGoogleMap.css';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = { lat: 35.6595096, lng: 139.723112 };

export default function CustomGoogleMap() {
    const [setInfoOpen] = useState(true);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    rotateControl: false,
                    scrollwheel: false,
                }}
            >
                <Marker
                    position={center}
                    onClick={() => setInfoOpen(true)}
                />
            </GoogleMap>
        </LoadScript>
    );
}
