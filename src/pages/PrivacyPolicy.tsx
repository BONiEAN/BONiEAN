import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-boniean-dark-charcoal/80 backdrop-blur-sm rounded-lg shadow-xl border border-boniean-orange/20 p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6 text-left">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">1. Introduction</h2>
              <p className="text-gray-300 mb-4 text-left">
                BONiEAN Digital Solutions Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 mb-4 text-left">
                Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4 text-left">
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">Personal information (such as name, email address, phone number)</li>
                <li className="mb-2">Usage data (such as how you interact with our website)</li>
                <li className="mb-2">Device information (such as browser type, IP address)</li>
                <li className="mb-2">Cookies and similar tracking technologies</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4 text-left">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">Provide, maintain, and improve our services</li>
                <li className="mb-2">Respond to your comments, questions, and requests</li>
                <li className="mb-2">Send you technical notices, updates, and support messages</li>
                <li className="mb-2">Communicate with you about products, services, and events</li>
                <li className="mb-2">Monitor and analyze trends, usage, and activities</li>
                <li className="mb-2">Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">4. Disclosure of Your Information</h2>
              <p className="text-gray-300 mb-4 text-left">
                We may disclose your personal information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">To our subsidiaries and affiliates</li>
                <li className="mb-2">To contractors, service providers, and other third parties we use to support our business</li>
                <li className="mb-2">To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets</li>
                <li className="mb-2">To comply with any court order, law, or legal process, including to respond to any government or regulatory request</li>
                <li className="mb-2">To protect the rights, property, or safety of BONiEAN, our customers, or others</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">5. Your Choices</h2>
              <p className="text-gray-300 mb-4 text-left">
                You have certain choices regarding the information we collect and how it is used:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">You can opt out of receiving marketing emails from us by following the instructions in those emails</li>
                <li className="mb-2">You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent</li>
                <li className="mb-2">You can request access to, correction of, or deletion of your personal information</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">6. Data Security</h2>
              <p className="text-gray-300 mb-4 text-left">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">7. Changes to Our Privacy Policy</h2>
              <p className="text-gray-300 mb-4 text-left">
                We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on our website home page. The date the Privacy Policy was last revised is identified at the top of the page.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">8. Contact Information</h2>
              <p className="text-gray-300 mb-4 text-left">
                To ask questions or comment about this Privacy Policy and our privacy practices, contact us at:
              </p>
              <p className="text-gray-300 mb-4 text-left">
                BONiEAN Digital Solutions Inc.<br />
                Ottawa, ON, Canada<br />
                Email: info@boniean.com
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 