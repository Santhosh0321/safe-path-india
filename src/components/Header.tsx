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
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-between items-center gap-2 sm:gap-4">
        {/* Platform Title */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
          <div className="bg-gradient-hero p-1.5 sm:p-2 rounded-lg flex-shrink-0">
            <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary leading-tight">
              <span className="sm:hidden">Disaster Management</span>
              <span className="hidden sm:inline">Disaster Management Education Platform</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
              Learn. Prepare. Stay Safe.
            </p>
          </div>
        </div>

        {/* SOS Button */}
        <Button
          onClick={handleSOSClick}
          className="emergency-pulse gradient-emergency text-emergency-foreground font-bold px-3 sm:px-6 py-2 sm:py-3 shadow-emergency hover:shadow-emergency/50 transition-all duration-200 flex-shrink-0"
          size="sm"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
          <span className="text-xs sm:text-sm">🚨 SOS</span>
        </Button>
      </div>
    </header>
  );
};