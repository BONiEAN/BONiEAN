import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/components/Services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">What We Offer</h2>
              <p className="mt-4 text-xl text-gray-300">
                At BONiEAN, we provide a wide range of services to help businesses leverage technology for growth and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 bg-boniean-dark-charcoal border-boniean-orange/20 flex flex-col h-full">
                  <CardHeader>
                    <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center text-white">{service.title}</CardTitle>
                    <CardDescription className="text-center mt-2 text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-400 text-sm line-clamp-4">
                      {service.fullDescription}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Link to={`/services/${service.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-boniean-orange/50 text-boniean-orange hover:bg-boniean-orange hover:text-white">
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
        <section className="py-16 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">How We Work</h2>
              <p className="mt-4 text-xl text-gray-300">
                Our proven approach to delivering successful projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Discovery</h3>
                <p className="text-gray-300">
                  We begin by understanding your business objectives, challenges, and requirements through in-depth consultations.
                </p>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Strategy</h3>
                <p className="text-gray-300">
                  We develop a tailored approach that aligns with your goals, leveraging the most appropriate technologies and methodologies.
                </p>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Implementation</h3>
                <p className="text-gray-300">
                  Our expert team executes the strategy with a focus on quality, efficiency, and regular communication throughout the process.
                </p>
              </div>
              
              <div className="bg-boniean-charcoal p-6 rounded-lg border border-boniean-orange/20 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-2">Optimization</h3>
                <p className="text-gray-300">
                  We continuously refine and improve the solution based on feedback and performance metrics to ensure optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-boniean-orange/20 to-boniean-orange-bright/20 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our services can help you achieve your business goals and stay ahead of the competition.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange"
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
