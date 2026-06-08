/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Laptop, Cpu, Globe, Search, Database, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS, SKILL_CATEGORIES } from "../data";
import { TechLogo } from "./TechLogos";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-bg/95 overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-3"
            id="skills-badge"
          >
            <Cpu size={12} />
            <span>Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
            id="skills-heading"
          >
            Technical Skills
          </motion.h2>
          <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-4" />
        </div>

        {/* Dynamic Category Nav Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto" id="skills-category-filters">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all border cursor-pointer ${
              activeCategory === "All"
                ? "bg-brand-cyan text-dark-bg border-transparent font-semibold shadow-[0_4px_15px_rgba(0,242,254,0.3)]"
                : "bg-white/5 text-slate-400 border-white/5 hover:text-slate-100 hover:bg-white/10"
            }`}
            id="skills-filter-all-btn"
          >
            All
          </motion.button>
          
          {SKILL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all border cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-cyan text-dark-bg border-transparent font-semibold shadow-[0_4px_15px_rgba(0,242,254,0.3)]"
                  : "bg-white/5 text-slate-400 border-white/5 hover:text-slate-100 hover:bg-white/10"
              }`}
              id={`skills-filter-${cat.replace(/\s+/g, "-").toLowerCase()}-btn`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          id="skills-display-grid"
          key={activeCategory} // Forces fresh beautiful grid animations when category switches!
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.2 } }}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl glass-panel p-5 border border-white/8 hover:border-brand-cyan/20 flex flex-col items-center justify-center text-center relative group overflow-hidden cursor-pointer shadow-lg"
                id={`skill-card-${skill.name.toLowerCase()}`}
              >
                {/* Micro-light reflections */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/0 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* SVG/IMG Logo Wrapper */}
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center mb-4 text-slate-400 group-hover:text-brand-cyan group-hover:border-brand-cyan/25 transition-all duration-300 relative shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-brand-purple/5 opacity-50 mix-blend-overlay" />
                  <TechLogo type={skill.logoType} size={32} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <span className="font-sans text-sm font-semibold text-slate-100 group-hover:text-brand-cyan transition-colors">
                  {skill.name}
                </span>

                <span className="font-mono text-[9px] text-slate-500 group-hover:text-slate-400 mt-1 uppercase tracking-wider block transition-colors">
                  {skill.category.split(" ")[0]}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
