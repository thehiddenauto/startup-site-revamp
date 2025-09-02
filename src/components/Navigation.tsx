import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary"></div>
          <span className="text-xl font-bold">SaaSify</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Pricing
          </Link>
          <Link
            to="/dashboard"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Dashboard
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;