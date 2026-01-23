import React, { useState } from "react";
import { motion } from "motion/react";
import { Music, Pause } from "lucide-react";

interface MusicPlayerProps {
  hideButton?: boolean;
}

export function MusicPlayer({ hideButton = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Floating Music Button */}
      <motion.button
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-1 right-1 md:top-6 md:right-6 z-40 p-3 md:p-4 bg-transparent border-2 border-orange-500/50 rounded-full shadow-[0_0_20px_rgba(255,111,0,0.3)] hover:border-orange-500 hover:shadow-[0_0_30px_rgba(255,111,0,0.5)] transition-all"
        style={{
          touchAction: "manipulation",
          display: hideButton ? "none" : "block",
        }}
      >
        <motion.div
          animate={isPlaying ? { rotate: 0 } : { rotate: [0, -10, 10, -10, 0] }}
          transition={
            isPlaying
              ? { duration: 0.3 }
              : { duration: 2, repeat: Infinity, repeatDelay: 1 }
          }
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
          ) : (
            <Music className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
          )}
        </motion.div>
      </motion.button>

      {/* Hidden YouTube Player */}
      {isPlaying && (
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/1d9U5YKRU4c?autoplay=1&loop=1&playlist=1d9U5YKRU4c"
          title="Background Music"
          allow="autoplay"
          style={{ position: "fixed", left: "-9999px" }}
        />
      )}
    </>
  );
}
