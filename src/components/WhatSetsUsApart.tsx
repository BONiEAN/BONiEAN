import { Award, Lightbulb, Settings } from 'lucide-react';

const features = [
  {
    title: "Pioneering Experience",
    description: "Our team brings decades of combined experience in AI, cloud architecture, and software engineering, staying at the forefront of technological innovation.",
    icon: Award
  },
  {
    title: "Proven Track Record",
    description: "We've successfully delivered transformative solutions for businesses across various industries, with measurable results and lasting impact.",
    icon: Lightbulb
  },
  {
    title: "Customized Solutions",
    description: "We don't believe in one-size-fits-all approaches. Every solution we develop is tailored to address your specific business challenges and objectives.",
    icon: Settings
  }
];

export const WhatSetsUsApart = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(254,198,161,0.16),transparent_34%),radial-gradient(circle_at_100%_70%,rgba(249,115,22,0.12),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">What Sets Us Apart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-boniean-orange/50 hover:bg-white/[0.08] hover:shadow-boniean-orange/10"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-boniean-orange/10 blur-2xl transition-all duration-500 group-hover:bg-boniean-orange/20" />
              <div className="relative h-14 w-14 mb-7 rounded-2xl bg-gradient-to-br from-boniean-orange to-boniean-orange-bright p-px shadow-lg shadow-boniean-orange/20">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#221F26]/70 backdrop-blur-sm">
                  <feature.icon className="h-7 w-7 text-boniean-orange" />
                </div>
              </div>
              <h3 className="relative text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="relative text-gray-300 leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
