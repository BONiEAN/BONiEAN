import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-600 tracking-wide uppercase slide-up">
            AI Engineering Consultancy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl slide-up">
            Transform Your Business with <span className="text-primary">AI Innovation</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-500 slide-up">
            Expert consulting in AI, Kubernetes, DevOps, and Cloud solutions. We help businesses navigate the future of technology.
          </p>
          <div className="mt-12 flex justify-center gap-x-6 slide-up">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};