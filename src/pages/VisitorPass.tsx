import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Check, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VisitorPass = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberOfPasses: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PRICE_PER_PASS = 750;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const incrementPasses = () => {
    setFormData((prev) => ({
      ...prev,
      numberOfPasses: prev.numberOfPasses + 1,
    }));
  };

  const decrementPasses = () => {
    setFormData((prev) => ({
      ...prev,
      numberOfPasses: Math.max(1, prev.numberOfPasses - 1),
    }));
  };

  const totalAmount = formData.numberOfPasses * PRICE_PER_PASS;

  const isFormValid = formData.name.trim() !== "" &&
                      formData.email.trim() !== "" &&
                      formData.numberOfPasses >= 1;

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `Hey, I need visitor pass(es) for Divyafal Couture Saga Season 3.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ANumber of Passes: ${formData.numberOfPasses}%0ATotal Amount: ₹${totalAmount}`;

    const whatsappUrl = `https://wa.me/919424559252?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
  };

  const passFeatures = [
    "Entry to Divyafal Couture Saga Season 3",
    "Access to view all fashion shows",
    "Opportunity to meet designers",
    "Photo opportunities at exclusive spots",
    "Access to shopping area",
  ];

  return (
    <div className="min-h-screen bg-luxury-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-luxury-black to-luxury-black/95">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-luxury-gold mb-6 animate-fade-up">
            <Ticket className="h-10 w-10" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-luxury-white mb-4 animate-fade-up">
            Get Your <span className="text-luxury-gold">Visitor Pass</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-luxury-white/80 max-w-2xl mx-auto animate-fade-up">
            Join us for an unforgettable evening of luxury fashion, exclusive designs, and runway glamour
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Registration Form */}
            <Card className="border-luxury-gold/20 shadow-xl animate-fade-up">
              <CardHeader className="space-y-1">
                <CardTitle className="font-heading text-3xl text-luxury-black">
                  Get Visitor Passes
                </CardTitle>
                <CardDescription className="font-body text-luxury-black/70">
                  Fill in your details to purchase your visitor pass(es)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayNow} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-luxury-black font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-luxury-gold/30 focus:border-luxury-gold transition-luxury"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-luxury-black font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-luxury-gold/30 focus:border-luxury-gold transition-luxury"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-body text-luxury-black font-medium">
                      Number of Passes *
                    </Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        onClick={decrementPasses}
                        disabled={formData.numberOfPasses <= 1}
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 border-luxury-gold/30 text-luxury-black hover:bg-luxury-gold/10"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <div className="flex-1 text-center">
                        <span className="font-heading text-3xl font-bold text-luxury-black">
                          {formData.numberOfPasses}
                        </span>
                      </div>
                      <Button
                        type="button"
                        onClick={incrementPasses}
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 border-luxury-gold/30 text-luxury-black hover:bg-luxury-gold/10"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="bg-luxury-gold/10 rounded-lg p-6 border-2 border-luxury-gold/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-luxury-black/70">
                        {formData.numberOfPasses} × ₹{PRICE_PER_PASS}
                      </span>
                      <span className="font-heading text-2xl font-bold text-luxury-black">
                        ₹{totalAmount}
                      </span>
                    </div>
                    <p className="font-body text-sm text-luxury-black/60">
                      Total amount for {formData.numberOfPasses} pass{formData.numberOfPasses > 1 ? 'es' : ''}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light transition-luxury font-semibold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : `Pay Now - ₹${totalAmount}`}
                  </Button>

                  <p className="text-xs text-luxury-black/60 text-center font-body">
                    By proceeding, you agree to our terms and conditions. Payment is secure and encrypted.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Pass Benefits */}
            <div className="space-y-6 animate-fade-up">
              <Card className="border-luxury-gold/20 bg-gradient-to-br from-luxury-black to-luxury-black/95">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-luxury-white">
                    What's Included
                  </CardTitle>
                  <CardDescription className="font-body text-luxury-white/70">
                    Your visitor pass includes access to:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {passFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-luxury-white/90 font-body"
                      >
                        <Check className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Event Details */}
              <Card className="border-luxury-gold/20 bg-luxury-gold/5">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-luxury-black">
                    Event Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-body text-luxury-black/80">
                  <div>
                    <p className="font-semibold text-luxury-black">Date & Time</p>
                    <p>November 5, 2025 at 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-luxury-black">Venue</p>
                    <p className="text-sm">
                      Tulip In, Adjacent Mahendra Petrol Pump, Rohit Nagar,
                      Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462039
                    </p>
                  </div>
                 
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-luxury-gold/20">
                <CardContent className="pt-6">
                  <p className="font-body text-sm text-luxury-black/70 mb-2">
                    Need help? Contact us:
                  </p>
                  <a
                    href="https://wa.me/919977057045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxury-gold hover:text-luxury-gold-light font-semibold transition-luxury"
                  >
                    +91 99770 57045
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisitorPass;
