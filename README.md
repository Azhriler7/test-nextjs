# 🎂 Birthday Wrapped

A mobile-first, Instagram Story-style birthday experience built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. Themed around "Sky & Nature," transitioning from Morning to Night as users progress through slides.

## ✨ Features

- 📱 **Mobile-First Design** - Optimized for mobile devices with full-screen vertical layout
- 🎨 **Dynamic Backgrounds** - Smooth gradient transitions from Sunrise → Blue Sky → Sunset → Twilight → Night
- ⏱️ **Auto-Advance** - Slides automatically progress every 6-8 seconds
- 👆 **Manual Navigation** - Tap left side (Previous) or right side (Next)
- 📊 **Progress Bars** - Instagram Story-style segmented progress indicators
- 🎭 **Smooth Animations** - Framer Motion transitions with AnimatePresence
- 🎊 **Confetti Effect** - Celebration animation on final slide
- 📝 **Modular Content** - Separate data file for easy customization

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Confetti:** canvas-confetti

## 📦 Installation & Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Edit Content & Text

All content is centralized in **`src/data/slides.ts`**. You can customize:

- Text (titles, subtitles, descriptions)
- Colors & gradients
- Slide durations
- Weather stats
- Photo captions

```typescript
// Example: Change the intro text
{
  id: 1,
  type: 'intro',
  title: '☀️',
  subtitle: 'Your Custom Text Here!',
  description: 'Your custom description...',
  // ... rest of config
}
```

### 2. Add Your Own Photos

**Step 1:** Add your photos to the `public/images/` folder:

```
public/
  images/
    memory1.jpg
    memory2.jpg
    hero.jpg
```

**Step 2:** Update `src/data/slides.ts` with your image paths:

```typescript
photos: [
  {
    id: "photo1",
    alt: "Memory 1",
    placeholderUrl: "/images/memory1.jpg", // Update this
    caption: "Amazing moment!",
  },
];
```

**Step 3 (Optional):** Use Next.js `<Image>` component for optimization.

In **`src/components/StoryViewer.tsx`**, replace the placeholder `<div>` elements with:

```typescript
import Image from "next/image";

// Replace in GallerySlide and HeroSlide functions:
<Image
  src={photo.placeholderUrl}
  alt={photo.alt}
  width={600}
  height={800}
  className="w-full h-75 object-cover rounded-2xl"
/>;
```

### 3. Change Colors & Gradients

Edit the gradient colors in **`src/data/slides.ts`**:

```typescript
gradient: {
  from: '#FF6B9D',  // Starting color
  via: '#FFA07A',   // Middle color (optional)
  to: '#FFE66D',    // Ending color
}
```

### 4. Adjust Timing

Change slide durations in **`src/data/slides.ts`**:

```typescript
duration: 7000, // milliseconds (7 seconds)
```

Or modify global settings:

```typescript
export const storyConfig = {
  autoAdvance: true,
  defaultDuration: 7000,
  transitionDuration: 500,
};
```

## 📁 Project Structure

```
cempreng/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Entry point (renders StoryViewer)
│   └── globals.css         # Global styles
├── src/
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── data/
│   │   └── slides.ts       # Content & configuration
│   └── components/
│       └── StoryViewer.tsx # Main story component
├── public/
│   └── images/             # (Create this) Your photos
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies
```

## 🎯 Slide Types

1. **Intro Slide** - Animated loading screen with emoji
2. **Weather Slide** - Humorous stats card
3. **Gallery Slide** - Vertical stack of 2 photos
4. **Hero Slide** - Single large photo
5. **Finale Slide** - Birthday message with confetti button

## 🎮 Controls

- **Tap Left Side:** Previous slide
- **Tap Right Side:** Next slide
- **Hover:** Pause auto-advance
- **Confetti Button:** Trigger celebration animation (final slide)

## 🎨 Color Theme

The app uses a "Sky & Nature" color palette:

| Time     | Colors                              |
| -------- | ----------------------------------- |
| Sunrise  | Pink → Salmon → Golden              |
| Noon     | Sky Blue → Medium Blue              |
| Sunset   | Coral → Salmon → Golden             |
| Twilight | Purple → Dark Purple → Light Purple |
| Night    | Navy → Deep Blue → Midnight Blue    |

## 🛠️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Tips for Customization

1. **Keep It Personal:** Add inside jokes, funny nicknames, or memorable quotes
2. **Use Quality Photos:** High-resolution images look best (at least 1080px width)
3. **Test on Mobile:** The experience is designed for mobile screens
4. **Adjust Timing:** Shorter durations for text-heavy slides, longer for photos
5. **Color Harmony:** Use [Coolors.co](https://coolors.co) to find matching gradients

## 🐛 Troubleshooting

**Images not loading?**

- Ensure images are in `public/images/` folder
- Check file paths are correct (case-sensitive)
- Verify image formats are supported (jpg, png, webp)

**Animations laggy?**

- Reduce `transitionDuration` in config
- Optimize large image files
- Test on different devices

**Auto-advance not working?**

- Check `autoAdvance: true` in `storyConfig`
- Verify no console errors
- Try refreshing the page

---

**Happy Birthday!** 🎉✨ Made with 💜 for celebrating special moments.
