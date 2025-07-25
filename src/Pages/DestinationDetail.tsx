import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/ui/Layout';
import YouTubeVideo from '@/components/ui/YoutubeVideo';
import DistanceMap from '@/components/ui/DestinationMap';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Info } from 'lucide-react';
import { destinations } from '@/Data/destinations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  useEffect(() => {
    if (!destination) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [destination, navigate]);

  if (!destination) return null;

  return (
    <Layout>
      <div className="relative">
        <div className="h-[50vh] relative overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 mb-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center gap-2 text-white/90 mb-4">
              <MapPin className="h-4 w-4" />
              <span>{destination.state}, India</span>
            </div>
            <Badge className="bg-india-orange hover:bg-india-orange">
              {destination.bestTimeToVisit}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Tabs defaultValue="overview">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
                <TabsTrigger value="attractions" className="text-sm">Attractions</TabsTrigger>
                <TabsTrigger value="video" className="text-sm">Video Tour</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-4 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed">{destination.description}</p>
                  <h3 className="flex items-center gap-2 font-bold text-xl mt-6">
                    <Calendar className="h-5 w-5 text-india-orange" />
                    Best Time to Visit
                  </h3>
                  <p>{destination.bestTimeToVisit}</p>
                </div>
              </TabsContent>

              <TabsContent value="attractions" className="pt-4 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-xl mb-4">
                    <Info className="h-5 w-5 text-india-orange" />
                    Top Attractions
                  </h3>
                  <div className="grid gap-4">
                    {destination.thingsToSee.map((attraction, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-india-saffron/20 flex items-center justify-center text-india-saffron font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{attraction}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="video" className="pt-4">
                {destination.videoId ? (
                  <YouTubeVideo
                    videoId={destination.videoId}
                    title={`Explore ${destination.name} - Video Tour`}
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No video tour available for this destination.
                  </p>
                )}
              </TabsContent>
            </Tabs>

            {destination.bookingInfo && (
              <div>
                <h3 className="text-xl font-bold mb-4">Booking Information</h3>
                <div className="bg-muted p-6 rounded-lg space-y-4">
                  {destination.bookingInfo.priceRange && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Price Range:</span>
                        <span>{destination.bookingInfo.priceRange}</span>
                      </div>
                      <Separator />
                    </>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Availability:</span>
                    <span>{destination.bookingInfo.availableDates}</span>
                  </div>
                  <Separator />

                  <div className="space-y-2">
                    <div className="font-medium">Ticket Options:</div>
                    <div className="grid gap-2">
                      {destination.bookingInfo.ticketTypes.map((ticket, index) => (
                        <div key={index} className="flex justify-between bg-background p-3 rounded-md">
                          <span>{ticket.name}</span>
                          <span className="font-medium">₹{ticket.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <DistanceMap destination={destination} />
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Not sure about this destination?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our AI travel assistant to get personalized recommendations based on your preferences.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate('/chat')}
              >
                Ask Travel Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationDetail;
