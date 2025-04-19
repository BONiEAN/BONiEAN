import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-boniean-dark-charcoal border-t border-boniean-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <p className="text-gray-400 mb-6 text-center">
              Transforming businesses through innovative AI and cloud solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/boniean-digital-solutions-inc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-boniean-orange transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-boniean-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-boniean-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-boniean-orange transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-boniean-orange transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/ai-machine-learning" className="text-gray-400 hover:text-boniean-orange transition-colors">AI & Machine Learning</Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure" className="text-gray-400 hover:text-boniean-orange transition-colors">Cloud Infrastructure</Link>
              </li>
              <li>
                <Link to="/services/ci-cd" className="text-gray-400 hover:text-boniean-orange transition-colors">CI/CD</Link>
              </li>
              <li>
                <Link to="/services/serverless-containerization" className="text-gray-400 hover:text-boniean-orange transition-colors">Serverless & Containerization</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-boniean-orange transition-colors">View All Services</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 text-center">Contact</h3>
            <ul className="space-y-4 flex flex-col items-center">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-boniean-orange mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Ottawa, ON<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-boniean-orange mr-3" />
                <a href="mailto:info@boniean.com" className="text-gray-400 hover:text-boniean-orange transition-colors">
                  info@boniean.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-boniean-orange/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BONiEAN Digital Solutions Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-boniean-orange text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-boniean-orange text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-boniean-orange text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
