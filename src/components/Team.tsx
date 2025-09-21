import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, Award, Code2 } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Devin Park",
      year: "2026",
      image: "/botball/src/assets/members/devin.png",
      heightImage: "300px",
    },
    {
      name: "Eric Guo",
      year: "2026",
      image: "/botball/src/assets/members/eric.png",
      heightImage: "300px",
    },
    {
      name: "Kimberly Cruz-Cruz",
      year: "2026",
      image: "/botball/src/assets/members/kim.png",
      heightImage: "300px",
    },
    {
      name: "Kara Tran",
      year: "2026",
      image: "/botball/src/assets/members/kara.png",
      heightImage: "300px",
    },
    {
      name: "Jax O'Donoghue",
      year: "2026",
      image: "/botball/src/assets/members/jax.jpg",
      heightImage: "300px",
    },
    {
      name: "Surya Raj",
      year: "2027",
      image: "/botball/src/assets/members/surya.jpg",
      heightImage: "300px",
    },
    {
      name: "Zoya Moloo",
      year: "2027",
      image: "/botball/src/assets/members/zoya.jpg",
      heightImage: "300px",
    },
    {
      name: "Agastya Mittal",
      year: "2028",
      image: "/botball/src/assets/members/agastya.png",
      heightImage: "300px",
    },
    {
      name: "Claire Zhu",
      year: "2028",
      image: "/botball/src/assets/members/claire.jpg",
      heightImage: "300px",
    },
    {
      name: "Kyle Penska",
      year: "2028",
      image: "/botball/src/assets/members/kyle.png",
      heightImage: "300px",
    },
    {
      name: "Madhav Tirumale",
      year: "2028",
      image: "/botball/src/assets/members/madhav.png",
      heightImage: "300px",
    },
    {
      name: "Ronit Singh",
      year: "2028",
      image: "/botball/src/assets/members/ronit.jpg",
      heightImage: "300px",
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            2024-2025 Team
          </h2>
          <img
            src="/botball/src/assets/botballgroupteam.jpg"
            className="mx-auto rounded-2xl w-full max-w-3xl aspect-[3/2] object-cover"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 mt-5 px-4 leading-tight">
            Mr. Billington, Claire Zhu, Zoya Moloo, Kyle Penska, Jax O'Donoghue,
            Agastya Mittal, Ronit Singh, Surya Raj, Madhav Tirumale
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 px-4 leading-tight">
            Devin Park, Kimberly Cruz-Cruz, Eric Guo
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border text-center">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden bg-primary/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Class of {member.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
