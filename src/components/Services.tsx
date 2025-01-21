import { Brain, Cloud, Container, Cog } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const services = [
  {
    title: "AI & Machine Learning",
    description: "Custom AI solutions and ML model deployment for enterprise applications",
    icon: Brain
  },
  {
    title: "Kubernetes",
    description: "Container orchestration and microservices architecture implementation",
    icon: Container
  },
  {
    title: "DevOps",
    description: "Streamline your development pipeline and automate deployment processes",
    icon: Cog
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure design and implementation",
    icon: Cloud
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive solutions for modern technology challenges
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                <CardDescription className="text-center mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};