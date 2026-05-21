import { Brain, Cloud, Container, Cog, ChartNetwork, CloudUpload, ChartScatter, Layout, Building2 } from 'lucide-react';
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
    image: "/lovable-uploads/ai-machine-learning.jpg",
  },
  {
    id: "technical-auditing",
    title: "Technical Auditing",
    description: "Expert evaluation of technical proposals for accuracy, feasibility, and value",
    image: "/lovable-uploads/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
  },
  {
    id: "cloud-solution-deployment",
    title: "Cloud solutions & Deployment",
    description: "Comprehensive cloud solutions and automated deployment strategies for modern businesses",
    image: "/lovable-uploads/cloud-solution-deployment.jpg",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden py-28 bg-gradient-to-b from-[#221F26] via-gray-900 to-[#221F26]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(249,115,22,0.14),transparent_30%),radial-gradient(circle_at_90%_42%,rgba(254,198,161,0.12),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive solutions for modern technology challenges
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-boniean-orange/10 blur-3xl transition duration-700 group-hover:bg-boniean-orange/20" />
              <div className={`relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}>
                <Link to={`/services/${service.id}`} className="block">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/30">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[16/10] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5" />
                  </div>
                </Link>

                <div className="px-2 py-4 text-center lg:px-8 lg:text-left">
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{service.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-gray-300">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="inline-block mt-8">
                    <Button
                      className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-6 font-semibold text-black shadow-lg shadow-boniean-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-yellow-600"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/services">
            <motion.button
              className="rounded-full border border-white/15 bg-white/10 px-10 py-4 text-lg font-bold text-boniean-orange shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-boniean-orange/60 hover:bg-boniean-orange hover:text-black"
              whileHover={{ y: -2 }}
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
