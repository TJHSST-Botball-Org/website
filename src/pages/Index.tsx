import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Apply />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
