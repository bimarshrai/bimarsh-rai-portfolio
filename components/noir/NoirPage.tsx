"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Menu, X } from "lucide-react";

const menu = [
  ["Charred Octopus", "smoked potato · saffron · citrus", "€24"],
  ["Wild Mushroom Risotto", "aged parmesan · black truffle", "€28"],
  ["Dry-Aged Duck", "cherry · thyme · roasted shallot", "€34"],
  ["Dark Chocolate", "sea salt · espresso · vanilla", "€16"],
];

const gallery = [
  { cls: "noir-img noir-img-1", label: "Ember" },
  { cls: "noir-img noir-img-2", label: "The room" },
  { cls: "noir-img noir-img-3", label: "Seasonal" },
  { cls: "noir-img noir-img-4", label: "After dark" },
];

export default function NoirPage() {
  const [open, setOpen] = useState(false);
  return (
    <main className="noir-site bg-[#0b0a09] text-[#f3efe7]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a09]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-serif text-2xl tracking-[.28em]">NOIR</a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[.18em] text-white/60 md:flex">
            <a href="#experience" className="hover:text-white">Experience</a><a href="#menu" className="hover:text-white">Menu</a><a href="#about" className="hover:text-white">About</a><a href="#gallery" className="hover:text-white">Gallery</a>
          </nav>
          <a href="#reserve" className="hidden rounded-full border border-[#d9c6a1]/50 px-5 py-2.5 text-[10px] uppercase tracking-[.2em] text-[#e7d6b7] transition hover:bg-[#e7d6b7] hover:text-black sm:inline-flex">Reserve a table</a>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden"><Menu /></button>
        </div>
      </header>
      {open && <div className="fixed inset-0 z-[60] bg-[#0b0a09] p-6"><div className="flex justify-end"><button aria-label="Close menu" onClick={() => setOpen(false)}><X /></button></div><nav className="mt-20 grid gap-7 font-serif text-5xl"><a href="#experience" onClick={() => setOpen(false)}>Experience</a><a href="#menu" onClick={() => setOpen(false)}>Menu</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a><a href="#reserve" onClick={() => setOpen(false)}>Reserve</a></nav></div>}

      <section id="top" className="noir-hero relative flex min-h-[92svh] items-end overflow-hidden">
        <div className="absolute inset-0 noir-hero-image" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-black/20 to-black/35" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20"><div className="max-w-4xl"><p className="mb-6 text-[10px] uppercase tracking-[.35em] text-[#e7d6b7]">Contemporary dining · Paris</p><h1 className="font-serif text-7xl leading-[.82] tracking-[-.045em] sm:text-[10rem] md:text-[12rem]">NOIR</h1><div className="mt-8 flex flex-col justify-between gap-7 border-t border-white/20 pt-6 sm:flex-row sm:items-end"><p className="max-w-md text-sm leading-7 text-white/65">A modern dining experience shaped by fire, seasonality and craft. Intimate evenings, considered plates, no unnecessary noise.</p><div className="flex gap-3"><a href="#reserve" className="rounded-full bg-[#e7d6b7] px-6 py-3 text-[10px] font-medium uppercase tracking-[.2em] text-black transition hover:scale-[1.02]">Reserve a table <ArrowUpRight className="ml-2 inline" size={14}/></a><a href="#menu" className="rounded-full border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[.2em] hover:bg-white/10">Explore menu</a></div></div></div><div className="mt-14 flex gap-10 text-[10px] uppercase tracking-[.18em] text-white/45"><span>18 Rue de Rivoli</span><span>Tue — Sun</span><span>18:00 — 00:00</span></div></div>
      </section>

      <section id="experience" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-36 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-[10px] uppercase tracking-[.3em] text-[#cbb895]">01 / The experience</p></div><div><h2 className="max-w-4xl font-serif text-5xl leading-[.95] sm:text-7xl">An experience<br/><em className="text-white/45">beyond the plate.</em></h2><p className="mt-9 max-w-2xl text-base leading-8 text-white/55">NOIR is a room for long dinners and slow conversations. The menu follows the seasons, the kitchen follows the flame, and the atmosphere changes as the evening unfolds.</p><div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"><div><b className="font-serif text-2xl">01</b><p className="mt-3 text-sm text-white/50">Seasonal ingredients, selected at their peak.</p></div><div><b className="font-serif text-2xl">02</b><p className="mt-3 text-sm text-white/50">Fire-led cooking with depth and restraint.</p></div><div><b className="font-serif text-2xl">03</b><p className="mt-3 text-sm text-white/50">A room designed to keep the night moving.</p></div></div></div></section>

      <section id="menu" className="border-y border-white/10 bg-[#11100e]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="text-[10px] uppercase tracking-[.3em] text-[#cbb895]">02 / From the kitchen</p><h2 className="mt-5 font-serif text-6xl sm:text-8xl">The menu</h2></div><p className="max-w-sm text-sm leading-7 text-white/45">Our menu changes with the market. A few signatures remain; everything else is allowed to evolve.</p></div><div className="mt-14 divide-y divide-white/10 border-y border-white/10">{menu.map(([name, desc, price], i) => <div key={name} className="group grid gap-3 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-center"><span className="text-[10px] tracking-[.2em] text-white/30">0{i + 1}</span><div><h3 className="font-serif text-2xl transition group-hover:text-[#e7d6b7] sm:text-3xl">{name}</h3><p className="mt-2 text-xs text-white/40">{desc}</p></div><span className="font-serif text-xl text-[#e7d6b7]">{price}</span></div>)}</div><a href="#reserve" className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.22em] text-[#e7d6b7]">View full menu <ArrowUpRight size={14}/></a></div></section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-36 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div className="noir-chef-image min-h-[520px]"/><div className="lg:pl-10"><p className="text-[10px] uppercase tracking-[.3em] text-[#cbb895]">03 / The kitchen</p><h2 className="mt-5 font-serif text-6xl leading-none sm:text-8xl">Led by<br/><em className="text-white/40">craft.</em></h2><p className="mt-8 text-sm leading-8 text-white/55">Chef Adrian Vale builds menus around contrast: smoke and acid, warmth and brightness, familiar ingredients and unexpected finishes. The result is precise food that still feels alive.</p><p className="mt-6 text-[10px] uppercase tracking-[.22em] text-white/35">Chef Adrian Vale · Founder</p></div></section>

      <section id="gallery" className="border-y border-white/10 bg-[#11100e]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><div className="flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.3em] text-[#cbb895]">04 / In the room</p><h2 className="mt-5 font-serif text-6xl sm:text-8xl">After dark.</h2></div><ArrowDown className="hidden text-white/30 sm:block" /></div><div className="mt-12 grid gap-4 sm:grid-cols-2"><div className="space-y-4">{gallery.slice(0,2).map(g => <div key={g.label} className={`${g.cls} min-h-[300px] overflow-hidden`}><span className="sr-only">{g.label}</span></div>)}</div><div className="space-y-4 sm:pt-20">{gallery.slice(2).map(g => <div key={g.label} className={`${g.cls} min-h-[300px] overflow-hidden`}><span className="sr-only">{g.label}</span></div>)}</div></div></div></section>

      <section id="reserve" className="relative overflow-hidden px-5 py-28 text-center sm:px-8 sm:py-40"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(203,184,149,.12),transparent_45%)]"/><div className="relative mx-auto max-w-4xl"><p className="text-[10px] uppercase tracking-[.3em] text-[#cbb895]">05 / Reservations</p><h2 className="mt-6 font-serif text-6xl leading-[.9] sm:text-9xl">Your table<br/><em className="text-white/40">awaits.</em></h2><p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/45">For parties of 8 or more, please contact the restaurant directly.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href="mailto:reservations@noir.example" className="rounded-full bg-[#e7d6b7] px-7 py-3.5 text-[10px] uppercase tracking-[.2em] text-black">Request a reservation</a><a href="#location" className="rounded-full border border-white/15 px-7 py-3.5 text-[10px] uppercase tracking-[.2em]">Find us</a></div></div></section>

      <section id="location" className="border-t border-white/10"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2"><div><p className="text-[10px] uppercase tracking-[.3em] text-[#cbb895]">NOIR Paris</p><p className="mt-5 font-serif text-3xl">18 Rue de Rivoli<br/>75004 Paris, France</p></div><div className="grid gap-4 sm:grid-cols-2"><div className="flex gap-3 text-sm text-white/50"><MapPin size={16} className="text-[#cbb895]"/> Le Marais, Paris</div><div className="flex gap-3 text-sm text-white/50"><Clock3 size={16} className="text-[#cbb895]"/> Tue — Sun · 18:00 — 00:00</div></div></div></section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="font-serif text-2xl tracking-[.25em]">NOIR</div><p className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/30">Contemporary dining · Paris</p></div><div className="text-[10px] uppercase tracking-[.18em] text-white/35">© 2026 NOIR · Concept Project</div></div></footer>
    </main>
  );
}
