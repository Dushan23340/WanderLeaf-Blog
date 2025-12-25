import { Leaf, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "X", icon: Twitter, href: "#" },
  ];

  const footerLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container-blog">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 mb-6 group">
            <Leaf className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-heading text-2xl font-semibold">WanderLeaf</span>
          </a>

          {/* Tagline */}
          <p className="font-body text-primary-foreground/70 mb-8 max-w-sm">
            Hand-crafted with love from the road. <br />
            Stories that wander, words that linger.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary/80 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-[1px] bg-primary-foreground/20 mb-8" />

          {/* Footer Links */}
          <div className="flex items-center gap-6 mb-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-foreground/60 hover:text-primary-foreground font-body text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/50">
            © {currentYear} WanderLeaf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
