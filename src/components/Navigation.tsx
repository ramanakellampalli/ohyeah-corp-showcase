import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Company Name */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-3 group transition-all duration-200 hover:opacity-80"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-jakarta font-semibold text-foreground leading-tight">
                  OhYeah
                </span>
                <span className="text-xs font-inter font-medium text-muted-foreground leading-tight -mt-0.5">
                  SOFTWARE
                </span>
              </div>
            </Link>
          </div>
          
          {/* Center: Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive('/about') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive('/contact') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center">
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">
                <span className="hidden sm:inline">Get in touch</span>
                <span className="sm:hidden">Contact</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;