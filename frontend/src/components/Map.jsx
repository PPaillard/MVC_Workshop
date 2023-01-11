import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <div className="rounded-3xl border-8">
      <MapContainer center={[45.764043, 4.835659]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.7627835, 4.8439261]}>
          <Popup>
            <button type="button" onClick={() => {}}>
              Centre d'intervention Lyon Corneille <br /> 78 Rue Pierre
              Corneille, 69003 Lyon <br /> 45.7627835,4.8439261
            </button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
