import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Map, BarChart2 } from 'lucide-react';

const SKILL_ZONES = [
  {
    id: 'zone-1',
    title: 'AI Systems & Design',
    Icon: Bot,
    iconColor: 'text-[#7c3aed]',
    glowRest: 'radial-gradient(ellipse at 30% 30%, #7c3aed18 0%, transparent 70%)',
    glowHover: 'radial-gradient(ellipse at 30% 30%, #7c3aed28 0%, transparent 70%)',
    fillClass: 'bg-gradient-to-r from-[#7c3aed] to-[#a855f7]',
    skills: [
      { name: 'System Prompting', value: 85 },
      { name: 'Agentic Workflows', value: 80 },
      { name: 'Context Window Management', value: 75 },
      { name: 'RAG Concepts', value: 85 },
      { name: 'AutomateProbabilistic UXd Discovery', value: 70 },
    ],
  },
  {
    id: 'zone-2',
    title: 'Product Discovery & Strategy',
    Icon: Map,
    iconColor: 'text-[#a855f7]',
    glowRest: 'radial-gradient(ellipse at 70% 30%, #a855f718 0%, transparent 70%)',
    glowHover: 'radial-gradient(ellipse at 70% 30%, #a855f728 0%, transparent 70%)',
    fillClass: 'bg-gradient-to-r from-[#a855f7] to-[#7c3aed]',
    skills: [
      { name: 'Rapid Prototyping (Vibe Coding)', value: 90 },
      { name: 'Synthetic User Research', value: 85 },
      { name: 'Roadmap Management', value: 80 },
      { name: 'Product Sense & Problem Framing', value: 80 },
      { name: 'Ethical Governance', value: 75 },
    ],
  },
  {
    id: 'zone-3',
    title: 'Data & Evaluation',
    Icon: BarChart2,
    iconColor: 'text-[#06b6d4]',
    glowRest: 'radial-gradient(ellipse at 50% 30%, #06b6d418 0%, transparent 70%)',
    glowHover: 'radial-gradient(ellipse at 50% 30%, #06b6d428 0%, transparent 70%)',
    fillClass: 'bg-gradient-to-r from-[#06b6d4] to-[#a855f7]',
    skills: [
      { name: 'SQL', value: 75 },
      { name: 'Prompt Engineering', value: 85 },
      { name: 'LLM Integration & NLP Workflows', value: 80 },
      { name: 'API Debugging (Postman)', value: 80 },
      { name: 'Automated Evaluation (LLM-as-a-Judge)', value: 70 },
    ],
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

const zoneVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function SkillRow({ name, value, index, fillClass }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mb-1">
        <span className="text-gray-300 text-sm font-body">{name}</span>
        <span className="text-gray-500 text-xs font-mono">{value}%</span>
      </div>
      <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${fillClass}`}
          initial={{ width: '0%' }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.08 }}
        />
      </div>
    </div>
  );
}

function ZoneCard({ zone }) {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon } = zone;

  return (
    <motion.div
      variants={zoneVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-8 bg-transparent"
    >
      {/* Dynamic Glow Background */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={false}
        animate={{ background: isHovered ? zone.glowHover : zone.glowRest }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-row items-center gap-3 mb-6">
          <Icon size={20} strokeWidth={1.5} className={zone.iconColor} aria-hidden="true" />
          <h3 className="font-sora text-white font-semibold text-lg">{zone.title}</h3>
        </div>

        <div className="border-t border-white/10 mb-6" aria-hidden="true" />

        <div className="space-y-5">
          {zone.skills.map((skill, index) => (
            <SkillRow
              key={skill.name}
              name={skill.name}
              value={skill.value}
              index={index}
              fillClass={zone.fillClass}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-2">
            <span className="text-xs tracking-widest text-gray-500 uppercase font-body font-medium">
              EXPERTISE
            </span>
          </div>
          <h2 className="font-sora text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            Skills &amp; Tools
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg mb-12">
            What I bring to the table
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {SKILL_ZONES.map((zone) => (
            <ZoneCard key={zone.id} zone={zone} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}
