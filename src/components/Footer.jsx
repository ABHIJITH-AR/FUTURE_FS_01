/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12 relative overflow-hidden" id="footer">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright branding */}
        <div className="text-center text-xs font-sans text-slate-500 flex items-center justify-center gap-1.5 order-3 md:order-2">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        </div>

        {/* Back to top + external links */}
        <div className="flex items-center gap-4 order-2 md:order-3" id="footer-actions">
          {/* Quick socials row */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/3 border border-white/5 text-slate-400 hover:text-slate-100 hover:border-white/15 transition-all text-xs"
              aria-label="GitHub Redirect"
              id="footer-git-link"
            >
              <Github size={14} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/3 border border-white/5 text-slate-400 hover:text-slate-100 hover:border-white/15 transition-all text-xs"
              aria-label="LinkedIn Redirect"
              id="footer-link-link"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/3 border border-white/5 text-slate-400 hover:text-slate-100 hover:border-white/15 transition-all text-xs"
              aria-label="Mail Redirect"
              id="footer-mail-link"
            >
              <Mail size={14} />
            </a>
          </div>

          <div className="w-px h-5 bg-white/5" />

          {/* Core Scroll Up button */}
          <button
            onClick={scrollUp}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-cyan hover:text-white hover:border-brand-cyan/40 transition-all cursor-pointer"
            title="Scroll back to top"
            aria-label="Scroll back to top"
            id="footer-scroll-top-btn"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
