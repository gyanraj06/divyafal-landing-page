import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Palette, Crown } from "lucide-react";
import designStory from "@/assets/design-story.jpg";

const About = () => {
  const highlights = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Legacy Since 2010",
      description: "Founded by a visionary entrepreneur who started with just 16 sarees and built a luxury fashion empire."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Vision",
      description: "Showcasing innovative designs that blend traditional craftsmanship with contemporary elegance."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personalized Luxury",
      description: "Every piece tells a story of individuality, crafted to celebrate the unique beauty of each wearer."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Fashion Excellence",
      description: "Featuring renowned designers, professional models, and the latest trends in luxury fashion."
    }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-luxury-black mb-6">
            The Story of <span className="text-luxury-gold">Divyafal</span>
          </h2>
          <p className="font-body text-xl text-luxury-black/70 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to the pinnacle of luxury fashion. Discover the journey 
            of passion, creativity, and unwavering dedication to excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <h3 className="font-heading text-3xl font-bold text-luxury-black mb-6">
                A Journey of <span className="text-luxury-maroon">Passion</span> & <span className="text-luxury-gold">Purpose</span>
              </h3>
              <p className="font-body text-lg text-luxury-black/80 mb-6 leading-relaxed">
                In 2010, our founder embarked on an extraordinary journey with nothing but a dream 
                and 16 carefully curated sarees. What started as a small venture has blossomed into 
                a luxury fashion design studio that celebrates the art of personalized elegance.
              </p>
              <p className="font-body text-lg text-luxury-black/80 mb-6 leading-relaxed">
                Today, Divyafal stands as a testament to the power of vision, creativity, and 
                unwavering commitment to excellence. Our fashion show represents the culmination 
                of years of artistic exploration and the celebration of individual style.
              </p>
              <p className="font-body text-lg text-luxury-black/80 mb-8 leading-relaxed">
                This year's showcase promises to be our most spectacular yet, featuring cutting-edge 
                designs, world-class models, and an unforgettable experience that defines luxury fashion.
              </p>
            </div>

          </div>

          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img 
                src={designStory} 
                alt="Fashion design process" 
                className="w-full h-96 object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent"></div>
            </div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-luxury-gold rounded-lg opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-luxury-maroon rounded-lg opacity-60"></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
          {highlights.map((item, index) => (
            <Card key={index} className="border-luxury-gold/20 hover:shadow-gold transition-luxury hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-luxury-gold mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-heading text-xl font-semibold text-luxury-black mb-3">
                  {item.title}
                </h4>
                <p className="font-body text-luxury-black/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;