import React from "react";
import { motion } from "motion/react";

export function OceanBackground() {
  return (
    <>
      {/* Animated ocean background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605999358548-c8593e96cb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXJhdGUlMjBzaGlwJTIwc2FpbGluZyUyMG9jZWFufGVufDF8fHx8MTc2ODUwNDIzNHww&ixlib=rb-4.1.0&q=80&w=1080)",
          backgroundSize: "cover",
        }}
      />

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            className="h-full w-[200%]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z"
              fill="#d32f2f"
              opacity="0.1"
            />
            <path
              d="M0,70 Q150,50 300,70 T600,70 T900,70 T1200,70 L1200,120 L0,120 Z"
              fill="#ff6f00"
              opacity="0.15"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
