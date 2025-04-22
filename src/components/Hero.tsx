import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with binary code theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg')", // Replace with the correct path to the attached image
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <p className="text-base font-semibold text-boniean-orange tracking-wide uppercase animate-fade-in">
            AI Engineering Consultancy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-boniean-orange to-boniean-orange-bright animate-pulse">AI Innovation</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 animate-fade-in">
            Expert consulting in AI, Kubernetes, DevOps, and Cloud solutions. We help businesses navigate the future of technology.
          </p>
          <div className="mt-12 flex justify-center gap-x-6 animate-fade-in">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange animate-shimmer"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
