import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatSetsUsApart } from "@/components/WhatSetsUsApart";
import { ServicesSection } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ClientLogos } from "@/components/ClientLogs";
import { AnimatedGate } from "@/components/ui/animated-gate";

const Index = () => {
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [forceHeroContent, setForceHeroContent] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <AnimatedGate
          ready={heroVideoReady}
          onOpenStart={(reason) => {
            if (reason === 'timeout') {
              setForceHeroContent(true);
            }
          }}
        >
          <Hero
            onVideoReady={() => setHeroVideoReady(true)}
            forceShowContent={forceHeroContent}
          />
        </AnimatedGate>
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
