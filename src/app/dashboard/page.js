"use client";

import Map, { Marker } from "react-map-gl";

export default function Dashboard() {
  return (
    <Map
      initialViewState={{
        longitude: 112.6326,
        latitude: -7.9666,
        zoom: 12,
      }}
      style={{ width: "100%", height: 500 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      {/* <Marker longitude={112.6326} latitude={-7.9666} color="red" /> */}
    </Map>
  );
}
