
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">About BONiEAN</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-gray-300">
              At Boniean, we empower businesses to thrive in the age of AI innovation. Specializing in software engineering consulting, we bring expertise in Artificial Intelligence, DevOps, Cloud Architecture, System Design, Kubernetes, and much more to help organizations scale, optimize, and innovate.
            </p>
            
            <p className="text-lg text-gray-300">
              Our mission is simple: to bridge the gap between cutting-edge technology and sustainable, secure solutions. Whether it's building intelligent systems, ensuring smooth cloud transitions, or optimizing DevOps pipelines, we partner with you to design and implement tailored solutions that align with your vision.
            </p>
            
            <p className="text-lg text-gray-300">
              Backed by a team of seasoned engineers and problem solvers, we are committed to excellence, collaboration, and unlocking the full potential of technology for your business.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Project Management Excellence</h2>
            
            <p className="text-lg text-gray-300">
              We believe in maintaining transparent and effective communication throughout our engagements. Our dedicated project management approach includes weekly sync-up meetings with clients, ensuring alignment with project goals and timely delivery of milestones.
            </p>
            
            <p className="text-lg text-gray-300">
              What sets us apart is our commitment to exceptional customer care that extends beyond project delivery. We provide comprehensive post-delivery support and maintain ongoing relationships with our clients to ensure their continued success and satisfaction with our solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
