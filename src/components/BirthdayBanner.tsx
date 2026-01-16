import React from "react";
import { motion } from "motion/react";
import { Cake, PartyPopper } from "lucide-react";

export function BirthdayBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Diagonal stripe background */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 via-red-600/10 to-amber-600/10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 111, 0, 0.3) 35px, rgba(255, 111, 0, 0.3) 70px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Decorative icons */}
          <div className="flex justify-center items-center gap-8 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2, rotate: 20 }}
            >
              <PartyPopper className="w-12 h-12 text-yellow-400 cursor-pointer" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.3, y: -15 }}
            >
              <Cake className="w-16 h-16 text-orange-500 cursor-pointer" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2, rotate: -20 }}
            >
              <PartyPopper className="w-12 h-12 text-red-400 cursor-pointer" />
            </motion.div>
          </div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-wide mb-4">
              <span
                className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-amber-500"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 111, 0, 0.5))",
                }}
              >
                HAPPY 40TH BIRTHDAY
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#f4e8d0] font-light">
              Captain Herik, our Nakama forever! 🏴‍☠️
            </p>

            {/* Fun One Piece themed stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto"
            >
              <motion.div
                className="text-center p-4 rounded-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 111, 0, 0.1)",
                }}
              >
                <div className="text-4xl font-light text-orange-500 mb-2">
                  40
                </div>
                <div className="text-sm text-[#f4e8d0]/70 tracking-wider uppercase">
                  Years of Adventure
                </div>
              </motion.div>
              <motion.div
                className="text-center border-x border-orange-500/20 p-4 rounded-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 111, 0, 0.1)",
                }}
              >
                <div className="text-4xl font-light text-orange-500 mb-2">
                  ∞
                </div>
                <div className="text-sm text-[#f4e8d0]/70 tracking-wider uppercase">
                  Memories Made
                </div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 111, 0, 0.1)",
                }}
              >
                <div className="text-4xl font-light text-orange-500 mb-2">
                  1
                </div>
                <div className="text-sm text-[#f4e8d0]/70 tracking-wider uppercase">
                  Pirate King
                </div>
              </motion.div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-12 pt-8 border-t border-orange-500/20"
            >
              <p className="text-lg text-[#f4e8d0]/80 italic max-w-2xl mx-auto">
                "When do you think people die? When they are shot through the
                heart by the bullet of a pistol? No. When they are ravaged by an
                incurable disease? No. When they drink a soup made from a
                poisonous mushroom? No! It's when... they are forgotten!"
              </p>
              <p className="text-orange-400 text-sm mt-4">
                - Dr. Hiluluk, One Piece
              </p>
              <p className="text-[#f4e8d0]/60 text-sm mt-2">
                Herik, you could never be forgotten. Happy Birthday! 🎉
              </p>
            </motion.div>
          </motion.div>

          {/* Confetti animation */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: "50%",
                y: "50%",
                opacity: 0,
              }}
              whileInView={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                opacity: [0, 1, 0],
                rotate: Math.random() * 360,
                scale: [0, 1, 0.5],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2 + Math.random(),
                delay: Math.random(),
                ease: "easeOut",
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: [
                    "#ff6f00",
                    "#d32f2f",
                    "#fbbf24",
                    "#ef4444",
                    "#f59e0b",
                  ][i % 5],
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
