/**
 * QUICK START GUIDE
 * 
 * Follow these steps to customize your Birthday Wrapped app:
 */

// ============================================================
// STEP 1: Edit Text Content
// ============================================================
// File: src/data/slides.ts
// 
// Change titles, subtitles, descriptions, and weather stats
// Example:
/*
  {
    id: 1,
    type: 'intro',
    subtitle: 'Loading [Your Friend\'s Name] Universe...',
    description: 'Your custom message here',
  }
*/

// ============================================================
// STEP 2: Add Your Photos
// ============================================================
// 1. Create folder: public/images/
// 2. Add your photos there (memory1.jpg, memory2.jpg, hero.jpg)
// 3. Update src/data/slides.ts:
/*
  photos: [
    {
      id: 'photo1',
      alt: 'Memory 1',
      placeholderUrl: '/images/memory1.jpg', // ← Change this
      caption: 'That amazing day!',
    },
  ]
*/

// ============================================================
// STEP 3: (Optional) Use Next.js Image Component
// ============================================================
// File: src/components/StoryViewer.tsx
// 
// Find the TODO comments and replace placeholder divs with:
/*
  import Image from 'next/image';
  
  <Image
    src={photo.placeholderUrl}
    alt={photo.alt}
    width={600}
    height={800}
    className="w-full h-75 object-cover rounded-2xl"
  />
*/

// ============================================================
// STEP 4: Customize Colors & Timing
// ============================================================
// File: src/data/slides.ts
// 
// Change gradient colors:
/*
  gradient: {
    from: '#FF6B9D',
    via: '#FFA07A',
    to: '#FFE66D',
  }
*/
// 
// Change slide duration:
/*
  duration: 8000, // 8 seconds
*/

// ============================================================
// STEP 5: Test Your Changes
// ============================================================
// Run: npm run dev
// Open: http://localhost:3000
// Test on mobile or use browser dev tools (F12) mobile view

// ============================================================
// STEP 6: Deploy
// ============================================================
// Option 1: Vercel (Recommended)
// - Connect GitHub repo to Vercel
// - Auto-deploy on push
//
// Option 2: Manual
// - Run: npm run build
// - Run: npm start
// - Deploy build folder to any hosting service

/**
 * COMMON CUSTOMIZATIONS
 */

// Add more slides:
// Just add a new object to the slides array in src/data/slides.ts

// Change weather stats:
// Edit the weatherStats array in Slide 2

// Disable auto-advance:
// Set autoAdvance: false in storyConfig

// Change confetti colors:
// Edit the triggerConfetti() function in StoryViewer.tsx

export {};
