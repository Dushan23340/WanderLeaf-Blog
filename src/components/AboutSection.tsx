import { Camera, MapPin, Feather } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-blog">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar & Visual Side */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Avatar Circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-muted to-secondary/20 border-4 border-background shadow-card overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="About the WanderLeaf traveler"
                  className="w-full h-full object-cover opacity-0 scale-110 transition-all duration-700 ease-in-out"
                  onLoad={(e) => {
                    // Fade in the image when loaded
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                    target.style.transform = 'scale(1)';
                    
                    // Hide the loading placeholder
                    const parent = target.parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.placeholder-content') as HTMLElement;
                      if (placeholder) placeholder.style.opacity = '0';
                    }
                  }}
                  onError={(e) => {
                    // Fallback to the original placeholder if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.placeholder-content') as HTMLElement;
                      if (placeholder) {
                        placeholder.style.opacity = '1';
                        placeholder.style.display = 'flex';
                      }
                    }
                  }}
                />
                <div className="w-full h-full flex items-center justify-center placeholder-content absolute inset-0 transition-opacity duration-300">
                  <span className="font-heading text-6xl text-primary/40">W</span>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-secondary/90 rounded-full flex items-center justify-center shadow-soft animate-float">
                <Camera className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div 
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center shadow-soft animate-float"
                style={{ animationDelay: "1s" }}
              >
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div 
                className="absolute top-1/2 -left-6 w-10 h-10 bg-muted rounded-full flex items-center justify-center shadow-soft animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Feather className="w-4 h-4 text-foreground" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
              The Storyteller
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              About the Traveler
            </h2>
            <div className="w-24 h-[2px] bg-primary/40 mb-8 mx-auto lg:mx-0" />
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Hello, I'm the wanderer behind WanderLeaf. For the past decade, I've been 
                trading city lights for campfire glows, documenting the quiet magic of 
                wild places through words and photographs.
              </p>
              <p>
                My journeys take me from mist-shrouded Scottish lochs to sun-baked 
                Moroccan dunes, always seeking those moments of profound connection 
                with the natural world. Each story here is born from dusty trails, 
                weathered notebooks, and a deep reverence for the earth.
              </p>
              <p className="italic text-foreground/70">
                "In every walk with nature, one receives far more than they seek."
                <span className="block text-sm mt-1 not-italic">— John Muir</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <span className="block font-heading text-3xl font-semibold text-primary">47</span>
                <span className="text-sm text-muted-foreground font-body">Countries</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading text-3xl font-semibold text-secondary">200+</span>
                <span className="text-sm text-muted-foreground font-body">Stories</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading text-3xl font-semibold text-primary">10</span>
                <span className="text-sm text-muted-foreground font-body">Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
