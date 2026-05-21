import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-900 via-[#221F26] to-[#221F26]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_80%_65%,rgba(254,198,161,0.12),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-r from-boniean-orange/25 via-boniean-orange-bright/20 to-white/10 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <img 
                  src="/lovable-uploads/austin-distel-wawEfYdpkag-unsplash.jpg" 
                  alt="BONiEAN Team" 
                  className="aspect-[4/3] w-full rounded-[1.5rem] object-cover opacity-90 transition duration-500 hover:scale-[1.02] hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-7">About Us</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-8 text-gray-300 mb-6">
                  At BONiEAN, we're passionate about leveraging cutting-edge technology to solve complex business challenges. 
                  Founded by a team of experienced engineers and consultants, we bring together expertise in AI, cloud computing, 
                  and software development to deliver innovative solutions that drive real business value.
                </p>
                <p className="text-lg leading-8 text-gray-300 mb-8">
                  Our mission is to empower organizations to thrive in the digital age by providing expert guidance, 
                  implementing robust solutions, and fostering long-term partnerships built on trust and results.
                </p>
              </div>
              <Link to="/about">
                <Button 
                  className="group rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-7 py-6 text-black shadow-lg shadow-boniean-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-yellow-600"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
