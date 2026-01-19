import React, { useState, useEffect } from "react";
import { Anchor } from "lucide-react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

export function UnifiedNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Only show when NOT mobile */}
      {!isMobile && (
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
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.2 }}
                >
                  <Anchor className="w-5 h-5" />
                </motion.div>
                <span className="font-medium hidden lg:inline">Home</span>
              </motion.button>

              {/* Desktop Navigation */}
              <div className="flex items-center gap-2">
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
      )}

      {/* Mobile Navigation - Only show when IS mobile */}
      {isMobile && (
        <div>
          {/* Mobile Hamburger Button */}
          <AnimatePresence>
            {!isMenuOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(true)}
                className="fixed top-12 left-8 z-40 text-orange-500 hover:text-orange-400 p-3 rounded-full transition-all hover:bg-orange-500/10"
              >
                <MdMenu className="w-8 h-8" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50"
              >
                {/* Solid backdrop */}
                <div
                  className="absolute inset-0 bg-linear-to-br from-black via-[#0a0604] to-black"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Side Drawer */}
                <motion.div
                  initial={{ x: -320 }}
                  animate={{ x: 0 }}
                  exit={{ x: -320 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed left-0 top-0 h-full w-80 bg-[#2d1810] border-r-2 border-orange-500/30 shadow-[0_0_60px_rgba(255,111,0,0.3)] flex flex-col z-50"
                >
                  {/* Header */}
                  <div className="p-8 pb-6 border-b border-orange-500/20">
                    <h2 className="text-3xl font-bold text-orange-500 mb-3">
                      Navigation
                    </h2>
                    <p className="text-sm text-[#f4e8d0]/60">
                      Choose your destination
                    </p>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 p-8 space-y-3">
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "rgba(255,111,0,0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection("home")}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left text-[#f4e8d0] hover:text-orange-400 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">🏴‍☠️</span>
                      <span className="text-xl font-light">Home</span>
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "rgba(255,111,0,0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection("grand-line")}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left text-[#f4e8d0] hover:text-orange-400 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">🗺️</span>
                      <span className="text-xl font-light">Grand Line</span>
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "rgba(255,111,0,0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection("logbook")}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left text-[#f4e8d0] hover:text-orange-400 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">📖</span>
                      <span className="text-xl font-light">Logbook</span>
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "rgba(255,111,0,0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection("treasure")}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left text-[#f4e8d0] hover:text-orange-400 rounded-lg transition-colors"
                    >
                      <span className="text-2xl">💎</span>
                      <span className="text-xl font-light">Treasure</span>
                    </motion.button>
                  </nav>

                  {/* Close button at bottom */}
                  <div className="p-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <MdClose className="w-5 h-5" />
                      <span className="font-medium">Close</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
