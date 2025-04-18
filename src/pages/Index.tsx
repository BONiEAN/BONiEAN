import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatSetsUsApart } from "@/components/WhatSetsUsApart";
import { ServicesSection } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <WhatWeDo />
        <WhatSetsUsApart />
        <ServicesSection />
        <AboutSection />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
