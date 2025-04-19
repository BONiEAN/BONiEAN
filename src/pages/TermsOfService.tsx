import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-boniean-dark-charcoal/80 backdrop-blur-sm rounded-lg shadow-xl border border-boniean-orange/20 p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6 text-left">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4 text-left">
                By accessing and using the BONiEAN Digital Solutions Inc. website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-300 mb-4 text-left">
                If you do not agree to abide by the above, please do not use this website or our services.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">2. Use License</h2>
              <p className="text-gray-300 mb-4 text-left">
                Permission is granted to temporarily download one copy of the materials (information or software) on BONiEAN Digital Solutions Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">Modify or copy the materials</li>
                <li className="mb-2">Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
                <li className="mb-2">Attempt to decompile or reverse engineer any software contained on BONiEAN Digital Solutions Inc.'s website</li>
                <li className="mb-2">Remove any copyright or other proprietary notations from the materials</li>
                <li className="mb-2">Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-300 mb-4 text-left">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by BONiEAN Digital Solutions Inc. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">3. Disclaimer</h2>
              <p className="text-gray-300 mb-4 text-left">
                The materials on BONiEAN Digital Solutions Inc.'s website are provided on an 'as is' basis. BONiEAN Digital Solutions Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-300 mb-4 text-left">
                Further, BONiEAN Digital Solutions Inc. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">4. Limitations</h2>
              <p className="text-gray-300 mb-4 text-left">
                In no event shall BONiEAN Digital Solutions Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BONiEAN Digital Solutions Inc.'s website, even if BONiEAN Digital Solutions Inc. or a BONiEAN Digital Solutions Inc. authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">5. Accuracy of Materials</h2>
              <p className="text-gray-300 mb-4 text-left">
                The materials appearing on BONiEAN Digital Solutions Inc.'s website could include technical, typographical, or photographic errors. BONiEAN Digital Solutions Inc. does not warrant that any of the materials on its website are accurate, complete, or current. BONiEAN Digital Solutions Inc. may make changes to the materials contained on its website at any time without notice. However, BONiEAN Digital Solutions Inc. does not make any commitment to update the materials.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">6. Links</h2>
              <p className="text-gray-300 mb-4 text-left">
                BONiEAN Digital Solutions Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BONiEAN Digital Solutions Inc. of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">7. Modifications</h2>
              <p className="text-gray-300 mb-4 text-left">
                BONiEAN Digital Solutions Inc. may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">8. Governing Law</h2>
              <p className="text-gray-300 mb-4 text-left">
                These terms and conditions are governed by and construed in accordance with the laws of Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">9. Contact Information</h2>
              <p className="text-gray-300 mb-4 text-left">
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService; 