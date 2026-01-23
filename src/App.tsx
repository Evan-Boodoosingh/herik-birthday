import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { MapSection } from "./components/MapSection";
import { LogbookSection } from "./components/LogbookSection";
import { TreasureReveal } from "./components/TreasureReveal";
import { BirthdayBanner } from "./components/BirthdayBanner";
import { FloatingParticles, NavCompass } from "./components/OnePieceElements";
import { UnifiedNav } from "./components/UnifiedNav";
import { MusicPlayer } from "./components/MusicPlayer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Monitor for modals opening/closing
  useEffect(() => {
    const checkForModals = () => {
      // Check if body has overflow hidden AND fixed position (ImageModal sets both)
      const bodyLocked =
        document.body.style.overflow === "hidden" &&
        document.body.style.position === "fixed";

      // Check for Radix Dialog overlay (memory modals)
      const hasDialogOverlay = !!document.querySelector(
        '[data-slot="dialog-overlay"]',
      );

      const modalOpen = bodyLocked || hasDialogOverlay;
      setIsModalOpen(modalOpen);
    };

    // Use MutationObserver for immediate updates
    const observer = new MutationObserver(checkForModals);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#2d1810] text-white overflow-x-hidden">
      {/* Navigation */}
      <UnifiedNav />

      {/* Music Player */}
      <MusicPlayer hideButton={isModalOpen} />

      {/* Parchment texture overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" /%3E%3C/filter%3E%3Crect width="200" height="200" filter="url(%23noise)" fill="%23f4e8d0" opacity="0.5"/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Background effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d32f2f,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div id="home">
          <HeroSection />
          <BirthdayBanner />
        </div>
        <div id="grand-line" className="scroll-mt-32">
          <MapSection />
        </div>
        <div id="logbook" className="scroll-mt-32">
          <LogbookSection />
        </div>
        <div id="treasure" className="scroll-mt-32">
          <TreasureReveal />
        </div>
      </div>

      {/* Floating particles */}
      <FloatingParticles />
    </div>
  );
}
