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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 pt-safe-top ${
      isScrolled 
        ? 'bg-boniean-dark-charcoal/60 backdrop-blur-lg shadow-md' 
        : 'bg-boniean-dark-charcoal/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/Boniean_logo.png" 
                alt="Boniean Digital Solutions Inc." 
                className="h-16 mt-4" 
              />
              <span className="text-xl font-semibold bg-gradient-to-r from-boniean-orange to-boniean-orange-bright bg-clip-text text-transparent hidden sm:inline">
                BONiEAN Digital Solutions
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-boniean-orange transition-colors ${location.pathname === '/' ? 'text-boniean-orange' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-boniean-orange transition-colors ${location.pathname === '/about' ? 'text-boniean-orange' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`text-white hover:text-boniean-orange transition-colors ${location.pathname.includes('/services') ? 'text-boniean-orange' : ''}`}
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-white hover:text-boniean-orange transition-colors ${location.pathname === '/contact' ? 'text-boniean-orange' : ''}`}
            >
              Contact Us
            </Link>
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

      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-boniean-dark-charcoal/90 backdrop-blur-md border-l border-boniean-orange/10 shadow-xl md:hidden transform transition-transform duration-300 ease-in-out mobile-menu z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-safe-top`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        
        <div className="px-4 pt-2 pb-8 space-y-6 flex flex-col items-center">
          <Link 
            to="/" 
            className="px-3 py-2 text-white hover:text-boniean-orange text-center w-full"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className="px-3 py-2 text-white hover:text-boniean-orange text-center w-full"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          
          <Link 
            to="/services" 
            className="px-3 py-2 text-white hover:text-boniean-orange text-center w-full"
            onClick={closeMobileMenu}
          >
            Our Services
          </Link>
          
          <Link 
            to="/contact" 
            className="px-3 py-2 text-white hover:text-boniean-orange text-center w-full"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
