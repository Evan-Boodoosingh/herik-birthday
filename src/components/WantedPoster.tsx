import React from "react";
import { motion } from "motion/react";

export function WantedPoster() {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 111, 0, 0.3)",
        transition: { duration: 0.3 },
      }}
      className="relative w-[32rem] bg-[#f4e8d0] p-6 shadow-2xl border-4 border-[#8b6f47] rounded-sm cursor-pointer"
      style={{
        backgroundImage: "linear-gradient(to bottom, #f4e8d0 0%, #e8d5b7 100%)",
      }}
    >
      {/* Weathered texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-4">
          <h3
            className="text-5xl tracking-wider mb-2"
            style={{ fontFamily: "serif", color: "#2d1810" }}
          >
            WANTED
          </h3>
          <div className="h-1 w-full bg-[#2d1810] mb-2" />
          <div className="h-px w-full bg-[#2d1810]" />
        </div>

        {/* Photo placeholder */}
        <div className="w-full h-64 bg-[#2d1810]/20 border-4 border-[#2d1810] mb-4 flex items-center justify-center">
          <p
            className="text-[#2d1810] text-center px-4 text-sm"
            style={{ fontFamily: "serif" }}
          >
            [REPLACE WITH HERIK'S PHOTO]
            <br />
            <span className="text-xs">
              Drag and drop your best mugshot here!
            </span>
          </p>
        </div>

        {/* Name */}
        <h4
          className="text-center text-3xl mb-2 tracking-wide"
          style={{ fontFamily: "serif", color: "#2d1810" }}
        >
          "HERIK"
        </h4>

        {/* Epithet */}
        <p
          className="text-center text-sm mb-4 italic"
          style={{ color: "#2d1810" }}
        >
          [Add his One Piece epithet/nickname here]
          <br />
          <span className="text-xs">
            e.g., "The Unstoppable", "Master of...", etc.
          </span>
        </p>

        {/* Bounty */}
        <div className="text-center mb-4">
          <div
            className="text-5xl tracking-wider mb-1"
            style={{ fontFamily: "serif", color: "#2d1810" }}
          >
            40,000,000
          </div>
          <div className="text-xs tracking-widest" style={{ color: "#2d1810" }}>
            YEARS OF LEGENDARY ADVENTURES
          </div>
        </div>

        {/* Footer */}
        <div className="h-px w-full bg-[#2d1810] mb-2" />
        <p
          className="text-center text-xs tracking-wider"
          style={{ color: "#2d1810" }}
        >
          DEAD OR ALIVE • BIRTHDAY CELEBRATION • 2026
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#2d1810]" />
      <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#2d1810]" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#2d1810]" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#2d1810]" />
    </motion.div>
  );
}
