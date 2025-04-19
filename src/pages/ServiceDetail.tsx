import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-boniean-dark-charcoal">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-bold text-white mb-6">Service Not Found</h1>
            <p className="text-gray-300 mb-8">The service you're looking for doesn't exist or has been moved.</p>
            <Link to="/services">
              <Button className="bg-boniean-orange hover:bg-boniean-orange-bright">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                <ServiceIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 mb-6">
                    {service.fullDescription}
                  </p>
                  <p className="text-lg text-gray-300">
                    Our team of experts brings years of experience and deep technical knowledge to every project, 
                    ensuring that you receive solutions that are not only technically sound but also aligned with 
                    your business objectives and industry best practices.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright opacity-20 blur-lg rounded-lg"></div>
                <div className="relative bg-boniean-dark-charcoal rounded-lg overflow-hidden">
                  <img 
                    src={`/lovable-uploads/${service.id}.jpg`} 
                    alt={service.title} 
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Key Benefits</h2>
              <p className="mt-4 text-xl text-gray-300">
                Why choose our {service.title} services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Expertise</h3>
                    <p className="mt-2 text-gray-300">
                      Access to specialized knowledge and experience in {service.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Efficiency</h3>
                    <p className="mt-2 text-gray-300">
                      Streamlined processes and optimized solutions that save time and resources
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Scalability</h3>
                    <p className="mt-2 text-gray-300">
                      Solutions designed to grow with your business and adapt to changing needs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Innovation</h3>
                    <p className="mt-2 text-gray-300">
                      Cutting-edge approaches and technologies that keep you ahead of the competition
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">ROI</h3>
                    <p className="mt-2 text-gray-300">
                      Measurable results and clear business value from your technology investments
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Support</h3>
                    <p className="mt-2 text-gray-300">
                      Ongoing assistance and maintenance to ensure long-term success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Approach</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Assessment & Planning</h3>
                    <p className="text-gray-300">
                      We begin by thoroughly understanding your current situation, challenges, and objectives. 
                      Our team conducts a comprehensive assessment and develops a strategic plan tailored to your specific needs.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Design & Development</h3>
                    <p className="text-gray-300">
                      Based on the assessment, we design and develop solutions that leverage best practices and cutting-edge 
                      technologies. Our iterative approach ensures that the solution evolves to meet your requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Implementation & Integration</h3>
                    <p className="text-gray-300">
                      We implement the solution with minimal disruption to your operations and ensure seamless integration 
                      with your existing systems and processes. Our team manages the transition to ensure a smooth deployment.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Optimization & Support</h3>
                    <p className="text-gray-300">
                      After implementation, we continuously monitor and optimize the solution to ensure it delivers the expected 
                      results. Our ongoing support ensures that you get the most value from your investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-boniean-orange/20 to-boniean-orange-bright/20 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our {service.title} services can help your business thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange w-full sm:w-auto"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-boniean-orange/50 text-boniean-orange hover:bg-boniean-orange hover:text-white w-full sm:w-auto"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
