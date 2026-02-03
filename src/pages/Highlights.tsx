import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import highlight1 from "@/assets/highlight-1.png";
import highlight2 from "@/assets/highlight-2.png";
import highlight3 from "@/assets/highlight-3.png";
import highlight4 from "@/assets/highlight-4.png";
import highlight5 from "@/assets/highlight-5.png";
import highlight6 from "@/assets/highlight-6.png";

const Highlights = () => {
    const highlightImages = [
        {
            url: highlight1,
            title: "Runway Elegance",
            description: "Season 2 Grand Finale",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: highlight2,
            title: "Behind the Scenes",
            description: "Exclusive Backstage Access",
            className: "md:col-span-2 md:row-span-1",
        },
        {
            url: highlight3,
            title: "Designer Showcase",
            description: "Spotlight on Innovation",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: highlight4,
            title: "Model Walk",
            description: "Grace and Style",
            className: "md:col-span-2 md:row-span-1",
        },
        {
            url: highlight5,
            title: "Couture Gala",
            description: "Evening of Luxury",
            className: "md:col-span-2 md:row-span-1",
        },
        {
            url: highlight6,
            title: "Fashion Fusion",
            description: "Tradition meets Modernity",
            className: "md:col-span-1 md:row-span-1",
        },
    ];

    return (
        <div className="min-h-screen bg-luxury-white">
            <Navbar />

            <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12 animate-fade-up">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-light transition-luxury mb-6 group text-lg font-medium"
                    >
                        <MoveLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-luxury-black mb-4">
                        Event <span className="text-luxury-gold">Highlights</span>
                    </h1>
                    <p className="font-body text-lg text-luxury-black/70 max-w-2xl">
                        A glimpse into the extraordinary moments of Divyafal Couture Saga.
                        Witness the fusion of artistry, luxury, and style.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] animate-fade-up">
                    {highlightImages.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-xl bg-luxury-black/5 ${image.className} transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/20 cursor-pointer`}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-heading text-xl font-bold text-luxury-white mb-1">
                                    {image.title}
                                </h3>
                                <p className="font-body text-sm text-luxury-gold/90">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Highlights;
