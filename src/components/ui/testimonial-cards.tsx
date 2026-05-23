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
  const isFront = position === "front";

  const handleDragEnd = (_: any, info: { offset: { x: number; y: number } }) => {
    // Light touch: 50px horizontal swipe in either direction flips the card
    if (Math.abs(info.offset.x) > 50) {
      handleShuffle();
    }
  };

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-1.5deg" : position === "middle" ? "0deg" : "1.5deg",
        x: position === "front" ? "0%" : position === "middle" ? "6%" : "4%",
        y: position === "front" ? "0%" : "4%"
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.1}
      dragSnapToOrigin
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`absolute left-0 top-0 grid h-[600px] w-[350px] sm:h-[610px] sm:w-[480px] select-none place-content-center space-y-7 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-9 ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-boniean-orange/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-boniean-orange/40 bg-gradient-to-br from-boniean-orange to-boniean-orange-bright text-2xl font-bold text-black shadow-lg shadow-boniean-orange/20 sm:h-24 sm:w-24 sm:text-3xl">
        {testimonial.author.charAt(0)}
      </div>
      <p className="relative text-center text-[15px] italic leading-7 text-gray-200 sm:text-base sm:leading-8">
        "{testimonial.content}"
      </p>
      <div className="relative text-center">
        <p className="text-sm font-semibold text-boniean-orange">{testimonial.author}</p>
        <p className="text-xs text-gray-400">{testimonial.position}, {testimonial.company}</p>
      </div>
    </motion.div>
  );
}
