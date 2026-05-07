import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const EXPERIENCES = [
  {
    id: 'datacouch',
    company: 'DataCouch',
    role: 'Technical Executive (Acting PM)',
    duration: 'Nov 2024 – March 2026',
    location: 'Mohali, India',
    tags: ['Intelligent Workflows', 'Automation Strategy', 'API Governance'],
    metrics: [
      { number: '7d→3h', label: 'lead turnaround' },
      { number: '99.9%', label: 'pipeline reliability' },
      { number: '3+', label: 'tools owned' },
    ],
    bullets: [
      {
        bold: 'Conversational Intake Architecture (GITEX Dubai)',
        body: 'Identified a 7-day friction point in lead processing; architected an AI-native capture flow using OCR and real-time syncing. Slashed turnaround to 3 hours, improving GTM velocity and user engagement.',
      },
      {
        bold: 'Roadmap Ownership',
        body: 'Owned end-to-end technical lifecycle for internal automation tools, prioritizing features based on stakeholder impact and technical feasibility to ensure 99.9% reliability.',
      },
      {
        bold: 'Technical Translator',
        body: 'Served as the primary link between engineering teams and business units, translating complex API behaviors into clear conversational roadmaps and requirement notes.',
      },
    ],
  },
  {
    id: 'quark',
    company: 'Quark Software Inc',
    role: 'Professional Services Intern (Product Track)',
    duration: 'Jan 2024 – June 2024',
    location: 'Mohali, India',
    tags: ['User Discovery', 'Feature Adoption', 'UAT'],
    metrics: [
      { number: '5', label: 'recommendations accepted' },
      { number: '6', label: 'UAT cycles' },
      { number: '18', label: 'defects caught' },
      { number: '2', label: 'major releases' },
    ],
    bullets: [
      {
        bold: 'User-Centric Discovery',
        body: 'Conducted user research and stakeholder interviews to uncover friction points in enterprise modules; translated findings into intuitive feature concepts to reduce user drop-offs.',
      },
      {
        bold: 'Release Management',
        body: 'Supported the lifecycle of platform enhancements, conducting UAT and validating product behavior against acceptance criteria for global enterprise releases.',
      },
      {
        bold: 'Metric Tracking',
        body: 'Leveraged SQL to monitor adoption rates and feedback, providing data-backed recommendations for roadmap prioritization and UX refinements.',
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Headings */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Experience
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg max-w-md leading-relaxed">
            Where I've shipped real work
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Timeline Line */}
          <div
            className="hidden md:block absolute left-[16px] top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, #7c3aed, #06b6d4)',
            }}
            aria-hidden="true"
          />

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative w-full mb-6 md:mb-10 last:mb-0">
              
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="hidden md:block absolute left-[10px] top-[31px] w-[14px] h-[14px] rounded-full border-2 border-[#0a0a0f] z-10"
                style={{
                  background: 'linear-gradient(to right, #7c3aed, #a855f7)',
                }}
                aria-hidden="true"
              />

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.15 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className={cn(
                  'ml-0 md:ml-12 p-6 rounded-[16px]',
                  'bg-white/5 backdrop-blur-md border border-white/10',
                  'hover:border-[#7c3aed]/30 hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-colors duration-300 ease-in-out'
                )}
              >
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <h3 className="font-sora font-bold text-xl text-white leading-tight">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center flex-shrink-0 text-xs text-gray-400 border border-white/10 bg-white/5 rounded-full px-3 py-1 font-body font-medium">
                    {exp.duration}
                  </span>
                </div>

                {/* Second Row */}
                <div className="mt-1 flex items-center flex-wrap gap-2 text-sm font-body">
                  <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent font-semibold text-base">
                    {exp.company}
                  </span>
                  <span className="text-gray-500 font-bold">·</span>
                  <span className="text-gray-500">
                    {exp.location}
                  </span>
                </div>

                {/* Third Row (Tags) */}
                <div className="flex flex-wrap gap-2 mt-3" role="list" aria-label="Focus areas">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-body font-medium bg-white/10 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics Row */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {exp.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono"
                      >
                        <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent font-bold">
                          {metric.number}
                        </span>
                        <span className="text-gray-500">{metric.label}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-white/10 my-4" aria-hidden="true" />

                {/* Bullet Points */}
                <ul className="space-y-3 font-body">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet.bold} className="flex items-start gap-3">
                      <span
                        className="text-[#7c3aed] text-[10px] sm:text-xs mt-1 flex-shrink-0 select-none leading-none pt-[2px]"
                        aria-hidden="true"
                      >
                        ►
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-white font-semibold">
                          {bullet.bold}:
                        </span>{' '}
                        {bullet.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
