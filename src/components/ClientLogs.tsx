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
    <section className="relative overflow-hidden py-20 bg-[#221F26]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-boniean-orange/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.07),transparent_36%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">Trusted By Industry Leaders</h2>
          <p className="mt-4 text-gray-300">We've worked with some of the world's most innovative companies</p>
        </div>
        
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="group flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] p-5 opacity-75 transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/35 hover:bg-white/[0.08] hover:opacity-100 hover:shadow-lg hover:shadow-boniean-orange/10"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-12 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/use-cases">
            <Button 
              variant="outline" 
              className="group rounded-full border-white/20 bg-white/10 px-7 py-6 text-boniean-orange shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-boniean-orange/70 hover:bg-boniean-orange hover:text-black"
            >
              View Our Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
