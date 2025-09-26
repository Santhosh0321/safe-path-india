import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Map = () => {
  const { toast } = useToast();

  const shelters = [
    {
      name: "Punjab University Emergency Shelter",
      address: "Sector 14, Chandigarh, Punjab",
      capacity: "500 people",
      contact: "0172-2534531",
      distance: "2.3 km",
    },
    {
      name: "Government College Shelter Point",
      address: "Sector 11, Chandigarh, Punjab", 
      capacity: "300 people",
      contact: "0172-2740105",
      distance: "3.1 km",
    },
    {
      name: "Community Center Safe Zone",
      address: "Sector 17, Chandigarh, Punjab",
      capacity: "200 people", 
      contact: "0172-2701640",
      distance: "4.5 km",
    },
  ];

  const handleGetDirections = (shelter: typeof shelters[0]) => {
    toast({
      title: "Opening Directions",
      description: `Getting directions to ${shelter.name}`,
    });
    // In a real app, this would open Google Maps or similar
  };

  const handleCallShelter = (phone: string) => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Emergency Shelter & Safety Map
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Locate nearby emergency shelters, safe routes, and emergency services in Punjab region
        </p>
      </div>

      {/* Map Placeholder */}
      <Card className="shadow-hero">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Interactive Safety Map</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto" />
              <div>
                <p className="text-lg font-medium text-muted-foreground">
                  Interactive Map Loading...
                </p>
                <p className="text-sm text-muted-foreground">
                  Shows nearby shelters, hospitals, and safe routes
                </p>
              </div>
              <Button className="gradient-hero">
                <Navigation className="mr-2 h-4 w-4" />
                Enable Location Services
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Alert */}
      <Card className="shadow-card border-emergency/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-emergency">
            <AlertTriangle className="h-5 w-5" />
            <span>Emergency Protocol</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-emergency/5 p-4 rounded-lg">
            <p className="font-medium mb-2">In case of immediate danger:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Call emergency services (108) immediately</li>
              <li>Move to the nearest designated shelter</li>
              <li>Follow evacuation routes marked in green on the map</li>
              <li>Stay updated through official channels</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Shelter List */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nearby Emergency Shelters
        </h2>
        <div className="grid gap-6">
          {shelters.map((shelter, index) => (
            <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{shelter.name}</CardTitle>
                    <p className="text-muted-foreground flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{shelter.address}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{shelter.distance}</p>
                    <p className="text-xs text-muted-foreground">away</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <p className="text-sm font-medium">Capacity</p>
                      <p className="text-sm text-muted-foreground">{shelter.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">{shelter.contact}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-success" />
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <p className="text-sm text-success">Available 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleGetDirections(shelter)}
                    className="gradient-hero flex-1"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleCallShelter(shelter.contact)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Legend */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Map Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-sm">Safe evacuation routes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <span className="text-sm">Emergency shelters</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-emergency rounded-full"></div>
                <span className="text-sm">High-risk zones</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🏥</span>
                <span className="text-sm">Hospitals & medical centers</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">🚒</span>
                <span className="text-sm">Fire stations</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">👮</span>
                <span className="text-sm">Police stations</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Map;