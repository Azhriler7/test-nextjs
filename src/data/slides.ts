/**
 * Content Data & Configuration for Birthday Wrapped
 * 
 * EDIT THIS FILE to customize:
 * - Text content (Indonesian Bestie Humor)
 * - Background images (Unsplash)
 * - Slide durations
 * - Transparent character images
 */

import type { SlideContent, StoryConfig } from '@/src/types';

export const storyConfig: StoryConfig = {
  autoAdvance: false, // Manual navigation only (click to advance)
  defaultDuration: 10000, // 10 seconds per slide
  transitionDuration: 700, // 0.7 seconds transition
};

// Background audio configuration
export const audioConfig = {
  src: '/song.mp3', // Local file
  volume: 0.6, // Max volume
};

export const slides: SlideContent[] = [
  // Slide 1: The Opening (Intro)
  {
    id: 1,
    type: 'intro',
    title: 'Haii ada paket nih... 📦✨',
    subtitle: 'Dari: Ajil.\nUntuk: cewe paling rajin sedunia. 😽\n(tap layar buat lanjut 👇)',
    description: '',
    backgroundImage: '/bg1.jpg',
    duration: 7000,
  },
  
  // Slide 2: Reality Check (Relatable)
  {
    id: 2,
    type: 'hero',
    title: 'Disclaimer Dulu 🚨',
    description: 'Lu tau kan kalo gua ini pelupa 😁🤞. Tapi... khusus tanggal 21 DESEMBER ini gua inget satu hal. Spesial buat lu kado dari gua buat birthday girl hari ini. 🎉🎉',
    images: ['/photo1.png'],
    backgroundImage: '/bg2.jpg',
    duration: 6000,
  },
  
  // Slide 3: The Poem (Pantun Lucu)
  {
    id: 3,
    type: 'hero',
    title: 'Ada Pantun Nih 🎤',
    description: 'Ikan hiu lagi keramas, 🦈\nKeramasnya pake sabun cuci muka. 🧼\nMet ultah wanita pekerja keras,\nSemoga rezekinya lancar terbuka! 💸\n(sorry kalo pantunnya jelek hehe🤡, I tried my best)',
    images: ['/photo2.png'],
    backgroundImage: '/bg3.jpg',
    duration: 7000,
  },
  
  // Slide 4: Interactive Riddle (Tebak-tebakan)
  {
    id: 4,
    type: 'riddle',
    title: 'TEBAK TEBAKAN 🤔',
    description: 'Siapa orang paling cantik, pinter, dan rajinnya kebangetan 🧐',
    images: ['/photo3.png'],
    backgroundImage: '/bg4.jpg',
    duration: 8000,
  },
  
  // Slide 5: The Letter (Envelope Animation)
  {
    id: 5,
    type: 'envelope',
    title: 'Last 💌',
    subtitle: '(Tap amplopnya)',
    description: 'Happy Birthday bill!! 🎂 Gue tau sekarang lu capek banget harus bagi otak buat kerjaan & tugas kampus. Tapi gue bangga banget sama lo! ❤️ Lo keren bisa jalanin keduanya. Inget ya, ngejar mimpi boleh, tapi jangan sampe sakit. Kalau tugas numpuk, napas dulu! Semangat Maba! 🔥💪',
    images: ['/photo4.jpeg'],
    backgroundImage: '/bg5.jpg',
    duration: 12000,
  },
];

