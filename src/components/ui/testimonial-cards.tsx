import * as React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  position: "front" | "middle" | "back";
  handleShuffle: () => void;
}

export function TestimonialCard({ testimonial, position, handleShuffle }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e: any) => { dragRef.current = e.clientX; }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 150) handleShuffle();
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[420px] w-[320px] sm:h-[450px] sm:w-[380px] select-none place-content-center space-y-6 rounded-2xl border-2 border-boniean-orange/20 bg-boniean-dark-charcoal/60 p-6 sm:p-8 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto rounded-full bg-gradient-to-br from-boniean-orange to-boniean-orange-bright flex items-center justify-center text-white font-bold text-2xl sm:text-3xl border-2 border-boniean-orange/30">
        {testimonial.author.charAt(0)}
      </div>
      <p className="text-center text-sm sm:text-base italic text-gray-300 leading-relaxed">
        "{testimonial.content}"
      </p>
      <div className="text-center">
        <p className="text-sm font-semibold text-boniean-orange">{testimonial.author}</p>
        <p className="text-xs text-gray-400">{testimonial.position}, {testimonial.company}</p>
      </div>
    </motion.div>
  );
}
