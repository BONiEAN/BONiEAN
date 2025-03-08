import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar />

      {/* Regular scrolling for all sections */}
      <div>
        <Hero />
        <Services />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
