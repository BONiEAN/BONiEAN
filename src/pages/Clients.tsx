import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

// Sample client data - replace with actual clients
const clients = [
  {
    id: 1,
    name: "TechInnovate",
    logo: "/lovable-uploads/client-1.png",
    industry: "Technology",
    description: "A leading technology company specializing in innovative software solutions."
  },
  {
    id: 2,
    name: "DataStream Solutions",
    logo: "/lovable-uploads/client-2.png",
    industry: "Data Analytics",
    description: "Pioneers in big data analytics and business intelligence solutions."
  },
  {
    id: 3,
    name: "Nexus Systems",
    logo: "/lovable-uploads/client-3.png",
    industry: "Software Development",
    description: "Enterprise software development company focused on scalable applications."
  },
  {
    id: 4,
    name: "CloudPeak",
    logo: "/lovable-uploads/client-4.png",
    industry: "Cloud Services",
    description: "Specialized in cloud migration and infrastructure optimization."
  },
  {
    id: 5,
    name: "AI Ventures",
    logo: "/lovable-uploads/client-5.png",
    industry: "Artificial Intelligence",
    description: "Cutting-edge AI research and development for business applications."
  },
  {
    id: 6,
    name: "SecureNet",
    logo: "/lovable-uploads/client-6.png",
    industry: "Cybersecurity",
    description: "Comprehensive cybersecurity solutions for enterprise organizations."
  },
  {
    id: 7,
    name: "FinTech Innovations",
    logo: "/lovable-uploads/client-7.png",
    industry: "Financial Technology",
    description: "Innovative financial technology solutions for modern banking."
  },
  {
    id: 8,
    name: "HealthTech Solutions",
    logo: "/lovable-uploads/client-8.png",
    industry: "Healthcare Technology",
    description: "Advanced technology solutions for healthcare providers and patients."
  },
  {
    id: 9,
    name: "EduLearn",
    logo: "/lovable-uploads/client-9.png",
    industry: "Education Technology",
    description: "Digital learning platforms and educational technology solutions."
  }
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Our Clients</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Trusted by innovative companies across various industries
              </p>
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client) => (
                <Card key={client.id} className="bg-boniean-dark-charcoal border-boniean-orange/20 hover:border-boniean-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-boniean-orange/5">
                  <CardContent className="p-6">
                    <div className="h-32 flex items-center justify-center mb-6 bg-white/5 rounded-lg">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-20 max-w-[80%]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Create a colored div with the first letter of the client name as fallback
                          const parent = target.parentElement;
                          if (parent) {
                            const letter = document.createElement('div');
                            letter.className = 'h-20 w-20 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-4xl';
                            letter.textContent = client.name.charAt(0);
                            parent.innerHTML = '';
                            parent.appendChild(letter);
                          }
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{client.name}</h3>
                    <p className="text-boniean-orange mb-4">{client.industry}</p>
                    <p className="text-gray-300">{client.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Industries We Serve</h2>
              <p className="mt-4 text-xl text-gray-300">
                Our expertise spans across multiple sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Technology</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Finance</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Healthcare</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">E-commerce</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Manufacturing</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Logistics</h3>
              </div>
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 text-center">
                <h3 className="text-lg font-semibold text-white">Entertainment</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Client Testimonials</h2>
              <p className="mt-4 text-xl text-gray-300">
                What our clients say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-boniean-dark-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-400">CTO, TechInnovate</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "BONiEAN transformed our approach to data analytics. Their AI solution helped us uncover insights we never knew existed in our data, leading to a 30% increase in operational efficiency."
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Michael Chen</p>
                    <p className="text-sm text-gray-400">VP of Engineering, DataStream Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The cloud migration strategy developed by BONiEAN was flawless. They understood our complex requirements and delivered a solution that not only met but exceeded our expectations."
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-lg">
                    E
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Emily Rodriguez</p>
                    <p className="text-sm text-gray-400">Director of Software Development, Nexus Systems</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Working with BONiEAN on our DevOps transformation was a game-changer. Their expertise in CI/CD pipelines reduced our deployment time by 70% and significantly improved our code quality."
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">James Wilson</p>
                    <p className="text-sm text-gray-400">CEO, FinTech Innovations</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "BONiEAN's AI solutions have revolutionized our customer service operations. The intelligent automation they implemented has not only reduced costs but also significantly improved customer satisfaction scores."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
