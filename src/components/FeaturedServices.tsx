import { Brain, Shield, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const featuredServices = [
  {
    id: "ai-machine-learning",
    title: "Generative AI",
    description: "Harness the power of AI to create new content, automate processes, and drive innovation",
    icon: Brain,
    image: "/lovable-uploads/ai-machine-learning.jpg",
    color: "from-purple-500 to-blue-600"
  },
  {
    id: "technical-auditing",
    title: "Security & Analytics",
    description: "Protect your business with advanced security solutions and data-driven insights",
    icon: Shield,
    image: "/lovable-uploads/technical-auditing.jpg",
    color: "from-red-500 to-orange-600"
  },
  {
    id: "ci-cd",
    title: "DevOps",
    description: "Streamline your development pipeline with automated testing and deployment",
    icon: Cog,
    image: "/lovable-uploads/ci-cd.jpg",
    color: "from-blue-500 to-cyan-600"
  }
];

export const FeaturedServices = () => {
  return (
    <section className="py-20 bg-boniean-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Our Core Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-xl">
              {/* Image with overlay */}
              <div className="relative h-96 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div className={`h-12 w-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="mt-auto">
                    <Button 
                      className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white transition-all w-full`}
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-boniean-orange text-boniean-orange hover:bg-boniean-orange hover:text-white"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
