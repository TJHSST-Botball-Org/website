import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeXml, Wrench, Presentation } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const About = () => {
  const features = [
    {
      icon: <Presentation className="h-8 w-8 text-primary" />,
      title: "Strategic Design",
      description: "We analyze game challenges and develop winning strategies for our autonomous robots."
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Precision Building",
      description: "Using metal, plastic, and electronic parts to construct robust, competition-ready robots."
    },
    {
      icon: <CodeXml className="h-8 w-8 text-accent" />,
      title: "Programming in C++",
      description: "Writing sophisticated C++ code to control our robots' autonomous behavior."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every year, we design, build, and program two fully autonomous robots to solve various challenges in a game environment. We then compete in the Botball robotics competitions at both the regional and international level. We use a variety of metal, plastic, and electronic parts, and use C++ as our programming language.
          </p>
        </div>

        {/* Main content with image and description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <img 
                src="/src/assets/robot.jpg" 
                alt="Students working on robots in workshop" 
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Engineering Robots with Precision in Mind
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our team combines mechanical engineering, software development, and strategic thinking to create 
              robots that can navigate complex challenges autonomously. We use C++ as our primary programming 
              language and work with a variety of sensors, motors, and control systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From initial concept to competition day, our robots represent months of collaborative effort, 
              innovative problem-solving, and rigorous testing to ensure peak performance.
            </p>
            <Button onClick={() => window.open("https://github.com/TJHSST-Botball-Org", "_blank")}>
              View Our Code
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;