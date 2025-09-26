import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, BarChart3, Download, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();

  const handleAuthRequired = () => {
    toast({
      title: "Admin Authentication Required",
      description: "Please log in with your school/college admin credentials to access the dashboard.",
    });
  };

  const stats = [
    { label: "Active Students", value: "1,247", icon: Users, color: "text-primary" },
    { label: "Modules Completed", value: "8,934", icon: BookOpen, color: "text-success" },
    { label: "Badges Earned", value: "3,721", icon: Award, color: "text-warning" },
    { label: "Completion Rate", value: "78%", icon: BarChart3, color: "text-emergency" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor student progress and manage disaster preparedness training
          </p>
        </div>
        <Button onClick={handleAuthRequired} className="gradient-hero shadow-card">
          <Eye className="mr-2 h-4 w-4" />
          Access Full Dashboard
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Demo Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Student Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Module 1: Introduction</span>
                <span className="text-sm font-medium">95% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "95%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Module 2: Earthquake Safety</span>
                <span className="text-sm font-medium">78% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Module 3: Fire Safety</span>
                <span className="text-sm font-medium">65% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>School Performance Ranking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div>
                  <p className="font-medium">Delhi Public School</p>
                  <p className="text-sm text-muted-foreground">1,234 students</p>
                </div>
                <span className="text-lg font-bold text-success">#1</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <div>
                  <p className="font-medium">Kendriya Vidyalaya</p>
                  <p className="text-sm text-muted-foreground">987 students</p>
                </div>
                <span className="text-lg font-bold text-primary">#2</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                <div>
                  <p className="font-medium">DAV Public School</p>
                  <p className="text-sm text-muted-foreground">756 students</p>
                </div>
                <span className="text-lg font-bold text-warning">#3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-card cursor-pointer hover:shadow-hero transition-all duration-300" onClick={handleAuthRequired}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Student Management</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              View detailed student profiles, progress tracking, and performance analytics
            </p>
            <Button variant="outline" onClick={handleAuthRequired}>
              View Students
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card cursor-pointer hover:shadow-hero transition-all duration-300" onClick={handleAuthRequired}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-success/10 p-3 rounded-full w-fit mb-2">
              <BarChart3 className="h-6 w-6 text-success" />
            </div>
            <CardTitle>Analytics & Reports</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Generate comprehensive reports on learning outcomes and engagement
            </p>
            <Button variant="outline" onClick={handleAuthRequired}>
              View Reports
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card cursor-pointer hover:shadow-hero transition-all duration-300" onClick={handleAuthRequired}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-warning/10 p-3 rounded-full w-fit mb-2">
              <Download className="h-6 w-6 text-warning" />
            </div>
            <CardTitle>Export Data</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Download student data, certificates, and progress reports in various formats
            </p>
            <Button variant="outline" onClick={handleAuthRequired}>
              Export Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Authentication Notice */}
      <Card className="shadow-card border-warning/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🔐</span>
            <span>Authentication Required</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            This is a demo view of the admin dashboard. To access full functionality including 
            student data, detailed analytics, and administrative controls, please authenticate 
            with your institutional credentials.
          </p>
          <div className="flex gap-3">
            <Button onClick={handleAuthRequired} className="gradient-hero">
              School Admin Login
            </Button>
            <Button variant="outline" onClick={handleAuthRequired}>
              Request Access
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;