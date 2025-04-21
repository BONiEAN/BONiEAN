import { Award, Lightbulb, Settings } from 'lucide-react';

const features = [
  {
    title: "Expertise",
    description: "Industry leaders in AI, cloud, and software engineering",
    icon: Award
  },
  {
    title: "Innovation",
    description: "Cutting-edge solutions that keep you ahead of competitors",
    icon: Lightbulb
  },
  {
    title: "Results",
    description: "Measurable outcomes and tangible business value",
    icon: Settings
  }
];

export const WhatSetsUsApart = () => {
  return (
    <section className="py-16 bg-boniean-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20 hover:border-boniean-orange/50 transition-all duration-300 text-center"
            >
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
