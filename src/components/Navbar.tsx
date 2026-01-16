import React, { useEffect } from "react";
import { Anchor } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-40 bg-[#2d1810]/80 backdrop-blur-lg rounded-full border-2 border-orange-500/30 shadow-[0_0_30px_rgba(255,111,0,0.3)]">
      <div className="px-6">
        <div className="flex items-center justify-between h-14">
          {/* Home Button */}
          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,111,0,0.3)] cursor-pointer"
          >
            <motion.div whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
              <Anchor className="w-5 h-5" />
            </motion.div>
            <span className="font-medium hidden md:inline">Home</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              onClick={() => scrollToSection("grand-line")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#f4e8d0] text-md font-medium hover:text-orange-400 hover:bg-orange-500/10 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,111,0,0.2)] cursor-pointer"
            >
              Grand Line
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("logbook")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#f4e8d0] text-md font-medium hover:text-orange-400 hover:bg-orange-500/10 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,111,0,0.2)] cursor-pointer"
            >
              Logbook
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("treasure")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#f4e8d0] text-md font-medium hover:text-orange-400 hover:bg-orange-500/10 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,111,0,0.2)] cursor-pointer"
            >
              Treasure
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
