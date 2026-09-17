/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Instagram, Menu, MoveHorizontal, X } from 'lucide-react';

const img = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=88`;

const images = {
  hero: img('photo-1529139574466-a303027c1d8b'),
  heroInset: img('photo-1515886657613-9f3515b0c78f', 900),
  studio: img('photo-1522337360788-8b13dee7a37e'),
  color: img('photo-1487412720507-e7ab37603c6f', 900),
  skin: img('photo-1556228578-0d85b1a4d571', 900),
  private: img('photo-1517841905240-472988babdf9', 900),
  camille: img('photo-1534528741775-53994a69daeb'),
  muse: img('photo-1516975080664-ed2fc6a32937'),
  bridal: img('photo-1519741497674-611481863552'),
  skinLarge: img('photo-1556229010-6c3f2c9ca5f8'),
  diary1: img('photo-1525507119028-ed4c629a60a3', 700),
  diary2: img('photo-1490481651871-ab68de25d43d', 700),
  diary3: img('photo-1515372039744-b8f02a3ae446', 700),
  diary4: img('photo-1529139574466-a303027c1d8b', 700),
  final: img('photo-1524504388940-b1c1722653e1'),
};

const services = [
  { no:'01', name:'CUT', price:'From €85', desc:'Shape, movement and proportion, considered around your features and daily rhythm.', image:img('photo-1595476108010-b4d1f102b1b1', 850) },
  { no:'02', name:'COLOR', price:'From €160', desc:'Tone and light designed to live naturally with skin, wardrobe and movement.', image:img('photo-1512496015851-a90fb38ba796', 850) },
  { no:'03', name:'MAKEUP', price:'From €120', desc:'Quietly precise makeup for a face that still looks like itself.', image:img('photo-1487412720507-e7ab37603c6f', 850) },
  { no:'04', name:'SKIN', price:'From €110', desc:'Rituals built around hydration, texture, circulation and the moment ahead.', image:img('photo-1570172619644-dfd03ed5d881', 850) },
  { no:'05', name:'BROWS', price:'From €45', desc:'A precise, restrained study of balance — never a template.', image:img('photo-1519415387722-a1c3bbef716c', 850) },
  { no:'06', name:'BRIDAL', price:'From €320', desc:'A complete beauty direction from first consultation to the final touch.', image:img('photo-1519741497674-611481863552', 850) },
];

const artists = [
  { name:'Noah Martin', role:'Color Specialist', bio:'Noah builds color through restraint — finding the tone that makes the whole image feel inevitable.', image:img('photo-1500648767791-00dcc994a43e', 700) },
  { name:'Inès Moreau', role:'Makeup Artist', bio:'Inès works with texture and light to make makeup feel present, never imposed.', image:img('photo-1531123897727-8f129e1688ce', 700) },
  { name:'Juliette Renard', role:'Skin Specialist', bio:'Juliette treats skin as a ritual of attention, building calm, clarity and luminosity before the final look.', image:img('photo-1544005313-94ddf0286df2', 700) },
];

const projects = [
  { title:'PARIS FASHION WEEK', role:'Beauty Direction', year:'2026', image:img('photo-1483985988355-763728e1935b', 900) },
  { title:'EDITORIAL 24', role:'Hair + Makeup', year:'2026', image:img('photo-1539109136881-3be0616acf4b', 900) },
  { title:'BRIDAL STUDY', role:'Beauty Direction', year:'2025', image:img('photo-1511285560929-80b456fea0bc', 900) },
  { title:'MUSE CAMPAIGN', role:'Creative Direction', year:'2026', image:img('photo-1524250502761-1ac6f2e30d43', 900) },
];

const journal = [
  ['FIELD NOTE / 07','Why good hair starts with consultation','12.09.26','6 min',img('photo-1595476108010-b4d1f102b1b1',800)],
  ['FORM / 05','The architecture of a great haircut','28.08.26','4 min',img('photo-1522337360788-8b13dee7a37e',800)],
  ['PARIS / 11','Parisian beauty without trying too hard','08.08.26','5 min',img('photo-1496747611176-843222e1e57c',800)],
  ['RITUAL / 03','Preparing your skin before a big event','22.07.26','7 min',img('photo-1556228578-0d85b1a4d571',800)],
];

function Reveal({children, delay=0, className='' }:{children:React.ReactNode;delay?:number;className?:string}) {
  return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}

function DimensionalObject(){
  const mx=useMotionValue(0), my=useMotionValue(0);
  const rx=useSpring(my,{stiffness:90,damping:18}), ry=useSpring(mx,{stiffness:90,damping:18});
  return <motion.div className="object-wrap" onPointerMove={(e)=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left-r.width/2)/18);my.set(-(e.clientY-r.top-r.height/2)/18)}} onPointerLeave={()=>{mx.set(0);my.set(0)}} style={{rotateX:rx,rotateY:ry}} aria-hidden="true">
    <div className="beauty-object"><div className="object-cap"/><div className="object-face"/><div className="object-glint"/></div>
  </motion.div>;
}

function Header({menuOpen,setMenuOpen}:{menuOpen:boolean;setMenuOpen:(v:boolean)=>void}){
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const on=()=>setScrolled(window.scrollY>40);window.addEventListener('scroll',on);on();return()=>window.removeEventListener('scroll',on)},[]);
  const links=[['Studio','#studio'],['Services','#services'],['Artists','#artists'],['Journal','#journal'],['Visit','#visit']];
  return <>
    <header className={`site-header ${scrolled?'scrolled':''}`}>
      <a className="logo" href="#top" aria-label="MUSE home">MUSE<span>BEAUTY ATELIER</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([l,h])=><a key={l} href={h}>{l}</a>)}</nav>
      <div className="header-right"><span className="location-mini">PARIS · 11 RUE OBERKAMPF</span><a className="header-cta" href="#booking">Book an Appointment <ArrowUpRight size={15}/></a><button className="menu-btn" aria-label="Open menu" onClick={()=>setMenuOpen(true)}><Menu size={21}/></button></div>
    </header>
    <AnimatePresence>{menuOpen&&<motion.div className="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="mobile-menu-top"><a className="logo" href="#top" onClick={()=>setMenuOpen(false)}>MUSE<span>BEAUTY ATELIER</span></a><button className="menu-btn" aria-label="Close menu" onClick={()=>setMenuOpen(false)}><X size={25}/></button></div>
      <nav>{links.map(([l,h],i)=><motion.a key={l} href={h} onClick={()=>setMenuOpen(false)} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:i*.06}}>{l}<ArrowUpRight size={19}/></motion.a>)}</nav>
      <a className="button button-dark" href="#booking" onClick={()=>setMenuOpen(false)}>Book an Appointment <ArrowUpRight size={16}/></a>
      <p>11 Rue Oberkampf<br/>75011 Paris · France</p>
    </motion.div>}</AnimatePresence>
  </>;
}

function Comparison(){
  const [pos,setPos]=useState(52);
  return <div className="comparison" style={{'--pos':`${pos}%`} as React.CSSProperties}>
    <img src={img('photo-1515886657613-9f3515b0c78f')} alt="Editorial beauty portrait after subtle styling"/>
    <div className="comparison-before"><img src={img('photo-1496747611176-843222e1e57c')} alt="Editorial beauty portrait before styling"/></div>
    <label className="comparison-range" aria-label="Compare before and after"><input type="range" min="5" max="95" value={pos} onChange={e=>setPos(Number(e.target.value))}/></label>
    <div className="compare-line"><span>BEFORE</span><span><MoveHorizontal size={15}/></span><span>AFTER</span></div>
  </div>;
}

export function MusePage(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [activeService,setActiveService]=useState(1);
  const [space,setSpace]=useState(0);
  const [bookingSent,setBookingSent]=useState(false);
  const [artist,setArtist]=useState(0);
  const spaces=[['THE SALON',images.studio,'A light-filled room for cut, conversation and the first edit.'],['THE COLOR ROOM',images.color,'Light, tone and movement — color is treated as an architectural decision.'],['THE SKIN STUDIO',images.skin,'Quiet rituals, tactile technique and skin prepared to glow without disguise.'],['THE PRIVATE ROOM',images.private,'A slower room for bridal, editorial and appointments that ask for privacy.']];
  const currentArtist=useMemo(()=>artist===0?{name:'Camille Laurent',role:'Creative Director / Hair Artist',image:images.camille,bio:'Camille approaches hair as form — balancing structure, movement and individuality.'}:artists[artist-1], [artist]);
  return <main id="top" className="project-muse">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-meta hero-meta-left"><span>PARIS / 2026</span><span>BEAUTY ATELIER</span></div>
      <div className="hero-main-image"><img src={images.hero} alt="Editorial portrait in soft natural light"/><div className="image-label">01 / PORTRAIT STUDY</div></div>
      <div className="hero-inset"><img src={images.heroInset} alt="Close-up editorial beauty detail"/><span>HAIR · SKIN · MAKEUP</span></div>
      <div className="hero-copy"><p className="eyebrow">MUSE / BEAUTY ATELIER</p><h1 id="hero-title">Beauty,<br/><em>considered.</em></h1><p className="hero-description">A Parisian beauty atelier where hair, skin and makeup become part of your personal language.</p><div className="hero-actions"><a className="button button-dark" href="#booking">Book an Appointment <ArrowUpRight size={16}/></a><a className="text-link" href="#studio">Explore the Studio <ArrowDownRight size={16}/></a></div></div>
      <div className="hero-side-note"><span>11 RUE OBERKAMPF</span><span>75011 PARIS · FRANCE</span></div>
      <div className="scroll-mark"><span>SCROLL TO EXPLORE</span><i/></div>
      <DimensionalObject/>
    </section>

    <section className="statement section-pad" aria-labelledby="statement-title"><div className="section-marker">01 / THE PHILOSOPHY</div><Reveal><h2 id="statement-title">Not a look.<br/><em>A point of view.</em></h2></Reveal><Reveal delay={.1}><div className="statement-copy"><span>WE BEGIN WITH YOU</span><p>We work with the person in front of us — their features, their rhythm, their style — to create beauty that feels unmistakably theirs.</p></div></Reveal></section>

    <section id="studio" className="studio section-pad" aria-labelledby="studio-title"><div className="section-marker">02 / THE STUDIO</div><div className="studio-grid"><Reveal className="studio-visual"><img src={spaces[space][1]} alt={`${spaces[space][0]} at MUSE`}/><div className="studio-caption"><span>{spaces[space][0]}</span><span>0{space+1} / 04</span></div></Reveal><div className="studio-info"><Reveal><p className="eyebrow">THE ATELIER / OBERKAMPF</p><h2 id="studio-title">Four rooms.<br/><em>One rhythm.</em></h2><p className="studio-lead">Every corner of MUSE is designed to slow the appointment down and sharpen the result.</p></Reveal><div className="space-list">{spaces.map((s,i)=><button key={s[0]} className={space===i?'active':''} onMouseEnter={()=>setSpace(i)} onFocus={()=>setSpace(i)} onClick={()=>setSpace(i)}><span>0{i+1}</span><strong>{s[0]}</strong><ArrowUpRight size={16}/><small>{s[2]}</small></button>)}</div></div></div></section>

    <section id="services" className="services section-pad"><div className="section-marker">03 / THE SERVICE INDEX</div><div className="services-head"><Reveal><h2>Beauty in <em>six gestures.</em></h2></Reveal><p>CONCEPT PRICING / EUR</p></div><div className="service-list">{services.map((s,i)=><button key={s.name} className={`service-row ${activeService===i?'active':''}`} onMouseEnter={()=>setActiveService(i)} onFocus={()=>setActiveService(i)} onClick={()=>setActiveService(i)}><span className="service-no">{s.no}</span><span className="service-name">{s.name}</span><span className="service-detail">{s.desc}</span><span className="service-price">{s.price}</span><span className="service-arrow"><ArrowUpRight size={20}/></span>{activeService===i&&<motion.div layoutId="service-image" className="service-preview"><img src={s.image} alt=""/></motion.div>}</button>)}</div></section>

    <section id="artists" className="artists section-pad"><div className="section-marker">04 / THE PEOPLE</div><div className="artist-feature"><div className="artist-image"><AnimatePresence mode="wait"><motion.img key={currentArtist.name} src={currentArtist.image} alt={`${currentArtist.name}, ${currentArtist.role}`} initial={{opacity:0,scale:1.03}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.5}}/></AnimatePresence><span>PORTRAIT / 04</span></div><div className="artist-copy"><p className="eyebrow">FEATURED ARTIST</p><h2>{currentArtist.name}</h2><p className="artist-role">{currentArtist.role}</p><p className="artist-bio">{currentArtist.bio}</p><div className="artist-specialties"><span>SHAPE</span><span>MOVEMENT</span><span>INDIVIDUALITY</span></div><div className="artist-switcher"><button onClick={()=>setArtist(0)} className={artist===0?'active':''}>CAMILLE</button>{artists.map((a,i)=><button key={a.name} onClick={()=>setArtist(i+1)} className={artist===i+1?'active':''}>{a.name.split(' ')[0].toUpperCase()}</button>)}</div></div></div><div className="artist-roster">{artists.map((a,i)=><button key={a.name} onClick={()=>setArtist(i+1)}><span>0{i+2}</span><strong>{a.name}</strong><em>{a.role}</em><ArrowUpRight size={16}/></button>)}</div></section>

    <section className="muse-session section-dark"><div className="session-image"><img src={images.muse} alt="Luxury beauty editorial detail"/></div><div className="session-copy"><div className="section-marker">05 / THE MUSE SESSION</div><p className="eyebrow">PRIVATE BEAUTY / 3 HOURS</p><h2>An afternoon made<br/><em>entirely for you.</em></h2><p>A personalised three-hour beauty appointment combining consultation, hair, makeup and a skin ritual — shaped around the person you are today.</p><div className="session-specs"><span><b>€390</b>CONCEPT PRICE</span><span><b>3H</b>DURATION</span></div><ul><li>Consultation + beauty direction</li><li>Hair shape + finish</li><li>Makeup refinement</li><li>Skin ritual</li></ul><a className="button button-light" href="#booking">Reserve the session <ArrowUpRight size={16}/></a></div></section>

    <section className="comparison-section section-pad"><div className="section-marker">06 / THE TRANSFORMATION</div><div className="comparison-head"><Reveal><h2>Subtle change.<br/><em>Visible difference.</em></h2></Reveal><p>THE CUT / CONCEPT STUDY</p></div><Comparison/><div className="comparison-foot"><span>THE CUT</span><span>REFINEMENT OVER REINVENTION</span></div></section>

    <section className="editorial section-pad"><div className="section-marker">07 / SELECTED CONCEPT WORK</div><div className="editorial-head"><Reveal><h2>From the chair<br/><em>to the page.</em></h2></Reveal><p>FICTIONAL EDITORIAL PROJECTS / 2025—26</p></div><div className="project-grid">{projects.map((p,i)=><Reveal key={p.title} delay={i*.05}><article className={`project project-${i+1}`}><div className="project-image"><img src={p.image} alt={`${p.title} concept beauty project`}/><span>0{i+1}</span></div><div className="project-meta"><div><strong>{p.title}</strong><small>{p.role}</small></div><span>{p.year} <ArrowUpRight size={15}/></span></div></article></Reveal>)}</div></section>

    <section className="bridal section-pad"><div className="bridal-visual"><img src={images.bridal} alt="Elegant bridal beauty editorial"/><div className="bridal-stamp">MUSE<br/>BRIDAL<br/>STUDY</div></div><div className="bridal-copy"><div className="section-marker">08 / BRIDAL</div><p className="eyebrow">A PRIVATE BEAUTY DIRECTION</p><h2>Your day.<br/><em>Your version<br/>of beautiful.</em></h2><p>From the first consultation to the last mirror check, we build a beauty language that belongs to you — never a trend board.</p><div className="bridal-list"><span>01 <b>Bridal consultation</b></span><span>02 <b>Trial session</b></span><span>03 <b>Hair + makeup</b></span><span>04 <b>Skin preparation</b></span><span>05 <b>On-location service</b></span></div><div className="bridal-package"><div><span>CONCEPT PACKAGE</span><strong>THE BRIDAL EDIT</strong></div><div><b>€1,200</b><small>Consultation · Trial · Wedding-day beauty · Touch-up kit</small></div></div><a className="text-link" href="#booking">Plan Your Bridal Look <ArrowUpRight size={16}/></a></div></section>

    <section className="skin section-dark"><div className="skin-copy"><div className="section-marker">09 / SKIN RITUAL</div><p className="eyebrow">THE QUIET HOUR</p><h2>Skin before<br/><em>makeup.</em></h2><p>Slow, sensory treatments designed around texture, hydration and circulation — so makeup has less to hide.</p><div className="skin-menu"><div><span>Signature Facial</span><b>45 MIN</b></div><div><span>Sculpting Massage</span><b>75 MIN</b></div><div><span>Hydration Ritual</span><b>90 MIN</b></div><div><span>Pre-Event Skin Reset</span><b>75 MIN</b></div></div></div><div className="skin-image"><img src={images.skinLarge} alt="Close-up of luminous skin in soft light"/><span>RITUAL / TEXTURE / LIGHT</span></div></section>

    <section id="journal" className="journal section-pad"><div className="section-marker">10 / STUDIO JOURNAL</div><div className="journal-head"><Reveal><h2>Notes from<br/><em>the atelier.</em></h2></Reveal><a className="text-link" href="#journal">View all notes <ArrowUpRight size={16}/></a></div><div className="journal-list">{journal.map(([cat,title,date,time,image])=><article key={title}><div className="journal-image"><img src={image} alt=""/></div><div className="journal-copy"><span>{cat}</span><h3>{title}</h3><p>{date} · {time} read</p></div><ArrowUpRight size={20}/></article>)}</div></section>

    <section className="diary section-pad"><div className="section-marker">11 / VISUAL DIARY</div><div className="diary-head"><h2>Seen around<br/><em>MUSE.</em></h2><a className="text-link" href="https://instagram.com" target="_blank" rel="noreferrer">Follow the studio <Instagram size={16}/></a></div><div className="diary-grid"><div><img src={images.diary1} alt="Fashion texture from the MUSE studio"/><span>BEHIND THE SCENES</span></div><div className="tall"><img src={images.diary2} alt="Parisian fashion detail"/><span>TEXTURES</span></div><div><img src={images.diary3} alt="Editorial makeup detail"/><span>MAKEUP</span></div><div><img src={images.diary4} alt="Studio portrait"/><span>PORTRAITS</span></div></div></section>

    <section id="visit" className="visit section-pad"><div className="section-marker">12 / VISIT THE ATELIER</div><div className="visit-grid"><div className="map-art"><div className="map-lines"/><span className="map-label map-a">OBERKAMPF</span><span className="map-label map-b">PARIS 11e</span><div className="map-pin">M</div><span className="map-street">11 RUE OBERKAMPF</span></div><div className="visit-copy"><p className="eyebrow">PARIS / 11e ARRONDISSEMENT</p><h2>Come find<br/><em>your room.</em></h2><address>11 Rue Oberkampf<br/>75011 Paris<br/>France</address><div className="visit-info"><div><span>HOURS</span><b>Tue–Sat / 09:00–19:00</b><b>Sun–Mon / Closed</b></div><div><span>GETTING HERE</span><b>Metro / Line 5, Oberkampf</b><b>Parking / Nearby public garages</b><b>Accessibility / Step-free entrance</b></div></div></div></div></section>

    <section id="booking" className="booking section-dark"><div className="booking-intro"><div className="section-marker">13 / APPOINTMENT</div><h2>Let&apos;s create<br/><em>your appointment.</em></h2><p>Portfolio concept — this form is ready to connect to a real scheduling or CRM workflow.</p></div><div className="booking-form-wrap">{bookingSent?<motion.div className="success-state" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}><span>THANK YOU / 14</span><h3>Your request has<br/><em>been noted.</em></h3><p>This concept form does not submit to a live booking system. In a production build, your request would route to the atelier.</p><button className="button button-light" onClick={()=>setBookingSent(false)}>Make another request</button></motion.div>:<form className="booking-form" onSubmit={e=>{e.preventDefault();setBookingSent(true)}}><label>Service<select required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.name}>{s.name}</option>)}</select></label><label>Preferred Artist<select defaultValue="Camille Laurent"><option>Camille Laurent</option>{artists.map(a=><option key={a.name}>{a.name}</option>)}</select></label><label>Date<input required type="date"/></label><label>Time<select required defaultValue=""><option value="" disabled>Select a time</option><option>09:00</option><option>11:30</option><option>14:00</option><option>16:30</option><option>18:00</option></select></label><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Phone<input required type="tel" placeholder="+33 …"/></label><div className="form-submit"><button className="button button-light" type="submit">Request Appointment <ArrowUpRight size={16}/></button><small>Concept interface · no live booking backend</small></div></form>}</div></section>

    <section className="final-cta"><img src={images.final} alt="Editorial portrait for MUSE closing campaign"/><div className="final-overlay"/><div className="final-copy"><p className="eyebrow">MUSE / BEAUTY ATELIER</p><h2>Come as<br/><em>you are.</em></h2><p>Leave with something that feels a little more like you.</p><div><a className="button button-light" href="#booking">Book an Appointment <ArrowUpRight size={16}/></a><a className="text-link light" href="#visit">Visit MUSE <ArrowUpRight size={16}/></a></div></div></section>

    <footer><div className="footer-top"><div><a className="footer-logo" href="#top">MUSE</a><p>BEAUTY ATELIER</p><address>11 Rue Oberkampf<br/>Paris 75011</address></div><div className="footer-col"><span>EXPLORE</span><a href="#studio">Studio</a><a href="#services">Services</a><a href="#artists">Artists</a><a href="#journal">Journal</a><a href="#visit">Visit</a></div><div className="footer-col"><span>BOOKING</span><a href="#booking">hello@muse.example</a><a href="#booking">+33 1 00 00 00 00</a></div><div className="footer-col"><span>SOCIAL</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></div></div><div className="footer-bottom"><span>© 2026 MUSE BEAUTY ATELIER</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><span>PARIS · FRANCE</span></div></div></footer>
  </main>;
}
