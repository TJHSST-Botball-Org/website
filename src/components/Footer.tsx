import { Button } from "@/components/ui/button";
import { Github, Instagram, Facebook, Mail, ExternalLink, Heart } from "lucide-react";
import logoImage from "/public/favicon.ico";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "What We Do", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Join Us", href: "#apply" }
  ];

  const resources = [
    { name: "Full Gallery", href: "https://activities.tjhsst.edu/botball/gallery.html" },
    { name: "Botball Official", href: "https://www.botball.org/" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoImage} alt="TJ Botball Logo" className="h-12 w-12 animate-glow-pulse" />
              <span className="text-2xl font-bold text-gradient">TJHSST Botball</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              The official Botball robotics team for Thomas Jefferson High School for Science and Technology. 
              Building autonomous robots and making new friends along the way.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => window.open("https://github.com/TJHSST-Botball-Org", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => window.open("https://www.instagram.com/tj.botball/", "_blank")}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => window.open("https://www.facebook.com/groups/348762459668723/", "_blank")}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => window.location.href = "mailto:botball@tjhsst.edu"}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12 border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground mb-2">Email</h5>
              <p className="text-muted-foreground">botball.tj@gmail.com</p>
            </div>
            <div>
              <Instagram className="h-8 w-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground mb-2">Follow Us</h5>
              <p className="text-muted-foreground">@tj.botball</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex flex-col items-center text-muted-foreground mb-4 md:mb-0">
            <span>© 2025 TJHSST Botball Robotics. All rights reserved.</span>
            <span className="text-xs">Created with <Heart className="inline h-4 w-4 text-red-500" /> by Madhav Tirumale - 2025</span>
          </div>
          <div className="text-muted-foreground text-sm">
            <a 
              href="https://activities.tjhsst.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              TJ Student Activities
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;