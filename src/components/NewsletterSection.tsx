import { useState } from "react";
import { Leaf, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the journey! 🌿",
      description: "You'll receive your first leaf-letter soon.",
    });
    setName("");
    setEmail("");
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container-blog">
        <div className="max-w-2xl mx-auto">
          {/* Newsletter Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
                  Get Leaf-Letters in Your Inbox
                </h2>
                <p className="font-body text-muted-foreground max-w-md mx-auto">
                  Join fellow wanderers for monthly tales from the trail, photography tips, 
                  and hidden destination guides.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-body font-medium tracking-wide transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-0.5"
                >
                  Join the Newsletter
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-center text-xs text-muted-foreground mt-6 font-body">
                No spam, ever. Unsubscribe anytime. Your inbox, your rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
