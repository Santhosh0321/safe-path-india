import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Lock, CheckCircle, Clock, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const modules = [
  { id: 1, title: "Introduction", videoUrl: "https://youtu.be/FVwvbS-0q18?si=RUbBWNqRwTmKkDlE", unlocked: true, completed: false },
  { id: 2, title: "Earthquake 1", videoUrl: "https://youtu.be/MllUVQM3KVk?si=3HdAsFBebG0aI5NW", unlocked: false, completed: false },
  { id: 3, title: "Earthquake 2", videoUrl: "https://youtu.be/BLEPakj1YTY?si=vxHU_WqvoBw9JrfZ", unlocked: false, completed: false },
  { id: 4, title: "Flood 1", videoUrl: "https://youtube.com/watch?v=pi_nUPcQz_A&feature=shared", unlocked: false, completed: false },
  { id: 5, title: "Flood 2", videoUrl: "https://youtu.be/43M5mZuzHF8?si=JmzXjONwaCRquaj2", unlocked: false, completed: false },
  { id: 6, title: "Fire", videoUrl: "https://youtube.com/watch?v=Xgc90CoJbDI&feature=shared", unlocked: false, completed: false },
  { id: 7, title: "Landslide", videoUrl: "https://youtu.be/krJLnXpemtQ?si=XSKk_NG0IYQ0RWNx", unlocked: false, completed: false },
  { id: 8, title: "Hurricane", videoUrl: "https://youtu.be/xHRbnuB9F1I?si=McasRTDIWs-66JF4", unlocked: false, completed: false },
  { id: 9, title: "Forest Fire", videoUrl: "https://youtu.be/_bNLtjHG9dM?si=6SkguPkfFEE7zFPg", unlocked: false, completed: false },
  { id: 10, title: "Conclusion", videoUrl: "https://youtube.com/watch?v=OGWxPR5V-5U&feature=shared", unlocked: false, completed: false },
];

const Learning = () => {
  const { toast } = useToast();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const completedModules = modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / modules.length) * 100;

  const handleEnroll = () => {
    toast({
      title: "Authentication Required",
      description: "Please log in or sign up to enroll in the course. Student accounts coming soon!",
    });
    setIsEnrolled(true);
  };

  const handleModuleClick = (module: typeof modules[0]) => {
    if (!isEnrolled) {
      handleEnroll();
      return;
    }
    
    if (!module.unlocked) {
      toast({
        title: "Module Locked",
        description: "Complete previous modules to unlock this content.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: `Opening ${module.title}`,
      description: "Video lesson will open in a new tab",
    });
    
    // Open YouTube video in new tab
    window.open(module.videoUrl, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Course Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Disaster Preparedness Basics
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master essential disaster management skills through interactive video lessons, quizzes, and practical exercises.
        </p>
      </div>

      {/* Enrollment/Progress Section */}
      {!isEnrolled ? (
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Begin?</CardTitle>
            <CardDescription>
              Join thousands of students learning critical disaster preparedness skills
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={handleEnroll}
              size="lg"
              className="gradient-hero shadow-card hover:shadow-hero transition-all duration-200"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Enroll Now - Free Course
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Your Progress</CardTitle>
              <Badge className="gradient-success text-success-foreground">
                {completedModules}/{modules.length} Complete
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              {progressPercentage.toFixed(0)}% completed
            </p>
          </CardContent>
        </Card>
      )}

      {/* Modules Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <Card
            key={module.id}
            className={`shadow-card transition-all duration-300 cursor-pointer ${
              module.unlocked || isEnrolled
                ? "hover:shadow-hero" 
                : "opacity-75"
            }`}
            onClick={() => handleModuleClick(module)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {module.id}
                  </span>
                  <span>{module.title}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  {module.completed ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : module.unlocked || isEnrolled ? (
                    <Play className="h-5 w-5 text-primary" />
                  ) : (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>10-15 min</span>
                  </span>
                  <Badge variant="outline">
                    Video + Quiz
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {module.id === 1 && "Introduction to disaster management and emergency preparedness fundamentals"}
                  {module.id === 2 && "Understanding earthquake causes, safety measures, and immediate response"}
                  {module.id === 3 && "Advanced earthquake preparedness: building safety and evacuation procedures"}
                  {module.id === 4 && "Flood awareness: causes, warning signs, and basic safety measures"}
                  {module.id === 5 && "Advanced flood management: evacuation and recovery procedures"}
                  {module.id === 6 && "Fire safety: prevention, detection, and emergency response procedures"}
                  {module.id === 7 && "Landslide awareness: risk factors, warning signs, and safety measures"}
                  {module.id === 8 && "Hurricane preparedness: understanding, planning, and response strategies"}
                  {module.id === 9 && "Forest fire safety: prevention, evacuation, and survival techniques"}
                  {module.id === 10 && "Course summary and creating your personal emergency plan"}
                </p>

                {!module.unlocked && !isEnrolled && (
                  <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                    <Lock className="h-3 w-3 inline mr-1" />
                    Complete previous modules to unlock
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certificate Section */}
      {isEnrolled && (
        <Card className="shadow-card border-success/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>🎓</span>
              <span>Certificate of Completion</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Complete all modules to earn your official Disaster Preparedness certificate.
            </p>
            <Button
              disabled={completedModules < modules.length}
              className="gradient-success hover:shadow-hero transition-all duration-200"
            >
              {completedModules < modules.length 
                ? `Complete ${modules.length - completedModules} more modules` 
                : "Download Certificate"
              }
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Learning;