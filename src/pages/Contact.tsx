import { useState, useRef } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-boniean-dark-charcoal">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-boniean-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Get in touch with our team to discuss how we can help transform your business
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-boniean-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name" 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-boniean-dark-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email" 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-boniean-dark-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company" 
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-boniean-dark-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-boniean-dark-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject" 
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-boniean-dark-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="h-32 bg-boniean-dark-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-boniean-orange to-boniean-orange-bright hover:from-boniean-orange-bright hover:to-boniean-orange text-white transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
                
                <div className="bg-boniean-dark-charcoal p-8 rounded-lg border border-boniean-orange/20 shadow-lg">
                  <div className="space-y-8 max-w-md mx-auto">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex-shrink-0 bg-boniean-charcoal p-3 rounded-full mb-3">
                        <MapPin className="h-6 w-6 text-boniean-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Our Office</h3>
                        <p className="mt-2 text-gray-300">
                          Ottawa, ON<br />
                          Canada
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="flex-shrink-0 bg-boniean-charcoal p-3 rounded-full mb-3">
                        <Mail className="h-6 w-6 text-boniean-orange" />
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
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="flex-shrink-0 bg-boniean-charcoal p-3 rounded-full mb-3">
                        <Clock className="h-6 w-6 text-boniean-orange" />
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
