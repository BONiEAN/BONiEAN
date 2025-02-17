
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Navbar />
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <Services />
      </div>
      <div className="snap-start">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
