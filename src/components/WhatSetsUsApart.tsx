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
    <section className="py-20 bg-boniean-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What Sets Us Apart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20 hover:border-boniean-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-boniean-orange/5"
            >
              <div className="h-12 w-12 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
