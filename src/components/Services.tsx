import { Brain, Cloud, Container, Cog, ChartNetwork, CloudUpload, ChartScatter,  Layout, Building2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const services = [
  {
    title: "AI & Machine Learning",
    description: "Custom AI solutions and ML model deployment for enterprise applications",
    icon: Brain
  },
  {
    title: "CI/CD",
    description: "Automated testing and deployment pipelines for faster, more reliable software delivery",
    icon: Cog
  },
  {
    title: "Serverless & Containerization", 
    description: "Cloud-native solutions using containers and serverless to optimize resources and scalability",
    icon: Container
  },
  {
    title: "Cloud Infrastructure & Migration",
    description: "Strategic cloud adoption, infrastructure design and scaling, and seamless migration process",
    icon: Cloud
  },
  {
    title: "Application Development",
    description: "Full-stack development of scalable, modern applications using cutting-edge frameworks and tools",
    icon: Layout
  },
  {
    title: "System Design & Architecture",
    description: "Scalable and robust system architecture design for enterprise applications",
    icon: Building2
  },
  {
    title: "Technical Auditing",
    description: "Expert evaluation of technical proposals for accuracy, feasibility, and value",
    icon: ChartNetwork
  },
  {
    title: "Cloud Migration",
    description: "Strategic cloud transition planning with focus on technical viability and ROI",
    icon: CloudUpload
  },
  {
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights through advanced visualization and predictive modeling",
    icon: ChartScatter
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-boniean-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive solutions for modern technology challenges
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300 bg-boniean-charcoal border-boniean-orange/20">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-center text-white">{service.title}</CardTitle>
                <CardDescription className="text-center mt-2 text-gray-300">
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
