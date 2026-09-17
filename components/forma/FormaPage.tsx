/* eslint-disable @next/next/no-img-element */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const images = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88',
  house: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88',
  courtyard: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88',
  concrete: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88',
  timber: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88',
  stone: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88',
  detail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88',
  light: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88',
};

const projects = [
  { name: 'House No. 07', place: 'Hampstead · London', type: 'Private Residence', year: '2026', image: images.house },
  { name: 'Courtyard House', place: 'Alibaug · India', type: 'Private Residence', year: '2025', image: images.courtyard },
  { name: 'Monument House', place: 'Dubai · UAE', type: 'Private Residence', year: '2025', image: images.concrete },
  { name: 'Atelier 19', place: 'Mumbai · India', type: 'Commercial / Studio', year: '2024', image: images.detail },
  { name: 'The Grey Villa', place: 'Richmond · London', type: 'Private Residence', year: '2023', image: images.light },
];

const materials = [
  ['STONE', 'Weight, permanence and the quiet texture of time.', 'Exterior walls · floors · thresholds', images.stone],
  ['TIMBER', 'Warmth that softens structure.', 'Joinery · ceilings · furniture', images.timber],
  ['CONCRETE', 'Mass reduced to its most honest expression.', 'Structure · slabs · crafted surfaces', images.concrete],
  ['GLASS', 'A precise boundary between inside and outside.', 'Openings · screens · daylight', images.house],
  ['METAL', 'Edges, shadows and the discipline of detail.', 'Frames · hardware · screens', images.detail],
];

const journal = [
  ['MATERIAL / 08.09.26', 'Why material matters more than trend', '6 MIN READ', images.stone],
  ['LIGHT / 21.08.26', 'Designing for Indian light', '5 MIN READ', images.light],
  ['HOUSE / 12.07.26', 'What makes a house feel permanent?', '8 MIN READ', images.house],
  ['PROJECT / 30.06.26', 'Inside the courtyard house', '7 MIN READ', images.courtyard],
];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-12% 0px' }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function FormaPage() {
  const [menu, setMenu] = useState(false);
  const [material, setMaterial] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .22], [0, 80]);
  const modelRotate = useTransform(scrollYProgress, [0, .7], [-7, 14]);

  const closeMenu = () => setMenu(false);

  return (
    <main className="project-forma">
      <div className="grain" />
      <header className={`nav ${menu ? 'nav-open' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu}>FORMA<span>®</span></a>
        <nav className="desktop-nav" aria-label="Primary">
          <a href="#projects">Projects</a><a href="#practice">Practice</a><a href="#process">Process</a><a href="#journal">Journal</a><a href="#contact">Contact</a>
        </nav>
        <div className="nav-meta"><span>LONDON · MUMBAI · DUBAI</span><a className="nav-cta" href="#contact">Start a Project <Arrow /></a></div>
        <button className="menu-btn" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}><span /><span /></button>
      </header>
      {menu && <div className="mobile-menu"><a href="#projects" onClick={closeMenu}>Projects</a><a href="#practice" onClick={closeMenu}>Practice</a><a href="#process" onClick={closeMenu}>Process</a><a href="#journal" onClick={closeMenu}>Journal</a><a href="#contact" onClick={closeMenu}>Contact</a><small>LONDON · MUMBAI · DUBAI</small></div>}

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-index">00 / 05</div>
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .15 }}>
          <p className="eyebrow">ARCHITECTURE + CONSTRUCTION / 2026</p>
          <h1>Spaces designed<br /><em>to endure.</em></h1>
          <p className="hero-intro">FORMA brings architecture, material and construction together to create places with clarity, character and permanence.</p>
          <div className="hero-actions"><a className="text-link" href="#projects">Explore Projects <Arrow /></a><a className="text-link muted" href="#contact">Start a Project <Arrow /></a></div>
        </motion.div>
        <motion.div className="hero-image-wrap" style={{ y: heroY }}>
          <motion.img initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1] }} src={images.hero} alt="Minimal concrete residence with deep shadow and warm daylight" />
          <div className="hero-project"><span>PRIVATE RESIDENCE 07</span><span>LONDON / 51.56° N</span><span>2026</span></div>
        </motion.div>
        <div className="vertical-note">MATERIAL · SPACE · CRAFT · TIME</div>
        <div className="scroll-note"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="statement section-pad">
        <Reveal className="statement-no">01 / 05</Reveal>
        <Reveal className="statement-main"><p className="eyebrow">THE STUDIO</p><h2>Architecture is<br />only the <em>beginning.</em></h2></Reveal>
        <Reveal className="statement-side"><p>From the first line on paper to the final material on site, FORMA stays close to every decision that shapes the finished space.</p><span>ARCHITECTURE / INTERIOR / BUILD</span></Reveal>
      </section>

      <section className="featured section-pad" id="projects">
        <Reveal className="section-head"><p className="eyebrow">SELECTED WORK</p><span>01 — HOUSE NO. 07</span></Reveal>
        <Reveal className="featured-image"><img src={images.house} alt="House No. 07, a quiet modern residence in Hampstead" /><div className="image-caption"><span>HAMPSTEAD, LONDON</span><span>51°33′N / 0°11′W</span></div></Reveal>
        <div className="featured-info">
          <div><p className="eyebrow">PRIVATE RESIDENCE / 2026</p><h2>House<br /><em>No. 07</em></h2></div>
          <div className="project-facts"><p>4,800 SQ FT</p><p>CONCEPT · MATERIAL · STRUCTURE · LANDSCAPE</p><a href="#contact">View project <Arrow /></a></div>
        </div>
      </section>

      <section className="index-section section-pad">
        <Reveal className="index-intro"><p className="eyebrow">02 / PROJECT INDEX</p><h2>A catalogue of<br /><em>places.</em></h2><p>Selected architecture and design-build work across three cities.</p></Reveal>
        <div className="project-index">{projects.map((p, i) => <motion.a className="project-row" href="#contact" key={p.name} whileHover={{ x: 10 }} transition={{ duration: .25 }}><span className="row-no">0{i + 1}</span><span className="row-name">{p.name}</span><span className="row-place">{p.place}</span><span className="row-type">{p.type}</span><span className="row-year">{p.year}</span><Arrow /><motion.img className="row-image" src={p.image} alt="" initial={{ opacity: 0, scale: .94 }} whileHover={{ opacity: 1, scale: 1 }} /></motion.a>)}</div>
      </section>

      <section className="materials section-pad">
        <Reveal className="materials-title"><p className="eyebrow">03 / MATERIAL STUDIES</p><h2>Material is part<br />of the <em>architecture.</em></h2></Reveal>
        <div className="material-stage">
          <div className="material-copy"><div className="material-tabs">{materials.map((m, i) => <button key={m[0]} className={material === i ? 'active' : ''} onClick={() => setMaterial(i)}>{m[0]} <span>0{i + 1}</span></button>)}</div><div className="material-description"><span>0{material + 1} / 05</span><h3>{materials[material][0]}</h3><p>{materials[material][1]}</p><small>{materials[material][2]}</small></div></div>
          <motion.div className="material-image" key={materials[material][0]} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}><img src={materials[material][3]} alt={`${materials[material][0].toLowerCase()} architectural material detail`} /></motion.div>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <Reveal className="process-heading"><p className="eyebrow">04 / PROCESS</p><h2>From drawing<br />to <em>delivery.</em></h2></Reveal>
        <div className="process-line" />
        <div className="process-list">{[['01','Listen','Understanding the client, site and ambition.'],['02','Define','Developing the architectural language.'],['03','Resolve','Engineering, materials and technical decisions.'],['04','Build','Close coordination with the construction team.'],['05','Deliver','A finished space designed to last.']].map((item, i) => <Reveal className="process-item" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><i>{i < 4 ? '↓' : '✓'}</i></Reveal>)}</div>
      </section>

      <section className="craft section-pad">
        <div className="craft-head"><Reveal><p className="eyebrow">05 / CRAFT + CONSTRUCTION</p><h2>Designed here.<br /><em>Built with precision.</em></h2></Reveal><Reveal><p>Architecture becomes credible when an idea survives contact with material, measurement and making. Our construction knowledge stays in the room from the beginning.</p></Reveal></div>
        <div className="craft-collage"><div className="craft-large"><img src={images.detail} alt="Architectural detail and craftsmanship" /><span>JOINERY<br />01:20 SCALE</span></div><div className="craft-small"><img src={images.stone} alt="Stone architectural surface" /><span>STONE<br />18MM EDGE DETAIL</span></div><div className="craft-note">SITE / 2026<br />HAND / MACHINE<br />DRAWING / MAKING</div><div className="craft-small lower"><img src={images.light} alt="Interior sunlight and material detail" /><span>LIGHT<br />2700K</span></div></div>
      </section>

      <section className="massing section-pad">
        <div className="massing-copy"><p className="eyebrow">DIMENSION / 01</p><h2>A house as<br /><em>volume + void.</em></h2><p>FORMA&apos;s spatial studies begin with mass, subtraction and light. This CSS-built model is a quiet diagram of walls, slabs, courtyard and shadow.</p></div>
        <motion.div className="model-space" style={{ rotateX: modelRotate }} aria-label="Abstract architectural massing model"><div className="model"><div className="mass mass-a"/><div className="mass mass-b"/><div className="mass mass-c"/><div className="slab slab-a"/><div className="slab slab-b"/><div className="void"/><div className="light-beam"/></div></motion.div>
      </section>

      <section className="story section-pad">
        <Reveal className="story-top"><p className="eyebrow">SIGNATURE PROJECT / 02</p><h2>Courtyard<br /><em>House</em></h2><div><span>ALIBAUG · INDIA</span><span>2025</span></div></Reveal>
        <Reveal className="story-hero"><img src={images.courtyard} alt="Courtyard house surrounded by landscape and warm light" /><p>THE IDEA — A contemporary residence organized around light, landscape and a central courtyard.</p></Reveal>
        <div className="story-grid"><Reveal><span>THE PLAN</span><h3>Rooms become thresholds; the courtyard becomes the centre.</h3><p>Movement through the house is choreographed by changing views, compressed passages and generous moments of release.</p></Reveal><Reveal><span>THE MATERIAL</span><h3>Stone, timber and concrete establish a quiet palette.</h3><p>Every surface was selected for how it ages, catches light and meets the hand.</p></Reveal></div>
        <Reveal className="story-wide"><img src={images.light} alt="Sunlight falling across a quiet courtyard interior" /><div><span>THE LIGHT</span><p>Morning light enters low and direct. By afternoon, the courtyard becomes a slow register of shadow.</p></div></Reveal>
      </section>

      <section className="numbers section-pad"><Reveal><p className="eyebrow">FORMA / AT A GLANCE</p></Reveal><div className="numbers-grid"><Reveal><strong>24</strong><span>Completed projects</span></Reveal><Reveal><strong>11</strong><span>Years of practice</span></Reveal><Reveal><strong>06</strong><span>Cities</span></Reveal><Reveal><strong>04</strong><span>Disciplines</span></Reveal></div></section>

      <section className="practice section-pad" id="practice"><div className="practice-copy"><Reveal><p className="eyebrow">THE PRACTICE</p><h2>Small enough to<br />stay close.<br /><em>Experienced enough<br />to deliver.</em></h2></Reveal></div><Reveal className="practice-detail"><p>FORMA combines architectural thinking with construction knowledge — one studio, fewer handovers, clearer decisions.</p><div className="discipline-list">{['Architecture','Interior Architecture','Construction','Project Management'].map((d,i)=><div key={d}><span>0{i+1}</span><b>{d}</b><Arrow /></div>)}</div></Reveal></section>

      <section className="journal section-pad" id="journal"><Reveal className="section-head"><p className="eyebrow">JOURNAL</p><span>FIELD NOTES / IDEAS / MATERIAL</span></Reveal><div className="journal-grid">{journal.map((j, i)=><Reveal className={`journal-card card-${i}`} key={j[1]}><img src={j[3]} alt="" /><div><span>{j[0]}</span><h3>{j[1]}</h3><p>{j[2]} <Arrow /></p></div></Reveal>)}</div></section>

      <section className="locations section-pad"><div className="location-intro"><Reveal><p className="eyebrow">WHERE WE WORK</p><h2>Three cities.<br /><em>One approach.</em></h2></Reveal><Reveal><p>Local presence with an international outlook. Projects are led directly by the studio.</p></Reveal></div><div className="geo"><div className="geo-line" />{[['01','LONDON','STUDIO','51.5072° N / 0.1276° W'],['02','MUMBAI','STUDIO','19.0760° N / 72.8777° E'],['03','DUBAI','BY APPOINTMENT','25.2048° N / 55.2708° E']].map((l,i)=><Reveal className={`location-row loc-${i}`} key={l[1]}><span>{l[0]}</span><h3>{l[1]}</h3><small>{l[2]}<br />{l[3]}</small></Reveal>)}</div></section>

      <section className="closing" id="contact"><div className="closing-grid" /><Reveal><p className="eyebrow">A NEW PROJECT / 2026</p><h2>Have a space<br />worth <em>building?</em></h2><p>Tell us what you&apos;re imagining. We&apos;ll help turn the first idea into something tangible.</p><div className="closing-actions"><a className="button-link" href="mailto:studio@forma.example">Start a Project <Arrow /></a><a className="text-link" href="#projects">View Selected Projects <Arrow /></a></div></Reveal></section>

      <footer><div className="footer-brand"><a className="brand" href="#top">FORMA<span>®</span></a><p>Architecture + Construction</p></div><div className="footer-locations"><span>LONDON</span><span>MUMBAI</span><span>DUBAI</span></div><div className="footer-links"><div><a href="#projects">Projects</a><a href="#practice">Practice</a><a href="#process">Process</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div><div><a href="mailto:studio@forma.example">studio@forma.example</a><a href="tel:+442000000000">+44 20 0000 0000</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div></div><div className="footer-bottom"><span>© 2026 FORMA STUDIO</span><span>PRIVACY / TERMS</span><span>ARCHITECTURE + CONSTRUCTION</span></div></footer>
    </main>
  );
}
