import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />
      
      <main className="relative overflow-hidden pt-32 pb-20 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.14),transparent_34%),linear-gradient(180deg,#221F26,#17151a_40%,#221F26)]">
        <BackgroundGrid className="opacity-[0.055]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-8 text-center sm:text-5xl">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none prose-p:leading-7 prose-li:leading-7">
              <p className="text-gray-300 mb-6 text-left">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">1. What Are Cookies</h2>
              <p className="text-gray-300 mb-4 text-left">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">2. How We Use Cookies</h2>
              <p className="text-gray-300 mb-4 text-left">
                BONiEAN Digital Solutions Inc. uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">To make our website work as you'd expect</li>
                <li className="mb-2">To remember your settings during and between visits</li>
                <li className="mb-2">To improve the speed/security of the site</li>
                <li className="mb-2">To allow you to share pages with social networks</li>
                <li className="mb-2">To continuously improve our website for you</li>
                <li className="mb-2">To make our marketing more efficient</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">3. Types of Cookies We Use</h2>
              <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">3.1 Necessary Cookies</h3>
              <p className="text-gray-300 mb-4 text-left">
                These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">3.2 Performance Cookies</h3>
              <p className="text-gray-300 mb-4 text-left">
                These cookies collect information about how you use our website, such as which pages you visit most often and if you receive any error messages.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">3.3 Functionality Cookies</h3>
              <p className="text-gray-300 mb-4 text-left">
                These cookies allow the website to remember choices you make and provide enhanced, more personal features.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">3.4 Targeting Cookies</h3>
              <p className="text-gray-300 mb-4 text-left">
                These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">4. Managing Cookies</h2>
              <p className="text-gray-300 mb-4 text-left">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
              </p>
              <p className="text-gray-300 mb-4 text-left">
                If you want to delete cookies or configure your browser to delete or reject cookies, please refer to your browser's help menu. The process for each browser is slightly different:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 text-left">
                <li className="mb-2">Chrome: Settings → Privacy and Security → Clear browsing data</li>
                <li className="mb-2">Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                <li className="mb-2">Safari: Preferences → Privacy → Manage Website Data</li>
                <li className="mb-2">Edge: Settings → Privacy, search, and services → Clear browsing data</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">5. Changes to This Cookie Policy</h2>
              <p className="text-gray-300 mb-4 text-left">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Cookie Policy.
              </p>
              
              <h2 className="text-xl font-semibold text-boniean-orange mt-8 mb-4 text-left">6. Contact Us</h2>
              <p className="text-gray-300 mb-4 text-left">
                If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy; 