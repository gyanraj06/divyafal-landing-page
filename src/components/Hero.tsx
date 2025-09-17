import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-fashion-show.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set event date - November 5th, 2025 at 6:00 PM (updated to 2025)
  const eventDate = useMemo(() => new Date("2025-11-05T18:00:00"), []);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = eventDate.getTime() - now;

    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    // Calculate initial time immediately
    setTimeLeft(calculateTimeLeft());

    // Set up interval to update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-luxury-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-up pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-luxury-white mb-6 leading-tight">
            <span className="text-luxury-gold">Elegance.</span><br />
            <span className="text-luxury-white">Distinctive.</span><br />
            <span className="text-luxury-gold">Personalized.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-xl md:text-2xl text-luxury-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury fashion at Divyafal Fashion Show. 
            Where creativity meets elegance on the runway.
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-luxury-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-luxury-gold" />
              <span className="font-body">November 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-luxury-gold" />
              <span className="font-body">6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-luxury-gold" />
              <a href="https://maps.app.goo.gl/QZSKLJj737QoP5Bp9" target="_blank" rel="noopener noreferrer">
  <span>Tulip In, Bhopal</span>
</a>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-10">
            <h3 className="font-heading text-2xl text-luxury-gold mb-6">Event Countdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-luxury-black/50 border border-luxury-gold/30 p-4 rounded">
                  <div className="text-3xl font-bold text-luxury-gold">{value}</div>
                  <div className="text-sm text-luxury-white/80 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
  href="https://trippechalo.in/booking/event/93359094-8380-4c96-b834-285669a68ea4"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light transition-luxury font-semibold px-8 py-3"
  >
    Register for Auditions
  </Button>
</a>

          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
      
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;