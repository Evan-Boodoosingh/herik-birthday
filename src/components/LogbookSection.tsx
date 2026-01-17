import React from "react";
import { motion } from "motion/react";
import { Anchor } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { StoryCard } from "./StoryCard";
import jandyBday2023 from "../assets/Jandy-bday-2023.jpeg";
import pg2025 from "../assets/pg-2025.jpg";

export function LogbookSection() {
  const [selectedStory, setSelectedStory] = React.useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      author: "Evan Boodoosingh",
      role: "Best Friend",
      content:
        "He is my best friend. Everybody around me who knew the both of us before we met each other told us that we were going to get along great. Little did they know that they unlocked the world's best dynamic duo.",
    },
    {
      id: 2,
      author: "Alli",
      role: "Girlfriend",
      content:
        "He's my home, my safe space, and my best friend. He challenges me to be a better person and makes every day an adventure. I'm so grateful to celebrate you and all that you bring to this world.",
    },
    {
      id: 3,
      author: "Tory",
      role: "Best Friend",
      content: "Fuck you",
    },
  ];

  const stories = [
    {
      id: 1,
      title: "Jandy's Adventure with E",
      date: "Europe Birthday Trip",
      content:
        "There are countless great memories with E. But my fave has to be when we went to Europe for my birthday. He left me with strangers to go buy weed and said he wasn't addicted to weed lol love him tho forever.",
      imageUrl: jandyBday2023,
      fullStory:
        "There are countless great memories with E. But my fave has to be when we went to Europe for my birthday. He left me with strangers to go buy weed and said he wasn't addicted to weed lol love him tho forever. - Jandy's favorite memory with E",
    },
    {
      id: 2,
      title: "Dancing Under the Northern Lights",
      date: "Igloo Fest Montreal - January 2025",
      content:
        "One of my favorite memories with Herik is when we went to Igloo Fest in Montreal together. It was freezing cold, but dancing under the stars with him made it one of the warmest nights of my life.",
      imageUrl: pg2025,
      fullStory:
        "One of my favorite memories with Herik is when we went to Igloo Fest in Montreal together. It was freezing cold, but dancing under the stars with him made it one of the warmest nights of my life. The music, the energy, and being wrapped up in each other made everything perfect. I'll never forget how he held me close to keep me warm while we danced the night away.",
    },
    {
      id: 3,
      title: "Brothers in Arms",
      date: "Big Night Live",
      content:
        "Remember that time at Big Night Live when we almost got into a fight? Classic Herik energy - always ready to defend his crew.",
      imageUrl:
        "https://images.unsplash.com/photo-1604580826271-aa59d10b875a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwc3Vuc2V0fGVufDF8fHx8MTc2ODQ2MDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      fullStory:
        "Remember that time at Big Night Live when we almost got into a fight? That was peak cousin energy right there. You had my back without even thinking twice. That's what I love about you - you're always ready to stand up for your crew. We didn't need to throw punches that night because just having you there was enough. Love you, cuz.",
    },
  ];

  const selectedStoryData = stories.find((s) => s.id === selectedStory);

  return (
    <section className="relative py-40 px-4 md:px-8 pt-48 md:pt-56">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10">
          <Anchor className="w-32 h-32 text-orange-500 transform rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10">
          <Anchor className="w-32 h-32 text-orange-500 transform -rotate-12" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Spacer for header */}
        <div className="h-20 md:h-24"></div>

        <SectionHeader
          title="THE CREW'S LOGBOOK"
          subtitle="Stories & Messages from Herik's Nakama (Crewmates)"
        />

        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-orange-500 mb-8 tracking-wider"
          >
            TESTIMONIALS
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-orange-500 mb-8 tracking-wider"
          >
            LEGENDARY STORIES
          </motion.h3>
          <div className="space-y-6">
            {stories.map((story, index) => (
              <StoryCard
                key={story.id}
                story={story}
                index={index}
                onClick={() => setSelectedStory(story.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={selectedStory !== null}
        onOpenChange={() => setSelectedStory(null)}
      >
        <DialogContent className="max-w-4xl bg-[#2d1810]/95 backdrop-blur-md border-2 border-orange-500/50 text-[#f4e8d0] max-h-[90vh] overflow-y-auto">
          {selectedStoryData && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="text-3xl font-light text-orange-500 tracking-wider"
                  style={{ textShadow: "0 0 20px rgba(255, 111, 0, 0.5)" }}
                >
                  {selectedStoryData.title}
                </DialogTitle>
                <p className="text-orange-400 text-sm tracking-wider mt-2">
                  {selectedStoryData.date}
                </p>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div className="relative overflow-hidden rounded-sm border-2 border-orange-500/30">
                  <img
                    src={selectedStoryData.imageUrl}
                    alt={selectedStoryData.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-orange-500/20 to-transparent" />
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-[#f4e8d0]/90 leading-relaxed text-lg whitespace-pre-wrap">
                    {selectedStoryData.fullStory}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
