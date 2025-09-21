import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Instagram, Facebook } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBeforeDeadline, setIsBeforeDeadline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const deadline = new Date("2025-10-05T23:59:00");
    const now = new Date();
    setIsBeforeDeadline(now <= deadline);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-gray-700"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 sm:h-20">
          {/* Removed Logo and Text */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Gallery
            </button>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() =>
                  window.open("https://github.com/TJHSST-Botball-Org", "_blank")
                }
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() =>
                  window.open("https://www.instagram.com/tj.botball/", "_blank")
                }
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
            {isBeforeDeadline && (
              <Button onClick={() => scrollToSection("apply")}>
                Apply for the Team
              </Button>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                What We Do
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Gallery
              </button>
              <div className="flex items-center space-x-3 px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://github.com/TJHSST-Botball-Org",
                      "_blank"
                    )
                  }
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/tj.botball/",
                      "_blank"
                    )
                  }
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/groups/348762459668723/",
                      "_blank"
                    )
                  }
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
              {isBeforeDeadline && (
                <div className="px-3 py-2">
                  <Button
                    onClick={() => scrollToSection("apply")}
                    className="w-full"
                  >
                    Apply for the Team
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
