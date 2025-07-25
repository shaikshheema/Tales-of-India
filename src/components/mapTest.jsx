
// src/components/MapTest.tsx
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapTest = () => {
    return (
        <MapContainer center={[0, 0]} zoom={2} className="h-screen w-screen">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
        </MapContainer>
    );
};

export default MapTest;
