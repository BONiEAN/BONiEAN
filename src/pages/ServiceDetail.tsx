import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";
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
        <main className="pt-28 pb-16">
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
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_35%),linear-gradient(180deg,#221F26,#17151a)]">
          <BackgroundGrid />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-[1.75rem] flex items-center justify-center shadow-2xl shadow-boniean-orange/25">
                <ServiceIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg mb-6">
                    {service.fullDescription}
                  </p>
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    Our team of experts brings years of experience and deep technical knowledge to every project, 
                    ensuring that you receive solutions that are not only technically sound but also aligned with 
                    your business objectives and industry best practices.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-boniean-orange/40 to-boniean-orange-bright/30 opacity-50 blur-2xl rounded-[2rem]"></div>
                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
                  <img 
                    src={`/lovable-uploads/${service.id}.jpg`} 
                    alt={service.title} 
                    className="w-full h-auto object-cover rounded-[1.5rem] opacity-95"
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
        <section className="relative overflow-hidden py-20 bg-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">Key Benefits</h2>
              <p className="mt-4 text-xl text-gray-300">
                Why choose our {service.title} services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Expertise</h3>
                    <p className="mt-2 text-gray-200 leading-7">
                      Access to specialized knowledge and experience in {service.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Efficiency</h3>
                    <p className="mt-2 text-gray-200 leading-7">
                      Streamlined processes and optimized solutions that save time and resources
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Scalability</h3>
                    <p className="mt-2 text-gray-200 leading-7">
                      Solutions designed to grow with your business and adapt to changing needs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Innovation</h3>
                    <p className="mt-2 text-gray-200 leading-7">
                      Cutting-edge approaches and technologies that keep you ahead of the competition
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">ROI</h3>
                    <p className="mt-2 text-gray-200 leading-7">
                      Measurable results and clear business value from your technology investments
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-boniean-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Support</h3>
                    <p className="mt-2 text-gray-200 leading-7">
                      Ongoing assistance and maintenance to ensure long-term success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-12 text-center">Our Approach</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Assessment & Planning</h3>
                    <p className="text-gray-200 leading-7">
                      We begin by thoroughly understanding your current situation, challenges, and objectives. 
                      Our team conducts a comprehensive assessment and develops a strategic plan tailored to your specific needs.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Design & Development</h3>
                    <p className="text-gray-200 leading-7">
                      Based on the assessment, we design and develop solutions that leverage best practices and cutting-edge 
                      technologies. Our iterative approach ensures that the solution evolves to meet your requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Implementation & Integration</h3>
                    <p className="text-gray-200 leading-7">
                      We implement the solution with minimal disruption to your operations and ensure seamless integration 
                      with your existing systems and processes. Our team manages the transition to ensure a smooth deployment.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Optimization & Support</h3>
                    <p className="text-gray-200 leading-7">
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
        <section className="relative overflow-hidden py-20 bg-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-r from-boniean-orange/20 to-boniean-orange-bright/20 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our {service.title} services can help your business thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 text-black hover:from-orange-600 hover:to-yellow-600 sm:w-auto"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full rounded-full border-white/20 bg-white/10 text-boniean-orange hover:bg-boniean-orange hover:text-black sm:w-auto"
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
