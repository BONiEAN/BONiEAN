
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMobileMenuOpen && 
        !target.closest('.mobile-menu') && 
        !target.closest('.mobile-menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    // If we're not on the homepage, navigate there first, then scroll to contact
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToServices = () => {
    // If we're not on the homepage, navigate there first, then scroll to services
    if (location.pathname !== '/') {
      window.location.href = '/#services';
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
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
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-toggle"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none -z-10'}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-boniean-dark-charcoal shadow-xl md:hidden transform transition-transform duration-300 ease-in-out mobile-menu ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        
        <div className="px-4 pt-2 pb-8 space-y-6 flex flex-col items-center">
          <button 
            onClick={scrollToServices}
            className="px-3 py-2 text-white hover:text-boniean-orange text-center w-full"
          >
            Services
          </button>
          
          <Link 
            to="/about" 
            className="px-3 py-2 text-white hover:text-boniean-orange text-center w-full"
            onClick={handleAboutClick}
          >
            About
          </Link>
          
          <Button 
            variant="default" 
            className="w-full mt-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
