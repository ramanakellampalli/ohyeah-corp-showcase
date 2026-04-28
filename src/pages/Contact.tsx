import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
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
            fetchPriority="high"
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
            <div className="max-w-xl">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Send a message
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  We’ll get back within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <fieldset disabled={isSubmitting} className="contents">

                {/* Grid: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs text-gray-600">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                      className={`h-10 border-gray-300 focus:ring-1 focus:ring-gray-900 text-sm
            ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs text-gray-600">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      disabled={isSubmitting}
                      className={`h-10 border-gray-300 focus:ring-1 focus:ring-gray-900 text-sm
            ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                </div>

                {/* Message Full Width */}
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-xs text-gray-600">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your request..."
                    required
                    disabled={isSubmitting}
                    className={`border-gray-300 focus:ring-1 focus:ring-gray-900 text-sm resize-none
          ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full h-10 bg-gray-900 text-white text-sm hover:bg-gray-800"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <TypingAnimation />
                </fieldset>
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

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  ohyeahsoftwarepvtlmtd@gmail.com
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Guntur, Andhra Pradesh, India
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
