import { useState } from "react";

const moodTags = [
  "Foggy mornings",
  "Golden deserts",
  "Rainy forests",
  "Starlit nights",
  "Coastal dawns",
  "Snowy peaks",
  "Wildflower meadows",
  "Autumn trails",
];

const destinations = [
  { name: "Scottish Highlands", mood: "Misty", image: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" },
  { name: "Patagonia", mood: "Wild", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { name: "Black Forest", mood: "Enchanted", image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" },
  { name: "Norwegian Fjords", mood: "Majestic", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { name: "Moroccan Sahara", mood: "Golden", image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" },
  { name: "New Zealand Alps", mood: "Pristine", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" },
];

// Mapping mood tags to destination moods
const moodMapping = {
  'Foggy mornings': ['Misty'],
  'Golden deserts': ['Golden'],
  'Rainy forests': ['Enchanted'],
  'Starlit nights': ['Majestic'],
  'Coastal dawns': ['Majestic'],
  'Snowy peaks': ['Pristine'],
  'Wildflower meadows': ['Pristine'],
  'Autumn trails': ['Wild'],
};

// Function to check if a destination matches a mood tag
const destinationMatchesMood = (destination, moodTag) => {
  if (!moodTag) return true;
  
  const mappedMoods = moodMapping[moodTag] || [moodTag];
  return mappedMoods.some(mappedMood => 
    destination.mood.toLowerCase() === mappedMood.toLowerCase()
  );
};

const DestinationsGallery = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  return (
    <section id="destinations" className="py-24 bg-muted/30">
      <div className="container-blog">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
            Explore
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Destinations by Mood
          </h2>
          <div className="w-24 h-[2px] bg-primary/40 mx-auto" />
        </div>

        {/* Mood Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            key="all"
            onClick={() => setSelectedMood(null)}
            className={`px-5 py-2 rounded-full border font-body text-sm transition-all duration-300 hover:shadow-soft animate-fade-in ${
              !selectedMood
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background border-border text-foreground/70 hover:border-primary hover:text-primary'
            }`}
          >
            All
          </button>
          {moodTags.map((tag, index) => (
            <button
              key={tag}
              onClick={() => setSelectedMood(selectedMood === tag ? null : tag)}
              className={`px-5 py-2 rounded-full border font-body text-sm transition-all duration-300 hover:shadow-soft animate-fade-in ${
                selectedMood === tag
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border text-foreground/70 hover:border-primary hover:text-primary'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations
            .filter(destination => destinationMatchesMood(destination, selectedMood))
            .map((destination, index) => (
            <div
              key={destination.name}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft hover-lift cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Destination Image */}
              <img 
                src={destination.image} 
                alt={`${destination.name} - ${destination.mood} destination`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback to a generic nature image if the specific image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = "/placeholder.svg";
                }}
              />
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-24 h-24 border border-foreground/20 rounded-full" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-foreground/20 rounded-full" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent">
                <span className="text-primary-foreground/90 font-body text-xs tracking-widest uppercase mb-1">
                  {destination.mood}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-primary-foreground">
                  {destination.name}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGallery;
