import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar />

      {/* Snap scrolling only between Hero and Services */}
      <div className="h-screensnap-y snap-mandatory ">
        <div className="snap-start h-screen">
          <Hero />
        </div>
        <div className="snap-start h-screen">
          <Services />
        </div>
      </div>

      {/* Normal scrolling for ContactForm */}
      <div className="mt-4 h-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
