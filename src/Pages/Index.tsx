import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// UI components
import Layout from "@/components/ui/Layout";
import DestinationCard from "@/components/ui/DestinationCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Data
import { destinations, allStatesAndUTs } from "@/Data/destinations";

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setIsAuthenticated(auth);
  }, []);

  const destinationCountMap = destinations.reduce((map, d) => {
    map[d.state] = (map[d.state] || 0) + 1;
    return map;
  }, {} as Record<string, number>);

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesState = selectedState ? destination.state === selectedState : true;

    return matchesSearch && matchesState;
  });

  const showDestinations = selectedState || searchQuery.trim() !== "";

  return (
    <Layout>
      {/* 🏔️ Hero Section with Search */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-india-orange/10 via-white to-india-green/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-india-red to-india-maroon bg-clip-text text-transparent">
            Explore the Wonders of India
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-muted-foreground">
            Discover breathtaking landscapes, ancient temples, vibrant cultures, and unforgettable experiences across the Indian subcontinent.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              className="rounded-r-none"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="rounded-l-none">
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* 📍 Filtered Destination Cards */}
      {showDestinations && (
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {selectedState ? `${selectedState} Destinations` : "Search Results"}
            </h2>
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No destinations found.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedState(null);
                  }}
                >
                  Reset
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 🗺️ State Filter Section */}
      <section className="py-8 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Browse by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-center">
            {allStatesAndUTs.map((state) => {
              const count = destinationCountMap[state] || 0;
              const hasDestinations = count > 0;

              return (
                <Button
                  key={state}
                  size="sm"
                  variant={selectedState === state ? "default" : "outline"}
                  onClick={() => hasDestinations && setSelectedState(state)}
                  disabled={!hasDestinations}
                  className={`text-sm ${!hasDestinations ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {state}
                  <span className="ml-1 text-xs text-muted-foreground">({count})</span>
                </Button>
              );
            })}

            {selectedState && (
              <Button
                variant="ghost"
                className="text-sm text-red-600"
                onClick={() => setSelectedState(null)}
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Start Your Indian Adventure Today
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            From the snow-capped Himalayas to the tropical beaches of Kerala, India offers a journey like no other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-india-turquoise text-india-turquoise hover:bg-india-turquoise/10"
              onClick={() => navigate("/chat")}
            >
              Talk to Our Assistant
            </Button>

            {!isAuthenticated && (
              <>
                <Button size="lg" variant="ghost" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button size="lg" variant="ghost" onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
