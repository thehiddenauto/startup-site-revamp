import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Activity, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,891</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <p className="text-xs text-muted-foreground">
                +0.1% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white text-xs font-medium">JD</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">John Doe created a new project</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">SM</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah Miller updated the design system</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-medium">TW</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Team Weekly deployed version 2.1.0</p>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300">
                Create New Project
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Invite Team Members
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Account Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;