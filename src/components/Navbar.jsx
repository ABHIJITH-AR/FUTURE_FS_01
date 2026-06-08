/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

export const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    
    // We use a small setTimeout/requestAnimationFrame on mobile to allow the mobile drawer
    // state to update and settle, ensuring accurate layout coordinates for scrolling.
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Adjust scroll offset based on screen size (e.g., smaller padding on mobile)
        const offset = window.innerWidth < 1024 ? 70 : 80;
        
        // Compute coordinates relative to the body so scroll position is accurate
        // even if clicking during/mid-way through an active scrolling motion.
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 40);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-3 bg-dark-bg/90 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
      id="main-navbar"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between w-full">
        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all cursor-pointer duration-300 pointer-events-auto ${
                  isActive
                    ? "text-brand-cyan font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
                id={`nav-link-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </motion.button>
            );
          })}
        </div>

        {/* External Connect Tag */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 text-xs font-mono tracking-widest text-brand-cyan uppercase cursor-pointer transition-all shadow-sm"
            id="navbar-github-link"
          >
            Connect <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Mobile Hamburger menu */}
        <div className="flex lg:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-slate-100 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full border-t border-white/5 bg-dark-bg/95 backdrop-blur-lg overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between w-full p-3 rounded-xl text-left text-sm font-sans font-semibold cursor-pointer transition-all active:scale-[0.98] ${
                      isActive
                        ? "bg-brand-cyan/15 text-brand-cyan border-l-4 border-brand-cyan pl-4"
                        : "text-slate-400 hover:text-slate-100 hover:bg-white/5 active:bg-white/10 pl-3"
                    }`}
                    id={`mobile-nav-link-${item.id}`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />}
                  </button>
                );
              })}

              <div className="h-px bg-white/5 my-2" />

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 hover:bg-brand-cyan/20 active:bg-brand-cyan/30 text-brand-cyan text-sm font-semibold cursor-pointer transition-all active:scale-[0.98] mt-2"
                id="mobile-nav-external"
              >
                LinkedIn Profile <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
