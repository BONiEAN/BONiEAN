import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Full-screen background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/hero-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-boniean-orange to-boniean-orange-bright">
              Accelerate
            </span> Your Digital Transformation
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-white font-light max-w-3xl mx-auto animate-fade-in">
            Enterprise AI, Security, and DevOps solutions that deliver measurable results
          </p>
          
          <div className="mt-10 flex justify-center gap-x-6 animate-fade-in">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-boniean-orange hover:bg-boniean-orange-bright text-white text-lg px-8 py-6"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
