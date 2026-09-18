"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44 lg:pb-36 lg:pt-48">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-60" />
      <div className="pointer-events-none absolute left-[42%] top-10 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[35%] -z-10 h-80 w-80 rounded-full bg-violet-surface/30 blur-[100px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-violet-bright">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-violet/40 bg-violet/10"><Sparkles size={13} /></span>
              Web Designer &amp; Developer
            </motion.div>

            <motion.h1 className="max-w-4xl font-heading text-[3.15rem] font-semibold leading-[.93] tracking-[-0.055em] sm:text-6xl lg:text-[5.35rem] xl:text-[6rem]">
              DIGITAL EXPERIENCES <span className="text-gradient">BUILT TO STAND OUT.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Modern, high-performance websites designed for growing businesses — from first impression to final interaction.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} className="mt-9 flex flex-wrap gap-3">
              <Button href="#work">View My Work <ArrowDownRight size={16} /></Button>
              <Button href="#contact" variant="secondary">Let&apos;s Talk <ArrowUpRight size={16} /></Button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.42 }} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><span className="status-dot" /> Available for select freelance projects</span>
              <span>{siteConfig.location}</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .96, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .16 }} className="relative mx-auto w-full max-w-xl lg:pl-4" aria-hidden="true">
            <div className="hero-orbit absolute -inset-8 rounded-[3rem]" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-surface/90 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="browser-shell overflow-hidden rounded-[1.35rem] border border-white/10 bg-background">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 flex h-7 flex-1 items-center rounded-full border border-white/5 bg-white/[0.035] px-3 text-[9px] text-muted-foreground">bimarshrai.dev</div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden p-5 sm:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(139,92,246,.34),transparent_28%),radial-gradient(circle_at_20%_90%,rgba(46,16,101,.45),transparent_34%)]" />
                  <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.25em] text-violet-bright">Digital Experience</span>
                        <p className="mt-4 max-w-xs font-heading text-2xl font-medium leading-tight tracking-tight sm:text-3xl">Designed to be remembered.</p>
                      </div>
                      <span className="hidden rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-muted-foreground sm:block">01 / 03</span>
                    </div>
                    <div className="grid grid-cols-[1.3fr_.7fr] gap-2">
                      <div className="h-24 rounded-xl border border-white/5 bg-white/[0.045] sm:h-28" />
                      <div className="h-24 rounded-xl border border-violet/20 bg-violet/20 sm:h-28" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-white/10 bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-[9px] uppercase tracking-[.2em] text-muted-foreground">Focus</p>
              <p className="mt-1 font-heading text-sm">Design · Performance · Clarity</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
