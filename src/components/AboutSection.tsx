import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-boniean-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright opacity-20 blur-lg rounded-lg"></div>
              <div className="relative bg-boniean-dark-charcoal rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/team-collaboration.jpg" 
                  alt="BONiEAN Team" 
                  className="w-full h-auto object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">About Us</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                At BONiEAN, we're passionate about leveraging cutting-edge technology to solve complex business challenges. 
                Founded by a team of experienced engineers and consultants, we bring together expertise in AI, cloud computing, 
                and software development to deliver innovative solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our mission is to empower organizations to thrive in the digital age by providing expert guidance, 
                implementing robust solutions, and fostering long-term partnerships built on trust and results.
              </p>
            </div>
            <Link to="/about">
              <Button 
                className="group bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
