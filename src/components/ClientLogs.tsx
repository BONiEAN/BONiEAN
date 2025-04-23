import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

// Using well-known tech company logos from SVGPorn (free to use)
const clients = [
  {
    id: 1,
    name: "AWS",
    logo: "/lovable-uploads/client-logos/aws.svg",
  },
  {
    id: 4,
    name: "IBM",
    logo: "/lovable-uploads/client-logos/ibm.svg",
  },
  {
    id: 5,
    name: "Nvidia",
    logo: "/lovable-uploads/client-logos/Nvidia_logo.svg",
  },
  {
    id: 6,
    name: "Trend Micro",
    logo: "/lovable-uploads/client-logos/Trend_Micro_logo.svg",
  },
  {
    id: 9,
    name: "volvo",
    logo: "/lovable-uploads/client-logos/volvo.svg",
  },
  {
    id: 7,
    name: "Accenture",
    logo: "/lovable-uploads/client-logos/Accenture.svg",
  },
  
  {
    id: 8,
    name: "AMD",
    logo: "/lovable-uploads/client-logos/AMD_Logo.svg",
  },
  
];

export const ClientLogos = () => {
  return (
    <section className="py-16 bg-boniean-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Trusted By Industry Leaders</h2>
          <p className="mt-3 text-gray-300">We've worked with some of the world's most innovative companies</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 w-auto max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Button hidden */}
        {/* <div className="mt-12 text-center">
          <Link to="/clients">
            <Button 
              variant="outline" 
              className="border-boniean-orange text-boniean-orange hover:bg-boniean-orange hover:text-white group"
            >
              View Our Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};
