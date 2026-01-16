import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OceanBackground } from "./OceanBackground";
import { JollyRoger } from "./JollyRoger";
import { TypewriterText } from "./TypewriterText";
import { HeroSubtitle } from "./HeroSubtitle";
import { WantedPoster } from "./WantedPoster";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showWantedPoster, setShowWantedPoster] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const fullText = "The Legend of Herik";

  const handleTypewriterComplete = useCallback(() => {
    setIsComplete(true);
    setTimeout(() => setShowSubtitle(true), 500);
    setTimeout(() => setShowWantedPoster(true), 1500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <OceanBackground />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto mt-8">
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <JollyRoger />
        </motion.div>

        <div className="relative mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-1 relative text-[#f4e8d0]">
              <span
                className="relative inline-block"
                style={{
                  textShadow:
                    "0 0 30px rgba(211, 47, 47, 0.5), 0 0 60px rgba(255, 111, 0, 0.3)",
                }}
              >
                <TypewriterText
                  text={fullText}
                  onComplete={handleTypewriterComplete}
                />
              </span>
            </h1>
          </motion.div>

          <AnimatePresence>
            <HeroSubtitle show={showSubtitle} />
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showWantedPoster && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", damping: 15 }}
              className="flex justify-center"
            >
              <WantedPoster />
            </motion.div>
          )}
        </AnimatePresence>

        {isComplete && <ScrollIndicator />}
      </div>
    </section>
  );
}
