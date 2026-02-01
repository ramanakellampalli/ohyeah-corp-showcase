import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users, Timer, CheckCircle, Star, TrendingUp, Award, Sparkles, Rocket, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Modern & Refined */}
      <section className="relative pt-6 pb-6 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

        {/* Soft Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                Enterprise Software Simplified
              </span>
            </div>

            {/* Refined Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              <span className="block text-foreground/90">Build software that</span>
              <span className="block mt-1">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary-accent bg-clip-text text-transparent">
                  scales with your vision
                </span>
              </span>
            </h1>

            {/* Refined Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
              Modern SaaS platform designed for teams who value speed, security, and simplicity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-7 shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-xl px-7 hover:bg-muted/50 transition-all duration-200"
                asChild
              >
                <Link to="/about">View Demo</Link>
              </Button>
            </div>

            {/* Minimal Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-xs text-muted-foreground/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary/60" />
                Free trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary/60" />
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary/60" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary-accent bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to accelerate your business growth and streamline operations
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Lightning Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-secondary-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary-accent/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-accent to-secondary-accent/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Shield className="w-7 h-7 text-secondary-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Enterprise Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bank-grade encryption and compliance with SOC 2, GDPR, and industry-leading security standards.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Users className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Team Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamless real-time collaboration tools that keep your entire team aligned and productive.
                </p>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Timer className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Quick Setup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get started in minutes with our intuitive onboarding and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary-accent/5 to-primary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-primary to-secondary-accent rounded-3xl p-12 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Ready to get started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using OhYeah Software to transform their operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure & compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Scale with ease</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
