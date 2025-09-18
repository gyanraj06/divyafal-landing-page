import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Star, Award, Gem } from "lucide-react";
import appyTheCoachLogo from "@/assets/apply-the cocch.png";
import coreCatalystLogo from "@/assets/corecatalyst.png";
import dahaneLogo from "@/assets/dahana.png";
import trippechaloLogo from "@/assets/trippechalo.png";

const Sponsors = () => {
  // Mock sponsor data - in a real app, this would come from an API
  const sponsors = [
    { name: "Luxury Fashion Co.", tier: "Platinum", logo: "LFC" },
    { name: "Elite Boutique", tier: "Gold", logo: "EB" },
    { name: "Designer Hub", tier: "Gold", logo: "DH" },
    { name: "Fashion Forward", tier: "Silver", logo: "FF" },
    { name: "Style Studio", tier: "Silver", logo: "SS" },
    { name: "Couture Collective", tier: "Silver", logo: "CC" },
    { name: "Beauty Brands", tier: "Bronze", logo: "BB" },
    { name: "Accessory Avenue", tier: "Bronze", logo: "AA" },
  ];

  const sponsorTiers = [
    {
      tier: "Platinum",
      icon: <Gem className="h-8 w-8" />,
      color: "text-luxury-gold",
      bgColor: "bg-luxury-gold/10",
      borderColor: "border-luxury-gold/30",
      benefits: [
        "Title Partner: “Presented by [Your Brand]",
        "Prime logo placement on all collaterals (backdrop, entry, creatives)",
        "Extensive PR & press release mentions & On-stage acknowledgment + felicitation",
        "5 social media posts + reel series",
        "Product display opportunity during runway show (accessories/props)",
        "Full-page brochure advertisement",
        "Premium stall with exclusive branding",
        "6 VIP passes (front-row seating)",
      ],
    },
    {
      tier: "Gold",
      icon: <Crown className="h-8 w-8" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      benefits: [
        "Prominent logo placement on stage backdrop & creatives",
        "3 social media shoutouts (posts + reels)",
        "On-stage recognition by Emcee",
        "Half-page advertisement in event brochure",
        "Branded stall space",
        "4 complimentary passes",
        "Networking opportunity with designers & media",
      ],
    },
    {
      tier: "Silver",
      icon: <Star className="h-8 w-8" />,
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/30",
      benefits: [
        "Logo on event backdrop, standees & brochures",
        "Dedicated Instagram story & tag pre-event",
        "2 complimentary passes",
        "Priority stall space for brand display",
        "Leaflet/product sample inclusion in guest kits",
      ],
    },
    {
      tier: "Bronze",
      icon: <Award className="h-8 w-8" />,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      borderColor: "border-orange-600/30",
      benefits: [
        "Logo presence on digital invites & event posters",
        "Brand mention in post-event “Thank You” reel",
        "1 complimentary pass for the show",
        "Shared stall space for product sampling/display",
      ],
    },
  ];

  const getSponsorsByTier = (tier: string) => {
    return sponsors.filter((sponsor) => sponsor.tier === tier);
  };

  const getTierConfig = (tier: string) => {
    return sponsorTiers.find((t) => t.tier === tier) || sponsorTiers[3];
  };

  return (
    <section id="sponsors" className="py-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-luxury-black mb-6">
            Our <span className="text-luxury-gold">Partners</span>
          </h2>
          <p className="font-body text-xl text-luxury-black/70 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with industry leaders who share our vision of
            excellence and luxury in fashion.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12 mb-16">
          {sponsorTiers.map((tierConfig) => {
            const tierSponsors = getSponsorsByTier(tierConfig.tier);
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tierConfig.tier} className="animate-fade-up">
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center gap-3 ${tierConfig.color} mb-4`}
                  >
                    {tierConfig.icon}
                    <h3 className="font-heading text-2xl font-bold">
                      {tierConfig.tier} Partners
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {tierSponsors.map((sponsor, index) => (
                    <Card
                      key={index}
                      className={`${tierConfig.bgColor} ${tierConfig.borderColor} border-2 hover:shadow-gold transition-luxury hover-scale`}
                    >
                      <CardContent className="p-8 text-center">
                        <div
                          className={`text-6xl font-bold ${tierConfig.color} mb-4`}
                        >
                          {sponsor.logo}
                        </div>
                        <h4 className="font-heading text-lg font-semibold text-luxury-black">
                          {sponsor.name}
                        </h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners */}
        <div className="mb-16 animate-fade-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 text-luxury-gold mb-4">
              <Star className="h-8 w-8" />
              <h3 className="font-heading text-2xl font-bold text-luxury-black">
                Our Partners
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Card className="bg-luxury-gold/10 border-luxury-gold/30 border-2 hover:shadow-gold transition-luxury hover-scale h-32">
                <CardContent className="p-0 h-full">
                  <img
                    src={dahaneLogo}
                    alt="Dahana Media Works"
                    className="w-full h-full object-cover rounded"
                  />
                </CardContent>
              </Card>
              <h4 className="font-heading text-lg font-semibold text-luxury-black mt-4">
                Dahana Media Works
              </h4>
              <p className="font-body text-sm text-luxury-black/60 mt-1">
                Media Partner
              </p>
            </div>
            <div className="text-center">
              <Card className="bg-luxury-gold/10 border-luxury-gold/30 border-2 hover:shadow-gold transition-luxury hover-scale h-32">
                <CardContent className="p-0 h-full">
                  <img
                    src={trippechaloLogo}
                    alt="TrippeChalo"
                    className="w-full h-full object-cover rounded"
                  />
                </CardContent>
              </Card>
              <h4 className="font-heading text-lg font-semibold text-luxury-black mt-4">
                TripPeChalo
              </h4>
              <p className="font-body text-sm text-luxury-black/60 mt-1">
                Ticketing Partner
              </p>
            </div>
            <div className="text-center">
              <Card className="bg-luxury-gold/10 border-luxury-gold/30 border-2 hover:shadow-gold transition-luxury hover-scale h-32">
                <CardContent className="p-0 h-full">
                  <img
                    src={appyTheCoachLogo}
                    alt="Appy The Coach"
                    className="w-full h-full object-cover rounded"
                  />
                </CardContent>
              </Card>
              <h4 className="font-heading text-lg font-semibold text-luxury-black mt-4">
                Appy The Coach
              </h4>
              <p className="font-body text-sm text-luxury-black/60 mt-1">
                Growth Partner
              </p>
            </div>
            <div className="text-center">
              <Card className="bg-luxury-gold/10 border-luxury-gold/30 border-2 hover:shadow-gold transition-luxury hover-scale h-32">
                <CardContent className="p-0 h-full">
                  <img
                    src={coreCatalystLogo}
                    alt="Core Catalyst"
                    className="w-full h-full object-cover rounded"
                  />
                </CardContent>
              </Card>
              <h4 className="font-heading text-lg font-semibold text-luxury-black mt-4">
                Core Catalyst
              </h4>
              <p className="font-body text-sm text-luxury-black/60 mt-1">
                Growth Partner
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Opportunities */}
        <div className="bg-luxury-black rounded-2xl p-8 md:p-12 animate-fade-up">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-luxury-white mb-4">
              Become a <span className="text-luxury-gold">Sponsor</span>
            </h3>
            <p className="font-body text-lg text-luxury-white/80 max-w-2xl mx-auto">
              Join us in celebrating luxury fashion and connect with an
              exclusive audience of fashion enthusiasts, industry professionals,
              and trendsetters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {sponsorTiers.map((tier) => (
              <Card
                key={tier.tier}
                className={`${tier.bgColor} ${tier.borderColor} border`}
              >
                <CardContent className="p-6">
                  <div className={`${tier.color} mb-4 flex justify-center`}>
                    {tier.icon}
                  </div>
                  <h4 className="font-heading text-xl font-bold text-luxury-white text-center mb-4">
                    {tier.tier}
                  </h4>
                  <ul className="space-y-2 text-sm text-luxury-white/80">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className={`${tier.color} text-xs mt-1`}>•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/919977057045?text=Hi%2C%20I%20want%20to%20be%20a%20partner%20in%20divyafal%20counture%20Saga%20Season%203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light transition-luxury font-semibold px-8"
              >
                Partner with Us
              </Button>
            </a>

            <p className="font-body text-luxury-white/60 mt-4">
              Contact us for customized sponsorship packages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
