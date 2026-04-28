import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Lightbulb, Rocket, ArrowRight, Award, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutInnovation from "@/assets/about-innovation.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section — Full-bleed image, editorial layout */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutInnovation}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4 font-inter">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-lucidia tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Where innovation meets execution
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-inter font-normal">
              We don't just build software—we craft digital experiences that turn ambitious ideas into game-changing solutions. At OhYeah Software, great technology should feel like magic, work flawlessly, and grow with your dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values — Editorial grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-inter">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-sora tracking-[-0.02em] text-gray-900 mb-4">
              What drives us forward
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-inter">
              Our commitment to excellence is reflected in every aspect of our work.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 font-sora tracking-tight">Customer-Centric</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                We put our customers at the heart of everything we do, ensuring our solutions address real business challenges.
              </p>
            </div>

            {/* Value 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 font-sora tracking-tight">Quality First</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                We maintain the highest standards in code quality, security, and performance, exceeding industry benchmarks.
              </p>
            </div>

            {/* Value 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 font-sora tracking-tight">Innovation</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                We constantly push boundaries, exploring new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>

            {/* Value 4 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 font-sora tracking-tight">Integrity</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-inter">
                We build trust through transparency, honesty, and ethical practices in every interaction and decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
