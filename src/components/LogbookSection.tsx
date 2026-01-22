import React from "react";
import { motion } from "motion/react";
import { Anchor } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { StoryCard } from "./StoryCard";
import jandyBday2023 from "../assets/Jandy-bday-2023.jpeg";
import pg2025 from "../assets/pg-2025.jpg";
import alliMemory from "../assets/alli_memory.jpeg";
import jamieMemory from "../assets/jamie-memory.jpeg";
import jandiMemory from "../assets/jandi-memory.jpeg";
import temMemory from "../assets/tem-memory.JPG";
import devinMemory from "../assets/devin-momory.JPG";
import mikeMemory from "../assets/mike-memory.jpeg";
import lisaMemory from "../assets/lisa-memory.JPEG";
import manfredoMemory from "../assets/manfredo-memory.jpeg";
import saraMemory from "../assets/sara-memory.JPG";
import malMemory from "../assets/mal-memory.JPG";
import briMemory from "../assets/bri-memory.jpeg";

export function LogbookSection() {
  const [selectedStory, setSelectedStory] = React.useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      author: "Evan Boodoosingh",
      role: "Brother",
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
      author: "Anna",
      role: "Lifetime Friend",
      content:
        "Happy Birthday to my lifetime friend. Over the years, you've opened my world to new experiences, introduced me to amazing people, and helped shape so many unforgettable memories. I'm incredibly grateful for you and for the bond we share. You are truly an amazing person—kind, loyal, and genuine—and I'm so thankful to have you in my life. I hope we continue to make many more memories together for years to come. Love you Friend!!!! ❤️❤️",
    },
    {
      id: 4,
      author: "Jamie",
      role: "Best Midget Friend",
      content:
        "I know im probably the biggest shit talker but im just hiding behind the amount of love I have for this dude. E truly knows how to bring everyone together and he's seriously the life of the party. You can immediately feel his energy in the room whether it's his loud ass voice or his sexy dance moves. Through all the bullshit, im blessed the army brought us together since 2012. Lucky to call him my big brother and best friend for life. Love you BIIITTTCCHHHH!! Happy 40th birthday bestie!\n\nP.S. I still don't know half the shit he be saying, RIP E-40",
    },
    {
      id: 5,
      author: "Tem",
      role: "Best Friend",
      content:
        "E is the most caring SOFT BITCH of them all and I love her for that. She really knows how to be a protector. Ever since she started painting her nails I just knew. I knew before that but she's taking baby steps. I'm just waiting for her to come out the closet……………… I'll  wait as long as you need to feel comfortable Erik with an H.",
    },
    {
      id: 6,
      author: "Jandy",
      role: "Best Friend",
      content:
        "E is da big brother I've never had. He is a soft teddy bear and da biggest pain in my ass. Jkjk  he motivates me to get my shit together but also so free and caring and down for anything. He's an energizer bunny and is always can keep going and going lol People gravitate towards him and he is a social butterfly/rubber ducky lol there's so many other great things i can write down that sums up our 12 years of friendship but the one thing that sticks out the most is his big heart and loving caring loyal character. I Will always love him like ohana cuz he is and will roast his ass too!! Happy birthday ya old fart.",
    },
    {
      id: 7,
      author: "Devin",
      role: "Best Friend",
      content:
        "Happy 40th Birthday to the brother I never asked for! 🤣 All jokes aside, you're one of my best friends and I love you to death. I hope you have the best day ever.",
    },
    {
      id: 8,
      author: "Mike",
      role: "Herik's Secret Lover",
      content:
        "From the moment Lisa introduced me to him, I knew this wasn't just going to be a bromance. It was love…brotherly love if you will. Herik is someone I know I can count on when shit hits the fan and he can always count on me. Every time we hangout it's nothing but the best time. He's a natural leader that people look up to in the crew.",
    },
    {
      id: 9,
      author: "Lisa",
      role: "Dance Partner",
      content:
        "I once met a wise man who told me that smoking was bad for me… who would have thought that would be the start of a friendship? I met E about 12 years ago at a Latin bar—hard not to like someone with a friendly smile and great dance moves. Life took us on different paths for a while, but I love that it brought him back and even closer this time. He's funny, welcoming, inclusive, and genuine. I'm really happy to call E my friend.",
    },
    {
      id: 10,
      author: "Manfredo",
      role: "Cuddle Buddy",
      content:
        "E is a genuine friend that truly cares for those around him. He was one of a handful of people that reached out to me when I first got out the Army and that impacted me so much, especially since we didn't talk that much at that time.",
    },
    {
      id: 11,
      author: "Sara",
      role: "Rave Fam",
      content:
        "I have always appreciated how Herik brings people together!!! He has opened up such a world of love and friendship for me always so welcoming and kind 🩷",
    },
    {
      id: 12,
      author: "Robin",
      role: "Best Friend",
      content:
        "Happy 40th my friend. You're one of my favorite people to be around. Continue to be the awesome person you are!",
    },
    {
      id: 13,
      author: "Jake",
      role: "Rave Fam",
      content:
        "I still think your name should be pronounced herick and not erick. Also I'm never doing your mushrooms again ♥️♥️♥️♥️♥️",
    },
    {
      id: 14,
      author: "Bri",
      role: "Ratchet Roomie",
      content:
        "Every time I am with you I laugh till I cry. Our memories go way back to our fort Bragg days & being roommates hosting crazy ass house parties. We had 2 solid years of constant hangouts before both moving across the country to different states & we still managed to talk all the time & continue our friendship. I am thankful for our friendship everyday even when we are roasting each other till one of us actually gets butt hurt lmao. Happy 40th birthday peepaw. That's you're new nickname now since you're actually kinda old LOL Love you till infinity my friend.",
    },
  ];

  const stories = [
    {
      id: 1,
      title: "Jandy's Adventure with E",
      date: "Europe Birthday Trip",
      content:
        "There are countless great memories with E. But my fave has to be when we went to Europe for my birthday. He left me with strangers to go buy weed and said he wasn't addicted to weed lol love him tho forever.",
      imageUrl: jandiMemory,
      fullStory:
        "There are countless great memories with E. But my fave has to be when we went to Europe for my birthday. He left me with strangers to go buy weed and said he wasn't addicted to weed lol love him tho forever. - Jandy's favorite memory with E",
    },
    {
      id: 2,
      title: "Dancing Under the Northern Lights",
      date: "Igloo Fest Montreal - January 2025",
      content:
        "I took him to Montreal for his 39th birthday to go to Igloo Fest to see Tape B and Zeds Dead. He mentioned that this guy on radiate was selling 2 VIP tickets and was also looking for drugs so Herik messaged him and he replied the address of his hotel...",
      imageUrl: alliMemory,
      fullStory:
        "I took him to Montreal for his 39th birthday to go to Igloo Fest to see Tape B and Zeds Dead, He mentioned that this guy on radiate was selling 2 VIP tickets for Igloo fest and he was also looking for drugs so Herik messaged him and he replied the address of his hotel while we started tripping we progressed to walk to this random guys hotel and we start dancing outside waiting for him. He comes out and invites us in to go to his room. Were tripping sack at this point on dead chemist and he progresses to tell he's from Toronto and is a Underwater Welder. We all try to walk to show looking as normal as possible but security came up quick and Herik didn't hide .04 of Molly Juice where he tried to lie and say he's diabetic but they forced him to chug it before going in. After Chugging, our new Canadian homie hung out with us the whole time even to stop and take a photo for us with a guy clearly dressed like a frog and goes \"BABE HOLY SHIT LOOK AT THAT FUCKING TURTLE\" The Canadian also helped him mid Tape B set to get him to throw up on the side so he wouldn't get caught and he adventured with us back to our hotel where we all trauma dumped until 430 AM. I know throughout our life we will continuously have the funniest/chaotic interactions and experiences together and I'll always appreciate the lore we create together 💚💚💚",
    },
    {
      id: 3,
      title: "Brothers in Arms",
      date: "Big Night Live",
      content:
        "Once upon a time at big night live a random angry drunk decided to make threats to one of my best friends, Herik. Obviously he knocked that lil bitch out.",
      imageUrl: pg2025,
      fullStory:
        "Once upon a time at big night live a random angry drunk decided to make threats to one of my best friends, Herik. Obviously he knocked that lil bitch out. While he was handing that another random tried to sneak him so I had to back my mans up. Another knock out for and we got away no issues. Great night. The end.",
    },
    {
      id: 4,
      title: "Heart to Heart",
      date: "Project Glow - June 2025",
      content:
        "Other than the time I bet E $50 that he couldn't do a backflip on the trampoline and he failed miserably (never forget)…my most favorite memory that I seriously hold closest to my heart is at PG last year.",
      imageUrl: jamieMemory,
      fullStory:
        "Other than the time I bet E $50 that he couldn't do a backflip on the trampoline and he failed miserably (never forget)…my most favorite memory that I seriously hold closest to my heart is at PG last year. We had a heart to heart, cried then thugged it out, he showed me unconditional love and reassured me that he would love me no matter what, would always support me and just wants me to be happy. That's one of the many qualities I love about E, and how much he can make anyone feel welcomed and loved no matter what. Thank you for always being a safe space for me bro, love you fr fr",
    },
    {
      id: 5,
      title: "Legendary Squat",
      date: "Gym Session",
      content:
        "My favorite memory is when he hid unknown substances up his butt…….. I mean my favorite memory is when he decided to Squat 300lbs like it was nothing. Congrats to him he did….. but at what cost.",
      imageUrl: temMemory,
      fullStory:
        "My favorite memory is when he hid unknown substances up his butt…….. I mean my favorite memory is when he decided to Squat 300lbs like it was nothing. Congrats to him he did….. but at what cost. We know the ending to that story, I don't want to traumatize you buddy. That was legendary! - yours truly Tem",
    },
    {
      id: 6,
      title: "Saved My Life",
      date: "Boston Intersection",
      content:
        "One of my funniest memories is the time I fell in the middle of a busy intersection in Boston. You didn't hesitate for a second to pick me up and get me out of the street. (I wasn't even drunk yet)",
      imageUrl: devinMemory,
      fullStory:
        "One of my funniest memories is the time I fell in the middle of a busy intersection in Boston. You didn't hesitate for a second to pick me up and get me out of the street. (I wasn't even drunk yet) You literally saved my life that day—and even though you'll never let me live it down, I'll never forget it. Thank you for the endless laughs and for being such an amazing friend!",
    },
    {
      id: 7,
      title: "The Cuddle at EDC",
      date: "EDC Orlando 2014",
      content:
        "My favorite memory of E would definitely be getting to know him by cuddling him during EDC Orlando 2014 lol",
      imageUrl: manfredoMemory,
      fullStory:
        "My favorite memory of E would definitely be getting to know him by cuddling him during EDC Orlando 2014 lol. With love, Manfredo",
    },
    {
      id: 8,
      title: "Dad in Handcuffs",
      date: "The Arrest",
      content:
        "I'll never forget the sight of him in handcuffs, i was like ALLIE THEYRE TAKING OUR DAD!!!",
      imageUrl: saraMemory,
      fullStory:
        "I'll never forget the sight of him in handcuffs, i was like ALLIE THEYRE TAKING OUR DAD!!!",
    },
    {
      id: 9,
      title: "Bass Goblin",
      date: "Mau P - 24th Birthday",
      content:
        "Herik- my mf brother! I appreciate you for showing up for me when I was rebuilding my life back home in Mass. I'll never forget my 24th birthday when we went to Mau P and we were basically strangers.",
      imageUrl: malMemory,
      fullStory:
        "Herik- my mf brother! I appreciate you for showing up for me when I was rebuilding my life back home in Mass. I'll never forget my 24th birthday when we went to Mau P and we were basically strangers. From there our rave extravaganza took off and that meant more to me than you'll ever know. I appreciate every laugh, dance, smoke, and good time with you and the rave fam we built. Couldn't be more happy to celebrate you and every show/festival together makes my heart so happy. Thank you for being a great friend and support system for me in some of my darker times. You are a light and I appreciate you so much!!! Happy 40th birthday to my dawg! Hope this year brings you blessings you didn't think possible. Cheers to much more head banging and being a bass goblin with ya 🫶🏼😎",
    },
    {
      id: 10,
      title: "Lost Puppy",
      date: "EDC Orlando 2014",
      content:
        "I have so many great memories with you E but one of my favorites is when we lost you at our first ever EDC Orlando in 2014 & as we all walked out we just saw you waiting in the lost & found like a little lost puppy.",
      imageUrl: briMemory,
      fullStory:
        "I have so many great memories with you E but one of my favorites is when we lost you at our first ever EDC Orlando in 2014 & as we all walked out we just saw you waiting in the lost & found like a little lost puppy. Lmao you have always been a free spirit doing your own thing meeting new people & bringing us all together. Never change E. You are one of the best friends I have in my life. Too bad you're getting old you'll be needing your diapers changed soon. Yikes. Lmao love you E, ohana forever.",
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
