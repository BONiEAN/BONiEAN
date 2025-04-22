import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, Users, Award, Lightbulb, Target } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">About BONiEAN</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Pioneering AI and cloud solutions to transform businesses and drive innovation
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 mb-4">
                    BONiEAN was founded by a team of experienced engineers and consultants with a shared vision: 
                    to help businesses harness the power of artificial intelligence and cloud technologies to solve complex 
                    challenges and drive innovation.
                  </p>
                  <p className="text-lg text-gray-300 mb-4">
                    We've grown into a trusted partner for businesses across various industries, 
                    from startups to enterprise organizations. Our team combines deep technical expertise with business acumen 
                    to deliver solutions that not only solve immediate problems but also position our clients for long-term success.
                  </p>
                  <p className="text-lg text-gray-300">
                    Today, BONiEAN continues to push the boundaries of what's possible with AI and cloud technologies, 
                    helping our clients navigate the rapidly evolving digital landscape and stay ahead of the competition.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright opacity-20 blur-lg rounded-lg"></div>
                <div className="relative bg-boniean-dark-charcoal rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/team-meeting.jpg" 
                    alt="BONiEAN Team Meeting" 
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with innovative AI and cloud solutions that drive growth, 
                  efficiency, and competitive advantage. We are committed to delivering exceptional 
                  value through technical excellence, strategic thinking, and a deep understanding 
                  of our clients' needs.
                </p>
              </div>
              
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading AI and cloud solutions provider, recognized for our technical expertise, 
                  innovative approach, and the tangible business outcomes we deliver. We aspire to shape 
                  the future of technology adoption across industries and help our clients thrive in an 
                  increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Our Values</h2>
              <p className="mt-4 text-xl text-gray-300">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We are committed to delivering the highest quality solutions and services, 
                  continuously improving our skills and knowledge to stay at the forefront of technology.
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and partnership, working closely with our clients 
                  and each other to achieve shared goals and create lasting value.
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Integrity</h3>
                <p className="text-gray-300">
                  We conduct our business with honesty, transparency, and ethical standards, 
                  building trust with our clients and within our team.
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We embrace creativity and forward-thinking, constantly exploring new technologies 
                  and approaches to solve complex problems and create opportunities.
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Client Focus</h3>
                <p className="text-gray-300">
                  We put our clients at the center of everything we do, understanding their unique needs 
                  and challenges to deliver solutions that drive real business value.
                </p>
              </div>
              
              <div className="bg-boniean-dark-charcoal p-6 rounded-lg border border-boniean-orange/20">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Adaptability</h3>
                <p className="text-gray-300">
                  We embrace change and remain flexible, quickly adjusting to new technologies, 
                  market conditions, and client requirements to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Collective Experience */}
        <section id="our-collective-experience" className="py-16 bg-boniean-dark-charcoal">
          <div id="our-collective-experience-top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">Our Collective Experience</h2>
              <p className="mt-4 text-xl text-gray-300">
                The combined expertise and accomplishments of our team
              </p>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                We are a team of experienced engineers and researchers with deep expertise in artificial intelligence, software engineering, and cloud-native development. With diverse backgrounds spanning industry, academia, and enterprise consulting, we bring together a powerful blend of technical proficiency, research-driven innovation, and real-world impact.
              </p>
              
              <p className="text-lg text-gray-300 mb-6">
                Our team's collective experience includes:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <h3 className="text-2xl font-semibold text-white mb-6">AI/ML Expertise</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">
                    From building intelligent document processing and Generative AI solutions at AWS to developing computer vision systems and recommendation engines in fintech and manufacturing, our engineers have delivered scalable, production-grade machine learning systems across healthcare, finance, and retail sectors.
                  </p>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Cloud & DevOps Mastery</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">
                    Our team includes AWS Certified Solutions Architects with hands-on experience across multiple cloud platforms, Kubernetes, Terraform, and serverless infrastructure. We design and implement resilient cloud architectures and CI/CD pipelines that power efficient, secure, and scalable applications, leveraging our deep knowledge of cloud best practices and optimization strategies.
                  </p>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Enterprise Consulting</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">
                    Our experience includes architecting secure document distribution portals, leading cloud migrations, and implementing cost optimization strategies. We've facilitated stakeholder workshops to define technical requirements, delivered architectural roadmaps, and managed diverse technical teams across DevOps, infrastructure, and automation projects, ensuring seamless delivery while maintaining security and compliance.
                  </p>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Academic & Research Rigor</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">
                    With a Ph.D. in Computer Science and over a dozen published papers in machine learning, computer vision, and NLP, our team integrates cutting-edge research into practical, enterprise-ready solutions. Our research has influenced areas such as player engagement modeling, political discourse analysis, and uncertainty quantification in AI.
                  </p>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Software Engineering Leadership</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">
                    We've led high-visibility projects at organizations like AWS, NVIDIA, Accenture, and TrendMicro, designing everything from low-latency RPC frameworks to intelligent ETL pipelines and real-time analytics dashboards. Our work has consistently reduced processing times, improved accuracy, and delivered measurable business value.
                  </p>
                </div>
              </div>
              
              <div className="bg-boniean-charcoal p-8 rounded-lg border border-boniean-orange/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Education & Enablement</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">
                    Beyond development, our team contributes to knowledge-sharing as lead instructors for enterprise AI courses, covering topics like large language models, prompt engineering, and AI governance across North America, Europe, and the Middle East.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none mt-12">
              <p className="text-lg text-gray-300">
                Together, we bring a track record of transforming complex problems into elegant, data-driven, and scalable solutions. Whether you're building an AI-powered product, modernizing cloud infrastructure, or seeking strategic technology guidance, our team is ready to partner with you at every step of the journey.
              </p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="py-16 bg-boniean-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white">Trusted By Industry Leaders</h2>
                <p className="mt-3 text-gray-300">We've worked with some of the world's most innovative companies</p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                {[
                  { id: 1, name: "AWS", logo: "/lovable-uploads/client-logos/aws.svg" },
                  { id: 4, name: "IBM", logo: "/lovable-uploads/client-logos/ibm.svg" },
                  { id: 5, name: "Nvidia", logo: "/lovable-uploads/client-logos/Nvidia_logo.svg" },
                  { id: 6, name: "Trend Micro", logo: "/lovable-uploads/client-logos/Trend_Micro_logo.svg" },
                  { id: 7, name: "Accenture", logo: "/lovable-uploads/client-logos/Accenture.svg" },
                ].map((client) => (
                  <div 
                    key={client.id} 
                    className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-12 w-auto max-w-[150px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Management Excellence */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-white mb-6">Project Management Excellence</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 mb-4">
                    At BONiEAN, we believe in maintaining transparent and effective communication throughout our engagements. 
                    Our dedicated project management approach includes weekly sync-up meetings with clients, ensuring alignment 
                    with project goals and timely delivery of milestones.
                  </p>
                  <p className="text-lg text-gray-300 mb-4">
                    We follow agile methodologies that allow us to adapt quickly to changing requirements while maintaining 
                    focus on delivering value. Our structured approach to project management ensures that all stakeholders 
                    are informed, engaged, and aligned throughout the project lifecycle.
                  </p>
                  <p className="text-lg text-gray-300">
                    What sets us apart is our commitment to exceptional customer care that extends beyond project delivery. 
                    We provide comprehensive post-delivery support and maintain ongoing relationships with our clients to 
                    ensure their continued success and satisfaction with our solutions.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-boniean-orange to-boniean-orange-bright opacity-20 blur-lg rounded-lg"></div>
                <div className="relative bg-boniean-dark-charcoal rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/project-management.jpg" 
                    alt="Project Management" 
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
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

export default About;
