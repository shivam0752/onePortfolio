import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FeaturedProjects from './components/FeaturedProjects';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-8 right-6 z-50"
        >
          <motion.button
            id="scroll-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-btn shadow-glow bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white flex items-center justify-center transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <ChevronUp className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-transparent font-body antialiased transition-all duration-300 ease-in-out">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
