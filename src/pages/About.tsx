import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About OhYeah Software
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              OhYeah Software Pvt Ltd is focused on building next-generation SaaS applications 
              that simplify and empower businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Business Operations
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize how businesses leverage technology, 
                  OhYeah Software Pvt Ltd has emerged as a trusted partner for companies 
                  seeking innovative SaaS solutions.
                </p>
                <p>
                  Our team of experienced developers, designers, and strategists work 
                  collaboratively to create applications that not only meet current business 
                  needs but anticipate future challenges and opportunities.
                </p>
                <p>
                  We believe that great software should be both powerful and accessible, 
                  which is why we focus on creating intuitive user experiences backed by 
                  robust, scalable technology.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-primary rounded-lg shadow-large"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of innovative SaaS solutions that empower businesses 
                to achieve their full potential through technology. We envision a world where 
                every company, regardless of size, has access to enterprise-grade software 
                that drives growth and efficiency.
              </p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-lg shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To develop and deliver cutting-edge SaaS applications that simplify complex 
                business processes, enhance productivity, and enable sustainable growth. 
                We are committed to excellence in design, development, and customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to excellence is reflected in every aspect of our work
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Customer-Centric Approach</h4>
                  <p className="text-muted-foreground">
                    We put our customers at the heart of everything we do, ensuring our solutions 
                    address real business challenges and deliver measurable value.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Quality First</h4>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in code quality, security, and performance, 
                    ensuring our applications exceed industry benchmarks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our SaaS solutions can help your company achieve its goals.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;