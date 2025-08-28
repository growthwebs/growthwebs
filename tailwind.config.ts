import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Growthwebs Brand Colors - Andromeda/Constellation Inspired
        primary: {
          background: '#161424', // Midnight Blue
          text: '#E9E9F0', // Light Grey
          'text-muted': '#E9E9F0', // Light Grey for secondary text
        },
        accent: {
          glow: '#8B5CF6', // Cosmic Purple - Better contrast & Andromeda inspired
          'glow-dark': '#7C3AED', // Darker Purple variant
        },
        secondary: {
          text: '#E9E9F0', // Light Grey
          'text-subtle': '#E9E9F0', // Light Grey for subtle text
        },
        surface: {
          'light': 'rgba(139, 92, 246, 0.05)', // Cosmic Purple with opacity
          'medium': 'rgba(139, 92, 246, 0.1)', // Cosmic Purple with opacity
          'border': 'rgba(139, 92, 246, 0.15)', // Cosmic Purple with opacity
        },
        // Additional brand colors - Andromeda Galaxy inspired
        midnight: '#161424',
        cosmic: '#8B5CF6', // Cosmic Purple (replaces electric)
        nebula: '#7C3AED', // Nebula Purple (replaces royal)
        lightGrey: '#E9E9F0',
        charcoal: '#222222',
        // Constellation colors
        andromeda: '#A855F7', // Bright Andromeda Purple
        orion: '#6366F1', // Orion Blue
        pleiades: '#EC4899', // Pleiades Pink
        // Keep original colors for reference
        electricOriginal: '#00D4FF',
        royalOriginal: '#0099CC',
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'normal': '400',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 30s linear infinite',
        // New animations for Agency Dilemma section
        'float-slow': 'float 12s ease-in-out infinite',
        'fade-in-soft': 'fadeIn 0.7s ease forwards',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        // Aurora animations
        'aurora-float': 'auroraFloat 20s ease-in-out infinite',
        'aurora-pulse': 'auroraPulse 8s ease-in-out infinite',
        // New NASA-style star drift animations
        'star-drift': 'starDrift 60s linear infinite',
        'star-drift-slow': 'starDrift 120s linear infinite',
        'star-drift-very-slow': 'starDrift 180s linear infinite',
        'star-drift-medium': 'starDrift 90s linear infinite',
        // New aurora stream animations
        'aurora-stream': 'auroraStream 25s ease-in-out infinite',
        'aurora-wisp': 'auroraWisp 15s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6' },
          '100%': { textShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // New keyframe for fading in + slight upward motion
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Aurora keyframes
        auroraFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-15px) rotate(0.5deg)' },
        },
        auroraPulse: {
          '0%, 100%': { opacity: '0.3', scale: '1' },
          '50%': { opacity: '0.6', scale: '1.05' },
        },
        // New star drift keyframes for subtle movement
        starDrift: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(2px) translateY(-1px)' },
          '50%': { transform: 'translateX(-1px) translateY(2px)' },
          '75%': { transform: 'translateX(1px) translateY(-2px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' },
        },
        // New aurora stream keyframes for flowing effect
        auroraStream: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        // New aurora wisp keyframes for subtle wisps
        auroraWisp: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1) rotate(5deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}

export default config
