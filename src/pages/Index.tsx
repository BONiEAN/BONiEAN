import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedServices } from "@/components/FeaturedServices";
import { WhatSetsUsApart } from "@/components/WhatSetsUsApart";
import { ClientLogos } from "@/components/ClientLogos";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <FeaturedServices />
        <WhatSetsUsApart />
        <ClientLogos />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
