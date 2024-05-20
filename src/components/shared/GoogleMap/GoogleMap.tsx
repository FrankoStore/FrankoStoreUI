"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMediaQuery } from "usehooks-ts";

const defaultMapContainerStyle = {
    width: "100%",
    borderRadius: "15px",
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
    const islargeScreen = useMediaQuery("(min-width: 1024px)");

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={{
                    ...defaultMapContainerStyle,
                    height: islargeScreen ? "500px" : "380px",
                }}
                center={center}
                zoom={mapZoom}
                options={mapOptions}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};
