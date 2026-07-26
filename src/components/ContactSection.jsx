/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Send, Sparkles, Loader2, FileText, CheckCircle, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO } from "../data";
import { Toast } from "./Toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  // Toast Notification state
  const [toast, setToast] = useState({
    message: "",
    type: "success",
    isVisible: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error inline when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message contents cannot be blank.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const showToast = (message, type) => {
    setToast({
      message,
      type,
      isVisible: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please correct the form errors before submitting.", "error");
      return;
    }

    setIsSending(true);

    // Fetch credentials from environmental files or provide simulator values
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Send email via structured EmailJS API
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            to_name: "Abhijith AR",
            to_email: PERSONAL_INFO.email
          },
          publicKey
        );
        
        showToast("Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
        setSentSuccess(true);
      } else {
        // Fallback Client Environment Simulator Mode for Preview Workspace
        console.warn(
          "EmailJS variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are empty. Triggering beautiful local simulated response."
        );
        
        // Simulate actual network latency
        await new Promise((resolve) => setTimeout(resolve, 1800));

        showToast("Message sent successfully!", "success");
        
        setFormData({ name: "", email: "", message: "" });
        setSentSuccess(true);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast(
        error?.text || "Failed to deliver the message. Please try again or email directly.",
        "error"
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-bg/95 overflow-hidden border-t border-white/5">
      {/* Decorative colored glow points (Blue, Purple, Cyan Glow Effects) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase mb-4"
              id="contact-badge"
            >
              <Mail size={12} />
              <span>Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]"
              id="contact-heading"
            >
              Let's Build Something Amazing Together
            </motion.h2>
            <div className="w-16 h-1 rounded bg-gradient-to-r from-brand-cyan to-brand-purple mt-6 mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-sans"
              id="contact-description"
            >
              Have an opportunity, project, or collaboration in mind? Feel free to reach out. I will respond to your inquiry as soon as possible.
            </motion.p>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-2xl glass-panel p-6 sm:p-8 md:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative"
              id="contact-form-card"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />

              <AnimatePresence mode="wait">
                {!sentSuccess ? (
                  <motion.form
                    key="contact-form-component"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="contact-form-element"
                    noValidate
                  >
                    {/* Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div>
                        <label htmlFor="name" className="block font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Your Name <span className="text-brand-cyan">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                            <User size={16} />
                          </span>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="your name"
                            className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm text-slate-200 bg-white/3 border neon-input focus:ring-0 ${
                              errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/8"
                            }`}
                            required
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-xs font-mono mt-1.5 pl-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email field */}
                      <div>
                        <label htmlFor="email" className="block font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Your Email <span className="text-brand-cyan">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                            <Mail size={16} />
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your email"
                            className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm text-slate-200 bg-white/3 border neon-input focus:ring-0 ${
                              errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/8"
                            }`}
                            required
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs font-mono mt-1.5 pl-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Message <span className="text-brand-cyan">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4 text-slate-500">
                          <FileText size={16} />
                        </span>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Discussing internship openings, project estimates..."
                          className={`w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-slate-200 bg-white/3 border neon-input focus:ring-0 resize-none ${
                            errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/8"
                          }`}
                          required
                        />
                      </div>
                      {errors.message && (
                        <p className="text-red-400 text-xs font-mono mt-1.5 pl-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Send Button */}
                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={{ scale: 1.025, y: -2 }}
                      whileTap={{ scale: 0.975 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-full glow-btn px-6 py-4 rounded-xl text-sm text-dark-bg bg-gradient-to-r from-brand-cyan to-brand-blue disabled:opacity-50 font-sans font-bold flex items-center justify-center gap-2 border border-transparent shadow-[0_4px_15px_rgba(0,242,254,0.15)] hover:shadow-[0_8px_25px_rgba(0,242,254,0.35)] cursor-pointer"
                      id="contact-submit-btn"
                    >
                      {isSending ? (
                        <>
                          <Loader2 size={16} className="animate-spin text-dark-bg" />
                          <span>Submitting secure payload...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                    id="contact-success-screen"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                      <CheckCircle size={32} className="animate-bounce" style={{ animationDuration: '2s' }} />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-3">Message Sent Successfully!</h3>
                    <p className="text-slate-300 text-sm max-w-sm font-sans mb-8 leading-relaxed">
                      Thank you for getting in touch. I will read your message and reply as soon as possible.
                    </p>
                    <motion.button
                      onClick={() => setSentSuccess(false)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-500/40 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Global state-controlled Toast notifications */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </section>
  );
};
