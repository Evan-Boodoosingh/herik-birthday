import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Sparkles, Star, X } from "lucide-react";

export function TreasureReveal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 pt-40 md:pt-48">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff6f00,transparent_70%)]"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4 text-[#f4e8d0]">
            <span
              className="text-orange-500"
              style={{ textShadow: "0 0 30px rgba(255, 111, 0, 0.5)" }}
            >
              THE ONE PIECE
            </span>
          </h2>
          <p className="text-[#f4e8d0]/80 text-lg">
            Herik's Ultimate Birthday Treasure...
          </p>
        </motion.div>

        {/* Treasure chest */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Chest visual */}
              <div className="relative w-64 h-48 perspective-1000">
                <motion.div
                  animate={isOpen ? { rotateX: -120 } : { rotateX: 0 }}
                  transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
                  className="w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "bottom",
                  }}
                >
                  {/* Chest body */}
                  <div className="absolute inset-0 bg-linear-to-b from-amber-600 to-amber-800 border-4 border-amber-900 rounded-lg shadow-2xl">
                    <div className="absolute inset-x-0 top-1/2 h-2 bg-amber-900" />
                    <div className="absolute inset-y-0 left-1/2 w-2 bg-amber-900 transform -translate-x-1/2" />

                    {/* Lock */}
                    {!isOpen && (
                      <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-linear-to-b from-gray-400 to-gray-600 rounded-sm shadow-lg"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-2xl bg-orange-500/30 -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: isOpen ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Click instruction */}
              {!isOpen && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-sm backdrop-blur-sm">
                    <span className="text-orange-400 text-sm tracking-wider uppercase">
                      Click to Open
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.button>
          </motion.div>

          {/* Confetti particles on reveal */}
          <AnimatePresence>
            {isOpen && (
              <>
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [1, 1, 0],
                      scale: [0, 1, 0.5],
                      x: (Math.random() - 0.5) * 600,
                      y: [0, -200 - Math.random() * 200],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      ease: "easeOut",
                    }}
                    className="absolute top-0 left-1/2 pointer-events-none"
                  >
                    {i % 3 === 0 ? (
                      <Star
                        className="w-6 h-6 text-orange-500"
                        fill="currentColor"
                      />
                    ) : i % 3 === 1 ? (
                      <Sparkles
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                      />
                    ) : (
                      <div className="w-4 h-4 bg-linear-to-br from-orange-500 to-red-600 rounded-full" />
                    )}
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Gift reveal */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm overflow-y-auto"
                onClick={() => setIsOpen(false)}
              >
                <div
                  className="relative p-6 md:p-8 bg-[#2d1810]/95 backdrop-blur-md border-2 border-orange-500/50 rounded-sm shadow-[0_0_50px_rgba(255,111,0,0.3)] max-w-3xl my-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-[#2d1810] rounded-full border-2 border-orange-500/50 hover:border-orange-500 hover:bg-[#3d2820] transition-all shadow-lg"
                  >
                    <X className="w-6 h-6 text-orange-500" />
                  </button>

                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-orange-500 -translate-x-2 -translate-y-2" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-orange-500 translate-x-2 -translate-y-2" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-orange-500 -translate-x-2 translate-y-2" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-orange-500 translate-x-2 translate-y-2" />

                  <Gift className="w-16 h-16 text-orange-500 mx-auto mb-6" />

                  <h3
                    className="text-3xl font-light text-orange-500 mb-4 tracking-wider"
                    style={{ textShadow: "0 0 20px rgba(255, 111, 0, 0.5)" }}
                  >
                    YOUR GIFT
                  </h3>

                  {/* GIFT MESSAGE - EASY TO CUSTOMIZE */}
                  <div className="space-y-4 text-[#f4e8d0]/90 leading-relaxed max-w-2xl mx-auto">
                    <p className="text-lg">
                      <strong className="text-orange-400">
                        [INSERT_GIFT_MESSAGE_HERE]
                      </strong>
                    </p>
                    <p>
                      Replace this text with your personalized gift message,
                      surprise reveal, or special announcement. This is the
                      culmination of the journey - make it memorable!
                    </p>
                    <p className="text-sm text-[#f4e8d0]/60 italic">
                      "The treasure isn't the destination, it's the friends we
                      made along the way." - One Piece
                    </p>
                  </div>

                  {/* Optional: Add image of the gift */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 max-w-md mx-auto"
                  >
                    {/* GIFT IMAGE PLACEHOLDER - EASY TO REPLACE */}
                    <div className="relative overflow-hidden rounded-sm border-2 border-orange-500/30">
                      <img
                        src="https://images.unsplash.com/photo-1632809199725-72a4245e846b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhc3VyZSUyMGNoZXN0JTIwZ29sZHxlbnwxfHx8fDE3Njg0MTc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Gift Reveal"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-orange-500/30 to-transparent" />
                    </div>
                    <p className="text-center text-xs text-[#f4e8d0]/50 mt-2 tracking-wider uppercase">
                      Replace with your gift image
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-12 border-t border-orange-500/20"
        >
          <p className="text-[#f4e8d0]/60 text-sm tracking-wider">
            CREATED WITH ❤️ • THE JOURNEY CONTINUES • {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
