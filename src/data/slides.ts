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
  autoAdvance: true,
  defaultDuration: 8000, // 8 seconds per slide
  transitionDuration: 600, // 0.6 seconds transition
};

// Background audio configuration
export const audioConfig = {
  src: '/lofi-chill-124673.mp3', // Local file
  volume: 1.0, // Max volume
};

export const slides: SlideContent[] = [
  // Slide 1: The Opening (Intro)
  {
    id: 1,
    type: 'intro',
    title: 'Sebuah Paket Kilat... 📦✨',
    subtitle: 'Dari: Ajil.\nUntuk: Bestie Ter-Riweuh Sedunia. 🤪\n(Klik layar buat unboxing 👇)',
    description: '',
    backgroundImage: '/bg1.jpg',
    duration: 5000,
  },
  
  // Slide 2: Reality Check (Relatable)
  {
    id: 2,
    type: 'hero',
    title: 'Disclaimer Dulu 🚨',
    description: 'Gua tau lu capek 😮‍💨, punggung encok, dan pengen resign tiap hari senin. Tapi... tetep semangat ya! 💪 Kalau lu nyerah, nanti siapa yang gue ajak gibah? 🤫',
    images: ['/photo1.png'],
    backgroundImage: '/bg2.jpg',
    duration: 6000,
  },
  
  // Slide 3: The Poem (Pantun Lucu)
  {
    id: 3,
    type: 'hero',
    title: 'Ada Pantun Nih 🎤',
    description: 'Buah manggis, buah kedondong. 🍇\nJangan nangis dong, senyum dong. 😊\n\nBeli paku sama Anya Geraldine.\nHappy birthday buat kamu yang paling ngangenin! (Cie elah 🤮🤣)',
    images: ['/photo2.png'],
    backgroundImage: '/bg3.jpg',
    duration: 7000,
  },
  
  // Slide 4: Interactive Riddle (Tebak-tebakan)
  {
    id: 4,
    type: 'riddle',
    title: 'Kuis Dadakan 🤔',
    description: 'Siapa orang paling cantik, pinter, tapi kadang lemot 🏃‍♀️ yang ulang tahun hari ini?',
    images: ['/photo3.png'],
    backgroundImage: '/bg4.jpg',
    duration: 8000,
  },
  
  // Slide 5: The Letter (Envelope Animation)
  {
    id: 5,
    type: 'envelope',
    title: 'Surat Terakhir 💌',
    subtitle: '(Tap amplopnya)',
    description: 'Selamat Ulang Tahun! 🥳🎉 Doa gua simpel: Semoga saldo ATM lu sebanyak drama hidup lu 💰, dan bahagia lu sepanjang jalan kenangan. Aamiin! 🤲✨',
    images: ['/photo4.jpeg'],
    backgroundImage: '/bg5.jpg',
    duration: 12000,
  },
];

