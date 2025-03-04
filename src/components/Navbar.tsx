
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    // If we're not on the homepage, navigate there first, then scroll to contact
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    // If we're not on the homepage, navigate there first, then scroll to services
    if (location.pathname !== '/') {
      window.location.href = '/#services';
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-boniean-dark-charcoal/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/f1fb860b-ad12-4e29-a825-07c31830a2fb.png" 
                alt="Boniean Digital Solutions Inc." 
                className="h-10"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToServices} 
              className="text-white hover:text-boniean-orange transition-colors"
            >
              Services
            </button>
            <Link to="/about" className="text-white hover:text-boniean-orange transition-colors">About</Link>
            <Button 
              variant="default" 
              className="ml-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange text-white"
              onClick={scrollToContact}
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
            <button 
              onClick={scrollToServices}
              className="block px-3 py-2 text-white hover:text-boniean-orange w-full text-left"
            >
              Services
            </button>
            <Link to="/about" className="block px-3 py-2 text-white hover:text-boniean-orange">About</Link>
            <Button 
              variant="default" 
              className="w-full mt-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
