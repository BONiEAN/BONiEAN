import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const WhatWeDo = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[#221F26]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(254,198,161,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">What We Do</h2>

          <div className="relative mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-12">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/20 via-boniean-orange/20 to-transparent opacity-60 pointer-events-none" />
            <div className="relative">
              <p className="text-lg leading-8 text-gray-200 sm:text-xl">
                At BONiEAN, we specialize in delivering cutting-edge AI and cloud solutions that help businesses 
                transform their operations, enhance efficiency, and drive innovation. Our team of experts works 
                closely with clients to understand their unique challenges and develop tailored strategies that 
                deliver measurable results.
              </p>
              <div className="mt-10">
                <Link to="/about" onClick={handleClick}>
                  <Button 
                    variant="outline" 
                    className="group rounded-full border-white/20 bg-white/10 px-7 py-6 text-boniean-orange shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-boniean-orange/70 hover:bg-boniean-orange hover:text-black hover:shadow-boniean-orange/20"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
