"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import GalaxyCanvas from "@/components/sections/GalaxyCanvas";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:min-h-screen lg:pt-36">
      <div className="absolute inset-0 -z-30 bg-[#0a0616]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_42%,rgba(255,180,92,0.14),transparent_18rem),radial-gradient(circle_at_50%_55%,rgba(139,92,246,0.14),transparent_34rem)]" />
      <GalaxyCanvas reducedMotion={Boolean(prefersReducedMotion)} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(10,6,22,0.02)_24%,rgba(10,6,22,0.35)_62%,rgba(10,6,22,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-b from-transparent via-[#0a0616]/30 to-[#09090b]" />

      <Container className="relative z-10">
        <div className="pointer-events-none mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-violet-bright"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-violet/40 bg-violet/10">
              <Sparkles size={13} />
            </span>
            Bimarsh Rai — Web Designer &amp; Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-5xl font-heading text-[3.8rem] font-semibold leading-[0.9] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[7.4rem]"
          >
            BUILD <span className="text-gradient">BEYOND FLAT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8"
          >
            Immersive, high-performance websites designed to make growing
            businesses look credible, memorable, and ready for what&apos;s next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pointer-events-auto mt-9 flex flex-wrap justify-center gap-3"
          >
            <Button href="#work" className="pointer-events-auto">
              View My Work <ArrowDownRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary" className="pointer-events-auto bg-black/10">
              Let&apos;s Talk <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/52"
          >
            <span className="inline-flex items-center gap-2">
              <span className="status-dot" /> Available for select freelance projects
            </span>
            <span>{siteConfig.location}</span>
          </motion.div>

          <div className="mt-11 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/42">
            <span className="h-px w-8 bg-white/15" />
            <span>{prefersReducedMotion ? "Explore the work" : "Drag · Zoom · Explore"}</span>
            <span className="h-px w-8 bg-white/15" />
          </div>
        </div>
      </Container>
    </section>
  );
}
