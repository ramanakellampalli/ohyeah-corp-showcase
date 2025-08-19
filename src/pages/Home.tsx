import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Shield, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Credibility Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                Enterprise-ready SaaS, built fast
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta leading-tight max-w-xl">
                  <span className="block font-light text-foreground/90">OhYeah</span>
                  <span className="block font-semibold bg-gradient-primary bg-clip-text text-transparent">Software</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-1">Pvt Ltd</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
                  Building SaaS applications that are fast, reliable, and a joy to use.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl shadow-none hover:shadow-sm transition-all duration-200"
                  asChild
                >
                  <Link to="/contact">
                    Contact us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-xl shadow-none hover:bg-muted/50 border-border transition-all duration-200"
                  asChild
                >
                  <Link to="/about">About us</Link>
                </Button>
              </div>
              
              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Secure by design
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Cloud-native
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Built for scale
                </span>
              </div>
            </div>
            
            {/* Abstract Geometric Illustration */}
            <div className="relative lg:h-96 animate-scale-in">
              <div className="relative h-full flex items-center justify-center">
                {/* Main Container */}
                <div className="relative w-80 h-80">
                  {/* Large Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-sm opacity-60" />
                  
                  {/* Geometric Shapes */}
                  <div className="absolute top-8 left-8 w-24 h-24 bg-primary/40 rounded-2xl rotate-12 animate-float" />
                  <div className="absolute top-16 right-12 w-16 h-16 bg-accent/50 rounded-full opacity-80" 
                       style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-20 left-16 w-20 h-20 bg-gradient-to-br from-primary/50 to-transparent rounded-xl rotate-45" 
                       style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-12 right-8 w-12 h-24 bg-primary/30 rounded-full opacity-70 rotate-12" 
                       style={{ animationDelay: '1.5s' }} />
                  
                  {/* Center Glow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-primary opacity-20 rounded-full blur-xl" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-60 animate-float" 
                       style={{ animationDelay: '2s' }} />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full opacity-80 animate-float" 
                       style={{ animationDelay: '2.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-large">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We constantly push boundaries and explore new technologies to deliver 
                solutions that set industry standards.
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-large">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our applications are built with robust architecture and rigorous testing 
                to ensure maximum uptime and performance.
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-large">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Simplicity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe powerful software should be intuitive. Our user-centered 
                design makes complex processes effortlessly simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;