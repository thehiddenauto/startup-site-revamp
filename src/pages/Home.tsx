import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-subtle">
        <div className="container text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build your SaaS{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                faster than ever
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The complete platform for modern teams. Ship features faster, scale with confidence, 
              and focus on what matters most - your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for modern teams who want to move fast without breaking things.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Deploy in seconds, not hours. Our platform is optimized for speed and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security with SOC 2 compliance and end-to-end encryption.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Built for teams of all sizes with real-time collaboration and role-based access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of teams already building the future.
          </p>
          <Link to="/pricing">
            <Button size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300">
              View Pricing Plans
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;