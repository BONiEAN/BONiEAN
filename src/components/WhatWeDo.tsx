import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-boniean-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What We Do</h2>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              At BONiEAN, we specialize in delivering cutting-edge AI and cloud solutions that help businesses 
              transform their operations, enhance efficiency, and drive innovation. Our team of experts works 
              closely with clients to understand their unique challenges and develop tailored strategies that 
              deliver measurable results.
            </p>
            <div className="mt-8">
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-boniean-orange text-boniean-orange hover:bg-boniean-orange hover:text-white transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
