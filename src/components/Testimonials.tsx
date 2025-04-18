import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    content: "BONiEAN transformed our approach to data analytics. Their AI solution helped us uncover insights we never knew existed in our data, leading to a 30% increase in operational efficiency.",
    author: "Sarah Johnson",
    position: "CTO, TechInnovate",
    company: "TechInnovate"
  },
  {
    id: 2,
    content: "The cloud migration strategy developed by BONiEAN was flawless. They understood our complex requirements and delivered a solution that not only met but exceeded our expectations.",
    author: "Michael Chen",
    position: "VP of Engineering",
    company: "DataStream Solutions"
  },
  {
    id: 3,
    content: "Working with BONiEAN on our DevOps transformation was a game-changer. Their expertise in CI/CD pipelines reduced our deployment time by 70% and significantly improved our code quality.",
    author: "Emily Rodriguez",
    position: "Director of Software Development",
    company: "Nexus Systems"
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
    <section className="py-24 bg-boniean-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-boniean-charcoal rounded-lg p-8 md:p-12 border border-boniean-orange/20 shadow-lg">
                    <Quote className="h-10 w-10 text-boniean-orange opacity-50 mb-6" />
                    <p className="text-lg md:text-xl text-gray-200 italic mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="border-boniean-orange/50 text-boniean-orange hover:bg-boniean-orange hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-boniean-orange' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="border-boniean-orange/50 text-boniean-orange hover:bg-boniean-orange hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
