import React, { useState, useEffect } from 'react';
import Layout from '@/components/ui/Layout';
import { destinations } from '@/Data/destinations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet marker issue with Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type LatLng = { lat: number; lng: number };

const MapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<LatLng | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error("Geolocation error:", error); // Debug log
        // Fallback to Mumbai
        setUserLocation({ lat: 19.0760, lng: 72.8777 });
      }
    );
  }, []);

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDestinationClick = (id: string) => {
    setSelectedDestination(id);
  };

  return (
    <Layout>
      <div className="container max-w-6xl py-8">
        <h1 className="text-3xl font-bold mb-6">Explore Destinations Map</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" aria-label="Search">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How to use the map</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Click on a destination to view its details</li>
                <li>• See the calculated distance from your location</li>
                <li>• Find the best route to your destination</li>
              </ul>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {filteredDestinations.map(destination => (
                <Card
                  key={destination.id}
                  className={`cursor-pointer transition-colors ${selectedDestination === destination.id
                    ? 'border-india-orange bg-india-orange/5'
                    : ''
                    }`}
                  onClick={() => handleDestinationClick(destination.id)}
                >
                  <CardContent className="p-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{destination.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {destination.state}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-india-turquoise hover:text-india-turquoise hover:bg-india-turquoise/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/destination/${destination.id}`);
                      }}
                    >
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-2/3 h-[600px] bg-muted rounded-lg overflow-hidden relative">
            {userLocation ? (
              <MapContainer
                center={[userLocation.lat, userLocation.lng] as LatLngExpression}
                zoom={5}
                scrollWheelZoom={true}
                className="h-full w-full z-10"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[userLocation.lat, userLocation.lng]}>
                  <Popup>You are here</Popup>
                </Marker>

                {filteredDestinations.map(destination => (
                  <Marker
                    key={destination.id}
                    position={[
                      destination.location.latitude,
                      destination.location.longitude
                    ]}
                    eventHandlers={{
                      click: () => handleDestinationClick(destination.id)
                    }}
                  >
                    <Popup>
                      <div className="text-sm">
                        <strong>{destination.name}</strong><br />
                        {destination.state}<br />
                        Distance: {calculateDistance(
                          userLocation.lat,
                          userLocation.lng,
                          destination.location.latitude,
                          destination.location.longitude
                        ).toFixed(1)} km
                        <Button
                          size="sm"
                          className="mt-2 bg-india-orange hover:bg-india-orange/90 w-full text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/destination/${destination.id}`);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Loading your location...
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Haversine formula to calculate distance
const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

export default MapPage;
