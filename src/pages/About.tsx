import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Award, BookOpen, Shield } from "lucide-react";

const About = () => {
  const problems = [
    "Lack of disaster preparedness education in schools across India",
    "Students unprepared for emergency situations like earthquakes and floods", 
    "Limited access to interactive disaster management learning resources",
    "Inadequate emergency response training in educational institutions",
  ];

  const impacts = [
    "Increased student safety and survival rates during disasters",
    "Better emergency preparedness in schools and colleges", 
    "Reduced casualties through proper disaster response knowledge",
    "Enhanced community resilience and disaster awareness",
  ];

  const outcomes = [
    "Trained students become community disaster ambassadors",
    "Improved institutional emergency preparedness protocols",
    "Data-driven insights for policy makers and educators",
    "Reduced disaster-related risks in educational settings",
  ];

  const stakeholders = [
    { name: "Students", role: "Primary learners and beneficiaries", icon: Users },
    { name: "Teachers & Schools", role: "Educational implementation partners", icon: BookOpen },
    { name: "Government Bodies", role: "Policy support and funding", icon: Shield },
    { name: "NGOs", role: "Community outreach and support", icon: Target },
  ];

  const statistics = [
    { label: "Schools in India", value: "1.5M+", description: "Total educational institutions" },
    { label: "Students", value: "264M", description: "Student population in India" },
    { label: "Annual Disasters", value: "300+", description: "Natural disasters per year" },
    { label: "Lives at Risk", value: "High", description: "Due to lack of preparedness" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About Our Platform
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering Indian students with life-saving disaster management education 
          through interactive learning, gamification, and emergency preparedness tools.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="shadow-hero gradient-hero text-primary-foreground">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            To create a disaster-resilient generation by providing comprehensive, 
            interactive disaster management education that saves lives, builds 
            preparedness, and strengthens communities across India.
          </p>
        </CardContent>
      </Card>

      {/* Problems Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Problems We Address
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="shadow-card border-l-4 border-l-emergency">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-emergency/10 p-2 rounded-full mt-1">
                    <span className="text-emergency font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Supporting Data
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <Card key={index} className="shadow-card text-center hover:shadow-hero transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impacts Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Expected Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="shadow-card border-l-4 border-l-success">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-success/10 p-2 rounded-full mt-1">
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-muted-foreground">{impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Long-term Outcomes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="shadow-card border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stakeholders */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Key Stakeholders
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <Card key={index} className="shadow-card text-center hover:shadow-hero transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{stakeholder.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stakeholder.role}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Overview */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Platform Features
        </h2>
        <Card className="shadow-hero">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-bold mb-2">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Video lessons, quizzes, and gamified modules covering all major disaster types
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚨</div>
                <h3 className="font-bold mb-2">Emergency Tools</h3>
                <p className="text-sm text-muted-foreground">
                  SOS button, emergency contacts, weather alerts, and safety maps
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold mb-2">Admin Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Progress tracking, analytics, and institutional management tools
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <Card className="shadow-hero text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Join the Movement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of creating a disaster-resilient India. Start your journey 
            with our comprehensive disaster management education program today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-hero shadow-card hover:shadow-hero transition-all duration-200">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;