import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatSetsUsApart } from "@/components/WhatSetsUsApart";
import { ServicesSection } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ClientLogos } from "@/components/ClientLogs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <WhatWeDo />
        <WhatSetsUsApart />
        <ClientLogos/>
        <ServicesSection />
        <AboutSection />
        <Testimonials showTestimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
