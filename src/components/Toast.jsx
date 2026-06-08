/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-xl glass-panel-heavy shadow-2xl max-w-sm border"
          style={{
            borderColor:
              type === "success"
                ? "rgba(0, 242, 254, 0.4)"
                : type === "error"
                ? "rgba(239, 68, 68, 0.4)"
                : "rgba(157, 78, 221, 0.4)",
            boxShadow:
              type === "success"
                ? "0 10px 30px -10px rgba(0,0,0,0.5), 0 0 15px rgba(0, 242, 254, 0.2)"
                : type === "error"
                ? "0 10px 30px -10px rgba(0,0,0,0.5), 0 0 15px rgba(239, 68, 68, 0.2)"
                : "0 10px 30px -10px rgba(0,0,0,0.5), 0 0 15px rgba(157, 78, 221, 0.2)",
          }}
          id="toast-notification"
        >
          {type === "success" ? (
            <div className="flex-shrink-0 text-brand-cyan">
              <CheckCircle2 size={22} className="animate-pulse" />
            </div>
          ) : (
            <div className="flex-shrink-0 text-red-400">
              <AlertCircle size={22} className="animate-pulse" />
            </div>
          )}

          <div className="flex-grow">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-0.5">
              {type === "success" ? "System Success" : "System Notification"}
            </p>
            <p className="text-sm font-sans font-medium text-slate-100">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="flex-shrink-0 text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-lg hover:bg-white/5"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
