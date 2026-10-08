"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const entries = [
  ["Designing beyond the brief","06 min read","SEP 18, 2026","https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=82"],
  ["A slower approach to digital","04 min read","AUG 29, 2026","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=82"],
  ["Why systems need personality","05 min read","JUL 14, 2026","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82"],
  ["The internet after the noise","07 min read","JUN 22, 2026","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=82"]
];

export default function Journal() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28">
      <Container>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}}>
          <div className="mb-6 flex items-center gap-3"><span className="h-px w-8 bg-[#1f1f1f]"/><span className="text-xs uppercase tracking-[.3em] text-[#858585]">Journal</span></div>
          <h2 className="cosmic-display text-5xl italic leading-none md:text-7xl">Recent <em>thoughts</em></h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#858585] md:text-base">Notes on design, systems, technology and the small details that make digital work feel human.</p>
        </motion.div>
        <div className="mt-10 space-y-3">
          {entries.map(([title,read,date,image],index)=>(
            <motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:index*.04}} className="group flex items-center gap-4 rounded-[2.5rem] border border-[#1f1f1f] bg-[#111]/35 p-3 transition hover:bg-[#111] sm:gap-6 sm:p-4">
              <div className="h-16 w-24 shrink-0 overflow-hidden rounded-[1.5rem] sm:h-20 sm:w-28"><div className="h-full w-full bg-cover bg-center grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" style={{backgroundImage:"url(" + image + ")"}}/></div>
              <div className="min-w-0 flex-1"><h3 className="truncate cosmic-display text-2xl italic sm:text-3xl">{title}</h3><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-[#858585]">{read} · {date}</p></div>
              <ArrowUpRight size={19} className="mr-2 shrink-0 text-[#858585] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"/>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
