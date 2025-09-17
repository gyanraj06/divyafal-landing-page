import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-luxury-black/95 backdrop-blur-sm border-b border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-heading text-2xl font-bold text-luxury-gold">
              Divyafal
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-luxury-white hover-gold font-body font-medium transition-luxury px-3 py-2 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://trippechalo.in/booking/event/93359094-8380-4c96-b834-285669a68ea4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-luxury"
              >
                Register Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-luxury-gold hover:bg-luxury-gold/10"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-luxury-black/98 backdrop-blur-sm border-t border-luxury-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-luxury-white hover-gold block px-3 py-2 text-base font-medium transition-luxury"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button
                className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                variant="outline"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
