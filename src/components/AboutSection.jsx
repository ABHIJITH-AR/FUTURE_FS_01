/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { User, Lightbulb, Shield, Award, Terminal, Zap, Cpu, FolderOpen, Palette } from "lucide-react";
import { motion } from "motion/react";

export const AboutSection = () => {
  return (
    <section id="about" className="pt-6 sm:pt-8 lg:pt-10 pb-20 lg:pb-24 relative bg-dark-bg/95 overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-3"
            id="about-badge"
          >
            <User size={12} />
            <span>Profile Identity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
            id="about-heading"
          >
            Who Am I?
          </motion.h2>
          <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-4" />
        </div>

        {/* Bento Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12" id="about-content-grid">
          {/* Main About Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="lg:col-span-6 rounded-2xl glass-panel p-8 md:p-10 flex flex-col justify-between relative overflow-hidden cursor-pointer group hover:border-brand-cyan/30 class-card"
            id="about-statement-card"
          >
            {/* Glowing active/hover orbs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-cyan/25 group-hover:scale-125 transition-all duration-700" />
            <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-brand-purple/80 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-brand-cyan to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-brand-cyan to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-brand-cyan/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-brand-cyan/60 to-transparent pointer-events-none" />

            {/* Digital watermarks */}
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-cyan/10 select-none pointer-events-none tracking-tight text-right leading-none hidden sm:block">
              const Dev = &#123; status: "Online", focus: "Web_Apps" &#125;;
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6 border border-brand-cyan/20">
                <Terminal size={22} className="group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">A Passionate CSE Student & Developer</h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Computer Science Engineering student passionate about web development, programming, and creating user-friendly digital experiences.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                I enjoy building secure, high-performance projects, exploring new technologies, and continuously improving my technical skills to deliver elegant digital products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5 relative z-10">
              <div>
                <span className="block font-mono text-[11px] text-brand-cyan uppercase font-bold tracking-wider">Location</span>
                <span className="font-sans text-sm text-slate-300 font-semibold mt-1 block">Kerala, India</span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-brand-cyan uppercase font-bold tracking-wider">Focus</span>
                <span className="font-sans text-sm text-slate-300 font-semibold mt-1 block">Web Development</span>
              </div>
            </div>
          </motion.div>

          {/* Role Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-dark-panel/60 via-dark-panel/85 to-dark-bg/95 border border-brand-purple/20 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl cursor-pointer group hover:border-brand-purple/40 class-card"
            id="about-roles-card"
          >
            {/* Tech Dot Grid Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(157,78,221,0.06)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Glowing active/nebula backdrops */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-brand-purple/15 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 group-hover:bg-brand-purple/25 transition-all duration-700" />
            <div className="absolute right-[-40px] bottom-[-40px] w-52 h-52 bg-brand-blue/10 rounded-full blur-[70px] pointer-events-none" />

            {/* Glowing Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-[2px] bg-gradient-to-l from-brand-purple to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[2px] h-8 bg-gradient-to-b from-brand-purple to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-brand-purple/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-gradient-to-t from-brand-purple/60 to-transparent pointer-events-none" />

            {/* Tech Config Indicator */}
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-purple/15 select-none pointer-events-none tracking-widest leading-none hidden sm:block">
              [SYSTEM_ROLES_STABLE]
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 border border-brand-purple/20">
                <Lightbulb size={22} className="animate-pulse-slow text-brand-purple" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100 mb-6">Key Roles & Responsibilities</h3>
              
              <div className="space-y-6">
                {/* Role 1 */}
                <div className="flex gap-4 items-start pb-5 border-b border-white/5 group/role-1">
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Pulsing neon blue cyan halo backdrop */}
                    <span className="absolute -inset-1 rounded bg-gradient-to-tr from-brand-cyan to-brand-blue opacity-50 blur-sm group-hover/role-1:opacity-80 group-hover/role-1:blur transition-all duration-500" />
                    
                    <motion.div 
                      className="relative p-2.5 rounded bg-slate-900 border border-white/5 flex items-center justify-center text-brand-cyan"
                      whileHover={{ scale: 1.12, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Shield size={16} className="text-brand-cyan group-hover/role-1:text-white transition-colors" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-slate-200 group-hover/role-1:text-brand-cyan transition-colors duration-300">
                      Full Stack Web Development Intern
                    </h4>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">Future Interns</p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-sans">
                      Web developer intern contributing to real-world industrial diagnostics applications and system optimizations.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="flex gap-4 items-start group/role-2">
                  <div className="relative flex-shrink-0 mt-0.5">
                    {/* Pulsing neon purple halo backdrop */}
                    <span className="absolute -inset-1 rounded bg-gradient-to-tr from-brand-purple to-purple-600 opacity-50 blur-sm group-hover/role-2:opacity-80 group-hover/role-2:blur transition-all duration-500" />
                    
                    <motion.div 
                      className="relative p-2.5 rounded bg-slate-900 border border-white/5 flex items-center justify-center text-brand-purple"
                      whileHover={{ scale: 1.12, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Palette size={16} className="text-brand-purple group-hover/role-2:text-white transition-colors" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-slate-200 group-hover/role-2:text-brand-purple transition-colors duration-300">
                      Associate Creative Officer
                    </h4>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">IEDC MGMCET</p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-sans">
                      Leading student design work, brand strategies, event advertisements, and fostering the entrepreneurial ecosystem within the college campus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Interactive Statistics Count Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          id="about-statistics-grid"
        >
          {/* Stat 1 */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 relative overflow-hidden group hover:border-brand-cyan/40 transition-colors cursor-pointer"
          >
            <div className="p-4 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
              <FolderOpen size={24} />
            </div>
            <div>
              <span className="block text-2xl font-display font-black text-white">4+</span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Projects Completed</span>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 relative overflow-hidden group hover:border-brand-cyan/40 transition-colors cursor-pointer"
          >
            <div className="p-4 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
              <Cpu size={24} />
            </div>
            <div>
              <span className="block text-2xl font-display font-black text-white">10+</span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Core Technologies</span>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 relative overflow-hidden group hover:border-brand-purple/40 transition-colors cursor-pointer"
          >
            <div className="p-4 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
              <Award size={24} />
            </div>
            <div>
              <span className="block text-2xl font-display font-black text-white">1</span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Internship Completed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
