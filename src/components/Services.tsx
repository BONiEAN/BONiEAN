import { Brain, Cloud, Container, Cog, ChartNetwork, CloudUpload, ChartScatter, Layout, Building2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    id: "cloud-solution-deployment",
    title: "Cloud Solutions & Deployment",
    description: "Comprehensive cloud solutions and deployment strategies for modern businesses",
    icon: Cloud,
    fullDescription: "Our cloud solutions and deployment services provide businesses with end-to-end support for adopting and optimizing cloud technologies. We design scalable cloud architectures, implement deployment strategies, and ensure seamless integration with your existing systems to drive efficiency, scalability, and innovation."
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

const featuredServices = [
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description: "Custom AI solutions and ML model deployment for enterprise applications",
    image: "/lovable-uploads/ai-machine-learning.jpg", // Replace with the actual image path
  },
  {
    id: "technical-auditing",
    title: "Technical Auditing",
    description: "Expert evaluation of technical proposals for accuracy, feasibility, and value",
    image: "/lovable-uploads/carlos-muza-hpjSkU2UYSU-unsplash.jpg", // Replace with the actual image path
  },
  {
    id: "cloud-solution-deployment",
    title: "Cloud solutions & Deployment",
    description: "Comprehensive cloud solutions and automated deployment strategies for modern businesses",
    image: "/lovable-uploads/cloud-solution-deployment.jpg", // Replace with the actual image path
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-boniean-dark-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive solutions for modern technology challenges
          </p>
        </div>

        <div className="space-y-24">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="flex-shrink-0 w-full lg:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/services/${service.id}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
              <div className="text-center lg:text-left w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-lg text-gray-300">{service.description}</p>
                <Link to={`/services/${service.id}`} className="inline-block mt-6">
                  <motion.button
                    className="px-8 py-4 bg-boniean-orange text-white font-semibold rounded-lg hover:bg-boniean-orange-bright transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/services">
            <motion.button
              className="px-10 py-4 bg-boniean-orange text-white font-bold text-lg rounded-lg hover:bg-boniean-orange-bright transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
