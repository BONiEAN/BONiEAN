import { useState, useRef } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formRef.current) return;

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { 
          from_name: formData.name, 
          from_email: formData.email, 
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS response:', response);

      if (response.text !== 'OK') throw new Error('Failed to send message');

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const inputClass = "h-12 rounded-xl border-white/10 bg-white/[0.055] text-white placeholder:text-gray-500 focus-visible:ring-boniean-orange";

  return (
    <div className="min-h-screen bg-[#221F26]">
      <Navbar />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_35%),linear-gradient(180deg,#221F26,#17151a)]">
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">Contact Us</h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300 sm:text-xl">
                Get in touch with our team to discuss how we can help transform your business
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#221F26] via-[#2d2930] to-[#221F26]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(254,198,161,0.10),transparent_28%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Contact Form */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-white mb-8">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-gray-200 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name" 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-gray-200 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email" 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-base font-medium text-gray-200 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company" 
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-base font-medium text-gray-200 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-base font-medium text-gray-200 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject" 
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-200 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="h-36 rounded-xl border-white/10 bg-white/[0.055] text-white placeholder:text-gray-500 focus-visible:ring-boniean-orange"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 py-6 text-base font-semibold text-black shadow-lg shadow-boniean-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-yellow-600"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-white mb-8 text-center">Contact Information</h2>
                
                <div className="space-y-6 max-w-md mx-auto">
                  <div className="flex flex-col items-center text-center rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright p-4 rounded-2xl mb-4 shadow-lg shadow-boniean-orange/20">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Our Office</h3>
                      <p className="mt-2 text-gray-300">
                        Ottawa, ON<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright p-4 rounded-2xl mb-4 shadow-lg shadow-boniean-orange/20">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="mt-2 text-gray-300">
                        <a href="mailto:info@boniean.com" className="hover:text-boniean-orange transition-colors">
                          info@boniean.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright p-4 rounded-2xl mb-4 shadow-lg shadow-boniean-orange/20">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="mt-2 text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
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

export default Contact;
