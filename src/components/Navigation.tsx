import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ohyeah-logo-new.png";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo and Company Name */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-4 group transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img 
                  src={logo} 
                  alt="OhYeah Software" 
                  className="relative w-12 h-12 object-contain rounded-2xl"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-jakarta leading-tight">
                  <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">OhYeah</span>
                  <span className="font-semibold text-secondary-accent ml-1.5">Software</span>
                </div>
                <span className="text-xs text-muted-foreground/80 leading-tight -mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Click. Done. OhYeah.
                </span>
              </div>
            </Link>
          </div>
          
          {/* Center: Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                isActive('/') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                isActive('/products') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                isActive('/contact') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right: CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-3">            
            {/* CTA Button - Hidden on mobile */}
            <Button 
              variant="default" 
              size="default" 
              className="hidden sm:flex bg-gradient-primary hover:shadow-glow text-primary-foreground shadow-medium transition-all duration-300 font-semibold px-6"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Get Started
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2.5 rounded-xl hover:bg-primary/10 transition-all duration-300 border border-border/50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-2">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/products" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isActive('/products') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Products
              </Link>
              <div className="pt-4">
                <Button 
                  variant="default" 
                  size="default" 
                  className="w-full bg-gradient-primary text-primary-foreground shadow-medium font-semibold"
                  asChild
                >
                  <Link to="/contact" onClick={closeMobileMenu} className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;