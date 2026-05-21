import { useState } from 'react';
import { TestimonialCard } from './ui/testimonial-cards';

const testimonials = [
  {
    id: 1,
    content: "Working with BONiEAN was a great experience. They were highly responsive and adaptive whenever our requirements changed, and they made sure to deliver exactly the customizations we needed. The project was completed ahead of the deadline with great quality. I would confidently recommend their services for anyone looking for a reliable and professional tech partner.",
    author: "Madhu S Naidu",
    position: "CTO",
    company: "AHGroup"
  },
  {
    id: 2,
    content: "BONiEAN delivered exceptional database server setup, system configuration, and network architecture work for our organization. Their independent technical review and oversight demonstrated deep expertise across multiple technology domains. A reliable partner we'd recommend without hesitation.",
    author: "Mohamed Selim",
    position: "Chief Technical Officer",
    company: "Canadian Council of the Blind"
  }
];

interface TestimonialsProps {
  showTestimonials?: boolean;
}

export const Testimonials = ({ showTestimonials = false }: TestimonialsProps) => {
  const [positions, setPositions] = useState(["front", "back"]);

  const handleShuffle = () => {
    setPositions(prev => [prev[1], prev[0]]);
  };

  if (!showTestimonials) return null;

  return (
    <section className="relative overflow-hidden py-28 bg-[#221F26]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.14),transparent_34%),radial-gradient(circle_at_20%_100%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">What Our Clients Say</h2>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute top-16 h-72 w-72 rounded-full bg-boniean-orange/15 blur-3xl" />
          <div className="relative h-[640px] w-[350px] sm:w-[500px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                position={positions[index] as "front" | "back"}
                handleShuffle={handleShuffle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
