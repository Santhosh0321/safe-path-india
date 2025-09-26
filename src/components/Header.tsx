import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const { toast } = useToast();

  const handleSOSClick = () => {
    // In real app, this would initiate emergency call to 108 (India Emergency Number)
    if (typeof window !== "undefined" && window.location.protocol === "tel:") {
      window.location.href = "tel:108";
    } else {
      toast({
        title: "🚨 Emergency Alert",
        description: "Emergency Helpline: 108 | Police: 100 | Fire: 101 | Ambulance: 102",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="w-full bg-background border-b-2 border-primary shadow-card">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Platform Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <AlertTriangle className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Disaster Management Education Platform
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              Learn. Prepare. Stay Safe.
            </p>
          </div>
        </div>

        {/* SOS Button */}
        <Button
          onClick={handleSOSClick}
          className="emergency-pulse gradient-emergency text-emergency-foreground font-bold px-6 py-3 shadow-emergency hover:shadow-emergency/50 transition-all duration-200"
          size="lg"
        >
          <Phone className="h-5 w-5 mr-2" />
          🚨 SOS
        </Button>
      </div>
    </header>
  );
};