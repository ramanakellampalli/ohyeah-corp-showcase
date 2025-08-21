import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
              <div className="w-7 h-7 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-jakarta leading-tight">
                  <span className="text-foreground font-bold">OhYeah</span>
                  <span className="text-orange-600 font-medium tracking-wide ml-1">Software</span>
                </div>
                <span className="text-xs text-muted-foreground/70 leading-tight -mt-0.5">
                  Click. Done. OhYeah.
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
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActive('/products') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              Products
            </Link>
          </div>

          {/* Right: CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-2">            
            {/* CTA Button - Hidden on mobile */}
            <Button 
              variant="default" 
              size="sm" 
              className="hidden sm:flex bg-gradient-secondary hover:opacity-90 text-secondary-accent-foreground shadow-medium hover:shadow-large transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`block text-base font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/') 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`block text-base font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/about') 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`block text-base font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/contact') 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/products" 
                onClick={closeMobileMenu}
                className={`block text-base font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/products') 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;