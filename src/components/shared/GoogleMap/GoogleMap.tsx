"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";

const defaultMapContainerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "15px 0px 0px 15px",
};

const center = {
    lat: 49.84025164849742,
    lng: 24.02215233976824,
};

const mapZoom = 17;

const mapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "roadmap",
};

export const GoogleMapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={center}
                zoom={mapZoom}
                options={mapOptions}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};
