import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import emailjs from '@emailjs/browser'; 

export const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formRef.current) return;

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS response:', response);

      if (response.text !== 'OK') throw new Error('Failed to send message');

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: '', email: '', message: '' });
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
    <section id="contact" className="py-24 bg-boniean-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-400">
            Let's discuss how we can help transform your business
          </p>
          <p className="mt-2 text-sm text-gray-400">
            We respond within 24 hours!
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <Input
                id="name"
                name="name" 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 bg-boniean-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                name="email" 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 bg-boniean-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message" 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 h-32 bg-boniean-charcoal border-boniean-charcoal text-white placeholder:text-gray-400"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-boniean-orange-bright hover:bg-orange-600 text-white transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
