"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Design", "Create", "Inspire"];

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const value = Math.min(100, Math.floor(((now - started) / 2700) * 100));
      setCount(value);
      if (value < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const wordTimer = window.setInterval(() => setWordIndex(value => (value + 1) % words.length), 900);
    const finishTimer = window.setTimeout(() => setDone(true), 3100);
    return () => { cancelAnimationFrame(frame); window.clearInterval(wordTimer); window.clearTimeout(finishTimer); };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }} className="fixed inset-0 z-[9999] bg-[#0a0a0a] px-6 py-6">
            <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-xs uppercase tracking-[.3em] text-[#858585]">Portfolio</motion.p>
            <div className="absolute inset-0 grid place-items-center">
              <AnimatePresence mode="wait">
                <motion.h1 key={wordIndex} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: .4 }} className="cosmic-display text-5xl italic text-white/85 md:text-7xl lg:text-8xl">
                  {words[wordIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="absolute bottom-8 right-6"><span className="cosmic-display text-7xl tabular-nums text-white md:text-9xl">{String(count).padStart(3,"0")}</span></div>
            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
              <div className="accent-gradient h-full origin-left" style={{ transform: "scaleX(" + count / 100 + ")", boxShadow: "0 0 8px rgba(137,170,204,.35)" }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
