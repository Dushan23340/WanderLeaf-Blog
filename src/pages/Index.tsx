import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import DestinationsGallery from "@/components/DestinationsGallery";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-forest.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WanderLeaf | Nature & Travel Journal</title>
        <meta 
          name="description" 
          content="Stories from forests, mountains, and hidden paths. A nature and travel blog documenting wild adventures and quiet moments in the outdoors." 
        />
        <meta name="keywords" content="travel blog, nature journal, hiking, mountains, forests, outdoor adventures" />
        <link rel="canonical" href="https://wanderleaf.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection heroImage={heroImage} />
          <FeaturedPosts />
          <DestinationsGallery />
          <AboutSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
