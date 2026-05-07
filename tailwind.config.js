/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        card: '#1a1a2e',
        primary: { DEFAULT: '#7c3aed', light: '#a855f7' },
        accent: { cyan: '#06b6d4', violet: '#a855f7', purple: '#7c3aed' },
        border: 'rgba(255,255,255,0.1)',
        muted: 'rgba(255,255,255,0.5)',
        subtle: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: { card: '12px', btn: '8px' },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7c3aed, #a855f7, #06b6d4)',
        'gradient-primary-hover': 'linear-gradient(135deg, #6d28d9, #9333ea, #0891b2)',
        'gradient-text': 'linear-gradient(90deg, #a855f7, #06b6d4)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite 1s',
        'float-fast': 'float 7s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-30px) translateX(15px)' },
          '50%': { transform: 'translateY(-15px) translateX(-10px)' },
          '75%': { transform: 'translateY(-25px) translateX(5px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.3)',
        'glow-sm': '0 0 20px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
};
