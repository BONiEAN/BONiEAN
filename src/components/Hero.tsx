import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-boniean-dark-charcoal to-boniean-charcoal -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <p className="text-base font-semibold text-boniean-orange tracking-wide uppercase slide-up">
            AI Engineering Consultancy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl slide-up">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-boniean-orange to-boniean-orange-bright">AI Innovation</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 slide-up">
            Expert consulting in AI, Kubernetes, DevOps, and Cloud solutions. We help businesses navigate the future of technology.
          </p>
          <div className="mt-12 flex justify-center gap-x-6 slide-up">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};