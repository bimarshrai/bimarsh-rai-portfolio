"use client";
import { ArrowUpRight, Building2, Dumbbell, UtensilsCrossed, Stethoscope, Ruler, Scale, Hotel, Sparkles, GraduationCap, Orbit, Camera, Heart, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

const cover: Record<string,{className:string;eyebrow:string;title:string;subtitle:string;meta:string;Icon:LucideIcon;cta:string}> = {
 noir:{className:"cover-noir",eyebrow:"CONTEMPORARY DINING",title:"NOIR",subtitle:"An intimate evening, reimagined.",meta:"PARIS · FRANCE",Icon:UtensilsCrossed,cta:"RESERVE A TABLE"},
 volt:{className:"cover-volt",eyebrow:"PERFORMANCE TRAINING",title:"VOLT",subtitle:"Train harder. Move better.",meta:"STRENGTH · CONDITIONING",Icon:Dumbbell,cta:"START TRAINING"},
 monument:{className:"cover-monument",eyebrow:"PRIVATE PROPERTY GROUP",title:"MONUMENT",subtitle:"Spaces with a sense of permanence.",meta:"PARIS · LONDON · NEW YORK",Icon:Building2,cta:"VIEW RESIDENCES"},
 aurelia:{className:"cover-aurelia",eyebrow:"PRIVATE MEDICINE",title:"AURELIA",subtitle:"Medicine, with more time for you.",meta:"LONDON · MAYFAIR",Icon:Stethoscope,cta:"MEET THE TEAM"},
 forma:{className:"cover-forma",eyebrow:"ARCHITECTURE + BUILD",title:"FORMA",subtitle:"Built with intention.",meta:"STRUCTURE · MATERIAL · LIGHT",Icon:Ruler,cta:"EXPLORE PROJECTS"},
 verdict:{className:"cover-verdict",eyebrow:"SPECIALIST LAW",title:"VERDICT",subtitle:"Clarity when the stakes are high.",meta:"LONDON · NEW YORK",Icon:Scale,cta:"OUR EXPERTISE"},
 solaire:{className:"cover-solaire",eyebrow:"PRIVATE RESORT",title:"SOLAIRE",subtitle:"Leave the ordinary behind.",meta:"AMALFI · ITALY",Icon:Hotel,cta:"DISCOVER THE STAY"},
 muse:{className:"cover-muse",eyebrow:"BEAUTY ATELIER",title:"MUSE",subtitle:"Your best look, considered.",meta:"PARIS · 11 RUE OBERKAMPF",Icon:Sparkles,cta:"BOOK AN APPOINTMENT"},
 nexus:{className:"cover-nexus",eyebrow:"EXECUTIVE EDUCATION",title:"NEXUS",subtitle:"Learn what moves you forward.",meta:"COHORT · MENTOR · OUTCOME",Icon:GraduationCap,cta:"EXPLORE PROGRAMS"},
 orbit:{className:"cover-orbit",eyebrow:"OPERATING SYSTEM FOR TEAMS",title:"ORBIT",subtitle:"See the work. Move the work.",meta:"SaaS · PRODUCT · AI",Icon:Orbit,cta:"SEE THE PRODUCT"},
 frame:{className:"cover-frame",eyebrow:"PHOTO + FILM STUDIO",title:"FRAME",subtitle:"Stories worth keeping.",meta:"PORTRAIT · CAMPAIGN · EDITORIAL",Icon:Camera,cta:"VIEW THE WORK"},
 vow:{className:"cover-vow",eyebrow:"WEDDINGS + EVENTS",title:"VOW",subtitle:"A day, beautifully remembered.",meta:"DESTINATION · EDITORIAL",Icon:Heart,cta:"START YOUR STORY"},
};

const coverImages: Record<string, string> = {
  "noir": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
  "volt": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=85",
  "monument": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  "aurelia": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1800&q=85",
  "forma": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  "verdict": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  "solaire": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1800&q=85",
  "muse": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
  "nexus": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85",
  "orbit": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  "frame": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85",
  "vow": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85"
};\n\nexport default function ProjectCard({project,index}:{project:Project;index:number}) {
 const theme=cover[project.slug] ?? cover.noir; const Icon=theme.Icon;
 return <Link href={`/work/${project.slug}`} className="group block h-full"><motion.article whileHover={{y:-8}} transition={{duration:.3,ease:"easeOut"}} className="project-card h-full overflow-hidden rounded-[1.75rem] border border-border bg-surface">
   <div className={`project-cover relative aspect-[16/11] overflow-hidden ${theme.className}`}><Image src={coverImages[project.slug] ?? coverImages.noir} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" quality={70} className="absolute inset-0 z-0 object-cover" /><div className="project-cover-grid absolute inset-0"/><div className="project-cover-grain absolute inset-0"/>
    <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7"><div className="flex items-center justify-between"><span className="cover-pill">{project.label}</span><span className="cover-index">{String(index+1).padStart(2,"0")} / 12</span></div>
      <div className="cover-content"><div className="mb-4 flex items-center gap-2 opacity-75"><Icon size={14} strokeWidth={1.6}/><span className="cover-eyebrow">{theme.eyebrow}</span></div><h3 className="cover-title">{theme.title}</h3><p className="cover-subtitle">{theme.subtitle}</p><div className="mt-6 flex items-center justify-between border-t border-white/15 pt-3"><span className="cover-meta">{theme.meta}</span><span className="cover-cta">{theme.cta}<ArrowUpRight size={13}/></span></div></div>
    </div><span className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black"><ArrowUpRight size={17}/></span>
   </div>
   <div className="flex h-full flex-col gap-4 p-5 sm:p-6"><div className="flex items-start justify-between gap-3"><div><div className="flex items-center gap-2"><h3 className="font-heading text-xl font-semibold tracking-tight">{project.name}</h3><span className="rounded-full border border-border px-2 py-1 text-[9px] uppercase tracking-[.14em] text-muted-foreground">Concept</span></div><p className="mt-2 text-xs leading-5 text-muted-foreground">{project.description}</p></div></div><div className="mt-auto flex flex-wrap gap-1.5">{project.tags.map(tag=><span key={tag} className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">{tag}</span>)}</div></div>
 </motion.article></Link>;
}
