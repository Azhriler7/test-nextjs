/**
 * TypeScript Interfaces for Birthday Wrapped Application
 */

export interface WeatherStat {
  label: string;
  value: string;
  icon: string; // Lucide icon name
}

export interface PhotoItem {
  id: string;
  alt: string;
  // REPLACE THIS: Add your local image path here when ready
  // Example: src: "/images/photo1.jpg"
  placeholderUrl: string; // Temporary placeholder
  caption?: string;
}

export interface SlideContent {
  id: number;
  type: 'intro' | 'weather' | 'gallery' | 'hero' | 'finale' | 'riddle' | 'envelope';
  
  // Text content
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  
  // Weather stats (for weather slide)
  weatherStats?: WeatherStat[];
  
  // Photos (for gallery/hero slides)
  photos?: PhotoItem[];
  
  // Local image paths for photo slides
  images?: string[];
  
  // Visual styling
  gradient?: {
    from: string;
    via?: string;
    to: string;
  };
  
  // Background image URL (replaces gradient)
  backgroundImage?: string;
  
  // Animation duration for this slide (in milliseconds)
  duration: number;
  
  // Icon for the slide (optional)
  icon?: string;
}

export interface StoryConfig {
  autoAdvance: boolean;
  defaultDuration: number;
  transitionDuration: number;
}
