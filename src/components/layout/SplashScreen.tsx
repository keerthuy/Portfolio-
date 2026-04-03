'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const terminalSteps = [
  { text: "npm install caffeine --global", delay: 600 },
  { text: "resolving dependencies...", delay: 500, type: "system" },
  { text: "found 99 vulnerabilities (ignoring them)", delay: 800, type: "system", color: "text-red-400" },
  { text: "centering divs...", delay: 600 },
  { text: "Error: Div refused to center. Forcing with !important.", delay: 800, type: "system", color: "text-yellow-400" },
  { text: "deleting random console.log()...", delay: 500 },
  { text: "booting masterpiece...", delay: 600 },
  { text: "Success! Launching Portfolio...", delay: 800, type: "system", color: "text-green-400" }
];

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const runSteps = () => {
      if (stepIndex < terminalSteps.length) {
        timeout = setTimeout(() => {
          setStepIndex(prev => prev + 1);
        }, terminalSteps[stepIndex].delay);
      } else {
        timeout = setTimeout(() => {
          setIsLoading(false);
        }, 800); // Wait a bit after the last message
      }
    };

    runSteps();

    return () => clearTimeout(timeout);
  }, [stepIndex]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 px-4"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600 rounded-full blur-[120px] animate-pulse" />
          </div>

          {/* MacOS Terminal Window */}
          <motion.div 
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            className="w-full max-w-2xl bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden shadow-2xl z-10 relative"
          >
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-4 py-3 flex items-center border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 transition" />
              </div>
              <div className="mx-auto text-xs text-slate-400 font-mono tracking-wider">
                visitor@keerththanan:~
              </div>
              {/* spacer to balance the flex layout */}
              <div className="w-12" /> 
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm sm:text-base h-[320px] flex flex-col justify-end overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#0d1117] to-transparent h-12 z-10 pointer-events-none" />
              
              <div className="space-y-3 z-0">
                {terminalSteps.slice(0, stepIndex).map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${step.color || "text-slate-300"}`}
                  >
                    {!step.type && <span className="text-violet-500 mr-3">❯</span>}
                    {step.text}
                  </motion.div>
                ))}

                {/* Animated Typing Cursor */}
                {stepIndex < terminalSteps.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-slate-300 flex items-center mt-1"
                  >
                     {!terminalSteps[stepIndex]?.type && <span className="text-violet-500 mr-3">❯</span>}
                     <motion.div 
                       animate={{ opacity: [1, 0] }}
                       transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                       className="w-2.5 h-5 bg-slate-300 ml-1"
                     />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
