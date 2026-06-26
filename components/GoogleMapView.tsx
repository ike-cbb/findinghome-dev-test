"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

interface MapProperty {
  slug: string;
  title: string;
  community: string;
  googleMapLatLang?: string;
  heroImage: string;
  shortName: string;
  bedrooms: string;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 25.082405, lng: 55.236917 };

export default function GoogleMapView({
  properties,
  onPinClick,
}: {
  properties: MapProperty[];
  onPinClick?: (index: number) => void;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBkkxyyXPNGYDeCpb9ADQ6vfT3x4LdQRG0",
  });

  if (!isLoaded) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e5e7eb",
        }}
      />
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      {properties.map((p, i) => {
        if (!p.googleMapLatLang) return null;
        const [lat, lng] = p.googleMapLatLang.split(",").map((s) => s.trim());
        const position = { lat: Number(lat), lng: Number(lng) };
        const variantCount = p.bedrooms?.split("|").filter((b) => b.trim()).length || 1;
        const markerLabel = String(Math.min(variantCount, 6));
        return (
          <Marker
            key={p.slug}
            position={position}
            icon={{
              url: `/assets/markers/Marker_new_${markerLabel}.svg`,
              scaledSize: new window.google.maps.Size(40, 50),
            }}
            onClick={() => {
              if (onPinClick) {
                onPinClick(i);
              }
            }}
          />
        );
      })}
    </GoogleMap>
  );
}
