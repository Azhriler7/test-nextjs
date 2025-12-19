import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration
 * 
 * Extended configuration for the Birthday Wrapped project.
 * Includes custom colors matching the sky & nature theme.
 */

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for sky & nature theme
        sunrise: {
          pink: '#FF6B9D',
          salmon: '#FFA07A',
          golden: '#FFE66D',
        },
        sky: {
          light: '#87CEEB',
          medium: '#4A90E2',
          bright: '#5DADE2',
        },
        sunset: {
          coral: '#FF6B6B',
          salmon: '#FFA07A',
          golden: '#FFD93D',
        },
        twilight: {
          purple: '#667EEA',
          dark: '#9B59B6',
          light: '#C471ED',
        },
        night: {
          navy: '#1a1a2e',
          deep: '#16213e',
          midnight: '#0f3460',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
