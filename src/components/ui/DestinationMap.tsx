import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Destination } from '@/Data/destinations';

interface DistanceMapProps {
  destination: Destination;
}

const DistanceMap: React.FC<DistanceMapProps> = ({ destination }) => {
  const [userLocation, setUserLocation] = useState<{lat: number; lng: number} | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  
  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to Mumbai if can't get location
          setUserLocation({
            lat: 19.0760,
            lng: 72.8777
          });
        }
      );
    }
  }, []);

  useEffect(() => {
    // Calculate distance when both locations are available
    if (userLocation && destination) {
      const calculatedDistance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        destination.location.latitude,
        destination.location.longitude
      );
      setDistance(`${calculatedDistance.toFixed(0)} km`);
    }
  }, [userLocation, destination]);

  // Function to calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return d;
  };
  
  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180);
  };

  // Create static map URL with markers
  const getMapUrl = () => {
    if (!userLocation) return '';
    
    // Using OpenStreetMap static map API (you would need to replace with a real API service)
    const zoom = 5;
    const width = 600;
    const height = 400;
    
    return `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=${width}&height=${height}&center=lonlat:${destination.location.longitude},${destination.location.latitude}&zoom=${zoom}&marker=lonlat:${destination.location.longitude},${destination.location.latitude};color:%23ff0000;size:large&apiKey=YourAPIKey`;
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-4 bg-india-maroon/10">
        <h3 className="font-semibold text-lg mb-2">Distance Map</h3>
        {distance && (
          <p className="text-sm mb-3">
            Distance from your location to {destination.name}: <strong>{distance}</strong>
          </p>
        )}
        <div className="aspect-video bg-gray-100 rounded-md overflow-hidden relative">
          {/* This would be replaced by an actual map with proper API key */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center p-6">
              <div className="text-india-maroon mb-2">Interactive Map</div>
              <p className="text-sm text-muted-foreground">
                Map showing distance from your location to {destination.name}
                <br />
                Coordinates: {destination.location.latitude}, {destination.location.longitude}
              </p>
              {distance && (
                <div className="mt-4 text-lg font-semibold">{distance}</div>
              )}
            </div>
          </div>
          
          {/* In a real implementation, you would use a maps component here */}
          {/* <img src={getMapUrl()} alt="Map" className="w-full h-full object-cover" /> */}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          *Please allow location access for accurate distance calculation.
        </p>
      </div>
    </Card>
  );
};

export default DistanceMap;
