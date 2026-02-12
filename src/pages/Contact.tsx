import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import TypingAnimation from "@/components/TypingAnimation";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Check if form is valid
  const isFormValid = formData.name.trim() !== "" &&
                     formData.email.trim() !== "" &&
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                     formData.message.trim() !== "";

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        if (value.trim() === '') return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
      case 'message':
        return value.trim() === '' ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    // Only submit if no errors
    if (!nameError && !emailError && !messageError) {
      setIsSubmitting(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }

        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } catch (error) {
        console.error('Failed to send email:', error);
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to send message. Please try again or contact us directly.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section — Full-bleed image, editorial layout */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4 font-inter">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-lucidia tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Let's start the conversation
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-inter font-normal">
              Ready to transform your business with innovative SaaS solutions? We're here to help you succeed. Reach out and let's make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-lucidia tracking-tight text-gray-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-base text-gray-600 font-inter">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-900 font-inter">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                    className={`rounded-lg border-gray-300 focus:border-primary focus:ring-primary font-inter ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 font-inter">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-900 font-inter">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                    disabled={isSubmitting}
                    className={`rounded-lg border-gray-300 focus:border-primary focus:ring-primary font-inter ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 font-inter">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-900 font-inter">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or how we can help..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className={`rounded-lg border-gray-300 focus:border-primary focus:ring-primary resize-none font-inter ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 font-inter">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-semibold"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                <TypingAnimation />
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold font-lucidia tracking-tight text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-base text-gray-600 font-inter leading-relaxed">
                  Reach out to us through any of the following channels. We're here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-lucidia">Email</h3>
                    <p className="text-sm text-gray-600 font-inter">info@ohyeahsaas.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-lucidia">Phone</h3>
                    <p className="text-sm text-gray-600 font-inter">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-600 font-inter">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-lucidia">Office</h3>
                    <p className="text-sm text-gray-600 font-inter">
                      123 Tech Street<br />
                      Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15439.834623930663!2d80.42651!3d16.3066984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b99e482f08327!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1635123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing Guntur, Andhra Pradesh, India"
                  className="w-full h-full grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
