import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Cloud, MapPin, Thermometer, Wind, Eye, Droplets } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Weather = () => {
  const { toast } = useToast();
  const [city, setCity] = useState("Chandigarh");

  // Mock weather data - in real app would fetch from weather API
  const currentWeather = {
    city: "Chandigarh, Punjab",
    temperature: "28°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "12 km/h",
    visibility: "10 km",
    forecast: [
      { day: "Today", high: "32°C", low: "24°C", condition: "Sunny", icon: "☀️" },
      { day: "Tomorrow", high: "29°C", low: "22°C", condition: "Cloudy", icon: "☁️" },
      { day: "Friday", high: "26°C", low: "20°C", condition: "Rain", icon: "🌧️" },
      { day: "Saturday", high: "24°C", low: "18°C", condition: "Heavy Rain", icon: "⛈️" },
      { day: "Sunday", high: "27°C", low: "19°C", condition: "Partly Cloudy", icon: "⛅" },
    ]
  };

  const alerts = [
    {
      type: "warning",
      title: "Heavy Rain Alert",
      description: "Heavy rainfall expected in Punjab region from Friday evening. Risk of flooding in low-lying areas.",
      urgency: "Medium",
    },
    {
      type: "watch", 
      title: "Thunder Storm Watch",
      description: "Thunderstorm activity possible over weekend. Stay indoors during severe weather.",
      urgency: "Low",
    }
  ];

  const handleLocationWeather = () => {
    toast({
      title: "Getting Location Weather",
      description: "Fetching weather data for your current location...",
    });
  };

  const handleSearchCity = () => {
    toast({
      title: "Weather Update",
      description: `Getting weather information for ${city}...`,
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Weather & Disaster Alerts
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time weather information and disaster warnings for Punjab region
        </p>
      </div>

      {/* Weather Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-emergency">⚠️ Active Weather Alerts</h2>
          {alerts.map((alert, index) => (
            <Card key={index} className={`shadow-card border-2 ${
              alert.urgency === "High" ? "border-emergency" :
              alert.urgency === "Medium" ? "border-warning" :
              "border-primary/30"
            }`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${
                  alert.urgency === "High" ? "text-emergency" :
                  alert.urgency === "Medium" ? "text-warning" :
                  "text-primary"
                }`}>
                  <AlertTriangle className="h-5 w-5" />
                  <span>{alert.title}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    alert.urgency === "High" ? "bg-emergency/10 text-emergency" :
                    alert.urgency === "Medium" ? "bg-warning/10 text-warning" :
                    "bg-primary/10 text-primary"
                  }`}>
                    {alert.urgency} Priority
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{alert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Location & Search */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Weather Location</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter city name (e.g., Mumbai, Delhi)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mb-2"
              />
            </div>
            <Button onClick={handleSearchCity} className="gradient-hero">
              Search
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLocationWeather}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Current Location
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Weather */}
      <Card className="shadow-hero">
        <CardHeader>
          <CardTitle className="text-2xl">{currentWeather.city}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">
                {currentWeather.temperature}
              </div>
              <p className="text-lg text-muted-foreground">{currentWeather.condition}</p>
              <div className="text-8xl">☁️</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Droplets className="h-5 w-5 text-primary" />
                <span className="font-medium">Humidity:</span>
                <span>{currentWeather.humidity}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wind className="h-5 w-5 text-primary" />
                <span className="font-medium">Wind Speed:</span>
                <span>{currentWeather.windSpeed}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-primary" />
                <span className="font-medium">Visibility:</span>
                <span>{currentWeather.visibility}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5-Day Forecast */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>5-Day Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {currentWeather.forecast.map((day, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="font-medium mb-2">{day.day}</p>
                  <div className="text-4xl mb-2">{day.icon}</div>
                  <p className="text-sm text-muted-foreground mb-2">{day.condition}</p>
                  <div className="text-sm">
                    <span className="font-bold">{day.high}</span>
                    <span className="text-muted-foreground"> / {day.low}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disaster Preparedness Tips */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🌦️</span>
            <span>Weather-Related Safety Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-warning">During Heavy Rain:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Avoid driving through flooded roads</li>
                <li>• Stay away from electrical lines and poles</li>
                <li>• Keep emergency supplies ready</li>
                <li>• Monitor weather updates regularly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-emergency">During Thunderstorms:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Stay indoors and avoid open areas</li>
                <li>• Unplug electrical appliances</li>
                <li>• Avoid using phones during lightning</li>
                <li>• Keep windows and doors closed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Weather Contacts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>📞</span>
            <span>Weather Emergency Contacts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-emergency/10 rounded-lg">
              <h4 className="font-semibold text-emergency">Emergency Services</h4>
              <p className="text-2xl font-bold">108</p>
              <p className="text-sm text-muted-foreground">All emergencies</p>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold text-primary">Weather Dept.</h4>
              <p className="text-2xl font-bold">1588</p>
              <p className="text-sm text-muted-foreground">Weather updates</p>
            </div>
            <div className="text-center p-4 bg-warning/10 rounded-lg">
              <h4 className="font-semibold text-warning">Disaster Control</h4>
              <p className="text-2xl font-bold">1070</p>
              <p className="text-sm text-muted-foreground">Disaster helpline</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Weather;