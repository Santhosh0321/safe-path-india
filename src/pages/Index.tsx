import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Award, BookOpen, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-disaster-education.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden shadow-hero">
        <div
          className="bg-cover bg-center h-96 md:h-[500px] flex items-center justify-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          <div className="relative z-10 text-center text-primary-foreground px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up">
              Learn. Prepare. Stay Safe.
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto fade-in-up hidden md:block">
              Comprehensive disaster management education for Indian schools and colleges. 
              Interactive learning modules, emergency tools, and real-time safety resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
              <Button 
                onClick={() => navigate('/learning')}
                size="lg"
                className="gradient-hero shadow-card hover:shadow-hero transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button 
                onClick={() => navigate('/emergency')}
                variant="outline"
                size="lg"
                className="bg-emergency text-emergency-foreground border-emergency hover:bg-emergency/90 shadow-card"
              >
                Emergency Contacts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="fade-in-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Course</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master essential disaster preparedness skills through our comprehensive interactive course.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card hover:shadow-hero transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl text-primary mb-2">
                  Disaster Preparedness Basics
                </CardTitle>
                <CardDescription className="text-base">
                  A comprehensive course covering earthquakes, floods, fires, and emergency response procedures
                </CardDescription>
              </div>
              <Badge className="gradient-success text-success-foreground">
                Free Course
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>10 Interactive Modules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Play className="h-5 w-5 text-primary" />
                  <span>Video Lessons & Quizzes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Collaborative Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certificate of Completion</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>2-3 hours total</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Topics covered:</strong> Fire Safety, Earthquake Response, Flood Management, 
                  Landslide Awareness, Hurricane Preparedness, Emergency Communication, 
                  and First Aid Basics.
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => navigate('/learning')}
                size="lg" 
                className="gradient-hero shadow-card hover:shadow-hero transition-all duration-200 flex-1"
              >
                <Play className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
              <Button 
                onClick={() => navigate('/about')}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Access Features */}
      <section className="fade-in-up">
        <h2 className="text-2xl font-bold text-center text-primary mb-8">
          Emergency Tools & Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card 
            className="shadow-card hover:shadow-hero transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/emergency')}
          >
            <CardHeader className="text-center">
              <div className="mx-auto bg-emergency/10 p-3 rounded-full w-fit mb-2">
                <span className="text-2xl">📞</span>
              </div>
              <CardTitle className="text-lg">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Quick access to all emergency numbers in India
              </p>
            </CardContent>
          </Card>

          <Card 
            className="shadow-card hover:shadow-hero transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/weather')}
          >
            <CardHeader className="text-center">
              <div className="mx-auto bg-warning/10 p-3 rounded-full w-fit mb-2">
                <span className="text-2xl">🌤️</span>
              </div>
              <CardTitle className="text-lg">Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Real-time weather updates and disaster warnings
              </p>
            </CardContent>
          </Card>

          <Card 
            className="shadow-card hover:shadow-hero transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/map')}
          >
            <CardHeader className="text-center">
              <div className="mx-auto bg-success/10 p-3 rounded-full w-fit mb-2">
                <span className="text-2xl">🗺️</span>
              </div>
              <CardTitle className="text-lg">Safety Map</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Nearby shelters, safe routes, and emergency services
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
