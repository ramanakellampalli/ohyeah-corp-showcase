import { ArrowRight, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productsHero from "@/assets/products-hero.jpg";
import skipqLogo from "@/assets/skipq.png";
import billbuddyLogo from "@/assets/billbuddy.png";

const Products = () => {
  const products = [
    {
      name: "SkipQ",
      tagline: "Skip the queue. Order ahead at your campus.",
      description: "SkipQ lets university students order food ahead from campus vendors — before they even leave the classroom. No queuing, no waiting, just pick up when it's ready.",
      features: [
        "Campus-aware — your college email ties you to your campus",
        "Live order tracking — accepted, preparing, ready in real time",
        "Biometric login with Face ID / fingerprint support",
      ],
      status: "Live on Play Store",
      playStore: "https://play.google.com/store/apps/details?id=com.skipqcustomer",
      logo: skipqLogo,
      accent: "#F97316",
    },
    {
      name: "Bill Buddy",
      tagline: "A smart companion for bills, budgets, and money tracking.",
      description: "Bill Buddy helps you track recurring bills, set category budgets, manage informal money lending between people, and stay on top of due dates through smart reminders.",
      features: [
        "Smart bill reminders — configurable per-bill notifications",
        "Dues tracker — manage informal lending and borrowing",
        "Monthly budget limits with live spend tracking per category",
      ],
      status: "Live on Play Store",
      playStore: "https://play.google.com/store/apps/details?id=com.ohyeah.smartbillreminder",
      logo: billbuddyLogo,
      accent: "#3B82F6",
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
              Real products, live in the world.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-inter font-normal">
              We build and ship software that solves everyday problems. Both products below are live on the Play Store — download them, try them, and let us know what you think.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid — Clean white editorial */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">
            {products.map((product) => (
              <div key={product.name} className="bg-white p-8 lg:p-12 space-y-6">
                {/* Logo & Badge */}
                <div className="flex items-start justify-between">
                  <img
                    src={product.logo}
                    alt={`${product.name} logo`}
                    className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                  />
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-xs font-medium text-green-700 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    {product.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold font-lucidia tracking-tight text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 font-inter">
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

                {/* CTA */}
                <a
                  href={product.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-gray-900 text-white hover:bg-gray-800 rounded px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  View on Play Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
