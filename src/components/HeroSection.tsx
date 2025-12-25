import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  heroImage?: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <img
            src={heroImage}
            alt="Misty forest path through nature"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-blog text-center">
        <div className="max-w-3xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="w-16 h-[2px] bg-primary/60" />
            <div className="w-2 h-2 bg-secondary rounded-full mx-3 -mt-[3px]" />
            <div className="w-16 h-[2px] bg-primary/60" />
          </div>

          <h1 
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            WanderLeaf
          </h1>

          <p 
            className="font-heading text-xl md:text-2xl text-foreground/80 italic mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Stories from forests, mountains, and hidden paths
          </p>

          <p 
            className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            A journal of wanderings through the wild corners of the world, 
            where every trail tells a story and every sunset paints a memory.
          </p>

          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#journal"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full font-body font-medium tracking-wide transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1"
            >
              Start reading
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
