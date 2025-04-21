import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "BONiEAN's AI solutions transformed our business operations, increasing efficiency by 40% in just three months.",
    author: "Sarah Johnson",
    title: "CTO, TechVision Inc."
  },
  {
    quote: "Their DevOps expertise helped us reduce deployment time from days to minutes. A game-changer for our team.",
    author: "Michael Chen",
    title: "VP of Engineering, CloudScale"
  },
  {
    quote: "The security analytics platform they built gives us unprecedented visibility into potential threats.",
    author: "David Rodriguez",
    title: "CISO, SecureFinance"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-boniean-dark-charcoal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Client Success</h2>
        </div>
        
        <div className="relative bg-boniean-charcoal rounded-xl p-8 md:p-12">
          <div className="absolute top-6 left-6">
            <Quote className="h-12 w-12 text-boniean-orange opacity-30" />
          </div>
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-white italic mb-8 text-center">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-boniean-orange">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-400">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-boniean-dark-charcoal text-white hover:bg-boniean-orange/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-boniean-dark-charcoal text-white hover:bg-boniean-orange/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
