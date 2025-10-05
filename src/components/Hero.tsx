import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Code, Trophy } from "lucide-react";
import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    }
  };

  // Check if applications are closed
  const today = new Date();
  const cutoffDate = new Date("2025-10-05T23:59:00");
  const applicationsClosed = today > cutoffDate;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background pt-24 sm:pt-28">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-primary/5"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8">
          <img
            className="mx-auto w-36 sm:w-40 md:w-48 lg:w-56 h-auto"
            src="/botball/assets/botball-logo-light.svg"
            alt="TJ Botball Logo"
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground">
            TJHSST Botball Robotics
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            The Official Botball Robotics team for Thomas Jefferson High School for Science and Technology
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Designing, building, and programming two autonomous robots to compete at regional and international levels.
          </p>

          {applicationsClosed ? (
            <p className="mt-4 text-red-500 font-semibold">
              Applications are closed.
            </p>
          ) : (
            <p className="mt-4 text-green-500 font-semibold">
              Applications are open.
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-3">
            <Button 
              size="lg"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("team")}
            >
              Meet the Team
            </Button>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;