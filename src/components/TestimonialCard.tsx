import React from "react";
import { motion } from "motion/react";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    author: string;
    role: string;
    content: string;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group"
    >
      <div className="h-full p-6 bg-[#2d1810]/50 backdrop-blur-sm border border-orange-500/20 rounded-sm transition-all duration-300 group-hover:border-orange-500/60 group-hover:shadow-[0_0_30px_rgba(255,111,0,0.2)]">
        <div className="text-5xl text-orange-500/30 font-serif leading-none mb-3">
          "
        </div>

        <p className="text-[#f4e8d0]/90 text-sm leading-relaxed mb-6 min-h-[120px]">
          {testimonial.content}
        </p>

        <div className="border-t border-orange-500/30 pt-4">
          <p className="text-orange-400 font-light">{testimonial.author}</p>
          <p className="text-[#f4e8d0]/50 text-xs tracking-wider uppercase">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
