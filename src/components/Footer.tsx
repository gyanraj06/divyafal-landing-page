import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Sponsors", href: "#sponsors" }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/divyafalcouturesaga?igsh=M2Q2djQzMTcydzJo", name: "Instagram" }
  ];

  return (
    <footer className="bg-luxury-black text-luxury-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-3xl font-bold text-luxury-gold mb-4">
              Divyafal
            </h3>
            <p className="font-body text-luxury-white/80 mb-6 leading-relaxed">
              Luxury fashion design studio creating elegance, distinctive style, 
              and personalized experiences since 2010.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-luxury-white hover:text-luxury-gold transition-luxury p-2 border border-luxury-white/20 rounded-lg hover:border-luxury-gold/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-luxury-gold mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div className="text-luxury-white/80 text-sm">
                  <p>Hotel Tulip Inn,</p>
                  <p>Adjacent Mahendra Petrol Pump,</p>
                  <p>Rohit Nagar, Gulmohar Colony, Bhopal</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <p className="text-luxury-white/80 text-sm">+91 7000570055</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <p className="text-luxury-white/80 text-sm">divyafalthecreations@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-luxury-gold mb-6">
              Event Details
            </h4>
            <div className="space-y-3">
              <div className="bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg p-4">
                <h5 className="font-semibold text-luxury-gold text-sm mb-2">Fashion Show</h5>
                <p className="text-luxury-white/80 text-sm">November 5, 2025</p>
                <p className="text-luxury-white/80 text-sm">6:00 PM onwards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-luxury-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-luxury-white/60 text-sm">
              © 2025 Mounterra Design Studio & TripPeChalo. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="http://company.trippechalo.in/" className="text-luxury-white/60 hover:text-luxury-gold transition-luxury flex items-center gap-2">
                <Globe className="h-4 w-4" />
                company.trippechalo.in
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;