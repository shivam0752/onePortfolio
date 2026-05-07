import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function LinkedinIcon({ className, style }) {
  return (
    <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className, style }) {
  return (
    <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    id: 'contact-email',
    platform: 'Email',
    handle: 'shivam20023@gmail.com',
    href: 'mailto:shivam20023@gmail.com',
    Icon: Mail,
    accent: '#7c3aed',
    accentRgb: '124, 58, 237',
  },
  {
    id: 'contact-linkedin',
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/shiv752',
    href: 'https://linkedin.com/in/shiv752',
    Icon: LinkedinIcon,
    accent: '#a855f7',
    accentRgb: '168, 85, 247',
  },
  {
    id: 'contact-github',
    platform: 'GitHub',
    handle: 'github.com/shivam0752',
    href: 'https://github.com/shivam0752',
    Icon: GithubIcon,
    accent: '#06b6d4',
    accentRgb: '6, 182, 212',
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

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div variants={slideLeft} className="flex flex-col">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">Connect</span>
            </h2>

            <h3 className="font-sora font-semibold text-xl sm:text-2xl text-gray-300 leading-snug mb-6">
              Open to the right opportunity.
            </h3>

            <p className="font-body text-gray-500 text-base sm:text-lg leading-[1.85] max-w-md mb-8">
              I'm actively looking for PM and Conversational AI roles anywhere in India, or remote. If you're building something
              intelligent, let's talk.
            </p>

            <motion.div
              variants={slideLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'inline-flex items-center gap-3 px-5 py-2.5 rounded-full w-fit',
                'bg-green-500/10 border border-green-500/30',
                'hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-all duration-300 ease-in-out'
              )}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-body font-medium text-green-400 text-sm">
                Available Now
              </span>
            </motion.div>
          </motion.div>

          <motion.div variants={slideRight} className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link) => {
              const { id, platform, handle, href, Icon, accent } = link;
              return (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className={cn(
                    'group flex items-center gap-4 p-6 rounded-card',
                    'bg-white/5 border border-white/10 backdrop-blur-md',
                    'transition-all duration-300 ease-in-out cursor-pointer no-underline',
                    'hover:border-[#7c3aed]/50 hover:shadow-md hover:shadow-[#7c3aed]/20'
                  )}
                  aria-label={`Contact via ${platform}: ${handle}`}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 transition-all duration-300 ease-in-out group-hover:bg-white/10"
                    style={{ color: accent }}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span className="font-sora font-semibold text-white text-sm leading-none">
                      {platform}
                    </span>
                    <span className="font-body text-xs text-gray-500 truncate leading-none mt-1">
                      {handle}
                    </span>
                  </div>

                  <div className="flex-shrink-0 text-white/20 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
