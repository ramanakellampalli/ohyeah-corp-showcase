import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Shield, Zap, Code2, Database, Cloud, Smartphone, Globe, Cpu, Server, Layers } from "lucide-react";
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
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Hero Content - Always Left Aligned */}
            <div className="flex-1 max-w-2xl space-y-6 sm:space-y-8 animate-fade-in text-left">
              {/* Credibility Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                Enterprise-ready SaaS, built fast
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jakarta leading-tight">
                  <span className="block font-light text-foreground/90">OhYeah</span>
                  <span className="block font-semibold bg-gradient-primary bg-clip-text text-transparent">Software</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-1">Pvt Ltd</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Building SaaS applications that are fast, reliable, and a joy to use.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
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
            <div className="flex-shrink-0 lg:flex-1 lg:max-w-lg">
              <div className="relative h-64 sm:h-80 lg:h-96 animate-scale-in">
                <div className="relative h-full flex items-center justify-center">
                  {/* Main Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  {/* Large Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-sm opacity-60" />
                  
                    {/* Geometric Shapes with Tech Icons */}
                    <div className="absolute top-8 left-8 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 rounded-2xl rotate-12 animate-float flex items-center justify-center">
                      <Code2 className="w-8 sm:w-12 h-8 sm:h-12 text-primary" />
                    </div>
                    <div className="absolute top-16 right-12 w-12 sm:w-16 h-12 sm:h-16 bg-accent/30 rounded-full opacity-80 flex items-center justify-center" 
                         style={{ animationDelay: '1s' }}>
                      <Database className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
                    </div>
                    <div className="absolute bottom-20 left-16 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-xl rotate-45 flex items-center justify-center" 
                         style={{ animationDelay: '0.5s' }}>
                      <Cloud className="w-8 sm:w-10 h-8 sm:h-10 text-primary rotate-[-45deg]" />
                    </div>
                    <div className="absolute bottom-12 right-8 w-14 sm:w-18 h-14 sm:h-18 bg-primary/20 rounded-2xl opacity-70 rotate-12 flex items-center justify-center" 
                         style={{ animationDelay: '1.5s' }}>
                      <Server className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </div>
                    
                    {/* Additional Tech Icons */}
                    <div className="absolute top-1/3 left-1/3 w-10 sm:w-14 h-10 sm:h-14 bg-accent/20 rounded-xl flex items-center justify-center opacity-60"
                         style={{ animationDelay: '0.8s' }}>
                      <Smartphone className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-primary/15 rounded-full flex items-center justify-center opacity-70"
                         style={{ animationDelay: '1.2s' }}>
                      <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </div>
                    
                    {/* Center Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-primary opacity-20 rounded-full blur-xl" />
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg opacity-60 animate-float flex items-center justify-center" 
                         style={{ animationDelay: '2s' }}>
                      <Cpu className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-5 sm:w-6 h-5 sm:h-6 bg-accent/30 rounded-full opacity-80 animate-float flex items-center justify-center" 
                         style={{ animationDelay: '2.5s' }}>
                      <Layers className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              The principles that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-medium group-hover:shadow-large">
                <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Innovation</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We constantly push boundaries and explore new technologies to deliver 
                solutions that set industry standards.
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-medium group-hover:shadow-large">
                <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Reliability</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our applications are built with robust architecture and rigorous testing 
                to ensure maximum uptime and performance.
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-medium group-hover:shadow-large">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Simplicity</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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