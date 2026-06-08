/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowRight, Sparkles, FileText } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export const TypingText = () => {
  const roles = [
    "Computer Science Engineering Student",
    "Full Stack Web Development Intern",
    "Aspiring Software Engineer"
  ];
  
  const roleGradients = [
    "from-[#2563EB] via-[#4F46E5] to-[#7C3AED]", // Electric Royal Blue to Indigo to Violet
    "from-[#06B6D4] via-[#4F46E5] to-[#8B5CF6]", // Dynamic Cyan-Blue to Purple-Violet
    "from-[#3B82F6] via-[#6366F1] to-[#A855F7]"  // Sky Blue to Deep Indigo to bright Violet
  ];

  const roleGlows = [
    "drop-shadow(0 0 12px rgba(79,70,229,0.55))",
    "drop-shadow(0 0 12px rgba(6,182,212,0.55))",
    "drop-shadow(0 0 12px rgba(168,85,247,0.55))"
  ];

  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIdx];

    if (!isDeleting) {
      if (currentText !== fullText) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  return (
    <span className="relative font-mono font-bold inline-flex items-center tracking-wide min-h-[1.5em] text-[15px] sm:text-lg md:text-xl select-none">
      {/* Light-pulsing dynamic ambient aura behind the text */}
      <span 
        className="absolute -inset-x-4 -inset-y-2 rounded-full opacity-35 blur-xl transition-all duration-700 pointer-events-none bg-gradient-to-r"
        style={{
          backgroundImage: 
            currentRoleIdx === 0 ? "linear-gradient(to right, rgba(37,99,235,0.25), rgba(124,58,237,0.25))" :
            currentRoleIdx === 1 ? "linear-gradient(to right, rgba(6,182,212,0.25), rgba(139,92,246,0.25))" :
            "linear-gradient(to right, rgba(59,130,246,0.25), rgba(168,85,247,0.25))"
        }}
      />
      
      {/* Direct glowing blue-violet indicator */}
      <span 
        className="mr-2 flex h-2 w-2 relative"
      >
        <span 
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{
            backgroundColor: 
              currentRoleIdx === 0 ? "#4F46E5" :
              currentRoleIdx === 1 ? "#06B6D4" :
              "#A855F7"
          }}
        />
        <span 
          className="relative inline-flex rounded-full h-2 w-2"
          style={{
            backgroundColor: 
              currentRoleIdx === 0 ? "#4F46E5" :
              currentRoleIdx === 1 ? "#06B6D4" :
              "#A855F7"
          }}
        />
      </span>

      {/* The Animated text directly with custom drop-shadow and glow */}
      <span 
        className={`bg-gradient-to-r ${roleGradients[currentRoleIdx]} bg-clip-text text-transparent transition-all duration-500`}
        style={{ filter: roleGlows[currentRoleIdx] }}
      >
        {currentText}
      </span>
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className="ml-1 text-brand-purple font-bold font-mono text-base sm:text-lg md:text-xl animate-pulse"
      >
        _
      </motion.span>
    </span>
  );
};

export const HomeSection = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  const handleViewProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - 80,
        behavior: "smooth"
      });
    }
  };

  const handleContactMe = () => {
    const element = document.getElementById("contact");
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-24 sm:pt-28 pb-4 sm:pb-8 lg:pb-10 overflow-hidden bg-dark-bg"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-brand-cyan/15 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple/15 blur-[140px] pointer-events-none animate-pulse-slow" />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.1] mb-4 text-center lg:text-left"
              id="hero-name-heading"
            >
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">ABHIJITH AR</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-mono text-slate-300 font-medium mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-2"
              id="hero-title-subtitle"
            >
              <TypingText />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mb-8"
              id="hero-about-summary"
            >
              Computer Science Engineering student passionate about web development, programming, and creating user-friendly digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6"
              id="hero-cta-buttons"
            >
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="glow-btn px-6 py-3.5 bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan/90 hover:to-brand-blue/90 text-dark-bg font-sans font-semibold rounded-xl text-sm flex items-center gap-2 shadow-[0_4px_20px_rgba(0,242,254,0.3)] hover:shadow-[0_8px_30px_rgba(0,242,254,0.5)] cursor-pointer transform"
                id="hero-view-work-btn"
              >
                View Projects <ArrowRight size={16} />
              </motion.button>

              <motion.button
                onClick={handleContactMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-sans font-semibold rounded-xl text-sm border border-white/10 hover:border-brand-purple/40 transition-all flex items-center gap-2 cursor-pointer transform"
                id="hero-contact-btn"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Channels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 border-t border-white/5 pt-6 w-full max-w-md justify-center lg:justify-start"
              id="hero-social-strip"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Profiles:</span>
              <div className="flex items-center gap-3">
                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-white/10 cursor-pointer transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  id="hero-social-github"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-white/10 cursor-pointer transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  id="hero-social-linkedin"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-white/10 cursor-pointer transition-all shadow-sm"
                  aria-label="Send Email"
                  id="hero-social-mail"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile Picture Frame */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ 
                opacity: { duration: 0.6 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 cursor-pointer group animate-float"
              id="hero-avatar-frame-root"
            >
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple opacity-40 blur-xl group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 animate-pulse-slow" />
              
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
              
              <div className="absolute inset-1 rounded-full bg-dark-bg" />

              {/* Real profile image rendering container */}
              <div className="absolute inset-3 rounded-full overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
                {/* Underlying Cyber Radar Sweeping Monogram (Always visible as a beautiful, functional fallback) */}
                <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple flex items-center justify-center text-dark-bg text-2xl font-display font-semibold mb-2 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {/* Pulsing neon ripples */}
                    <span className="absolute inset-0 rounded-full bg-brand-cyan/20 animate-ping" />
                    AA
                  </div>
                  <span className="font-display font-bold text-white text-sm">CSE Student</span>
                  <span className="text-xs font-mono text-brand-cyan mt-1">Web Developer</span>
                  
                  {/* Subtle rotating diagnostic indicators */}
                  <motion.div 
                    className="absolute inset-4 rounded-full border border-dashed border-brand-cyan/25 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-8 rounded-full border border-dashed border-brand-purple/20 pointer-events-none"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  />
                </div>

                {/* Floating Image Overlay (Fades in over the monogram once successfully fetched in background) */}
                {!imgError && (
                  <img
                    src={PERSONAL_INFO.profilePicUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoading(false)}
                    onError={() => {
                      setImgError(true);
                       setImgLoading(false);
                    }}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 ${
                      imgLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
