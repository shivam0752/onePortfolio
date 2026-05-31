import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const FEATURED_PROJECTS = [
  {
    id: 'project-gst-saathi',
    name: 'GST Saathi',
    accentColor: '#10b981', // emerald
    hoverBorder: 'rgba(16, 185, 129, 0.4)',
    baseGrad: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #10b98122 0%, transparent 70%)',
    tagsStr: 'PROTOTYPE · WEB APP · COMPLIANCE',
    summary: 'A fully functional prototype for GST compliance, streamlining invoice generation and filing processes with a modern, intuitive interface.',
    liveLink: 'https://gst-saathi-8a8k.vercel.app/',
    prdLink: 'https://drive.google.com/file/d/1SFfcqieh05WhGCeDFdo9w-uec5wBblJd/view?usp=drive_link',
    image: null,
    imageLabel: 'GST Saathi',
  },
  {
    id: 'project-prodhub',
    name: 'ProdHub',
    accentColor: '#3b82f6', // blue
    hoverBorder: 'rgba(59, 130, 246, 0.4)',
    baseGrad: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #3b82f622 0%, transparent 70%)',
    tagsStr: 'WEB APP · PRODUCT MANAGEMENT · COMMUNITY',
    summary: 'A dynamic web application for aspiring PMs that aggregates vetted resources, resume guides, and product techniques. Features a community-driven architecture including user rating systems and a content contribution pipeline with admin-vetted moderation for continuous platform growth.',
    liveLink: 'https://prod-hub-eta.vercel.app/tools',
    prdLink: null,
    image: null,
    imageLabel: 'ProdHub',
  },
  {
    id: 'project-coming-soon-2',
    name: 'Coming Soon',
    accentColor: '#a855f7', // purple
    hoverBorder: 'rgba(168, 85, 247, 0.4)',
    baseGrad: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #0a0a0f 100%)',
    glowGrad: 'radial-gradient(circle at 50% 50%, #a855f722 0%, transparent 70%)',
    tagsStr: 'IN PROGRESS · NEXT BIG THING',
    summary: 'Another exciting product is in the works. More details will be revealed once it is ready for prime time.',
    liveLink: null,
    prdLink: null,
    image: null,
    imageLabel: 'Coming Soon',
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

function FeaturedProjectCard({ project }) {
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
    <motion.div variants={itemVariants} className="w-[90vw] max-w-[425px] sm:max-w-none sm:w-[525px] lg:w-[650px] mx-auto">
      <motion.div
        ref={cardRef}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[425px] sm:h-[475px] lg:h-[525px] rounded-[24px] overflow-hidden transition-colors duration-300"
        style={{
          background: project.baseGrad,
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
            background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, ${project.accentColor}22 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {project.image ? (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden pb-20">
            <span
              className="font-sora font-black uppercase text-center leading-none tracking-tighter pointer-events-none"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                background: `linear-gradient(135deg, ${project.accentColor}25, ${project.accentColor}05)`,
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
          style={{ background: 'linear-gradient(to top, #0a0a0f 0%, #0a0a0f 20%, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Content positioned absolutely at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col z-10 pointer-events-auto">
          <span className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-400 mb-1">
            {project.tagsStr}
          </span>
          <h3 className="font-sora text-white text-2xl sm:text-4xl font-bold mb-3">
            {project.name}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveLink && (
              <motion.button
                onClick={() => window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                <ExternalLink size={16} />
                Live Link
              </motion.button>
            )}
            {project.prdLink && (
              <motion.button
                onClick={() => window.open(project.prdLink, '_blank', 'noopener,noreferrer')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <FileText size={16} />
                Read PRD
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
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

      const cardWidth = clientWidth; // Full width cards
      const activeIndex = Math.round(scrollLeft / cardWidth);
      setActiveCard(activeIndex);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // init layout wait
      setTimeout(handleScroll, 100);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: window.innerWidth, behavior: 'smooth' });

  return (
    <motion.section
      id="featured-projects"
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
            Projects
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg max-w-md leading-relaxed">
            In-depth products I have built
          </p>
        </motion.div>

        {/* Scroll Container Wrapper */}
        <div className="relative w-full px-4 sm:px-8">
          <AnimatePresence>
            {FEATURED_PROJECTS.length > 1 && (
              <motion.button
                onClick={scrollLeft}
                animate={{ opacity: canScrollLeft ? 1 : 0.3, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 shadow-xl"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {FEATURED_PROJECTS.length > 1 && (
              <motion.button
                onClick={scrollRight}
                animate={{ opacity: canScrollRight ? 1 : 0.3, pointerEvents: canScrollRight ? 'auto' : 'none' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 shadow-xl"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className={cn(
              'flex flex-row flex-nowrap pt-6 pb-8',
              'overflow-x-auto snap-x snap-mandatory',
              '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
            )}
          >
            {FEATURED_PROJECTS.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 flex justify-center snap-center">
                <FeaturedProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dot Indicators */}
        {FEATURED_PROJECTS.length > 1 && (
          <div className="flex justify-center gap-3 mt-4">
            {FEATURED_PROJECTS.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  'transition-all duration-300',
                  activeCard === idx
                    ? 'w-6 h-2.5 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669]'
                    : 'w-2.5 h-2.5 rounded-full bg-white/20'
                )}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
