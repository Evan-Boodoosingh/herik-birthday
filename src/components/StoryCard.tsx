import React from "react";
import { motion } from "motion/react";

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    date: string;
    content: string;
  };
  index: number;
  onClick: () => void;
}

export function StoryCard({ story, index, onClick }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ x: 8, transition: { duration: 0.3 } }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div className="p-6 bg-[#2d1810]/30 backdrop-blur-sm border-l-4 border-orange-500/50 rounded-sm transition-all duration-300 group-hover:border-orange-500 group-hover:bg-[#2d1810]/50 group-hover:shadow-[0_0_20px_rgba(255,111,0,0.1)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h4 className="text-xl font-light text-[#f4e8d0]">{story.title}</h4>
          <span className="text-orange-400 text-sm tracking-wider">
            {story.date}
          </span>
        </div>
        <p className="text-[#f4e8d0]/80 leading-relaxed line-clamp-2">
          {story.content}
        </p>
        <p className="text-orange-500 text-xs mt-2 tracking-wider uppercase">
          Click to read more →
        </p>
      </div>
    </motion.div>
  );
}
