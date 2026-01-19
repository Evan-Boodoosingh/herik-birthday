import React, { useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
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
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Hamburger Button */}
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-[1.875rem] right-8 z-40 text-orange-500 hover:bg-orange-500/10 p-2 rounded-full transition-all"
        >
          <MdMenu className="w-7 h-7" />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-linear-to-br from-[#2d1810] via-[#3d2010] to-[#2d1810] backdrop-blur-xl rounded-2xl border-2 border-orange-500/40 shadow-[0_0_50px_rgba(255,111,0,0.4)] p-6">
            <div className="flex justify-end items-center mb-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-orange-500 hover:bg-orange-500/10 p-2 rounded-full transition-all"
              >
                <MdClose className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#f4e8d0] text-lg font-medium hover:text-orange-400 hover:bg-orange-500/20 px-6 py-3.5 rounded-full transition-all duration-300 text-left"
              >
                🏴‍☠️ Home
              </button>
              <button
                onClick={() => scrollToSection("grand-line")}
                className="text-[#f4e8d0] text-lg font-medium hover:text-orange-400 hover:bg-orange-500/20 px-6 py-3.5 rounded-full transition-all duration-300 text-left"
              >
                🗺️ Grand Line
              </button>
              <button
                onClick={() => scrollToSection("logbook")}
                className="text-[#f4e8d0] text-lg font-medium hover:text-orange-400 hover:bg-orange-500/20 px-6 py-3.5 rounded-full transition-all duration-300 text-left"
              >
                📖 Logbook
              </button>
              <button
                onClick={() => scrollToSection("treasure")}
                className="text-[#f4e8d0] text-lg font-medium hover:text-orange-400 hover:bg-orange-500/20 px-6 py-3.5 rounded-full transition-all duration-300 text-left"
              >
                💎 Treasure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
