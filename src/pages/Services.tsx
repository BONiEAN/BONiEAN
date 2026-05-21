import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { services } from "@/components/Services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_35%),linear-gradient(180deg,#221F26,#17151a)]">
          <BackgroundGrid />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">Our Services</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">What We Offer</h2>
              <p className="mt-4 text-xl text-gray-300">
                At BONiEAN, we provide a wide range of services to help businesses leverage technology for growth and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.055] shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-boniean-orange/45 hover:bg-white/[0.075]">
                  <CardHeader>
                    <div className="h-14 w-14 mx-auto mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center text-white">{service.title}</CardTitle>
                    <CardDescription className="text-center mt-2 text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300 text-sm leading-7">
                      {service.fullDescription}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Link to={`/services/${service.id}`} className="w-full">
                      <Button 
                        className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:from-orange-600 hover:to-yellow-600 transition-colors duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="relative overflow-hidden py-20 bg-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">How We Work</h2>
              <p className="mt-4 text-xl text-gray-300">
                Our proven approach to delivering successful projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-boniean-orange/20">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Discovery</h3>
                <p className="text-gray-200 leading-7">
                  We begin by understanding your business objectives, challenges, and requirements through in-depth consultations.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-boniean-orange/20">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Strategy</h3>
                <p className="text-gray-200 leading-7">
                  We develop a tailored approach that aligns with your goals, leveraging the most appropriate technologies and methodologies.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-boniean-orange/20">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Implementation</h3>
                <p className="text-gray-200 leading-7">
                  Our expert team executes the strategy with a focus on quality, efficiency, and regular communication throughout the process.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-boniean-orange/20">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Optimization</h3>
                <p className="text-gray-200 leading-7">
                  We continuously refine and improve the solution based on feedback and performance metrics to ensure optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-r from-boniean-orange/20 to-boniean-orange-bright/20 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our services can help you achieve your business goals and stay ahead of the competition.
                </p>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button 
                    size="lg" 
                    className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 text-black hover:from-orange-600 hover:to-yellow-600"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
