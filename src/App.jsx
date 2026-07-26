/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "experience", "achievements", "contact"];
    
    const handleScroll = () => {
      // Safe fallback if near top
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      // Safe fallback if near the absolute bottom page height
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const viewportCenter = window.innerHeight * 0.35; // 35% of page viewport height from top
      let currentActive = "home";

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom > viewportCenter) {
            currentActive = id;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run immediate check on initial rendering or route refresh
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col font-sans antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Dynamic Sticky glass block Header */}
      <Navbar activeSection={activeSection} />

      {/* Ordered Section Stack */}
      <main className="flex-grow">
        {/* 1. Home Section */}
        <HomeSection />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Education Section */}
        <EducationSection />

        {/* 4. Skills Section */}
        <SkillsSection />

        {/* 5. Projects Section */}
        <ProjectsSection />

        {/* 6. Experience Section */}
        <ExperienceSection />

        {/* 7. Achievements & Certifications Section */}
        <AchievementsSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
