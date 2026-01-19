import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ImageModal } from "./ImageModal";

// Import images
import april2015 from "../assets/april-2015.jpeg";
import edco2015 from "../assets/EDCO-2015.jpeg";
import lasVegas2018 from "../assets/LAS-VEGAS-2018.JPG";
import japan2019 from "../assets/japan-jan-2019.jpg";
import paris2022 from "../assets/Paris-2022.jpeg";
import leLouvre2022 from "../assets/The-Le_Louvere-2022.jpeg";
import edcOrlando2022 from "../assets/EDC-ORLANDO-2022.jpeg";
import edcVegas2023 from "../assets/EDC-VEGAS-2023.jpeg";
import jandyBday2023 from "../assets/Jandy-bday-2023.jpeg";
import karaokeHawaii2023 from "../assets/Karaoke-in-Hawaii-2023.jpg";
import fayetteville2014 from "../assets/Fayetteville-2014.jpeg";
import edcOrlando2014 from "../assets/EDC-ORLANDO-2014.jpeg";
import fayetteville2015A from "../assets/Fayetteville--2015.jpeg";
import fayetteville2015B from "../assets/Fayetteville_2015.jpeg";
import ace2024 from "../assets/ace2024.jpg";
import drunk2024 from "../assets/drunk-2024.jpg";
import lostLands2024 from "../assets/Lost-Lands-2024.jpg";
import sanDiego2024 from "../assets/San_Diego-2024.jpeg";
import sevenS2025 from "../assets/7s-2025.jpg";
import sevenSOct2025 from "../assets/7s-oct-2025.jpg";
import edcVegas2025 from "../assets/EDC-VEGAS-2025.jpg";
import fayettevilleFoam2015 from "../assets/Foam-party-fayetteville-2015.jpeg";
import frog2025 from "../assets/frog-2025.jpg";
import hawaii2025 from "../assets/Hawaii-2025.jpg";
import kaneoheHawaii2025 from "../assets/Kaneohe_Sandbar-in-Hawaii-2025.jpg";
import pg2025 from "../assets/pg-2025.jpg";
import wooliHawaii2025 from "../assets/wooli-hawaii-2025.jpg";

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function MapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2014",
      title: "EDC Orlando",
      description: "Electric Daisy Carnival in Orlando.",
      imageUrl: edcOrlando2014,
    },
    {
      id: 2,
      year: "2014",
      title: "Fayetteville",
      description: "Early adventures and memories.",
      imageUrl: fayetteville2014,
    },
    {
      id: 3,
      year: "2015",
      title: "April 2015",
      description: "Spring memories and good times.",
      imageUrl: april2015,
    },
    {
      id: 4,
      year: "2015",
      title: "EDCO Orlando",
      description:
        "Electric Daisy Carnival in Orlando - An unforgettable adventure.",
      imageUrl: edco2015,
    },
    {
      id: 5,
      year: "2015",
      title: "Fayetteville",
      description: "More good times in Fayetteville.",
      imageUrl: fayetteville2015A,
    },
    {
      id: 6,
      year: "2015",
      title: "Fayetteville Adventures",
      description: "Continuing the journey.",
      imageUrl: fayetteville2015B,
    },
    {
      id: 7,
      year: "2015",
      title: "Foam Party Fayetteville",
      description: "Epic foam party vibes.",
      imageUrl: fayettevilleFoam2015,
    },
    {
      id: 8,
      year: "2018",
      title: "Las Vegas",
      description: "Vegas adventures with the crew.",
      imageUrl: lasVegas2018,
    },
    {
      id: 9,
      year: "2019",
      title: "Japan Adventure",
      description: "Exploring the beauty and culture of Japan.",
      imageUrl: japan2019,
    },
    {
      id: 10,
      year: "2022",
      title: "Paris",
      description: "The city of lights and unforgettable memories.",
      imageUrl: paris2022,
    },
    {
      id: 11,
      year: "2022",
      title: "The Louvre",
      description: "Discovering art and history in Paris.",
      imageUrl: leLouvre2022,
    },
    {
      id: 12,
      year: "2022",
      title: "EDC Orlando",
      description: "Electric Daisy Carnival in Orlando.",
      imageUrl: edcOrlando2022,
    },
    {
      id: 13,
      year: "2023",
      title: "EDC Las Vegas",
      description: "Electric energy under the Vegas sky.",
      imageUrl: edcVegas2023,
    },
    {
      id: 14,
      year: "2023",
      title: "Jandy's Birthday",
      description: "Celebrating a special day with friends.",
      imageUrl: jandyBday2023,
    },
    {
      id: 15,
      year: "2023",
      title: "Karaoke in Hawaii",
      description: "Singing our hearts out in paradise.",
      imageUrl: karaokeHawaii2023,
    },
    {
      id: 16,
      year: "2024",
      title: "Ace",
      description: "Epic moments and unforgettable experiences.",
      imageUrl: ace2024,
    },
    {
      id: 17,
      year: "2024",
      title: "Good Times",
      description: "Living life to the fullest.",
      imageUrl: drunk2024,
    },
    {
      id: 18,
      year: "2024",
      title: "Lost Lands",
      description: "Epic festival vibes and amazing music.",
      imageUrl: lostLands2024,
    },
    {
      id: 19,
      year: "2024",
      title: "San Diego",
      description: "California sunshine and good times.",
      imageUrl: sanDiego2024,
    },
    {
      id: 20,
      year: "2025",
      title: "7s",
      description: "Adventures continue in 2025.",
      imageUrl: sevenS2025,
    },
    {
      id: 21,
      year: "2025",
      title: "7s October",
      description: "Fall festivities and fun.",
      imageUrl: sevenSOct2025,
    },
    {
      id: 22,
      year: "2025",
      title: "EDC Las Vegas",
      description: "Under the electric sky in Vegas.",
      imageUrl: edcVegas2025,
    },
    {
      id: 23,
      year: "2025",
      title: "Frog",
      description: "Unique moments and memories.",
      imageUrl: frog2025,
    },
    {
      id: 24,
      year: "2025",
      title: "Hawaii",
      description: "Paradise found on the islands.",
      imageUrl: hawaii2025,
    },
    {
      id: 25,
      year: "2025",
      title: "Kaneohe Sandbar",
      description: "Beautiful waters and tropical vibes.",
      imageUrl: kaneoheHawaii2025,
    },
    {
      id: 26,
      year: "2025",
      title: "PG",
      description: "More adventures and good times.",
      imageUrl: pg2025,
    },
    {
      id: 27,
      year: "2025",
      title: "Wooli in Hawaii",
      description: "Epic music and island paradise.",
      imageUrl: wooliHawaii2025,
    },
  ];

  // Generate consistent zigzag positions with pixel-based spacing
  const positions = milestones.map((_, index) => {
    // Spread photos vertically with consistent spacing (increased for larger photos)
    // Start first photo below title (250px on mobile, 500px on desktop)
    const yPos = isMobile ? 250 + index * 450 : 500 + index * 520;
    // On mobile, center all photos; on desktop, alternate left and right with equal spacing from edges
    const xPos = isMobile ? 50 : index % 2 === 0 ? 30 : 70;
    return { x: xPos, y: yPos };
  });

  const sectionHeight = isMobile
    ? 150 + (milestones.length - 1) * 450 + 350 + 300
    : 150 + (milestones.length - 1) * 520 + 450 + 400;

  return (
    <section
      ref={containerRef}
      className="relative mt-16 pt-24 pb-8 md:mt-40 md:pt-56 md:pb-12 overflow-x-hidden"
      style={{ height: `${sectionHeight}px` }}
    >
      <div className="relative w-full h-full overflow-x-hidden pt-16 md:pt-40">
        {/* Spacer for title */}
        <div className="h-12 md:h-24"></div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="sticky top-40 md:top-44 z-30 mb-12 w-full flex justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center">
            <span
              className="text-orange-500"
              style={{ textShadow: "0 0 20px rgba(255, 111, 0, 0.5)" }}
            >
              HERIK'S GRAND LINE
            </span>
            <br />
            <span className="text-lg text-[#f4e8d0]/80">
              40 Years of Epic Adventures
            </span>
          </h2>
        </motion.div>

        {/* Zigzag path - hidden on mobile */}
        {!isMobile && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff6f00" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d32f2f" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff6f00" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              d={`M ${positions.map((p, i) => `${i === 0 ? "" : "L "}${p.x} ${(p.y / sectionHeight) * 100}`).join(" ")}`}
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="0.08"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        )}

        {/* Vertical line for mobile */}
        {isMobile && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="verticalGrad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff6f00" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d32f2f" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff6f00" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.line
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              stroke="url(#verticalGrad)"
              strokeWidth="0.15"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        )}

        {/* Milestones */}
        {milestones.map((milestone, index) => {
          const pos = positions[index];
          const yPercent = (pos.y / sectionHeight) * 100;

          // Calculate when this photo should appear based on scroll progress
          const photoProgress = pos.y / sectionHeight;
          // First photo starts visible immediately, others appear earlier in scroll
          const baseOpacity =
            index === 0
              ? 1
              : useTransform(
                  scrollYProgress,
                  [
                    Math.max(0, photoProgress - 0.2),
                    Math.max(0.05, photoProgress - 0.05),
                  ],
                  [0, 1],
                );
          const baseScale =
            index === 0
              ? 1
              : useTransform(
                  scrollYProgress,
                  [
                    Math.max(0, photoProgress - 0.2),
                    Math.max(0.05, photoProgress - 0.05),
                  ],
                  [0.8, 1],
                );

          // Add spring physics to all photos for bounce effect
          const opacity = useSpring(baseOpacity, {
            stiffness: 200,
            damping: 15,
            mass: 0.5,
          });
          const scale = useSpring(baseScale, {
            stiffness: 200,
            damping: 10,
            mass: 0.8,
          });

          return (
            <motion.div
              key={milestone.id}
              className="z-20"
              style={{
                position: "absolute",
                ...(isMobile
                  ? {
                      left: 0,
                      right: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "fit-content",
                      top: `${pos.y}px`,
                    }
                  : {
                      left: `${pos.x}%`,
                      top: `${yPercent}%`,
                      x: "-50%",
                      y: "-50%",
                    }),
                opacity,
                scale,
              }}
            >
              {/* Photo */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: isMobile ? 0 : index % 2 === 0 ? 3 : -3,
                  boxShadow: "0 0 50px rgba(255, 111, 0, 0.5)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMilestone(milestone)}
                className="w-72 h-96 md:w-80 md:h-[28rem] rounded-lg overflow-hidden border-4 border-orange-500/40 shadow-[0_0_30px_rgba(255,111,0,0.3)] cursor-pointer bg-[#2d1810] group"
              >
                <div className="relative w-full h-full">
                  <img
                    src={milestone.imageUrl}
                    alt={milestone.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#2d1810] via-[#2d1810]/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-orange-400 text-sm font-semibold mb-1 transition-colors duration-300 group-hover:text-orange-300">
                      {milestone.year}
                    </div>
                    <div className="text-[#f4e8d0] text-sm transition-colors duration-300 group-hover:text-white">
                      {milestone.title}
                    </div>
                    <div className="text-[#f4e8d0]/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <ImageModal
        isOpen={selectedMilestone !== null}
        onClose={() => setSelectedMilestone(null)}
        imageUrl={selectedMilestone?.imageUrl || ""}
        title={selectedMilestone?.title || ""}
        year={selectedMilestone?.year || ""}
        description={selectedMilestone?.description || ""}
      />
    </section>
  );
}
