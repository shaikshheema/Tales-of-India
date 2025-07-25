import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Video } from "lucide-react";
import { Destination } from "@/Data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Card className="overflow-hidden group transition-transform hover:shadow-lg">
      {/* Image and overlay */}
      <div className="relative">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold">{destination.name}</h3>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <MapPin className="h-3 w-3" />
            <span>{destination.state}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {destination.shortDescription}
        </p>
        {destination.bookingInfo?.priceRange && (
          <p className="text-xs mt-2 text-muted-foreground">
            From <strong>{destination.bookingInfo.priceRange}</strong>
          </p>
        )}
      </CardContent>

      {/* Footer with buttons */}
      <CardFooter className="p-4 pt-0 flex flex-wrap justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          className="border-india-turquoise text-india-turquoise hover:bg-india-turquoise/10"
          asChild
        >
          <Link to={`/destination/${destination.id}`}>View Details</Link>
        </Button>

        {destination.videoId && (
          <a
            href={`https://www.youtube.com/watch?v=${destination.videoId.replace("v=", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 hover:underline transition"
            aria-label={`Watch video about ${destination.name}`}
          >
            <Video className="w-4 h-4 mr-1" />
            Watch Video
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
