/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, Calendar, BookOpen, School } from "lucide-react";
import { motion } from "motion/react";
import { EDUCATION } from "../data";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-dark-bg overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-3"
            id="education-badge"
          >
            <GraduationCap size={14} />
            <span>Learning Timeline</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
            id="education-heading"
          >
            Education
          </motion.h2>
          <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-4" />
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 md:pl-8 space-y-12 py-4" id="education-timeline-stack">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-0"
              id={`education-node-${item.id}`}
            >
              {/* Vertical node pulse indicator */}
              <div className="absolute -left-[41px] top-1.5 w-[20px] h-[20px] rounded-full bg-dark-bg border-4 border-brand-cyan group-hover:scale-110 transition-transform duration-300 flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping absolute" />
              </div>

              {/* Offset year display for desktop layouts */}
              <div className="hidden md:block absolute -left-[185px] top-1.5 w-36 text-right">
                <span className="font-mono text-xs font-bold text-brand-cyan tracking-wider uppercase block bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1.5 rounded-lg">
                  {item.duration}
                </span>
              </div>

              {/* Core card box */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-brand-cyan/20 cursor-pointer transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-cyan to-brand-blue" />

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* Duration badge representation specifically for small viewports */}
                    <span className="md:hidden inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-cyan/10 text-[10px] font-mono font-bold text-brand-cyan tracking-wide">
                      <Calendar size={10} />
                      {item.duration}
                    </span>

                    {item.status && (
                      <span className="px-2.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider animate-pulse ml-auto md:ml-0">
                        {item.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-brand-cyan hidden sm:block">
                      {index === 0 ? <GraduationCap size={22} /> : <School size={22} />}
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-100 leading-snug">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-sans font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                        <BookOpen size={14} className="text-brand-cyan" />
                        {item.institution}
                      </p>
                      <p className="text-slate-400 text-sm mt-4 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
