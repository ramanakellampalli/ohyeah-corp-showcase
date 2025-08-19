import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/ohyeah-icon.png";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-3 group transition-all duration-200 hover:opacity-80"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={logoIcon} 
                alt="OhYeah Software" 
                className="w-full h-full object-contain"
              />
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

          <Button variant="default" size="sm" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;