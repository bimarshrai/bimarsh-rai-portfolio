/* eslint-disable @next/next/no-img-element -- Remote art-directed imagery is intentionally kept as replaceable <img> sources. */
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Clock3, Instagram, Linkedin, Menu, MoveUpRight, Phone, Plus, X } from 'lucide-react';

const image = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const photos = {
  hero: image('photo-1551076805-e1869033e561'),
  doctor: image('photo-1559839734-2b71ea197ec2'),
  doctor2: image('photo-1612349317150-e413f6a5b16d'),
  doctor3: image('photo-1594824476967-48c8b964273f'),
  doctor4: image('photo-1537368910025-700350fe46c7'),
  clinic: image('photo-1497366811353-6870744d04b2'),
  detail: image('photo-1511174511562-5f7f18b874f8'),
  journal: image('photo-1505751172876-fa1923c5c528'),
  journal2: image('photo-1576091160399-112ba8d25d1d'),
  journal3: image('photo-1580281658628-9b8f5d1c2b5f')
};

const specialists = [
  { name: 'Dr. Eleanor Vale', role: 'Consultant Physician', area: 'Internal Medicine', text: 'A measured, whole-person approach to complex health questions.', image: photos.doctor, credential: 'MBBS · MRCP · 15 years' },
  { name: 'Dr. Adrian Cole', role: 'Consultant Cardiologist', area: 'Heart & Vascular Health', text: 'Prevention and precision for the demands of modern life.', image: photos.doctor2, credential: 'MBChB · MD · FRCP' },
  { name: 'Dr. Maya Laurent', role: 'Consultant Dermatologist', area: 'Skin Health', text: 'Clinical expertise with an eye for the detail that matters.', image: photos.doctor3, credential: 'MBBS · BSc · MRCP' },
  { name: 'Dr. James Rowan', role: 'Consultant Surgeon', area: 'Orthopaedics', text: 'Clear guidance, thoughtful intervention and continuity beyond the procedure.', image: photos.doctor4, credential: 'MBBS · FRCS · 18 years' }
];

const careAreas = [
  ['01', 'Executive health', 'A clear view of your health, designed around a life that moves quickly.'],
  ['02', 'Preventive medicine', 'Thoughtful screening and long-range planning before concern becomes interruption.'],
  ['03', 'Cardiology', 'Specialist assessment for a heart that has more to do.'],
  ['04', "Women's health", 'Continuity and clinical care through every stage of life.'],
  ['05', 'Dermatology', 'Expert attention to skin, appearance and underlying health.'],
  ['06', 'Diagnostics', 'The right test, interpreted in context, without unnecessary delay.']
];

const journey = ['Private consultation', 'Clinical assessment', 'Specialist coordination', 'Personalised care plan', 'Ongoing continuity'];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function AureliaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCare, setActiveCare] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .25], [0, 100]);

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const closeMenu = () => setMenuOpen(false);

  return <main className="project-aurelia">
    <motion.nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }}>
      <a className="wordmark" href="#top" onClick={closeMenu}>Aurelia<span>•</span></a>
      <div className="nav-links"><a href="#medicine">Medicine</a><a href="#specialists">Specialists</a><a href="#approach">Approach</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div>
      <a className="nav-cta" href="#contact">Request an appointment <ArrowRight size={15} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </motion.nav>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><a href="#medicine" onClick={closeMenu}>Medicine</a><a href="#specialists" onClick={closeMenu}>Specialists</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#journal" onClick={closeMenu}>Journal</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="button button-dark" href="#contact" onClick={closeMenu}>Request an appointment <ArrowRight size={16} /></a></motion.div>}</AnimatePresence>

    <section className="hero" id="top">
      <div className="hero-copy"><motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>Private medicine · Mayfair · London</motion.p><motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .9 }}>Medicine,<br /><em>with more time</em><br />for you.</motion.h1><motion.p className="hero-lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>A private medical practice built around continuity, discretion and thoughtful specialist care.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}><a className="button button-dark" href="#contact">Request an appointment <ArrowRight size={16} /></a><a className="text-link" href="#approach">Explore our approach <ArrowDownRight size={17} /></a></motion.div></div>
      <motion.div className="hero-visual" style={{ y: heroY }}><div className="hero-image main-image"><img src={photos.hero} alt="Quiet private consultation room with warm natural light" /></div><div className="hero-image detail-image"><img src={photos.detail} alt="Close detail of a clinician preparing for a consultation" /></div><div className="hero-note"><span className="status-dot" />Taking new patients<br /><small>By referral or enquiry</small></div><div className="hero-index">01 <span>/</span> 04</div></motion.div>
      <div className="hero-bottom"><span>Scroll to explore</span><div className="line" /><span>Est. 2009</span></div>
    </section>

    <section className="intro section" id="medicine"><div className="section-kicker"><span>01</span><span>The practice</span></div><div className="intro-grid"><Reveal><h2>Care should<br /><em>feel considered.</em></h2></Reveal><Reveal delay={.12}><div className="intro-body"><p className="large-copy">The best medicine begins with being properly heard.</p><p>At Aurelia, we create the time and space for a more complete understanding of you. One trusted physician coordinates the details, brings in the right specialist and remains alongside you as your health evolves.</p><a className="text-link" href="#approach">Why Aurelia <ArrowRight size={16} /></a></div></Reveal></div><div className="stats"><div><strong>15<span>+</span></strong><small>Years of<br />private practice</small></div><div><strong>01</strong><small>Dedicated<br />physician</small></div><div><strong>Same-day</strong><small>Private<br />consultations</small></div><div><strong>∞</strong><small>Specialist<br />perspective</small></div></div></section>

    <section className="specialists section" id="specialists"><div className="section-head"><div className="section-kicker"><span>02</span><span>The people</span></div><div><h2>People behind<br /><em>the practice.</em></h2><p>Experienced clinicians, connected by a shared belief in unhurried, intelligent care.</p></div><a className="text-link desktop-only" href="#contact">View all specialists <ArrowRight size={16} /></a></div><div className="specialists-list">{specialists.map((doctor, i) => <Reveal key={doctor.name} delay={i * .08}><article className="specialist"><div className="specialist-image"><img src={doctor.image} alt={doctor.name} /><span>{String(i + 1).padStart(2, '0')}</span></div><div className="specialist-info"><div><h3>{doctor.name}</h3><p>{doctor.role}<br />{doctor.area}</p></div><p className="specialist-description">{doctor.text}</p><div className="specialist-foot"><span>{doctor.credential}</span><ArrowUpRight size={17} /></div></div></article></Reveal>)}</div></section>

    <section className="care section" id="approach"><div className="section-kicker"><span>03</span><span>Areas of care</span></div><div className="care-layout"><div><h2>Expertise,<br /><em>in context.</em></h2><p className="care-intro">From a first question to a long-term plan, our care is shaped around the person in front of us.</p><div className="care-visual"><img src={photos.journal2} alt="Abstract clinical detail" /><div className="dimensional"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="core"><span>+</span></div><small>Whole-person<br />assessment</small></div></div></div><div className="care-list">{careAreas.map(([num, title, description], i) => <button className={`care-row ${activeCare === i ? 'active' : ''}`} key={title} onMouseEnter={() => setActiveCare(i)} onFocus={() => setActiveCare(i)} onClick={() => setActiveCare(i)}><span>{num}</span><strong>{title}</strong><AnimatePresence mode="wait">{activeCare === i && <motion.p initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>{description}</motion.p>}</AnimatePresence><ArrowRight size={18} /></button>)}</div></div></section>

    <section className="journey section"><div className="journey-top"><div className="section-kicker"><span>04</span><span>Your care</span></div><div><h2>Your care,<br /><em>considered.</em></h2><p>Good care is not a single appointment. It is a relationship, carefully coordinated.</p></div></div><div className="journey-stage"><div className="journey-image"><img src={photos.clinic} alt="Light-filled private clinic interior" /><div className="journey-caption">A calmer way<br />through healthcare <ArrowDownRight size={19} /></div></div><div className="journey-steps">{journey.map((step, i) => <button className={activeJourney === i ? 'journey-step active' : 'journey-step'} onClick={() => setActiveJourney(i)} key={step}><span>0{i + 1}</span><strong>{step}</strong>{activeJourney === i && <motion.div className="step-check" layoutId="step-check"><Check size={15} /></motion.div>}</button>)}<p className="journey-note">Your physician remains the constant point of contact, translating every result and recommendation into a plan that makes sense for your life.</p></div></div></section>

    <section className="signature section"><div className="signature-art"><img src={photos.detail} alt="Architectural detail in the Aurelia clinic" /><div className="signature-stamp">A<br />/09</div></div><div className="signature-copy"><div className="section-kicker"><span>05</span><span>The Aurelia view</span></div><h2>One practice.<br /><em>A complete view</em><br />of your health.</h2><p>We bring consultation, diagnostics, specialist access and prevention into one considered experience. Fewer handovers. Better questions. A clearer path forward.</p><div className="signature-points"><span>Consultation</span><span>Diagnostics</span><span>Specialist access</span><span>Preventative care</span><span>Follow-up</span></div><a className="text-link" href="#contact">Discover our approach <ArrowRight size={16} /></a></div></section>

    <section className="location section"><div className="section-kicker"><span>06</span><span>Find us</span></div><div className="location-grid"><div><h2>Mayfair,<br /><em>London.</em></h2><p className="location-lede">A quiet address in the heart of the city, designed to feel a world away from it.</p><div className="address"><p>18 Waverton Street<br />Mayfair<br />London W1K 5DB</p><a className="text-link" href="#contact">Get directions <MoveUpRight size={15} /></a></div><div className="hours"><div><Clock3 size={17} /><span>Monday — Friday<br /><b>08:00 — 18:00</b></span></div><div><Phone size={17} /><span>Private patient line<br /><b>+44 20 0000 0000</b></span></div></div></div><div className="map-card"><div className="map-lines" /><div className="map-label label-a">Bond Street</div><div className="map-label label-b">Oxford Circus</div><div className="map-pin"><span>AU</span><i /></div><div className="map-note">Private entrance<br /><small>Waverton Street</small></div></div></div></section>

    <section className="journal section" id="journal"><div className="section-head"><div className="section-kicker"><span>07</span><span>From the journal</span></div><div><h2>Notes on a<br /><em>healthier life.</em></h2></div><a className="text-link desktop-only" href="#contact">View the journal <ArrowRight size={16} /></a></div><div className="journal-grid"><article className="journal-feature"><div className="journal-image"><img src={photos.journal} alt="Botanical detail in soft morning light" /><span>01</span></div><small>Perspective · 12.06.24</small><h3>Why continuity matters in modern medicine</h3><a className="circle-arrow" href="#contact" aria-label="Read article"><ArrowUpRight size={17} /></a></article><article className="journal-item"><img src={photos.journal2} alt="Clinical detail" /><small>Preventive health · 04.06.24</small><h3>The new language of preventative health</h3><ArrowUpRight size={17} /></article><article className="journal-item"><img src={photos.journal3} alt="Modern medical consultation" /><small>Wellbeing · 28.05.24</small><h3>Understanding executive health</h3><ArrowUpRight size={17} /></article></div></section>

    <section className="cta" id="contact"><div className="cta-image"><img src={photos.hero} alt="Warm, calm treatment room" /></div><div className="cta-copy"><div className="section-kicker"><span>08</span><span>Begin here</span></div><h2>Begin with<br /><em>a conversation.</em></h2><p>Tell us what you need and our patient team will guide you to the right next step.</p><a className="button button-light" href="mailto:hello@aurelia-medicine.example">Request an appointment <ArrowRight size={16} /></a><a className="phone-link" href="tel:+442000000000">+44 20 0000 0000</a></div></section>

    <footer><div className="footer-top"><div><a className="wordmark footer-mark" href="#top">Aurelia<span>•</span></a><p>Private medicine<br />Mayfair · London</p></div><div className="footer-nav"><div><small>Explore</small><a href="#medicine">Medicine</a><a href="#specialists">Specialists</a><a href="#approach">Approach</a></div><div><small>Connect</small><a href="#journal">Journal</a><a href="#contact">Contact</a><a href="mailto:hello@aurelia-medicine.example">Email us</a></div><div><small>Follow</small><a href="#contact"><Instagram size={15} /> Instagram</a><a href="#contact"><Linkedin size={15} /> LinkedIn</a></div></div></div><div className="footer-bottom"><span>© 2024 Aurelia Private Medicine</span><span>Privacy · Terms</span><span>Made for considered care <Plus size={13} /></span></div></footer>
  </main>;
}
