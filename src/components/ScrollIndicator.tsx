import React from "react";
import { motion } from "motion/react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <p className="text-xs text-[#f4e8d0]/60 tracking-[0.3em] uppercase">
          Set Sail • Scroll Down
        </p>
        <div className="w-px h-12 bg-linear-to-b from-orange-400 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
