/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, X, Play, Menu, Plus } from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2200&q=88",
  nocturne: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
  form: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=84",
  after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1800&q=84",
  salt: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=84",
  still: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1600&q=84",
  vow: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=84",
  film: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=85",
  camera: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=82",
  contact1: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=78",
  contact2: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=78",
  contact3: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=78",
  contact4: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=78",
  contact5: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=78",
  contact6: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=78",
  contact7: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=78",
  contact8: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=78",
  contact9: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=78",
  contact10: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=78",
  contact11: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=78",
  contact12: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=78",
};

type Project = { id: string; no: string; title: string; category: string; location: string; year: string; image: string; ratio: string; className: string };
const projects: Project[] = [
  {id:"nocturne",no:"01",title:"NOCTURNE",category:"Fashion Editorial",location:"Paris",year:"2026",image:images.nocturne,ratio:"wide",className:"project-nocturne"},
  {id:"form",no:"02",title:"FORM / LIGHT",category:"Architecture",location:"London",year:"2026",image:images.form,ratio:"tall",className:"project-form"},
  {id:"after",no:"03",title:"AFTER HOURS",category:"Portrait",location:"Mumbai",year:"2026",image:images.after,ratio:"tall",className:"project-after"},
  {id:"salt",no:"04",title:"SALT",category:"Hospitality Campaign",location:"Amalfi",year:"2025",image:images.salt,ratio:"wide",className:"project-salt"},
  {id:"still",no:"05",title:"STILL LIFE",category:"Luxury Campaign",location:"Paris",year:"2025",image:images.still,ratio:"square",className:"project-still"},
  {id:"vow",no:"06",title:"VOW",category:"Wedding Editorial",location:"Lake Como",year:"2025",image:images.vow,ratio:"wide",className:"project-vow"},
];

const contacts = [images.contact1, images.contact2, images.contact3, images.contact4, images.contact5, images.contact6, images.contact7, images.contact8, images.contact9, images.contact10, images.contact11, images.contact12];
const contactMeta = ["NOCTURNE / 01", "FORM / LIGHT / 02", "AFTER HOURS / 03", "NOCTURNE / 04", "SALT / 05", "VOW / 06", "AFTER HOURS / 07", "FORM / LIGHT / 08", "SALT / 09", "STILL LIFE / 10", "VOW / 11", "NOCTURNE / 12"];

function Image({src, alt, className="", priority=false}: {src:string; alt:string; className?:string; priority?:boolean}) {
  return <img src={src} alt={alt} className={className} loading={priority ? "eager" : "lazy"} decoding="async" />;
}

function Header({onMenu}:{onMenu:()=>void}) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => { let last=window.scrollY; const onScroll=()=>{const y=window.scrollY; setHidden(y>last && y>140); last=y;}; window.addEventListener("scroll",onScroll,{passive:true}); return()=>window.removeEventListener("scroll",onScroll); },[]);
  return <motion.header className="site-header" animate={{y:hidden? -100:0, opacity:hidden?.35:1}} transition={{duration:.45,ease:[.22,1,.36,1]}}>
    <a className="wordmark" href="#top">FRAME<span>®</span></a>
    <nav aria-label="Primary"><a href="#work">Work</a><a href="#studio">Studio</a><a href="#stories">Stories</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
    <div className="header-right"><a href="#contact" className="inquire">Inquire <ArrowUpRight size={14}/></a><span className="locations">LONDON · PARIS · MUMBAI</span></div>
    <button className="mobile-menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={22}/></button>
  </motion.header>
}

function Aperture() {
  const x = useMotionValue(0); const y = useMotionValue(0); const sx=useSpring(x,{stiffness:80,damping:18}); const sy=useSpring(y,{stiffness:80,damping:18});
  return <section className="aperture-section" onPointerMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); x.set(((e.clientX-r.left)/r.width-.5)*18); y.set(((e.clientY-r.top)/r.height-.5)*18);}} onPointerLeave={()=>{x.set(0);y.set(0)}}>
    <div className="aperture-copy"><span className="eyebrow">06 / SEEING DIFFERENTLY</span><h2>Every frame<br/><em>begins</em> before<br/>the camera.</h2><p>Light, movement, proportion, silence. We build the conditions for an image to find its own voice.</p></div>
    <motion.div className="aperture" style={{x:sx,y:sy}} aria-label="Interactive abstract camera aperture" role="img">
      {Array.from({length:7}).map((_,i)=><motion.div key={i} className="blade" style={{transform:`rotate(${i*51.43}deg) translateY(-3px)`}} animate={{rotate:i*51.43}} />)}<div className="aperture-core"/><div className="aperture-label">FRAME / F 1.7</div>
    </motion.div>
  </section>;
}

export function FramePage() {
  const [menu,setMenu]=useState(false); const [mode,setMode]=useState<"grid"|"list"|"fullscreen">("grid"); const [activeProject,setActiveProject]=useState<Project|null>(null); const [lightbox,setLightbox]=useState<number|null>(null); const [film,setFilm]=useState(false); const [service,setService]=useState<number|null>(null);
  const fullscreenItems = useMemo(()=>projects,[]);
  useEffect(()=>{ const onKey=(e:KeyboardEvent)=>{ if(lightbox!==null){ if(e.key==="Escape")setLightbox(null); if(e.key==="ArrowRight")setLightbox((lightbox+1)%contacts.length); if(e.key==="ArrowLeft")setLightbox((lightbox-1+contacts.length)%contacts.length); } else if(activeProject && e.key==="Escape") setActiveProject(null); else if(film && e.key==="Escape") setFilm(false);}; window.addEventListener("keydown",onKey); return()=>window.removeEventListener("keydown",onKey);},[lightbox,activeProject,film]);
  return <main id="top" className="project-frame">
    <Header onMenu={()=>setMenu(true)}/>
    <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{clipPath:"inset(0 0 100% 0)"}} animate={{clipPath:"inset(0 0 0% 0)"}} exit={{clipPath:"inset(100% 0 0 0)"}} transition={{duration:.65,ease:[.76,0,.24,1]}}><Image src={images.hero} alt="Editorial portrait"/><div className="mobile-menu-overlay"/><button onClick={()=>setMenu(false)} className="close-menu" aria-label="Close menu"><X/></button><div className="mobile-menu-links">{["Work","Studio","Stories","Services","Contact"].map((x)=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenu(false)}>{x}</a>)}</div><span className="mobile-menu-meta">LONDON · PARIS · MUMBAI</span></motion.div>}</AnimatePresence>

    <section className="hero">
      <Image src={images.hero} alt="Fashion editorial portrait in a sunlit studio" priority className="hero-image"/>
      <div className="hero-shade"/><div className="hero-meta top-left">FRAME / 2026<br/>PHOTOGRAPHY + FILM</div><div className="hero-meta bottom-left">PORTRAIT STUDY 04<br/>PARIS · 35MM</div>
      <div className="hero-copy"><p className="kicker">INDEPENDENT IMAGE STUDIO</p><h1>Stories<br/><em>worth</em><br/>keeping.</h1><p>Photography and film for people, places and brands with something to say.</p><div className="hero-actions"><a href="#work">View Selected Work <ArrowDownRight size={17}/></a><a href="#contact">Start a Conversation</a></div></div><div className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight size={14}/></div>
    </section>

    <section className="statement"><span className="eyebrow">01 / THE STUDIO</span><div><h2>We look for the moment <em>before</em> the picture.</h2><p>FRAME works between direction and instinct — creating images that feel considered without feeling constructed.</p></div></section>

    <section className="work-section" id="work"><div className="section-head"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>Recent frames.</h2></div><span className="index-note">06 PROJECTS / 2025—26</span></div>
      <div className="project-archive">{projects.map(p=><button key={p.id} className={`project ${p.className}`} onClick={()=>setActiveProject(p)}><div className="project-image-wrap"><Image src={p.image} alt={`${p.title}, ${p.category}, ${p.location}`} className="project-image"/></div><div className="project-caption"><span>{p.no}</span><strong>{p.title}</strong><span>{p.category} / {p.location} / {p.year}</span><ArrowUpRight className="project-arrow" size={20}/></div></button>)}</div>
    </section>

    <section className="index-section"><div className="section-head"><div><span className="eyebrow">03 / VISUAL INDEX</span><h2>All frames, different views.</h2></div><div className="mode-switch" role="group" aria-label="Project view"><button className={mode==="grid"?"active":""} onClick={()=>setMode("grid")}>GRID</button><button className={mode==="list"?"active":""} onClick={()=>setMode("list")}>LIST</button><button className={mode==="fullscreen"?"active":""} onClick={()=>setMode("fullscreen")}>FULLSCREEN</button></div></div>
      <AnimatePresence mode="wait"><motion.div key={mode} className={`visual-index ${mode}`} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.4}}>{mode==="grid" && projects.map((p)=><button key={p.id} onClick={()=>setActiveProject(p)}><Image src={p.image} alt={p.title}/><span>{p.no} / {p.title}</span></button>)}{mode==="list" && projects.map(p=><button key={p.id} onClick={()=>setActiveProject(p)}><span>{p.no}</span><strong>{p.title}</strong><span>{p.category}</span><span>{p.location} / {p.year}</span><ArrowUpRight size={17}/></button>)}{mode==="fullscreen" && <div className="fullscreen-index">{fullscreenItems.map((p,i)=><button key={p.id} onClick={()=>setLightbox((i*2)%contacts.length)}><Image src={p.image} alt={p.title}/><div><b>{p.title}</b><small>{p.location} / {p.year}</small></div></button>)}</div>}</motion.div></AnimatePresence>
    </section>

    <section className="nocturne-feature"><div className="nocturne-hero"><Image src={images.nocturne} alt="Nocturne fashion editorial portrait"/><div className="nocturne-label">CONCEPT PROJECT</div><div className="nocturne-title"><span>01 / FASHION EDITORIAL</span><h2>NOCTURNE</h2><p>Paris · 2026</p></div></div><div className="nocturne-intro"><span className="eyebrow">04 / PROJECT DETAIL</span><div><h3>“The city after dark becomes a different studio.”</h3><p>After sunset, architecture turns theatrical. Nocturne follows a single figure through the blue hour into the hard geometry of midnight — a study in fabric, reflection and controlled light.</p><div className="credits"><span>CREATIVE DIRECTION / FRAME</span><span>PHOTOGRAPHY / FRAME</span><span>STYLING / STUDIO TEAM</span><span>FILM / FRAME</span></div></div></div><div className="look-grid">{[images.contact4,images.contact2,images.contact1,images.contact6].map((src,i)=><figure key={src}><Image src={src} alt={`Nocturne look ${i+1}`}/><figcaption>LOOK 0{i+1}<span>35MM / PARIS</span></figcaption></figure>)}</div><div className="nocturne-end"><Image src={images.contact3} alt="Nocturne behind the scenes"/><div><span className="eyebrow">BEHIND THE SCENE</span><p>Direction is a frame within the frame. We leave enough room for the unexpected to enter.</p></div></div></section>

    <section className="services" id="services"><div className="services-intro"><span className="eyebrow">05 / SERVICES</span><h2>What we<br/><em>make</em> possible.</h2></div><div className="service-list">{["Campaigns","Editorial","Portraits","Architecture","Film","Events"].map((s,i)=><button key={s} onMouseEnter={()=>setService(i)} onFocus={()=>setService(i)} onMouseLeave={()=>setService(null)}><span>0{i+1}</span><strong>{s}</strong><Plus size={20}/>{service===i && <motion.div className="service-reveal" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}}><Image src={projects[i].image} alt={`${s} work sample`}/></motion.div>}</button>)}</div></section>

    <section className="process"><div className="process-title"><span className="eyebrow">06 / THE PROCESS</span><h2>Direction before <em>exposure.</em></h2></div><div className="timeline">{[["CONCEPT","Define the visual language."],["LOCATION","Find the right light and environment."],["DIRECTION","Shape the moment without over-directing it."],["CAPTURE","Still and moving image."],["EDIT","Color, sequence and final story."]].map(([a,b],i)=><div className="timeline-step" key={a}><span>0{i+1}</span><div className="timeline-line"/><h3>{a}</h3><p>{b}</p></div>)}</div></section>

    <section className="studio-section" id="studio"><div className="section-head"><div><span className="eyebrow">07 / STUDIO</span><h2>The room behind the frame.</h2></div><span className="index-note">FICTIONAL STUDIO SETUP</span></div><div className="studio-collage"><Image src={images.camera} alt="Camera on studio table"/><div className="studio-note note-a">LEICA Q3<br/><span>28MM / F 1.7</span></div><div className="studio-note note-b">35MM FILM<br/><span>KODAK PORTRA 400</span></div><div className="studio-small"><Image src={images.contact8} alt="Architectural studio detail"/><span>LOCATION SCOUT / 017</span></div><div className="studio-copy"><p>Contact sheets, test frames, light studies and prints stay close. The best work often starts long before the shutter.</p><span>SONY FX3 / 4K / 24FPS</span></div></div></section>

    <section className="contact-sheet"><div className="contact-sheet-head"><span className="eyebrow">08 / CONTACT SHEET</span><h2>Proof, not perfection.</h2><p>Hover a frame. Click to enter the edit.</p></div><div className="contact-grid">{contacts.map((src,i)=><button key={src} onClick={()=>setLightbox(i)}><Image src={src} alt={`Contact sheet frame ${i+1}`}/><span>{String(i+1).padStart(2,"0")}</span><b>{contactMeta[i]}</b></button>)}</div></section>

    <section className="film-section"><div className="film-visual"><Image src={images.film} alt="Cinematic film production still"/><div className="film-overlay"/><button onClick={()=>setFilm(true)} className="play-button" aria-label="Play concept film"><Play fill="currentColor" size={22}/></button><span className="film-duration">03:42</span></div><div className="film-copy"><span className="eyebrow">09 / FILM — CONCEPT FILM</span><h2>Still images.<br/><em>Moving stories.</em></h2><p>AFTER HOURS is a short-form visual study in portraiture, sodium light and the city after midnight.</p><div className="film-credit">DIRECTOR / FRAME STUDIO <span>03:42</span></div></div></section>

    <section className="stories" id="stories"><div className="section-head"><div><span className="eyebrow">10 / STORIES</span><h2>Notes from the edit.</h2></div><a href="#contact">View all stories <ArrowUpRight size={16}/></a></div><div className="story-feature"><Image src={images.form} alt="Architecture photographed in natural light"/><div><span>FIELD NOTE · 06 SEP 2026</span><h3>Finding light in unfamiliar places</h3><p>How location changes the way we see a subject.</p><small>6 MIN READ</small></div></div><div className="story-list">{[["ESSAY","Why imperfection makes an image feel alive","29 AUG 2026","4 MIN"],["PROCESS","Working with architecture as a subject","18 AUG 2026","7 MIN"],["PORTRAIT","The quiet language of portraiture","02 AUG 2026","5 MIN"]].map(([cat,title,date,time],i)=><a href="#contact" key={title}><span>0{i+2}</span><small>{cat}</small><strong>{title}</strong><span>{date} / {time}</span><ArrowUpRight size={16}/></a>)}</div></section>

    <section className="experience"><div className="experience-title"><span className="eyebrow">11 / CLIENT EXPERIENCE</span><h2>From first reference<br/>to <em>final frame.</em></h2></div><div className="artifact"><div className="artifact-tabs"><span>BRIEF</span><span>MOODBOARD</span><span>SHOOT</span><span>EDIT</span><span>DELIVERY</span></div><div className="artifact-body"><div className="moodboard"><Image src={images.contact5} alt="Moodboard reference"/><Image src={images.contact7} alt="Location reference"/><div className="swatches"><i/><i/><i/><i/></div></div><div className="artifact-copy"><span>PROJECT 04 / SALT</span><h3>Light should feel found, not placed.</h3><p>Brief, visual references, shot list, contact sheet and final selects live together so every decision remains connected to the original idea.</p><div className="artifact-meta">SHOT LIST  /  24 FRAMES<br/>FINAL SELECTS / 08<br/>DELIVERY / DIGITAL + 35MM PRINT</div></div></div></div></section>

    <Aperture/>

    <section className="industries"><span className="eyebrow">07 / SELECTED INDUSTRIES</span><div>{["FASHION","HOSPITALITY","ARCHITECTURE","BEAUTY","PORTRAIT","CULTURE"].map((x,i)=><span key={x}><small>0{i+1}</small>{x}</span>)}</div></section>

    <section className="closing" id="contact"><Image src={images.vow} alt="Intimate wedding editorial photograph"/><div className="closing-overlay"/><div className="closing-copy"><span className="eyebrow">08 / START A PROJECT</span><h2>Have a story<br/><em>worth framing?</em></h2><p>Tell us what you&apos;re imagining. We&apos;ll help turn it into something worth keeping.</p><a href="mailto:hello@frame.example">Start a Conversation <ArrowUpRight size={18}/></a><a className="secondary" href="#work">View Selected Work</a></div></section>

    <footer><div className="footer-brand">FRAME<span>®</span><small>PHOTOGRAPHY + FILM</small></div><div className="footer-cols"><div><span>LOCATIONS</span><p>London<br/>Paris<br/>Mumbai</p></div><div><span>EXPLORE</span><p><a href="#work">Work</a><a href="#studio">Studio</a><a href="#stories">Stories</a><a href="#services">Services</a><a href="#contact">Contact</a></p></div><div><span>CONTACT</span><p><a href="mailto:hello@frame.example">hello@frame.example</a><br/>+44 20 0000 0000</p></div><div><span>ELSEWHERE</span><p><a href="#contact">Instagram</a><a href="#contact">Vimeo</a><a href="#contact">Behance</a></p></div></div><div className="footer-bottom"><span>© 2026 FRAME STUDIO</span><span>Privacy · Terms</span><span>STORIES WORTH KEEPING.</span></div></footer>

    <AnimatePresence>{activeProject && <motion.div className="project-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><div className="modal-image"><Image src={activeProject.image} alt={activeProject.title}/></div><div className="modal-info"><button onClick={()=>setActiveProject(null)} aria-label="Close project"><X/></button><span>{activeProject.no} / {activeProject.category}</span><h2>{activeProject.title}</h2><p>{activeProject.location} · {activeProject.year}</p><div className="modal-detail">{activeProject.id==="nocturne" ? "CONCEPT PROJECT — The city after dark becomes a different studio." : "SELECTED FRAME — A visual study from the FRAME archive."}</div><button className="modal-link" onClick={()=>{if(activeProject.id==="nocturne"){setActiveProject(null);document.querySelector('.nocturne-feature')?.scrollIntoView({behavior:'smooth'});}else{setActiveProject(null);}}}>{activeProject.id==="nocturne" ? <>Open project story <ArrowUpRight size={17}/></> : <>Close project <X size={16}/></>}</button></div></motion.div>}</AnimatePresence>
    <AnimatePresence>{lightbox!==null && <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><button className="lightbox-close" onClick={()=>setLightbox(null)} aria-label="Close lightbox"><X/></button><button className="lightbox-prev" onClick={()=>setLightbox((lightbox-1+contacts.length)%contacts.length)} aria-label="Previous image"><ArrowLeft/></button><div className="lightbox-image"><Image src={contacts[lightbox]} alt={`Fullscreen frame ${lightbox+1}`}/></div><button className="lightbox-next" onClick={()=>setLightbox((lightbox+1)%contacts.length)} aria-label="Next image"><ArrowRight/></button><div className="lightbox-meta"><span>{contactMeta[lightbox]}</span><span>{String(lightbox+1).padStart(2,"0")} / {String(contacts.length).padStart(2,"0")}</span></div></motion.div>}</AnimatePresence>
    <AnimatePresence>{film && <motion.div className="film-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><button onClick={()=>setFilm(false)} aria-label="Close film"><X/></button><div className="film-modal-inner"><div className="film-frame"><Image src={images.film} alt="After Hours concept film"/><div className="film-play"><Play fill="currentColor"/></div></div><span>CONCEPT FILM / AFTER HOURS</span><h2>PLAY FILM</h2><p>Director / FRAME Studio · 03:42</p><small>Demo interaction — local poster frame, no external playback.</small></div></motion.div>}</AnimatePresence>
  </main>;
}
