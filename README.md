# One Piece Birthday Celebration Website 🏴‍☠️

A custom birthday website I built for my friend Herik's 40th birthday. He's a huge One Piece fan, so I themed the entire site around the Grand Line and pirate adventures.

## What is this?

This is a fully interactive, single-page birthday website that includes:

- A wanted poster hero section (because every pirate needs a bounty)
- An animated timeline of photos from the past 10+ years
- Testimonials from friends and crew members
- A treasure chest reveal with a birthday gift
- Tons of One Piece themed animations and easter eggs

## Why I Built This

Honestly, I wanted to do something more personal than just buying a card. Herik's been an amazing friend, and I thought building him a custom website would be a unique way to celebrate. Plus, it gave me a chance to work with some technologies I'd been wanting to learn better (looking at you, Framer Motion).

## Tech Stack

- **React** + **TypeScript** - For the component structure
- **Vite** - Super fast dev server and build tool
- **Tailwind CSS** - For styling (with some custom gradient utilities)
- **Framer Motion** - For all the smooth animations
- **GitHub Pages** - For free hosting

## Getting Started

### Prerequisites

- Node.js (I'm using v18+)
- npm or your preferred package manager

### Installation

```bash
# Clone the repo
git clone [your-repo-url]

# Install dependencies
npm install

# Run the dev server
npm run dev
```

The site should open at `http://localhost:5173`

## Deployment

I'm using GitHub Pages for hosting. To deploy:

```bash
npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch automatically.

## Project Structure

```
src/
├── components/          # All the React components
│   ├── BirthdayBanner.tsx
│   ├── MapSection.tsx   # The photo timeline
│   ├── LogbookSection.tsx
│   ├── TreasureReveal.tsx
│   └── ui/              # Reusable UI components
├── assets/              # All photos and images
└── styles/              # Global styles
```

## Things I Learned

- **Framer Motion** is incredibly powerful for scroll-based animations
- Managing 25+ photos in a timeline required some creative positioning logic
- TypeScript interfaces for component props make refactoring way less scary
- Tailwind's utility classes can get verbose, but they're super fast to work with

## Known Issues

- Some linting warnings about gradient classes (it's a custom Tailwind config thing)
- The timeline might need some mobile optimization for smaller screens
- Gift image sizing could be better responsive

## Future Improvements

If I come back to this:

- Add more interactive elements (maybe a quiz about One Piece?)
- Improve loading states for images
- Add sound effects (pirate themed, obviously)
- Make the treasure chest opening animation even cooler

## Acknowledgments

- All the photos and memories from friends who contributed
- The One Piece community for endless inspiration
- Herik for being an awesome friend worth celebrating

---

Built with ❤️ (and way too much coffee) for Herik's 40th birthday.
