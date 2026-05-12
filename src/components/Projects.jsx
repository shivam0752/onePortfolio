import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    id: 'project-book-my-mentor',
    name: 'Book My Mentor',
    accentColor: '#a855f7',
    hoverBorder: 'rgba(168, 85, 247, 0.4)',
    baseGrad: 'linear-gradient(135deg, #1a0533 0%, #0d0d1a 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #7c3aed22 0%, transparent 70%)',
    tagsStr: 'AGENTIC AI · LMS · PRD WRITING',
    summary: 'Designed a modular LMS marketplace where Agentic AI interviews students to personalize learning paths. Authored full PRDs for mentor-matching algorithms and automated progress tracking.',
    outcome: 'Agentic dialogue logic · Mentor-matching workflows',
    duration: 'Dec 2025 – Jan 2026',
    link: 'https://drive.google.com/file/d/12K-ugXdxAvp1t-LW_DFX5KV3wsb1d34U/view?usp=sharing',
    image: null,
    imageLabel: 'Book My Mentor',
  },
  {
    id: 'project-stan-redesign',
    name: 'STAN App Redesign',
    accentColor: '#06b6d4',
    hoverBorder: 'rgba(6, 182, 212, 0.4)',
    baseGrad: 'linear-gradient(135deg, #001a2e 0%, #0d0d1a 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #06b6d422 0%, transparent 70%)',
    tagsStr: 'UX · INFORMATION ARCHITECTURE · ONBOARDING',
    summary: 'Gap analysis on user entry flows for a high-traffic community platform to solve Entry Shock. Proposed a Lobby Concept with horizontal sorting to reduce cognitive overload.',
    outcome: 'Projected 15% reduction in cognitive overload',
    duration: 'Oct 2025 – Nov 2025',
    link: 'https://docs.google.com/document/d/1IyPHocOT6F9qebBIQ1hl4IepOX3BJNZSMqwuI3O8YTA/edit?usp=sharing',
    image: null,
    imageLabel: 'STAN App Redesign',
  },
  {
    id: 'project-nykaa',
    name: 'Nykaa Product Teardown',
    accentColor: '#f472b6',
    hoverBorder: 'rgba(244, 114, 182, 0.4)',
    baseGrad: 'linear-gradient(135deg, #2a0a1a 0%, #0d0d1a 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #f472b622 0%, transparent 70%)',
    tagsStr: 'PRODUCT TEARDOWN · RETENTION · FUNNEL ANALYSIS',
    summary: 'Deep-dive teardown of Nykaa\'s retention gap — 52M cumulative users vs 18.7M active transactors. Identified 4 funnel leakage points and proposed 3 solutions targeting conversion, DAU/MAU, and GMV.',
    outcome: '33M user re-engagement opportunity · $25M+ revenue unlock',
    duration: '2026',
    link: 'https://docs.google.com/presentation/d/1km0WzfgvBz83cQ7b8ybPEg7871V3AQXX4Cjr16YtD4o/edit?usp=drive_link',
    image: null,
    imageLabel: 'Nykaa Product Teardown',
  },
  {
    id: 'project-bmw',
    name: 'BMW Location Strategy',
    accentColor: '#7c3aed',
    hoverBorder: 'rgba(124, 58, 237, 0.4)',
    baseGrad: 'linear-gradient(135deg, #0f0a2e 0%, #0d0d1a 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #7c3aed22 0%, transparent 70%)',
    tagsStr: 'CASE STUDY · STRATEGIC ANALYSIS · LOCATION STRATEGY',
    summary: 'Analyzed BMW India\'s capacity crunch post record 18,001 unit sales. Built a full TCO comparison: Chennai vs Ahmedabad across land, logistics, labor, and TTM. Recommended Chennai expansion.',
    outcome: 'Chennai wins · ₹70Cr logistics advantage · 12-month TTM',
    duration: '2026',
    link: 'https://drive.google.com/file/d/1mN8MFO3hudneuZX_SEedxpob3Txc_M4f/view?usp=sharing',
    image: null,
    imageLabel: 'BMW Location Strategy',
  },
  {
    id: 'project-youtube',
    name: 'YouTube Ad Guesstimate',
    accentColor: '#06b6d4',
    hoverBorder: 'rgba(6, 182, 212, 0.4)',
    baseGrad: 'linear-gradient(135deg, #001a2e 0%, #0d0d1a 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #06b6d422 0%, transparent 70%)',
    tagsStr: 'GUESSTIMATE · ANALYTICAL THINKING · ESTIMATION',
    summary: 'Estimated total daily ad duration on YouTube globally using a bottom-up approach. Segmented 750M daily watch hours across short-form and long-form with differentiated ad density logic.',
    outcome: '~29.7M hours/day · 4% ad-load · Validated against benchmarks',
    duration: '2026',
    link: 'https://docs.google.com/document/d/1oKj0r12LAx7336QxaGIFP3muY1gW8lKoikkGyVVBZ1c/edit?usp=sharing',
    image: null,
    imageLabel: 'YouTube Ad Guesstimate',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[82vw] max-w-[340px] sm:w-[420px] lg:w-[520px] h-[340px] sm:h-[380px] lg:h-[420px] rounded-[20px] flex-shrink-0 overflow-hidden transition-all duration-300"
      style={{
        background: project.baseGrad,
        scrollSnapAlign: 'start',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isHovered ? project.hoverBorder : 'rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Base subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: project.glowGrad }}
        aria-hidden="true"
      />

      {/* Flashlight Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: isHovered ? 0.3 : 0.4 }}
        style={{
          background: `radial-gradient(circle 280px at ${mousePos.x}px ${mousePos.y}px, ${project.accentColor}33 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {project.image ? (
        /* When image exists: render as full card background */
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
      ) : (
        /* When no image: render a stylish centered text watermark */
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-sora font-black uppercase text-center leading-none tracking-tighter pointer-events-none"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              background: `linear-gradient(135deg, ${project.accentColor}18, ${project.accentColor}08)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              maxWidth: '90%',
              wordBreak: 'break-word',
            }}
          >
            {project.imageLabel}
          </span>
        </div>
      )}

      {/* Bottom Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a0a0f 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {/* Content positioned absolutely at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-col z-10 pointer-events-auto">
        <span className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-400">
          {project.tagsStr}
        </span>
        <h3 className="font-sora text-white text-lg sm:text-2xl font-bold mt-2">
          {project.name}
        </h3>
        <p className="text-gray-400 text-[11px] sm:text-xs mt-1 mb-2 leading-relaxed line-clamp-2">
          {project.summary}
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">
          {project.outcome}
        </p>

        <div className="flex items-end justify-between mt-3 sm:mt-6">
          <span className="text-xs text-gray-500 mb-2">
            {project.duration}
          </span>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: 45, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 shadow-lg"
            aria-label={`View ${project.name}`}
          >
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  // Uses an auto-scrolling marquee instead of manual scroll

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-12 px-6 lg:px-8"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Case Studies
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg max-w-md leading-relaxed">
            Things I've designed
          </p>
        </motion.div>

        {/* Infinite Horizontal Scroll Container */}
        <div className="relative w-full overflow-hidden py-8">
          <motion.div
            className="flex flex-row flex-nowrap gap-6 sm:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...PROJECTS, ...PROJECTS].map((project, idx) => (
              <ProjectCard key={`${project.id}-${idx}`} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
