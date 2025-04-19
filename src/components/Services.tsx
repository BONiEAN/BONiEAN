import { Brain, Cloud, Container, Cog, ChartNetwork, CloudUpload, ChartScatter, Layout, Building2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const services = [
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description: "Custom AI solutions and ML model deployment for enterprise applications",
    icon: Brain,
    fullDescription: "Our AI and Machine Learning services help businesses harness the power of artificial intelligence to automate processes, gain insights from data, and create innovative solutions. We specialize in developing custom AI models, implementing machine learning algorithms, and deploying scalable AI solutions that drive business value."
  },
  {
    id: "ci-cd",
    title: "CI/CD",
    description: "Automated testing and deployment pipelines for faster, more reliable software delivery",
    icon: Cog,
    fullDescription: "Our Continuous Integration and Continuous Deployment (CI/CD) services help organizations streamline their software development lifecycle. We design and implement automated pipelines that enable faster, more reliable software delivery, reducing time-to-market and improving code quality through automated testing and deployment processes."
  },
  {
    id: "serverless-containerization",
    title: "Serverless & Containerization", 
    description: "Cloud-native solutions using containers and serverless to optimize resources and scalability",
    icon: Container,
    fullDescription: "We help businesses adopt modern cloud-native architectures through serverless computing and containerization. Our experts design and implement solutions that leverage technologies like Docker, Kubernetes, AWS Lambda, and other serverless platforms to optimize resource utilization, improve scalability, and reduce operational overhead."
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure & Migration",
    description: "Strategic cloud adoption, infrastructure design and scaling, and seamless migration process",
    icon: Cloud,
    fullDescription: "Our cloud infrastructure and migration services help organizations move to the cloud or optimize their existing cloud environments. We provide strategic guidance on cloud adoption, design scalable and secure cloud architectures, and execute seamless migrations that minimize disruption to your business operations."
  },
  {
    id: "application-development",
    title: "Application Development",
    description: "Full-stack development of scalable, modern applications using cutting-edge frameworks and tools",
    icon: Layout,
    fullDescription: "Our application development services cover the entire software development lifecycle, from concept to deployment and maintenance. We build scalable, modern applications using cutting-edge frameworks and tools, ensuring that your software solutions are robust, secure, and aligned with your business objectives."
  },
  {
    id: "system-design",
    title: "System Design & Architecture",
    description: "Scalable and robust system architecture design for enterprise applications",
    icon: Building2,
    fullDescription: "Our system design and architecture services help organizations build scalable, resilient, and maintainable software systems. We apply industry best practices and architectural patterns to design systems that can handle growth, adapt to changing requirements, and deliver optimal performance under various conditions."
  },
  {
    id: "technical-auditing",
    title: "Technical Auditing",
    description: "Expert evaluation of technical proposals for accuracy, feasibility, and value",
    icon: ChartNetwork,
    fullDescription: "Our technical auditing services provide an objective assessment of your existing systems, proposed solutions, or vendor proposals. We evaluate technical approaches for accuracy, feasibility, security, and alignment with business goals, helping you make informed decisions and avoid costly mistakes."
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    description: "Strategic cloud transition planning with focus on technical viability and ROI",
    icon: CloudUpload,
    fullDescription: "Our cloud migration services help organizations move their applications, data, and infrastructure to the cloud efficiently and securely. We develop comprehensive migration strategies, assess technical viability, calculate ROI, and execute migrations with minimal disruption to your business operations."
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights through advanced visualization and predictive modeling",
    icon: ChartScatter,
    fullDescription: "Our data analytics services help organizations extract value from their data assets. We implement solutions for data collection, processing, analysis, and visualization, enabling you to make data-driven decisions. Our expertise includes business intelligence, predictive analytics, and big data processing."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-boniean-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive solutions for modern technology challenges
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 bg-boniean-charcoal border-boniean-orange/20 flex flex-col">
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
                {/* Content can be added here if needed */}
              </CardContent>
              <CardFooter className="pt-2">
                <Link to={`/services/${service.id}`} className="w-full">
                  <Button 
                    className="w-full bg-transparent border-2 border-boniean-orange text-boniean-orange hover:bg-boniean-orange hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-boniean-orange hover:bg-boniean-orange-bright text-white transition-colors"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
