import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const TYPEWRITER_PHRASES = [
  'I Execute Data-Backed Strategies',
  'I Optimize AI Automations',
  'I Turn Complexity Into Clarity',
];

function useTypewriter(phrases) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentPhrase = phrases[phraseIndex % phrases.length];

      if (!isDeleting.current) {
        if (charIndex.current < currentPhrase.length) {
          charIndex.current += 1;
          setDisplayText(currentPhrase.slice(0, charIndex.current));

          if (charIndex.current === currentPhrase.length) {
            setTimeout(() => {
              isDeleting.current = true;
            }, 1800);
          }
        }
      } else {
        charIndex.current -= 1;
        setDisplayText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          isDeleting.current = false;
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, [phraseIndex, phrases]);

  return { displayText };
}

function GradientOrbs() {
  const orbOpacity = 0.12;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full animate-float-slow" style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', filter: 'blur(60px)', opacity: orbOpacity }} />
      <div className="absolute -top-16 right-0 w-[600px] h-[600px] rounded-full animate-float-medium" style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(80px)', opacity: orbOpacity * 0.75 }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full animate-float-fast" style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(70px)', opacity: orbOpacity * 0.75 }} />
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full animate-float-medium" style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(40px)', opacity: orbOpacity, animationDelay: '3s' }} />
    </div>
  );
}

function AnimatedSVG() {
  const nodes = [
    { angle: 0, r: 110, color: '#7c3aed', size: 10 },
    { angle: 72, r: 110, color: '#a855f7', size: 8 },
    { angle: 144, r: 110, color: '#06b6d4', size: 10 },
    { angle: 216, r: 110, color: '#a855f7', size: 8 },
    { angle: 288, r: 110, color: '#7c3aed', size: 10 },
    { angle: 30, r: 160, color: '#06b6d4', size: 8 },
    { angle: 102, r: 160, color: '#a855f7', size: 6 },
    { angle: 174, r: 160, color: '#7c3aed', size: 8 },
    { angle: 246, r: 160, color: '#06b6d4', size: 6 },
    { angle: 318, r: 160, color: '#a855f7', size: 8 },
    { angle: 60, r: 60, color: '#a855f7', size: 6 },
    { angle: 180, r: 60, color: '#7c3aed', size: 6 },
    { angle: 300, r: 60, color: '#06b6d4', size: 6 },
  ];

  function getNodeXY(angleDeg, radius) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: 200 + radius * Math.cos(rad),
      y: 200 + radius * Math.sin(rad),
    };
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute w-[360px] h-[360px] rounded-full opacity-20 animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 60%)',
          filter: 'blur(30px)',
        }}
      />
      <svg
        viewBox="0 0 400 400"
        className="w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] relative z-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Animated product network diagram"
        role="img"
      >
        <defs>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(168,85,247,0.15)" strokeWidth="1" strokeDasharray="4 8" />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="1.5" strokeDasharray="3 6" />
        </motion.g>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" strokeDasharray="2 5" />
        </motion.g>

        <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(124,58,237,0.08)" strokeWidth="1" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(168,85,247,0.08)" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
        <circle cx="200" cy="200" r="50" fill="url(#centerGrad)" />

        <motion.circle
          cx="200" cy="200" r="28"
          fill="#1a1a2e"
          stroke="rgba(168,85,247,0.6)"
          strokeWidth="2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '200px', originY: '200px' }}
          filter="url(#glow-filter)"
        />
        <text
          x="200" y="205"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          fontFamily="Sora, sans-serif"
          fontWeight="700"
          letterSpacing="1"
        >
          PM
        </text>

        {nodes.map((node, i) => {
          const pos = getNodeXY(node.angle, node.r);
          return (
            <motion.circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r={node.size / 2}
              fill={node.color}
              filter="url(#glow-filter)"
              animate={{
                r: [node.size / 2, node.size / 2 + 2, node.size / 2],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2 + (i % 4) * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          );
        })}

        {nodes.filter((n) => n.r === 60).map((node, i) => {
          const pos = getNodeXY(node.angle, node.r);
          return (
            <motion.line
              key={`line-${i}`}
              x1="200" y1="200"
              x2={pos.x} y2={pos.y}
              stroke={node.color}
              strokeWidth="1"
              strokeOpacity="0.3"
              animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const { displayText } = useTypewriter(TYPEWRITER_PHRASES);

  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20"
    >
      <GradientOrbs />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={containerVariants}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="mb-2">
              <span
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full',
                  'border border-white/10 bg-white/10',
                  'text-gray-300 text-sm font-body font-medium',
                  'backdrop-blur-sm'
                )}
              >
                <Zap className="w-3.5 h-3.5 text-[#7c3aed]" aria-hidden="true" />
                Aspiring AI Product Manager
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="font-sora font-bold text-white leading-[1.05] tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                  Hi, I'm
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent mt-1">
                  Shivam
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="min-h-[2.5rem] sm:min-h-[3rem] mb-6">
              <h2
                className="font-sora font-semibold text-xl sm:text-2xl lg:text-3xl text-white flex items-center"
                aria-live="polite"
                aria-atomic="true"
              >
                <span>{displayText}</span>
                <span className="animate-pulse text-[#a855f7] ml-1">|</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 font-body text-base sm:text-lg leading-relaxed max-w-md mb-8"
            >
              Turning complex friction into seamless efficiency through AI-driven strategy.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.button
                id="hero-view-work-btn"
                onClick={() => scrollTo('#projects')}
                whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center justify-center h-11 px-8 rounded-btn font-sora font-semibold bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white transition-all duration-300 ease-in-out"
              >
                View My Work
                <ArrowRight
                  className="ml-2 w-4 h-4 transition-all duration-300 ease-in-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.button>

              <motion.button
                id="hero-connect-btn"
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center justify-center h-11 px-8 rounded-btn font-sora font-semibold border border-[#7c3aed] text-[#7c3aed] bg-transparent hover:bg-[#7c3aed]/10 transition-all duration-300 ease-in-out"
              >
                <MessageSquare className="mr-2 w-4 h-4" aria-hidden="true" />
                Let's Connect
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer group" onClick={() => scrollTo('#about')}>
                <span className="text-xs font-body text-gray-200 transition-all duration-300 ease-in-out">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-5 h-5 flex items-center justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div
              className="absolute w-[420px] h-[420px] rounded-full opacity-10"
              style={{
                background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />
            <AnimatedSVG />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a0a0f, transparent)' }}
        aria-hidden="true"
      />
    </motion.section>
  );
}
