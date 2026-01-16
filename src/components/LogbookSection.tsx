import React from "react";
import { motion } from "motion/react";
import { Anchor } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { StoryCard } from "./StoryCard";
import jandyBday2023 from "../assets/Jandy-bday-2023.jpeg";

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
      author: "TESTIMONIAL_2_AUTHOR",
      role: "TESTIMONIAL_2_ROLE",
      content:
        "[INSERT_TESTIMONIAL_HERE] - Add another special memory or message here.",
    },
    {
      id: 3,
      author: "TESTIMONIAL_3_AUTHOR",
      role: "TESTIMONIAL_3_ROLE",
      content:
        "[INSERT_TESTIMONIAL_HERE] - Share another story or celebration message.",
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
      title: "STORY_2_TITLE",
      date: "STORY_2_DATE",
      content:
        "[INSERT_STORY_HERE] - Replace this with your second memorable story or adventure.",
      imageUrl:
        "https://images.unsplash.com/photo-1545450648-d105ad7a1e65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGFlcmlhbHxlbnwxfHx8fDE3Njg1MDM5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      fullStory:
        "[INSERT_FULL_STORY_HERE] - Add the complete version of this story with all the details, emotions, and memorable moments that make it special.",
    },
    {
      id: 3,
      title: "STORY_3_TITLE",
      date: "STORY_3_DATE",
      content:
        "[INSERT_STORY_HERE] - Replace this with your third memorable story or adventure.",
      imageUrl:
        "https://images.unsplash.com/photo-1604580826271-aa59d10b875a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwc3Vuc2V0fGVufDF8fHx8MTc2ODQ2MDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      fullStory:
        "[INSERT_FULL_STORY_HERE] - Add the complete version of this story with all the details, emotions, and memorable moments that make it special.",
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
