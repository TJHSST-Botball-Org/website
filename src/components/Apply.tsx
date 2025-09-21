import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Users, Lightbulb, Trophy, Brain, Code } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Strategic Design",
      description: "Develop strategies to tackle complex robotics challenges."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Precision Building",
      description: "Construct and assemble robots with accuracy and care."
    },
    {
      icon: <Code className="h-6 w-6 text-tech-orange" />,
      title: "Programming in C++",
      description: "Write efficient and robust code to control robot behavior."
    }
  ];

  const requirements = [
    "Current TJHSST student in good academic standing",
    "Enthusiasm for robotics and problem-solving",
    "Commitment to regular meeting attendance",
    "Willingness to learn and collaborate with teammates",
    "No prior robotics experience required!"
  ];

  if (!isVisible) {
    return null;
  }

  return (
    <section id="apply" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Join Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to dive into the exciting world of robotics? We're always looking for passionate students 
            to join our championship-winning team.
          </p>
        </div>

        {/* Coming Up */}
        <div className="flex justify-center mb-16">
          <div className="space-y-8 animate-slide-up max-w-2xl w-full" style={{ animationDelay: "0.2s" }}>
            <Card className="card-tech">
              <CardContent className="p-8">
                <a 
                  href="https://ion.tjhsst.edu/eighth/activity/812" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center hover:underline">
                    8th Period Interest Meetings & Tryouts
                  </h3>
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/10 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-primary mb-2">Interest Meeting</h4>
                    <p className="text-sm text-muted-foreground">Friday, September 5th - B Block</p>
                  </div>
                  <div className="p-4 bg-muted/10 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-primary mb-2">Interest Meeting</h4>
                    <p className="text-sm text-muted-foreground">Friday, September 12th - B Block</p>
                  </div>
                  <div className="p-4 bg-muted/10 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-primary mb-2">Tryouts</h4>
                    <p className="text-sm text-muted-foreground">Friday, September 19th - A (Help Center - Billington) & B Block</p>
                  </div>
                  <div className="p-4 bg-muted/10 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-primary mb-2">Tryouts</h4>
                    <p className="text-sm text-muted-foreground">Friday, October 3rd - A (Help Center - Billington) & B Block</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
