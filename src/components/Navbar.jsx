import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function handleNavClick(e, href) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 py-4 px-6 flex flex-col gap-3"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { handleNavClick(e, link.href); onClose(); }}
              className="text-gray-300 hover:text-[#a855f7] font-body font-medium text-sm py-2 transition-all duration-200 ease-in-out"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const navContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08, delayChildren: 0.2 } },
};
const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        'bg-white/5 backdrop-blur-md border-b border-white/10',
        scrolled && 'shadow-sm shadow-black/20',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between relative">
        <motion.a
          variants={navItemVariants}
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-heading font-bold text-2xl bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent hover:scale-105 transition-all duration-300 ease-in-out select-none"
          aria-label="Shivam — Home"
        >
          S.
        </motion.a>

        <motion.ul className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <motion.li key={link.label} variants={navItemVariants}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 rounded-md font-body font-medium text-sm text-gray-300 hover:text-[#a855f7] transition-all duration-200 ease-in-out group inline-block"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-[#a855f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left" />
              </a>
            </motion.li>
          ))}

          <motion.li variants={navItemVariants} className="ml-2">
            <motion.a
              id="nav-hire-me"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-5 py-2 rounded-btn text-sm font-semibold font-body bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white shadow-glow transition-all duration-300 ease-in-out"
            >
              Hire Me
            </motion.a>
          </motion.li>
        </motion.ul>

        <div className="md:hidden flex items-center gap-2">
          <motion.button
            variants={navItemVariants}
            id="mobile-menu-toggle"
            className="flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/5 transition-all duration-300 ease-in-out"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block w-5 h-0.5 bg-white/70 rounded-full" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="block w-5 h-0.5 bg-white/70 rounded-full" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block w-5 h-0.5 bg-white/70 rounded-full" />
          </motion.button>
        </div>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </motion.header>
  );
}
