"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="nav-glass flex items-center justify-between rounded-full border border-white/10 px-4 py-3 sm:px-5">
          <Link href="/" className="group flex items-center gap-2" aria-label="Bimarsh Rai home"><span className="font-heading text-sm font-bold tracking-[0.16em]">BIMARSH RAI</span><span className="hidden text-[10px] text-muted-foreground sm:inline">/ WEB DESIGNER</span></Link>
          <div className="hidden items-center gap-7 md:flex">{navigation.map(item => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}<Button href="#contact" className="px-5 py-2.5">Let&apos;s Talk →</Button></div>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-violet-bright md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </nav>
        <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="nav-mobile mt-2 overflow-hidden rounded-3xl border border-white/10 p-3 backdrop-blur-xl md:hidden">{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">{item.label}</Link>)}<Button href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full">Let&apos;s Talk →</Button></motion.div>}</AnimatePresence>
      </div>
    </header>
  );
}
