# 🚀 Quick Start Guide

## Add Your Photos (Required)

1. **Create/navigate to `public` folder:**

   ```bash
   cd public
   ```

2. **Add 4 photos with these exact names:**

   - `placeholder.jpeg` (for Slide 3, first photo)
   - `photo2.jpg` (for Slide 3, second photo)
   - `photo3.jpg` (for Slide 4, first photo)
   - `photo4.jpg` (for Slide 4, second photo)

3. **File structure should look like:**
   ```
   public/
     placeholder.jpeg  ← Add this
     photo2.jpg        ← Add this
     photo3.jpg        ← Add this
     photo4.jpg        ← Add this
   ```

## Personalize Content

1. **Edit friend's name:**
   Open `src/data/slides.ts` and find Slide 1:

   ```typescript
   subtitle: 'Menganalisis Spesies [Nama Teman]...',
   // Change to:
   subtitle: 'Menganalisis Spesies Budi...',
   ```

2. **Customize any text:**
   All content is in `src/data/slides.ts` - just edit the strings!

## Run & Test

```bash
# Start development server
npm run dev

# Open browser at:
http://localhost:3000
```

**Important:** Click anywhere on the page to start audio playback!

## Test Audio

- Look for the mute/unmute button in the bottom-right corner
- Click to toggle sound on/off
- Volume is set to 30% (ambient level)

## Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (easiest)
npm i -g vercel
vercel
```

---

That's it! Your Birthday Wrapped is ready! 🎉
