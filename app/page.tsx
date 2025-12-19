import StoryViewer from '@/src/components/StoryViewer';

/**
 * Birthday Wrapped - Main Entry Point
 * 
 * A mobile-first, Instagram Story-style experience celebrating your best friend's birthday.
 * Features dynamic backgrounds, smooth animations, and interactive storytelling.
 */

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <StoryViewer />
    </main>
  );
}

