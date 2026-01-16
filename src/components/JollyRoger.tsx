import React from "react";
import { motion } from "motion/react";

export function JollyRoger() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Skull */}
      <circle
        cx="100"
        cy="85"
        r="40"
        fill="currentColor"
        className="text-[#f4e8d0]"
      />
      <ellipse
        cx="100"
        cy="105"
        rx="35"
        ry="25"
        fill="currentColor"
        className="text-[#f4e8d0]"
      />

      {/* Eyes */}
      <circle cx="88" cy="80" r="8" fill="#2d1810" />
      <circle cx="112" cy="80" r="8" fill="#2d1810" />

      {/* Nose */}
      <path d="M 97 92 L 100 98 L 103 92 Z" fill="#2d1810" />

      {/* Teeth */}
      <rect x="85" y="100" width="8" height="10" fill="#2d1810" />
      <rect x="95" y="100" width="8" height="10" fill="#2d1810" />
      <rect x="105" y="100" width="8" height="10" fill="#2d1810" />

      {/* Crossbones */}
      <rect
        x="40"
        y="95"
        width="50"
        height="12"
        rx="6"
        fill="currentColor"
        className="text-[#f4e8d0]"
        transform="rotate(-30 65 101)"
      />
      <rect
        x="110"
        y="95"
        width="50"
        height="12"
        rx="6"
        fill="currentColor"
        className="text-[#f4e8d0]"
        transform="rotate(30 135 101)"
      />
      <circle
        cx="45"
        cy="95"
        r="10"
        fill="currentColor"
        className="text-[#f4e8d0]"
      />
      <circle
        cx="85"
        cy="107"
        r="10"
        fill="currentColor"
        className="text-[#f4e8d0]"
      />
      <circle
        cx="115"
        cy="107"
        r="10"
        fill="currentColor"
        className="text-[#f4e8d0]"
      />
      <circle
        cx="155"
        cy="95"
        r="10"
        fill="currentColor"
        className="text-[#f4e8d0]"
      />

      {/* Straw hat on top */}
      <ellipse
        cx="100"
        cy="45"
        rx="45"
        ry="12"
        fill="currentColor"
        className="text-red-600"
        opacity="0.9"
      />
      <path
        d="M 65 45 Q 100 35 135 45"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-red-600"
        opacity="0.9"
      />
      <circle
        cx="100"
        cy="35"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-red-600"
        opacity="0.9"
      />
      <line
        x1="80"
        y1="35"
        x2="120"
        y2="35"
        stroke="currentColor"
        strokeWidth="4"
        className="text-red-600"
        opacity="0.9"
      />
    </motion.svg>
  );
}
