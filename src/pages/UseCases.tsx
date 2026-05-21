import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_35%),linear-gradient(180deg,#221F26,#17151a)]">
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">Use Cases</h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300 sm:text-xl">
                Real projects and measurable outcomes delivered by BONiEAN
              </p>
            </div>
          </div>
        </section>

        {/* AHGroup Project Details */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_85%_65%,rgba(254,198,161,0.10),transparent_28%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-6 lg:p-8">
              {/* Full-Sized Project Image */}
              <div className="relative rounded-[1.75rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/30">
                <img
                  src="/lovable-uploads/Project1.png"
                  alt="AHGroup Chatbot Project"
                  className="w-full h-auto object-cover opacity-95 transition duration-700 hover:scale-[1.02] hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
              </div>

              {/* Project Description */}
              <div className="flex flex-col justify-center px-2 py-4 lg:px-6">
                <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">AHGroup Chatbot Project</h2>
                <p className="text-gray-200 leading-8 mb-6 leading-8">
                  BONiEAN collaborated with AHGroup to develop a chatbot solution using a Retrieval-Augmented Generation (RAG) system. The solution integrates a fleet of AWS services, including Lambda, OpenSearch, Bedrock, S3, DynamoDB, Cognito, WAF, and IAM, to deliver a robust and scalable architecture.
                </p>
                <p className="text-gray-200 leading-8 mb-6 leading-8">
                  The chatbot features a custom floating bubble interface that provides a smooth chatting experience. It includes features like a welcoming message displayed 10 seconds after the user's visit, enhancing user engagement and creating a friendly first impression.
                </p>
                <p className="text-gray-200 leading-8 mb-6 leading-8">
                  A unique security solution was implemented to meet the client's requirements. The frontend UI is hosted on the client's system, while the backend, powered by AWS Bedrock, resides on BONiEAN's AWS account. To ensure security, a token dispenser Lambda function was developed to manage authentication without exposing secrets to the frontend.
                </p>
                <p className="text-gray-200 leading-8">
                  This project demonstrates BONiEAN's expertise in building secure, scalable, and user-friendly solutions tailored to client needs. It highlights our ability to deliver innovative solutions that align with client goals while leveraging the latest cloud technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials showTestimonials />
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
