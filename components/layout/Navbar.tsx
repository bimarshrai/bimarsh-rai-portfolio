"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/constants";

const navItems = [{ label: "Home", href: "#home" }, { label: "Work", href: "#work" }, { label: "About", href: "#about" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav className={"cosmic-nav inline-flex max-w-full items-center rounded-full p-2 transition-shadow " + (scrolled ? "shadow-xl shadow-black/25" : "")}>
        <Link href="/" className="group px-1.5 sm:px-2" aria-label={siteConfig.name + " home"}>
          <span className="cosmic-ring grid h-9 w-9 place-items-center rounded-full bg-[#0a0a0a]"><span className="cosmic-display text-[13px]">BR</span></span>
        </Link>
        <span className="mx-1 hidden h-5 w-px bg-[#1f1f1f] sm:block" />
        <div className="hidden items-center sm:flex">
          {navItems.map((item, index) => (
            <button key={item.href} onClick={() => go(item.href)} className={"rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm " + (index === 0 ? "bg-white/[.06] text-white" : "text-[#858585] hover:bg-white/[.06] hover:text-white")}>{item.label}</button>
          ))}
        </div>
        <span className="mx-1 hidden h-5 w-px bg-[#1f1f1f] sm:block" />
        <button onClick={() => go("#contact")} className="group relative rounded-full p-[1px]">
          <span className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-[#89aacc] to-[#4e85bf] opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="relative flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-xs text-white sm:text-sm">Say hi <ArrowUpRight size={14}/></span>
        </button>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)} className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-[#1f1f1f] text-white sm:hidden">{open ? <X size={17}/> : <Menu size={17}/>}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} className="absolute top-[4.6rem] w-[calc(100%-2rem)] max-w-sm rounded-3xl border border-white/10 bg-[#111]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:hidden">
            {navItems.map(item => <button key={item.href} onClick={() => go(item.href)} className="block w-full rounded-2xl px-4 py-3 text-left text-sm text-[#858585] hover:bg-white/[.05] hover:text-white">{item.label}</button>)}
            <button onClick={() => go("#contact")} className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-black">Say hi <ArrowUpRight size={15}/></button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
