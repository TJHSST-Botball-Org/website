import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, Award, Code2 } from "lucide-react";

const Team = () => {
  const teamMembers = [
    { name: "Devin Park", year: "2026", image: "src/assets/members/devin.png", heightImage: "300px" },
    { name: "Eric Guo", year: "2026", image: "src/assets/members/eric.png", heightImage: "300px" },
    { name: "Kimberly Cruz-Cruz", year: "2026", image: "src/assets/members/kim.png", heightImage: "300px" },
    { name: "Kara Tran", year: "2026", image: "src/assets/members/kara.png", heightImage: "300px" },
    { name: "Jax O'Donoghue", year: "2026", image: "src/assets/members/jax.jpg", heightImage: "300px" },
    { name: "Surya Raj", year: "2027", image: "src/assets/members/surya.jpg", heightImage: "300px" },
    { name: "Zoya Moloo", year: "2027", image: "src/assets/members/zoya.jpg", heightImage: "300px" },
    { name: "Agastya Mittal", year: "2028", image: "src/assets/members/agastya.png", heightImage: "300px" },
    { name: "Claire Zhu", year: "2028", image: "src/assets/members/claire.jpg", heightImage: "300px" },
    { name: "Kyle Penska", year: "2028", image: "src/assets/members/kyle.png", heightImage: "300px" },
    { name: "Madhav Tirumale", year: "2028", image: "src/assets/members/madhav.png", heightImage: "300px" },
    { name: "Ronit Singh", year: "2028", image: "src/assets/members/ronit.jpg", heightImage: "300px" },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            2024-2025 Team
          </h2>
          <img src="src/assets/botballgroupteam.jpg" className="mx-auto rounded-2xl w-[600px] h-[400px] object-cover"/>
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto mb-8 mt-5">
            Mr. Billington, Claire Zhu, Zoya Moloo, Kyle Penska, Jax O'Donoghue, Agastya Mittal, Ronit Singh, Surya Raj, Madhav Tirumale, 
            <br />Devin Park, Kimberly Cruz-Cruz, Eric Guo
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border text-center">
              <CardContent className="p-6">
                <div
                  className="bg-primary/10 mx-auto mb-4 flex items-center justify-center rounded-[70px] overflow-hidden"
                  style={{ height: member.heightImage }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-lg text-muted-foreground">Class of {member.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        

        {/* Call to action */}
        {new Date() < new Date('2025-10-05T23:59:00') && (
          <div className="text-center bg-card rounded-2xl p-12 border">
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Apply for the 2025-26 School Year!
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're looking for passionate students interested in robotics, programming, 
              and engineering. No prior experience required – just enthusiasm, willingness to learn, and a good sense of humor :)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
          onClick={() => {
          window.open("https://forms.gle/kjZEMQYNkX7yDR5X6", "_blank");
          }}
              >
          Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
