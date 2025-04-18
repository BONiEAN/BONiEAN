import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background gradient with enhanced movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-boniean-dark-charcoal to-boniean-charcoal animate-gradient -z-10">
        {/* Enhanced animated architectural shapes with more movement */}
        <div className="absolute w-96 h-[600px] bg-boniean-orange/10 skew-x-12 -top-20 -left-32 animate-float-slow blur-sm" 
            style={{animationDuration: '10s', animationName: 'float'}} />
        <div className="absolute w-72 h-[400px] bg-boniean-orange-bright/10 -skew-x-12 top-1/3 -right-20 animate-float blur-sm"
            style={{animationDuration: '8s', animationName: 'float'}} />
        <div className="absolute w-80 h-[500px] bg-boniean-orange/10 skew-x-6 bottom-0 left-1/4 animate-float-delayed blur-sm"
            style={{animationDuration: '12s', animationName: 'float'}} />
        <div className="absolute w-64 h-[300px] bg-boniean-orange-bright/5 -skew-x-6 top-20 right-1/4 animate-float blur-sm"
            style={{animationDuration: '9s', animationName: 'float'}} />
        
        {/* Additional animated elements for stronger effect */}
        <div className="absolute w-60 h-[350px] bg-boniean-orange/8 skew-y-12 top-1/4 left-1/3 animate-float-slow blur-md"
            style={{animationDuration: '15s', animationName: 'float'}} />
        <div className="absolute w-70 h-[450px] bg-boniean-orange-bright/8 -skew-y-12 bottom-1/4 right-1/3 animate-float blur-md"
            style={{animationDuration: '13s', animationName: 'float'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
            BONiEAN Digital Solutions
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 animate-fade-in">
            Transforming businesses through innovative AI and cloud solutions
          </p>
          <div className="mt-12 flex justify-center gap-x-6 animate-fade-in">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange animate-shimmer"
              >
                Find Out More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
