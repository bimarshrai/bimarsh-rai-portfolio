"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const items = [
  ["Signal","01","https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80"],
  ["Stillness","02","https://images.unsplash.com/photo-1530533718754-001d2668365a?auto=format&fit=crop&w=900&q=80"],
  ["Velocity","03","https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"],
  ["Texture","04","https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=80"],
  ["Contrast","05","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"],
  ["Atmosphere","06","https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80"]
];

export default function Explorations() {
  const { scrollYProgress } = useScroll();
  const [active,setActive] = useState<(typeof items)[number] | null>(null);

  return (
    <>
      <section className="relative min-h-[240vh] overflow-hidden bg-[#0a0a0a]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <Container className="relative z-10 text-center">
            <p className="text-xs uppercase tracking-[.3em] text-[#858585]">Explorations</p>
            <h2 className="cosmic-display mt-5 text-6xl italic leading-none md:text-8xl">Visual <em>playground</em></h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#858585]">Loose experiments, visual studies and the ideas that do not fit inside a normal project brief.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] px-5 py-3 text-sm text-white transition hover:border-white/30">Open playground <ArrowUpRight size={16}/></a>
          </Container>
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 md:gap-36 md:px-12">
          {items.map((item,index)=>{
            const travel = index % 2 === 0 ? 160 : -140;
            const y = useTransform(scrollYProgress,[0,1],[travel,-travel]);
            return (
              <motion.button key={item[0]} style={{y}} onClick={()=>setActive(item)} className={(index%2===0 ? "mt-24 justify-self-start " : "mt-72 justify-self-end ") + "pointer-events-auto relative aspect-square w-full max-w-[320px] self-start overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] text-left shadow-2xl shadow-black/20"}>
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105" style={{backgroundImage:"url(" + item[2] + ")"}}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"/>
                <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[.24em] text-white/65">{item[1]} · {item[0]}</span>
              </motion.button>
            );
          })}
        </div>
      </section>
      <AnimatePresence>
        {active && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[9998] grid place-items-center bg-black/85 p-5 backdrop-blur-xl" onClick={()=>setActive(null)}>
            <motion.div initial={{scale:.96,opacity:0}} animate={{scale:1,opacity:1}} className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10" onClick={event=>event.stopPropagation()}>
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage:"url(" + active[2] + ")"}}/>
              <button onClick={()=>setActive(null)} aria-label="Close exploration" className="absolute right-4 top-4 rounded-full bg-black/60 p-3 text-white"><X size={18}/></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
