/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { TechLogo } from "./TechLogos";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-dark-bg/95 overflow-hidden border-t border-white/5">
      {/* Background neon orbs */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-3"
            id="projects-badge"
          >
            <FolderGit2 size={12} />
            <span>Project Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
            id="projects-heading"
          >
            Featured Projects
          </motion.h2>
          <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-4" />
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {PROJECTS.map((project, index) => {
            const theme = project.theme || {};
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.015,
                  boxShadow: theme.hoverGlow || "0 20px 40px rgba(0, 242, 254, 0.15)"
                }}
                className={`${theme.cardBg || "glass-panel"} rounded-2xl border ${theme.borderColor || "border-white/10"} flex flex-col justify-between overflow-hidden relative shadow-2xl transition-all duration-300 group`}
                id={`project-card-${project.id}`}
              >
                {/* Project Card Image Banner */}
                <div className="h-52 sm:h-56 w-full relative overflow-hidden border-b border-white/10 group/img">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-dark-panel" />
                  )}

                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                </div>

                {/* Core description & features */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-display font-bold text-white mb-3 transition-colors duration-300 ${theme.accentText || "group-hover:text-brand-cyan"}`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Bullet features */}
                    <div className="mb-6">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-3">
                        Core Mechanics
                      </span>
                      <ul className="space-y-2">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-300 text-xs font-sans">
                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${theme.dotBg || "bg-brand-cyan"}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="h-px bg-white/10 my-6" />

                    {/* PROJECT TECHNOLOGY TAGS ENHANCEMENT */}
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-3">
                      Technology Tags
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6" id={`project-tech-tags-${project.id}`}>
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 ${theme.tagBorder || "hover:border-brand-cyan/40"} text-slate-200 font-sans text-xs transition-all duration-300 cursor-default group/tag`}
                          title={tech}
                        >
                          <TechLogo type={tech} size={14} className="flex-shrink-0" />
                          <span>{tech}</span>
                        </motion.span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-bold tracking-wider text-slate-200 border border-white/10 hover:border-white/20 cursor-pointer transition-all uppercase"
                        id={`project-btn-git-${project.id}`}
                      >
                        <Github size={14} /> Repository
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${theme.btnGlow || "from-brand-cyan/15 to-brand-blue/15 text-brand-cyan border-brand-cyan/25"} text-xs font-mono font-bold tracking-wider cursor-pointer transition-all uppercase shadow-lg`}
                        id={`project-btn-demo-${project.id}`}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </motion.a>
                    </div>
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
