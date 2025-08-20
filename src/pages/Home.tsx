import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Shield, Zap, Code2, Database, Cloud, Smartphone, Globe, Cpu, Server, Layers, Users, Timer, CheckCircle, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-accent/30 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-feature opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-full mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Hero Content - Enhanced */}
            <div className="flex-1 max-w-2xl space-y-6 sm:space-y-8 animate-fade-in text-left">
              {/* Credibility Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-secondary/10 text-secondary-accent text-sm font-medium rounded-full border border-secondary-accent/20 hover:bg-gradient-secondary/20 transition-all duration-300">
                🚀 Enterprise-ready SaaS, built fast
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jakarta leading-tight">
                  <span className="block font-light text-foreground/90">OhYeah</span>
                  <span className="block font-semibold bg-gradient-feature bg-clip-text text-transparent">Software</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-1">Pvt Ltd</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  <span className="font-semibold text-foreground">Simplifying Business Software for the Next Generation.</span>
                  <br />
                  Fast, reliable, and a joy to use - built for modern enterprises.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-secondary hover:opacity-90 text-secondary-accent-foreground rounded-xl shadow-medium hover:shadow-large transition-all duration-300 group"
                  asChild
                >
                  <Link to="/contact">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-xl shadow-none hover:bg-muted/50 border-border transition-all duration-200 hover:border-primary/50"
                  asChild
                >
                  <Link to="/about">Book a Demo</Link>
                </Button>
              </div>
              
              {/* Enhanced Trust Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  No setup fees
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  Cancel anytime
                </span>
              </div>
            </div>
            
            {/* Enhanced Abstract Illustration */}
            <div className="flex-shrink-0 lg:flex-1 lg:max-w-lg">
              <div className="relative h-64 sm:h-80 lg:h-96 animate-scale-in">
                <div className="relative h-full flex items-center justify-center">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                    {/* Enhanced Background Circle */}
                    <div className="absolute inset-0 bg-gradient-feature/30 rounded-full blur-sm opacity-60 animate-float" style={{ animationDelay: '0.5s' }} />
                    
                    {/* Geometric Shapes with Enhanced Tech Icons */}
                    <div className="absolute top-8 left-8 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-primary/20 rounded-2xl rotate-12 animate-float flex items-center justify-center hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0s' }}>
                      <Code2 className="w-8 sm:w-12 h-8 sm:h-12 text-primary" />
                    </div>
                    <div className="absolute top-16 right-12 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-secondary/30 rounded-full opacity-80 flex items-center justify-center hover:scale-110 transition-transform duration-300" 
                         style={{ animationDelay: '1s' }}>
                      <Database className="w-6 sm:w-8 h-6 sm:h-8 text-secondary-accent" />
                    </div>
                    <div className="absolute bottom-20 left-16 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-feature/30 rounded-xl rotate-45 flex items-center justify-center hover:scale-110 transition-transform duration-300" 
                         style={{ animationDelay: '0.5s' }}>
                      <Cloud className="w-8 sm:w-10 h-8 sm:h-10 text-primary rotate-[-45deg]" />
                    </div>
                    <div className="absolute bottom-12 right-8 w-14 sm:w-18 h-14 sm:h-18 bg-gradient-primary/20 rounded-2xl opacity-70 rotate-12 flex items-center justify-center hover:scale-110 transition-transform duration-300" 
                         style={{ animationDelay: '1.5s' }}>
                      <Server className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </div>
                    
                    {/* Additional Enhanced Tech Icons */}
                    <div className="absolute top-1/3 left-1/3 w-10 sm:w-14 h-10 sm:h-14 bg-accent/20 rounded-xl flex items-center justify-center opacity-60 hover:scale-110 transition-transform duration-300"
                         style={{ animationDelay: '0.8s' }}>
                      <Smartphone className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-secondary/15 rounded-full flex items-center justify-center opacity-70 hover:scale-110 transition-transform duration-300"
                         style={{ animationDelay: '1.2s' }}>
                      <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-secondary-accent" />
                    </div>
                    
                    {/* Enhanced Center Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-feature opacity-20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
                    
                    {/* Enhanced Floating Tech Elements */}
                    <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg opacity-60 animate-float flex items-center justify-center hover:scale-110 transition-transform duration-300" 
                         style={{ animationDelay: '2s' }}>
                      <Cpu className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-5 sm:w-6 h-5 sm:h-6 bg-accent/30 rounded-full opacity-80 animate-float flex items-center justify-center hover:scale-110 transition-transform duration-300" 
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

      {/* Core Features Section */}
      <section className="py-20 sm:py-24 mb-16">
        <div className="max-w-full mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
              Why Choose OhYeah Software
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-jakarta font-bold text-foreground mb-4">
              Powerful Features for Modern Business
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your SaaS applications with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-large">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-jakarta font-semibold text-foreground mb-3">Lightning Fast</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Built with modern tech stack for blazing fast performance and seamless user experience.
              </p>
              <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden bg-card rounded-2xl p-6 border border-border hover:border-secondary-accent/20 transition-all duration-300 hover:shadow-large">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-secondary-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-jakarta font-semibold text-foreground mb-3">Enterprise Security</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Bank-level security with end-to-end encryption, SOC 2 compliance, and robust access controls.
              </p>
              <div className="absolute inset-0 bg-gradient-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden bg-card rounded-2xl p-6 border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-large">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-jakarta font-semibold text-foreground mb-3">Team Collaboration</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Real-time collaboration tools that keep your team in sync and boost productivity.
              </p>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-large">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-feature rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Timer className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-jakarta font-semibold text-foreground mb-3">Quick Setup</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Get up and running in minutes with our intuitive setup process and comprehensive documentation.
              </p>
              <div className="absolute inset-0 bg-gradient-feature/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;