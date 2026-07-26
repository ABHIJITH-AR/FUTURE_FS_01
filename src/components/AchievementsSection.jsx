/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, ExternalLink, Calendar, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { CERTIFICATES } from "../data";

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative bg-dark-bg overflow-hidden border-t border-white/5">
      {/* Ambient background accent */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-3"
            id="achievements-badge"
          >
            <Award size={12} />
            <span>Honors & Workshops</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
            id="achievements-heading"
          >
            Achievements & Certifications
          </motion.h2>
          <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-4" />
          
          <p className="text-slate-400 text-sm mt-6 max-w-xl font-sans leading-relaxed">
            Continuously enhancing my technical skills through workshops, hackathons, and innovation-driven learning experiences in programming, AI, machine learning, and emerging technologies.
          </p>
        </div>

        {/* Certificates Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="achievements-cards-grid">
          {CERTIFICATES.map((cert, index) => {
            const isHackathon = cert.title.toLowerCase().includes("hack") || cert.title.toLowerCase().includes("sprint");
            const isML = cert.title.toLowerCase().includes("learning") || cert.title.toLowerCase().includes("ai");
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="animated-neon-border p-[1.5px] rounded-2xl flex flex-col justify-between transition-all duration-300 relative group shadow-[0_4px_15px_rgba(0,118,255,0.08)] hover:shadow-[0_10px_30px_rgba(157,78,221,0.25)] cursor-pointer"
                id={`cert-box-${cert.id}`}
              >
                {/* The inner body container which acts as the card content */}
                <div className="bg-slate-950/95 backdrop-blur-xl rounded-[15px] p-6 h-full w-full flex flex-col justify-between relative z-10 overflow-hidden">
                   {/* Visual card light filter */}
                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/3 to-transparent rounded-bl-full pointer-events-none" />

                  <div>
                    {/* Top Header info */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                          isHackathon 
                            ? "bg-brand-purple/20 text-purple-300 border border-brand-purple/30"
                            : isML 
                            ? "bg-brand-cyan/20 text-cyan-300 border border-brand-cyan/30"
                            : "bg-white/5 text-slate-300 border border-white/10"
                        }`}
                      >
                        {cert.type}
                      </span>
                      <ShieldCheck size={16} className="text-brand-cyan shadow-[0_0_10px_rgba(0,242,254,0.3)] animate-pulse" />
                    </div>

                    {/* Title of Certificate */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-100 group-hover:text-brand-cyan transition-colors leading-snug mb-2">
                      {cert.title}
                    </h3>

                    {/* Issuing Organization */}
                    <p className="text-xs font-mono text-slate-300 font-bold mb-4 flex items-center gap-1.5">
                      <BookOpen size={12} className="text-brand-purple" />
                      {cert.organization}
                    </p>

                    {/* Descriptions */}
                    <p className="text-slate-400 text-xs font-sans leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {/* PDF Verification Drive button */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Google Drive PDF
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-purple hover:border-transparent rounded-lg text-xs font-mono font-bold text-slate-300 hover:text-white transition-all shadow-[inset_0_1px_4px_rgba(255,255,255,0.03)]"
                      id={`cert-btn-drive-${cert.id}`}
                    >
                      View <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
