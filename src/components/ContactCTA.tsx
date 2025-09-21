import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20 animate-slide-up">
      <h3 className="text-3xl font-bold mb-6 text-gradient">
        Questions? Get In Touch!
      </h3>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Don't hesitate to reach out if you have any questions about joining our team, 
        the application process, or our robotics program. Email us at <b style={{ color: 'white' }}>botball.tj@gmail.com</b> and make sure to follow our Instagram <b style={{ color: 'white' }}>@tj.botball</b> for updates.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        
      </div>
    </section>
  );
};

export default ContactCTA;
