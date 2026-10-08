"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Hls from "hls.js";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const VIDEO_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const roles = ["Creative", "Fullstack", "Founder", "Scholar"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(VIDEO_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => void video.play().catch(() => undefined));
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_URL;
      void video.play().catch(() => undefined);
    }
    return () => hls?.destroy();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-65" aria-hidden="true"/>
      <div className="absolute inset-0 bg-black/40"/>
      <div className="cosmic-grid pointer-events-none absolute inset-0"/>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"/>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
        <motion.p initial={{ opacity:0, filter:"blur(10px)", y:12 }} animate={{ opacity:1, filter:"blur(0px)", y:0 }} transition={{ duration:1, delay:.35 }} className="mb-7 text-xs uppercase tracking-[.3em] text-white/60">COLLECTION '26</motion.p>
        <motion.h1 initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2, ease:[.2,.7,.2,1] }} className="cosmic-display text-7xl italic leading-[.86] tracking-[-.04em] text-white sm:text-8xl md:text-9xl">Bimarsh Rai</motion.h1>
        <p className="mt-8 text-sm text-white/75 md:text-base">
          A <AnimatePresence mode="wait"><motion.span key={roleIndex} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:.4 }} className="inline-block cosmic-display text-xl italic text-white md:text-2xl">{roles[roleIndex]}</motion.span></AnimatePresence> lives in India.
        </p>
        <motion.p initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.2 }} className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">Designing seamless digital interactions by focusing on the details that make brands feel more credible, memorable, and alive.</motion.p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-[#0a0a0a] hover:text-white">See Works <ArrowDownRight size={16}/></a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-[#0a0a0a]/30 px-7 py-3.5 text-sm text-white transition hover:scale-105 hover:border-white/45">Reach out... <ArrowUpRight size={16}/></a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-[#a7e48a]"/>Available for select freelance projects</span>
          <span>Based in India · Working Worldwide</span>
        </div>
        {!reduced && <div className="mt-11 hidden items-center justify-center gap-3 text-[10px] uppercase tracking-[.22em] text-white/40 lg:flex"><span>Scroll</span><div className="h-10 w-px overflow-hidden bg-white/15"><span className="block h-1/2 w-full bg-white/65 animate-scroll-down"/></div></div>}
      </div>
    </section>
  );
}
