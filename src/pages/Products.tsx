import { Link } from "react-router-dom";
import { Apple, GraduationCap, ShoppingCart, ArrowRight, Rocket, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productsHero from "@/assets/products-hero.jpg";

const Products = () => {
  const products = [
    {
      name: "Fresh Saver",
      tagline: "Save Food, Save Money",
      description: "Discover surplus food from local restaurants and stores at discounted prices. Help reduce food waste while enjoying delicious meals for less.",
      features: [
        "Real-time inventory from local businesses",
        "Dashboards & weekly savings insights",
        "Order history & rewards program",
      ],
      eta: "Q4 2025",
      progress: 65,
      icon: Apple,
      color: "emerald",
    },
    {
      name: "Edu Manage",
      tagline: "School Management System",
      description: "Comprehensive school management platform for administrators, teachers, and parents. Streamline operations and improve communication.",
      features: [
        "Attendance tracking & announcements",
        "Fee management & timetable planning",
        "Student admissions & analytics dashboard",
      ],
      eta: "Q1 2026",
      progress: 40,
      icon: GraduationCap,
      color: "blue",
    },
    {
      name: "Mana Bazaar",
      tagline: "India's Marketplace",
      description: "A modern local marketplace to buy, sell, and discover items nearby. Connect with trusted buyers and sellers in your city.",
      features: [
        "Post products in minutes",
        "Location-based discovery",
        "Community-driven trust system",
      ],
      eta: "Q2 2026",
      progress: 25,
      icon: ShoppingCart,
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section — Full-bleed image, editorial layout */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={productsHero}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4 font-inter">
              Our Products
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-lucidia tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Building the future of software
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-inter font-normal">
              A peek at what we're building. Join the waitlist to get early access, shape the roadmap, and hear when each product ships.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid — Clean white editorial */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200">
            {products.map((product) => (
              <div key={product.name} className="bg-white p-8 lg:p-10 space-y-6">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-${product.color}-500/10 rounded-lg flex items-center justify-center`}>
                    <product.icon className={`w-6 h-6 text-${product.color}-600`} />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wide">
                    Coming Soon
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold font-lucidia tracking-tight text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed font-inter">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500 font-inter">
                      <Clock className="w-4 h-4" />
                      <span>ETA: {product.eta}</span>
                    </div>
                    <span className="text-gray-600 font-medium">{product.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-${product.color}-500`}
                      style={{ width: `${product.progress}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded font-semibold"
                  asChild
                >
                  <Link to="/contact">Get Notified</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-sm text-gray-600 font-inter">
              <span className="font-semibold text-gray-900">Roadmap:</span> Beta invites → Public docs → Launch
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
