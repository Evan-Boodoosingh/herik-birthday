import React from 'react';
import { motion } from 'motion/react';

// Floating Sakura petals or sea spray particles
export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            opacity: [0, 0.4, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'linear',
          }}
        >
          <div className="w-2 h-2 bg-orange-400/30 rounded-full blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}

// Devil Fruit power-up effect
export function PowerUpEffect({ trigger }: { trigger: boolean }) {
  if (!trigger) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2 }}
      className="fixed inset-0 pointer-events-none z-40"
    >
      <div className="absolute inset-0 bg-cyan-400/10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 3,
              opacity: 0,
              rotate: i * 45,
            }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          >
            <div
              className="w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ transformOrigin: 'left center' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Navigational compass always pointing to next section
export function NavCompass({ currentSection }: { currentSection: number }) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Compass circle */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 bg-[#0a0e27]/80 backdrop-blur-sm" />
        
        {/* Compass needle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-t from-cyan-400 to-red-500 origin-bottom"
          style={{
            transform: 'translate(-50%, -100%)',
          }}
          animate={{ rotate: currentSection * 90 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Cardinal directions */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-cyan-400 text-xs">N</div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-cyan-400 text-xs">S</div>
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-cyan-400 text-xs">W</div>
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-cyan-400 text-xs">E</div>
      </motion.div>
      
      <p className="text-center text-cyan-400 text-xs mt-2 tracking-wider">NAVIGATE</p>
    </motion.div>
  );
}

// Bounty counter animation
export function BountyCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-light text-cyan-400 mb-2"
      >
        {count.toLocaleString()}
      </motion.div>
      <p className="text-gray-400 text-sm tracking-wider uppercase">{label}</p>
    </div>
  );
}

// Anime-style speed lines background
export function SpeedLines({ intensity = 0.3 }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={i}
            x1={100 + i * 5}
            y1={i * 5}
            x2={-20 + i * 5}
            y2={i * 5}
            stroke="#06b6d4"
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, intensity, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// One Piece logo-style text effect
export function OnePieceText({ children }: { children: string }) {
  return (
    <div className="relative inline-block">
      {/* Shadow layers for depth */}
      <span
        className="absolute top-1 left-1 text-transparent"
        style={{
          WebkitTextStroke: '2px #8b5cf6',
          textShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
        }}
      >
        {children}
      </span>
      <span
        className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500"
        style={{
          WebkitTextStroke: '1px #fff',
          filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.7))',
        }}
      >
        {children}
      </span>
    </div>
  );
}