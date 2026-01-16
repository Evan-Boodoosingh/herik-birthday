import React from "react";
import { motion } from "motion/react";
import { Wind } from "lucide-react";

interface HeroSubtitleProps {
  show: boolean;
}

export function HeroSubtitle({ show }: HeroSubtitleProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="space-y-2"
    >
      <p className="text-2xl md:text-3xl text-orange-400 font-light tracking-wide">
        TURNING 40 ON THE GRAND LINE
      </p>
      <div className="flex justify-center items-center gap-4 mb-2">
        <div className="h-px w-24 bg-linear-to-r from-transparent via-orange-400 to-transparent" />
        <Wind className="w-6 h-6 text-orange-400" />
        <div className="h-px w-24 bg-linear-to-r from-transparent via-orange-400 to-transparent" />
      </div>
      <p className="text-xl text-[#f4e8d0]/90 font-light max-w-2xl mx-auto leading-relaxed">
        "I'm gonna be King of the Pirates!" - Well, Herik is already the king of
        our crew.
        <br />
        <span className="text-orange-400 text-sm">
          Join us on this legendary journey through 40 years of adventure!
        </span>
      </p>
    </motion.div>
  );
}
