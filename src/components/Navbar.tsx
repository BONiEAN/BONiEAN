import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-boniean-dark-charcoal/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/f1fb860b-ad12-4e29-a825-07c31830a2fb.png" 
              alt="Boniean Digital Solutions Inc." 
              className="h-10"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-boniean-orange transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-boniean-orange transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-boniean-orange transition-colors">Contact</a>
            <Button 
              variant="default" 
              className="ml-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange text-white"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-boniean-dark-charcoal">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-white hover:text-boniean-orange">Services</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-boniean-orange">About</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-boniean-orange">Contact</a>
            <Button 
              variant="default" 
              className="w-full mt-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};