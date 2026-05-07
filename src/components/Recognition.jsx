import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const RECOGNITIONS = [
  {
    id: 'rec-pm101',
    icon: '📜',
    title: 'Product Management 101',
    isGradient: false,
    issuer: 'Simplilearn · SkillUp',
    detail: 'Mastered foundations in user research, roadmap prioritization, and Agile execution to drive high-impact product lifecycles and delivery.',
    accent: '#a855f7',
    accentRgb: '168, 85, 247',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjc4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTczNjc3M185NDY5NDAyXzE3Njg4ODc2MTU1MjUucG5nIiwidXNlcm5hbWUiOiJTaGl2YW0ifQ&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F9736773_9469402_1768887615525.png',
  },
  {
    id: 'rec-unstop',
    icon: '🏆',
    title: '2nd Runner Up: Product Titans',
    isGradient: true,
    issuer: 'National PM Challenge · Unstop · Jan 2026',
    detail: 'Ranked Top 3 nationwide for analytical rigor, solution feasibility, and strategic execution while operating in high-ambiguity environments.',
    accent: '#06b6d4',
    accentRgb: '6, 182, 212',
    link: 'https://unstop.com/certificate-preview/360d9e78-0a0f-4582-bb21-f18de446699b',
  },
  {
    id: 'rec-snowflake',
    icon: '❄️',
    title: 'SnowPro Core — Associate',
    isGradient: false,
    issuer: 'Snowflake · Platform Certification',
    detail: 'Validated expertise in Snowflake’s cloud data platform, including core architecture, storage, and data engineering fundamentals.',
    accent: '#7c3aed',
    accentRgb: '124, 58, 237',
    link: 'https://achieve.snowflake.com/16d1d30a-d505-476d-89bc-8c83d61c46c4#acc.oiU7sbdy',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function RecognitionCard({ id, icon, title, isGradient, issuer, detail, accent, accentRgb, link }) {
  return (
    <motion.div
      id={id}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative flex flex-col items-center text-center gap-5',
        'p-6 rounded-card overflow-hidden',
        'bg-white/5 border border-white/10 backdrop-blur-md',
        'cursor-default group hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-all duration-300 ease-in-out',
        'w-[85vw] max-w-[320px] shrink-0 snap-center'
      )}
    >
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        aria-hidden="true"
      />

      <span
        className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-t-card"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        aria-hidden="true"
      />

      <motion.span
        className="text-[2.5rem] leading-none select-none"
        role="img"
        aria-label={title}
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
      >
        {icon}
      </motion.span>

      <h3
        className={cn(
          'font-sora font-bold text-base sm:text-lg leading-snug',
          isGradient ? 'bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent' : 'text-white',
        )}
      >
        {title}
      </h3>

      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-body font-medium border transition-all duration-300 ease-in-out"
        style={{
          background: `rgba(${accentRgb}, 0.08)`,
          borderColor: `rgba(${accentRgb}, 0.25)`,
          color: accent,
          filter: 'brightness(1.5)',
        }}
      >
        {issuer}
      </span>

      <div className="w-12 h-px transition-all duration-300 ease-in-out" style={{ background: `rgba(${accentRgb}, 0.3)` }} aria-hidden="true" />

      <p className="font-body text-sm text-gray-300 leading-relaxed max-w-xs">
        {detail}
      </p>

      {link && (
        <div className="mt-4 w-full flex justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white border-b border-white/10 hover:border-white/40 transition-all duration-200 pb-0.5"
          >
            View Certificate
            <ExternalLink size={11} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Recognition() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const cardWidth = clientWidth * 0.85; // rough estimate
      const activeIndex = Math.round(scrollLeft / cardWidth);
      setActiveCard(activeIndex);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 380, behavior: 'smooth' });

  return (
    <motion.section
      id="recognition"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #a855f7 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="mb-2">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              Awards &amp; Certs
            </span>
          </div>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Recognition
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg max-w-md leading-relaxed">
            Milestones that matter
          </p>
        </motion.div>

        {/* Scroll Container Wrapper */}
        <div className="relative px-8 md:px-12">

          <AnimatePresence>
            <motion.button
              onClick={scrollLeft}
              animate={{ opacity: canScrollLeft ? 1 : 0.3, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </motion.button>
          </AnimatePresence>

          <AnimatePresence>
            <motion.button
              onClick={scrollRight}
              animate={{ opacity: canScrollRight ? 1 : 0.3, pointerEvents: canScrollRight ? 'auto' : 'none' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </motion.button>
          </AnimatePresence>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex flex-row flex-nowrap justify-center gap-6 px-6 pb-4 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {RECOGNITIONS.map((rec) => (
              <RecognitionCard key={rec.id} {...rec} />
            ))}
          </div>
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {RECOGNITIONS.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'transition-all duration-300',
                activeCard === idx
                  ? 'w-4 h-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]'
                  : 'w-2 h-2 rounded-full bg-white/20'
              )}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
