import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { CheckCircle, Users, Award, Lightbulb, Target } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_35%),linear-gradient(180deg,#221F26,#17151a)]">
          <BackgroundGrid />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">About BONiEAN</h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300 sm:text-xl">
                Pioneering AI and cloud solutions to transform businesses and drive innovation
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">Our Story</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg mb-4">
                    BONiEAN was founded by a team of experienced engineers and consultants with a shared vision: 
                    to help businesses harness the power of artificial intelligence and cloud technologies to solve complex 
                    challenges and drive innovation.
                  </p>
                  <p className="text-base leading-8 text-gray-200 sm:text-lg mb-4">
                    We've grown into a trusted partner for businesses across various industries, 
                    from startups to enterprise organizations. Our team combines deep technical expertise with business acumen 
                    to deliver solutions that not only solve immediate problems but also position our clients for long-term success.
                  </p>
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    Today, BONiEAN continues to push the boundaries of what's possible with AI and cloud technologies, 
                    helping our clients navigate the rapidly evolving digital landscape and stay ahead of the competition.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-boniean-orange/40 to-boniean-orange-bright/30 opacity-50 blur-2xl rounded-[2rem]"></div>
                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
                  <img 
                    src="/lovable-uploads/clean-workspace.jpg" 
                    alt="BONiEAN Team Meeting" 
                    className="w-full h-auto object-cover rounded-[1.5rem] opacity-95"
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
        <section className="relative overflow-hidden py-20 bg-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="h-14 w-14 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-200 leading-7">
                  To empower businesses with innovative AI and cloud solutions that drive growth, 
                  efficiency, and competitive advantage. We are committed to delivering exceptional 
                  value through technical excellence, strategic thinking, and a deep understanding 
                  of our clients' needs.
                </p>
              </div>
              
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="h-14 w-14 mb-6 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-200 leading-7">
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
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">Our Values</h2>
              <p className="mt-4 text-xl text-gray-300">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-200 leading-7">
                  We are committed to delivering the highest quality solutions and services, 
                  continuously improving our skills and knowledge to stay at the forefront of technology.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-200 leading-7">
                  We believe in the power of teamwork and partnership, working closely with our clients 
                  and each other to achieve shared goals and create lasting value.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Integrity</h3>
                <p className="text-gray-200 leading-7">
                  We conduct our business with honesty, transparency, and ethical standards, 
                  building trust with our clients and within our team.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-200 leading-7">
                  We embrace creativity and forward-thinking, constantly exploring new technologies 
                  and approaches to solve complex problems and create opportunities.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Client Focus</h3>
                <p className="text-gray-200 leading-7">
                  We put our clients at the center of everything we do, understanding their unique needs 
                  and challenges to deliver solutions that drive real business value.
                </p>
              </div>
              
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/45">
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright rounded-2xl flex items-center justify-center shadow-lg shadow-boniean-orange/20">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Adaptability</h3>
                <p className="text-gray-200 leading-7">
                  We embrace change and remain flexible, quickly adjusting to new technologies, 
                  market conditions, and client requirements to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Collective Experience */}
        <section id="our-collective-experience" className="relative overflow-hidden py-20 bg-[#221F26]">
          <div id="our-collective-experience-top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">Our Collective Experience</h2>
              <p className="mt-4 text-xl text-gray-300">
                The combined expertise and accomplishments of our team
              </p>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-base leading-8 text-gray-200 sm:text-lg mb-6">
                We are a team of experienced engineers and researchers with deep expertise in artificial intelligence, software engineering, and cloud-native development. With diverse backgrounds spanning industry, academia, and enterprise consulting, we bring together a powerful blend of technical proficiency, research-driven innovation, and real-world impact.
              </p>
              
              <p className="text-base leading-8 text-gray-200 sm:text-lg mb-6">
                Our team's collective experience includes:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">AI/ML Expertise</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    From building intelligent document processing and Generative AI solutions at AWS to developing computer vision systems and recommendation engines in fintech and manufacturing, our engineers have delivered scalable, production-grade machine learning systems across healthcare, finance, and retail sectors.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Cloud & DevOps Mastery</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    Our team includes AWS Certified Solutions Architects with hands-on experience across multiple cloud platforms, Kubernetes, Terraform, and serverless infrastructure. We design and implement resilient cloud architectures and CI/CD pipelines that power efficient, secure, and scalable applications, leveraging our deep knowledge of cloud best practices and optimization strategies.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Enterprise Consulting</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    Our experience includes architecting secure document distribution portals, leading cloud migrations, and implementing cost optimization strategies. We've facilitated stakeholder workshops to define technical requirements, delivered architectural roadmaps, and managed diverse technical teams across DevOps, infrastructure, and automation projects, ensuring seamless delivery while maintaining security and compliance.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Academic & Research Rigor</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    With a Ph.D. in Computer Science and over a dozen published papers in machine learning, computer vision, and NLP, our team integrates cutting-edge research into practical, enterprise-ready solutions. Our research has influenced areas such as player engagement modeling, political discourse analysis, and uncertainty quantification in AI.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Software Engineering Leadership</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    We've led high-visibility projects at organizations like AWS, NVIDIA, Accenture, and TrendMicro, designing everything from low-latency RPC frameworks to intelligent ETL pipelines and real-time analytics dashboards. Our work has consistently reduced processing times, improved accuracy, and delivered measurable business value.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Education & Enablement</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    Beyond development, our team contributes to knowledge-sharing as lead instructors for enterprise AI courses, covering topics like large language models, prompt engineering, and AI governance across North America, Europe, and the Middle East.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none mt-12">
              <p className="text-base leading-8 text-gray-200 sm:text-lg">
                Together, we bring a track record of transforming complex problems into elegant, data-driven, and scalable solutions. Whether you're building an AI-powered product, modernizing cloud infrastructure, or seeking strategic technology guidance, our team is ready to partner with you at every step of the journey.
              </p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold tracking-tight text-white">Trusted By Industry Leaders</h2>
                <p className="mt-3 text-gray-300">We've worked with some of the world's most innovative companies</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                {[
                  { id: 1, name: "AWS", logo: "/lovable-uploads/client-logos/aws.svg" },
                  { id: 4, name: "IBM", logo: "/lovable-uploads/client-logos/ibm.svg" },
                  { id: 5, name: "Nvidia", logo: "/lovable-uploads/client-logos/Nvidia_logo.svg" },
                  { id: 6, name: "Trend Micro", logo: "/lovable-uploads/client-logos/Trend_Micro_logo.svg" },
                  { id: 9, name: "Volvo", logo: "/lovable-uploads/client-logos/volvo.svg" },
                  { id: 7, name: "Accenture", logo: "/lovable-uploads/client-logos/Accenture.svg" },
                  { id: 8, name: "AMD", logo: "/lovable-uploads/client-logos/AMD_Logo.svg" }
                ].map((client) => (
                  <div 
                    key={client.id} 
                    className="h-20 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 opacity-75 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 hover:border-boniean-orange/35"
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
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">Project Management Excellence</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-8 text-gray-200 sm:text-lg mb-4">
                    At BONiEAN, we believe in maintaining transparent and effective communication throughout our engagements. 
                    Our dedicated project management approach includes weekly sync-up meetings with clients, ensuring alignment 
                    with project goals and timely delivery of milestones.
                  </p>
                  <p className="text-base leading-8 text-gray-200 sm:text-lg mb-4">
                    We follow agile methodologies that allow us to adapt quickly to changing requirements while maintaining 
                    focus on delivering value. Our structured approach to project management ensures that all stakeholders 
                    are informed, engaged, and aligned throughout the project lifecycle.
                  </p>
                  <p className="text-base leading-8 text-gray-200 sm:text-lg">
                    What sets us apart is our commitment to exceptional customer care that extends beyond project delivery. 
                    We provide comprehensive post-delivery support and maintain ongoing relationships with our clients to 
                    ensure their continued success and satisfaction with our solutions.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-boniean-orange/40 to-boniean-orange-bright/30 opacity-50 blur-2xl rounded-[2rem]"></div>
                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
                  <img 
                    src="/lovable-uploads/project-management.jpg" 
                    alt="Project Management" 
                    className="w-full h-auto object-cover rounded-[1.5rem] opacity-95"
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
