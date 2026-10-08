"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { projects } from "@/lib/data/projects";

const art: Record<string,string> = {
  noir:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
  monument:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  orbit:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  vow:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85"
};

export default function SelectedWork() {
  const featured = projects.filter(project => art[project.slug]).slice(0,4);
  return (
    <section id="work" className="cosmic-section-divider bg-[#0a0a0a] py-20 md:py-28">
      <Container>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-100px"}} transition={{duration:.8}} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-8 bg-[#1f1f1f]"/><span className="text-xs uppercase tracking-[.3em] text-[#858585]">Selected Work</span></div>
            <h2 className="cosmic-display text-5xl italic leading-none md:text-7xl">Featured <em>projects</em></h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#858585] md:text-base">A small selection of concept experiences across industries — each built around a distinct visual language and business goal.</p>
          </div>
          <Link href="#contact" className="hidden items-center gap-2 rounded-full border border-[#1f1f1f] px-5 py-3 text-sm text-white transition hover:border-white/30 md:inline-flex">Start a project <ArrowUpRight size={16}/></Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {featured.map((project,index) => (
            <Link key={project.slug} href={"/work/" + project.slug} className={index === 0 || index === 3 ? "md:col-span-7 group" : "md:col-span-5 group"}>
              <motion.article whileHover={{y:-6}} transition={{duration:.3}} className="cosmic-card relative aspect-[1.15] overflow-hidden md:aspect-auto md:h-[420px]">
                <div className="cosmic-card-image absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url(" + art[project.slug] + ")"}}/>
                <div className="cosmic-overlay absolute inset-0"/>
                <div className="cosmic-grain absolute inset-0"/>
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                  <div className="flex items-center justify-between"><span className="cosmic-pill px-3 py-1.5 text-[9px] uppercase tracking-[.2em]">{project.label}</span><span className="text-[10px] tracking-[.2em] text-white/45">{String(index+1).padStart(2,"0")} / 04</span></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[.24em] text-white/45">CONCEPT EXPERIENCE</p>
                    <h3 className="cosmic-display mt-2 text-5xl italic leading-none sm:text-6xl">{project.name}</h3>
                    <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-3 text-[9px] uppercase tracking-[.2em] text-white/55"><span>{project.tags.slice(0,2).join(" · ")}</span><span className="inline-flex items-center gap-1 text-white transition group-hover:translate-x-1">View <ArrowUpRight size={13}/></span></div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
