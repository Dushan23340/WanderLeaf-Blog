import { ArrowRight, Mountain, TreePine, Waves, X } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    category: "Mountains",
    icon: Mountain,
    title: "Morning Light on Alpine Peaks",
    excerpt: "The first rays of dawn paint the granite faces in shades of rose and gold. High above the valley floor, where the air thins and the world grows quiet, I found my peace.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: `The alpine air was thin and crisp as I made my way to the summit. Each step brought a new perspective, a new wonder. The granite faces of the peaks stood like ancient sentinels against the darkening sky, waiting for the first light of dawn.

As the sun crested the horizon, everything changed. The granite faces began to glow with an ethereal light, painted in shades of rose and gold that no artist could ever truly capture. The world below was still shrouded in shadow and mist, but up here, we were among the peaks and the clouds, part of something greater than ourselves.

Time seemed suspended in those moments. The only sounds were our breathing and the whisper of wind through the rocks. I found a peace there that I had been seeking for years, a connection to something ancient and enduring.`
  },
  {
    id: 2,
    category: "Forests",
    icon: TreePine,
    title: "Lost in the Moss-Covered Cathedral",
    excerpt: "Ancient trees arch overhead like the ribs of some great beast. Ferns carpet the forest floor, and the only sounds are birdsong and the gentle drip of morning dew.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: `The forest floor was soft beneath my feet, cushioned by centuries of fallen leaves and moss. Ancient trees stretched impossibly high above me, their trunks so massive I could not wrap my arms around them. The canopy was so thick that only dappled sunlight reached the forest floor, creating an otherworldly atmosphere.

Moss hung from branches like Spanish moss, creating natural curtains that seemed to whisper secrets as I passed. Ferns unfurled with the patience of eons, and tiny wildflowers dotted the forest floor with splashes of color.

The silence was profound, broken only by the occasional call of a distant bird or the gentle drip of morning dew from leaves above. I felt as if I had entered a natural cathedral, a place of worship built by time and patience, where every breath was a prayer.`
  },
  {
    id: 3,
    category: "Coastlines",
    icon: Waves,
    title: "Where the Cliffs Meet the Sea",
    excerpt: "Salt spray and wild winds greet each morning here. The Atlantic crashes against stone that has stood for millennia, carving caves and arches into the headlands.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: `The salt spray hit my face as I stood on the cliff's edge, watching the Atlantic Ocean crash against the stone below. The sound was thunderous, a constant percussion that had been playing for millennia. Each wave threw itself against the rocks with a force that had carved caves and arches into the headlands over countless years.

The wind was wild and untamed here, carrying stories from across the ocean. Gulls circled overhead, crying their ancient songs, while below, the sea foam danced and retreated in an endless rhythm.

I stood there as the morning sun broke through the clouds, casting the churning waters in shades of silver and gold. The cliffs had witnessed countless sunrises, countless storms, countless moments of beauty such as this. There was something humbling about being part of such an ancient dance.`
  },
];

const FeaturedPosts = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  
  const openStory = (post) => {
    setSelectedStory(post);
  };
  
  const closeStory = () => {
    setSelectedStory(null);
  };
  
  return (
    <>
      <section id="journal" className="py-24 bg-background">
        <div className="container-blog">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
              The Journal
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Featured Journeys
            </h2>
            <div className="w-24 h-[2px] bg-primary/40 mx-auto" />
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to a generic nature image if the specific image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = "/placeholder.svg";
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <post.icon className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-body font-medium px-3 py-1.5 rounded-full border border-border/50">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openStory(post);
                    }}
                    className="inline-flex items-center gap-2 text-secondary hover:text-primary font-body text-sm font-medium transition-colors duration-300 group/link"
                  >
                    Read story
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    
    {/* Story Modal */}
    {selectedStory && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-card rounded-2xl shadow-2xl border border-border">
          {/* Close Button */}
          <button 
            onClick={closeStory}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background text-foreground transition-colors duration-300"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Story Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Story Header */}
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedStory.image} 
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-primary-foreground">
                <span className="inline-block px-3 py-1.5 bg-background/80 backdrop-blur-sm text-xs font-body font-medium rounded-full mb-3">
                  {selectedStory.category}
                </span>
                <h2 className="font-heading text-2xl md:text-4xl font-semibold mb-2">
                  {selectedStory.title}
                </h2>
              </div>
            </div>
            
            {/* Story Body */}
            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                {selectedStory.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-foreground/90 font-body leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default FeaturedPosts;
