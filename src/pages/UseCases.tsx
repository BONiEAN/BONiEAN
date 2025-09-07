import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonials } from "@/components/Testimonials";

// Sample use case data - replace with real projects
const useCases = [
  // Add other use cases here if needed
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Use Cases</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Real projects and measurable outcomes delivered by BONiEAN
              </p>
            </div>
          </div>
        </section>

        {/* AHGroup Project Details */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Full-Sized Project Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/Project1.png"
                  alt="AHGroup Chatbot Project"
                  className="w-full h-auto"
                />
              </div>

              {/* Project Description */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">AHGroup Chatbot Project</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  BONiEAN collaborated with AHGroup to develop a chatbot solution using a Retrieval-Augmented Generation (RAG) system. The solution integrates a fleet of AWS services, including Lambda, OpenSearch, Bedrock, S3, DynamoDB, Cognito, WAF, and IAM, to deliver a robust and scalable architecture.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The chatbot features a custom floating bubble interface that provides a smooth chatting experience. It includes features like a welcoming message displayed 10 seconds after the user's visit, enhancing user engagement and creating a friendly first impression.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A unique security solution was implemented to meet the client's requirements. The frontend UI is hosted on the client's system, while the backend, powered by AWS Bedrock, resides on BONiEAN's AWS account. To ensure security, a token dispenser Lambda function was developed to manage authentication without exposing secrets to the frontend.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This project demonstrates BONiEAN's expertise in building secure, scalable, and user-friendly solutions tailored to client needs. It highlights our ability to deliver innovative solutions that align with client goals while leveraging the latest cloud technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-boniean-charcoal">
          <Testimonials showTestimonials />
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase) => (
                <Card
                  key={useCase.id}
                  className="bg-boniean-dark-charcoal border-boniean-orange/20 hover:border-boniean-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-boniean-orange/5"
                >
                  <CardContent className="p-6">
                    <div className="h-32 flex items-center justify-center mb-6 bg-white/5 rounded-lg">
                      <img
                        src={useCase.logo}
                        alt={useCase.name}
                        className="max-h-20 max-w-[80%]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            const letter = document.createElement("div");
                            letter.className =
                              "h-20 w-20 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-4xl";
                            letter.textContent = useCase.name.charAt(0);
                            parent.innerHTML = "";
                            parent.appendChild(letter);
                          }
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {useCase.name}
                    </h3>
                    <p className="text-boniean-orange mb-4">{useCase.industry}</p>
                    <p className="text-gray-300">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
