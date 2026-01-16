import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <div className="flex justify-center items-center gap-4 mb-4">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-orange-500" />
        <BookOpen className="w-10 h-10 text-orange-500" />
        <div className="h-px w-16 bg-linear-to-l from-transparent to-orange-500" />
      </div>
      <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4 text-[#f4e8d0]">
        <span
          className="text-orange-500"
          style={{ textShadow: "0 0 20px rgba(255, 111, 0, 0.5)" }}
        >
          {title}
        </span>
      </h2>
      {subtitle && <p className="text-[#f4e8d0]/80 text-lg">{subtitle}</p>}
    </motion.div>
  );
}
