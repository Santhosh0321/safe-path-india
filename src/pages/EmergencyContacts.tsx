import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Copy, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emergencyNumbers = [
  {
    category: "Primary Emergency Services",
    contacts: [
      { name: "Emergency Helpline", number: "108", description: "All emergencies (Police, Fire, Medical)" },
      { name: "Police", number: "100", description: "Crime, law & order issues" },
      { name: "Fire Brigade", number: "101", description: "Fire emergencies & rescue operations" },
      { name: "Ambulance", number: "102", description: "Medical emergencies & patient transport" },
    ]
  },
  {
    category: "Disaster Management",
    contacts: [
      { name: "National Disaster Response Force", number: "011-26701700", description: "Natural disaster response" },
      { name: "State Emergency Operations Center", number: "0172-2864600", description: "Punjab disaster coordination" },
      { name: "District Collector (Emergency)", number: "0172-2740362", description: "Local disaster management" },
    ]
  },
  {
    category: "Health Services",
    contacts: [
      { name: "Medical Helpline", number: "104", description: "Health advice & consultation" },
      { name: "AIDS Helpline", number: "1097", description: "HIV/AIDS information & support" },
      { name: "Mental Health Helpline", number: "1056", description: "Mental health support & counseling" },
    ]
  },
  {
    category: "Punjab Specific Services",
    contacts: [
      { name: "Punjab Police Control Room", number: "0172-2740001", description: "Punjab state police headquarters" },
      { name: "Chandigarh Emergency", number: "0172-2749251", description: "Chandigarh administration emergency" },
      { name: "Punjab Medical Emergency", number: "0172-2864600", description: "State medical emergency coordination" },
    ]
  },
];

const EmergencyContacts = () => {
  const { toast } = useToast();

  const handleCall = (number: string, name: string) => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${number}`;
    }
    toast({
      title: `Calling ${name}`,
      description: `Dialing ${number}...`,
    });
  };

  const handleCopy = (number: string, name: string) => {
    navigator.clipboard.writeText(number);
    toast({
      title: "Number Copied",
      description: `${name}: ${number} copied to clipboard`,
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Emergency Contacts India
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Essential emergency contact numbers for immediate assistance during disasters and emergencies
        </p>
      </div>

      {/* Emergency Alert */}
      <Card className="shadow-card border-emergency/20">
        <CardContent className="pt-6">
          <div className="bg-emergency/10 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="emergency-pulse bg-emergency text-emergency-foreground rounded-full p-2">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-emergency mb-1">🚨 Life-Threatening Emergency?</h3>
                <p className="text-sm mb-3">
                  For immediate life-threatening emergencies, call <strong>108</strong> - India's unified emergency number
                </p>
                <Button 
                  onClick={() => handleCall('108', 'Emergency Services')}
                  className="gradient-emergency emergency-pulse"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call 108 Now
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Categories */}
      {emergencyNumbers.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-bold text-primary mb-4">
            {category.category}
          </h2>
          <div className="grid gap-4">
            {category.contacts.map((contact, contactIndex) => (
              <Card key={contactIndex} className="shadow-card hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-mono text-lg font-bold text-primary">
                        {contact.number}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {contact.description}
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleCall(contact.number, contact.name)}
                      className="gradient-hero flex-1"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleCopy(contact.number, contact.name)}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Important Notes */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>📋</span>
            <span>Important Guidelines</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">When to Call Emergency Services:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Life-threatening medical emergencies</li>
                <li>Fire or explosion hazards</li>
                <li>Criminal activity in progress</li>
                <li>Natural disasters (earthquake, flood, etc.)</li>
                <li>Major accidents or injuries</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Information to Provide:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Your exact location with landmarks</li>
                <li>Nature of emergency</li>
                <li>Number of people involved</li>
                <li>Your contact number</li>
                <li>Any immediate dangers present</li>
              </ul>
            </div>

            <div className="bg-primary/10 p-3 rounded-lg">
              <p className="text-sm">
                <strong>Remember:</strong> Stay calm, speak clearly, and don't hang up until 
                the operator tells you to. Emergency services are trained to help you.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Services */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Location-Based Services</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Enable location services to get emergency contacts specific to your area and 
            allow emergency services to locate you quickly.
          </p>
          <Button className="gradient-hero">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location Services
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyContacts;