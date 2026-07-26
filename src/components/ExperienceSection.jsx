/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Briefcase, Calendar, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCE } from "../data";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-dark-bg overflow-hidden border-t border-white/5">
      {/* Background visual details */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-3"
            id="experience-badge"
          >
            <Briefcase size={12} />
            <span>Employment & Roles</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
            id="experience-heading"
          >
            Professional Experience
          </motion.h2>
          <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-4" />
        </div>

        {/* Experience Cards Layout */}
        <div className="space-y-8" id="experience-cards-stack">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                scale: { type: "spring", stiffness: 300, damping: 20 },
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 hover:border-brand-purple/20 cursor-pointer transition-all duration-300 shadow-xl relative overflow-hidden group"
              id={`experience-card-${item.id}`}
            >
              {/* Highlight bar with shifting gradients */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Decorative Icon */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-brand-cyan group-hover:border-brand-cyan/40 group-hover:bg-white/10 transition-colors hidden sm:block flex-shrink-0">
                    <Briefcase size={22} />
                  </div>

                  <div>
                    {/* Role / Job Title */}
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-100 flex items-center gap-2">
                      {item.role}
                      <span className="hidden sm:inline text-brand-purple text-xs font-mono font-normal">
                        / 01
                      </span>
                    </h3>

                    {/* Company description */}
                    <p className="text-sm font-sans font-semibold text-brand-cyan mt-1.5 flex items-center gap-1.5">
                      <Sparkles size={14} />
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-300">
                    <Calendar size={12} className="text-brand-purple" />
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Task Details / Accomplishments */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-4">
                  Key Responsibilities
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.description.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300 text-sm font-sans"
                    >
                      <span className="p-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan flex-shrink-0 mt-0.5">
                        <CheckSquare size={12} strokeWidth={2.5} />
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
