import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users, Timer, TrendingUp, Rocket, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section — Full-bleed image, Maersk-inspired editorial layout */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Heading & CTA */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-lucidia tracking-[-0.03em] leading-[1.05] text-white">
                Build software that scales with your vision
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg font-inter font-normal">
                Modern SaaS platform designed for teams who value speed, security, and simplicity. We turn ambitious ideas into enterprise-grade solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-white/90 rounded-none px-8 font-semibold transition-all duration-300 group"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-none px-8 font-semibold transition-all duration-300"
                  asChild
                >
                  <Link to="/products">Our Products</Link>
                </Button>
              </div>
            </div>

            {/* Right — Floating card widget */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 font-inter">
                    Explore
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 font-lucidia tracking-tight">
                    Discover Our Products
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-inter">
                    From food sustainability to education management — see what we're building next.
                  </p>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/products"
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-800">Fresh Saver</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-800">Edu Manage</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-800">Mana Bazaar</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
                <Button
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded font-semibold"
                  asChild
                >
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section — Clean white editorial layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-inter">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-lucidia tracking-[-0.02em] text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-inter">
              Powerful tools designed to accelerate your business growth and streamline operations.
            </p>
          </div>

          {/* Feature Grid — clean, editorial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {/* Feature 1 */}
            <div className="bg-white p-8 space-y-4 group hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-lucidia tracking-tight">Lightning Fast</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 space-y-4 group hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-lucidia tracking-tight">Enterprise Security</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                Bank-grade encryption and compliance with SOC 2, GDPR, and industry-leading security standards.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 space-y-4 group hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-lucidia tracking-tight">Team Collaboration</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                Seamless real-time collaboration tools that keep your entire team aligned and productive.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 space-y-4 group hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Timer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-lucidia tracking-tight">Quick Setup</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                Get started in minutes with our intuitive onboarding and comprehensive documentation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
