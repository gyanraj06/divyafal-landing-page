import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, X } from "lucide-react";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<null | { type: 'image' | 'video', src: string, title: string }>(null);

  // Mock gallery data - in a real app, this would come from an API
  const galleryItems = [
    {
      type: 'image' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Runway Collection 2024',
      category: 'Runway'
    },
    {
      type: 'video' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Behind the Scenes',
      category: 'Backstage'
    },
    {
      type: 'image' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Designer Spotlight',
      category: 'Portraits'
    },
    {
      type: 'image' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Elegant Evening Wear',
      category: 'Collections'
    },
    {
      type: 'video' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Fashion Show Highlights',
      category: 'Shows'
    },
    {
      type: 'image' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Model Preparation',
      category: 'Backstage'
    },
    {
      type: 'image' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Luxury Accessories',
      category: 'Details'
    },
    {
      type: 'image' as const,
      src: '/api/placeholder/400/600',
      thumbnail: '/api/placeholder/400/600',
      title: 'Runway Finale',
      category: 'Runway'
    }
  ];

  const categories = ['All', 'Runway', 'Backstage', 'Collections', 'Portraits', 'Details', 'Shows'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-luxury-white mb-6">
            Fashion <span className="text-luxury-gold">Gallery</span>
          </h2>
          <p className="font-body text-xl text-luxury-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore moments of elegance from our previous shows, behind-the-scenes glimpses, 
            and the artistry that defines Divyafal fashion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light"
                  : "border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-up">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="bg-luxury-white/5 border-luxury-gold/20 overflow-hidden hover:shadow-gold transition-luxury hover-scale cursor-pointer"
              onClick={() => setSelectedMedia({ type: item.type, src: item.src, title: item.title })}
            >
              <CardContent className="p-0 relative group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-luxury-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="h-12 w-12 text-luxury-gold" />
                    ) : (
                      <ImageIcon className="h-12 w-12 text-luxury-gold" />
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-luxury-gold/90 text-luxury-black text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </div>

                  {/* Video Indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 left-4 bg-luxury-black/80 text-luxury-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Video
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-luxury-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-luxury-white/60">{item.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-luxury-white hover:text-luxury-gold z-10"
            >
              <X className="h-6 w-6" />
            </Button>

            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}

            <div className="mt-4 text-center">
              <h3 className="font-heading text-xl text-luxury-white">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;