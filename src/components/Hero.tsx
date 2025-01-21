import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-boniean-dark-charcoal to-boniean-charcoal animate-gradient -z-10">
        {/* Animated architectural shapes */}
        <div className="absolute w-96 h-[600px] bg-boniean-orange/5 skew-x-12 -top-20 -left-32 animate-float-slow" />
        <div className="absolute w-72 h-[400px] bg-boniean-orange-bright/5 -skew-x-12 top-1/3 -right-20 animate-float" />
        <div className="absolute w-80 h-[500px] bg-boniean-orange/5 skew-x-6 bottom-0 left-1/4 animate-float-delayed" />
        <div className="absolute w-64 h-[300px] bg-boniean-orange-bright/3 -skew-x-6 top-20 right-1/4 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <p className="text-base font-semibold text-boniean-orange tracking-wide uppercase slide-up">
            AI Engineering Consultancy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl slide-up">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-boniean-orange to-boniean-orange-bright animate-pulse">AI Innovation</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 slide-up">
            Expert consulting in AI, Kubernetes, DevOps, and Cloud solutions. We help businesses navigate the future of technology.
          </p>
          <div className="mt-12 flex justify-center gap-x-6 slide-up">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange animate-shimmer"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};