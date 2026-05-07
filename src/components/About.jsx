import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-2">
              <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
                About Me
              </span>
            </div>

            <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] text-white mb-6">
              PM who speaks both {' '}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">human and machine.</span>
            </h2>

            <p className="font-body text-gray-300 text-base sm:text-lg leading-[1.85] max-w-xl mb-8">
              I'm an AI-focused Product Manager with a Computer Science foundation, specializing in agentic workflows, intelligent automation, and end-to-end product execution. I've worked on product cycles from raw discovery to UAT and release, writing PRDs, shipping AI-native flows, and turning ambiguous problems into clear, buildable solutions.
            </p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'relative flex items-start gap-4 p-6 rounded-card',
                'bg-white/5 border border-white/10 backdrop-blur-md',
                'overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-all duration-300 ease-in-out'
              )}
            >
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at right top, #7c3aed 0%, transparent 60%)',
                }}
              />

              <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex-shrink-0">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>

              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-sora font-bold text-white text-base leading-tight">
                  Actively Looking
                </span>
                <span className="text-gray-500 font-body text-sm leading-relaxed">
                  PM / AI PM / Product Analyst Roles · Open to Pan-India &amp; Remote
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Technical PM', value: 'CS', desc: 'Background' },
              { label: 'YOE', value: '1.5+', desc: 'Timezones' },
              { label: 'Success', value: '99%', desc: 'Uptime target' },
              { label: 'National PM Challenge · Unstop', value: 'Top 3', desc: 'Sprint cycles' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'relative flex flex-col gap-2 p-6 rounded-card',
                  'bg-white/5 border border-white/10 backdrop-blur-md',
                  'cursor-default group overflow-hidden',
                  'hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-all duration-300 ease-in-out'
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                <span className="font-sora font-bold text-3xl lg:text-4xl bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent leading-none">
                  {stat.value}
                </span>
                <span className="text-gray-500 font-body text-sm leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
