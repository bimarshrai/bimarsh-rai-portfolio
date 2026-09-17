/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Check, ExternalLink, Menu, Minus, Plus, X } from 'lucide-react'

const programs = [
  { n:'01', title:'THE LEADERSHIP LAB', category:'Leadership & People', duration:'10 weeks', size:'24 people', desc:'Build the judgment, communication and operating habits required to lead with clarity under pressure.', accent:'leadership' },
  { n:'02', title:'STRATEGY INTENSIVE', category:'Strategic Thinking', duration:'8 weeks', size:'20 people', desc:'Turn ambiguity into choices, and choices into a strategy your team can actually execute.', accent:'strategy' },
  { n:'03', title:'PRODUCT SYSTEMS', category:'Product & Innovation', duration:'10 weeks', size:'24 people', desc:'Develop a sharper product practice from customer insight through prioritisation, systems and scale.', accent:'product' },
  { n:'04', title:'AI FOR LEADERS', category:'AI & Business', duration:'6 weeks', size:'18 people', desc:'Move beyond AI hype and design practical adoption roadmaps for teams, products and operations.', accent:'ai' },
  { n:'05', title:'FOUNDER TRACK', category:'Building & Scaling', duration:'12 weeks', size:'18 people', desc:'Pressure-test the business model, operating system and leadership choices behind your next stage.', accent:'founder' },
  { n:'06', title:'CAREER ACCELERATOR', category:'Career Strategy', duration:'8 weeks', size:'20 people', desc:'Clarify the next move, sharpen your point of view and build evidence for the role you want.', accent:'career' },
]

const weeks = [
  ['01','Leading yourself','Attention before ambition.'],['02','Making decisions','Build a repeatable decision practice.'],['03','Building trust','Make candour useful and specific.'],['04','Managing conflict','Disagree without losing momentum.'],['05','Strategic communication','Make complexity legible.'],['06','Leading change','Create movement without theatre.'],['07','High-performance teams','Design the conditions for good work.'],['08','Executive presence','Earn attention without demanding it.'],['09','Complex decisions','Navigate competing truths.'],['10','Leadership operating system','Turn insight into a durable practice.']
]

const faculty = [
  ['Maya Bennett','Leadership & Organisations','Former Strategy Director','12 years in transformation','Speaker · Advisor · Mentor','https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'],
  ['Daniel Wong','Strategy & Transformation','Former Transformation Partner','14 years across growth & ops','Advisor · Operator · Mentor','https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80'],
  ['Elena Rossi','Product & Innovation','Former VP Product','11 years building digital products','Product leader · Advisor','https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80'],
  ['Marcus Reed','AI & Business','AI Strategy Executive','9 years in applied AI','Speaker · Advisor','https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80']
]

const articles = [
  ['DECISION-MAKING','The difference between knowing and doing','12 Sep 2026','7 min'],
  ['LEADERSHIP','How great leaders make difficult decisions','04 Sep 2026','9 min'],
  ['AI & BUSINESS','Building an AI strategy without chasing hype','28 Aug 2026','8 min'],
  ['CAREERS','What ambitious careers actually need','17 Aug 2026','6 min']
]

export function NexusPage() {
  const [menu, setMenu] = useState(false)
  const [activeProgram, setActiveProgram] = useState(0)
  const [activeWeek, setActiveWeek] = useState(0)
  const [career, setCareer] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, .25], [0, 80])

  return <main className="project-nexus">
    <motion.header className="nav" initial={{y:-80}} animate={{y:0}} transition={{duration:.7,ease:[.22,1,.36,1]}}>
      <a href="#top" className="logo">NEXUS<span>•</span></a>
      <nav className="desktop-nav">{['Programs','Method','Faculty','Outcomes','Journal','About'].map(x=><a key={x} href={'#'+x.toLowerCase()}>{x}</a>)}</nav>
      <div className="nav-right"><span className="cohort">COHORT 09 · 2026</span><a className="nav-cta" href="#apply">Apply Now <ArrowUpRight /></a><button className="menu-btn" aria-label="Open menu" onClick={()=>setMenu(true)}><Menu /></button></div>
    </motion.header>

    <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><button className="close" aria-label="Close menu" onClick={()=>setMenu(false)}><X/></button><div className="mobile-links">{['Programs','Method','Faculty','Outcomes','Journal','About'].map((x,i)=><motion.a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)} initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:i*.06}}>{x}<ArrowRight/></motion.a>)}<a href="#apply" onClick={()=>setMenu(false)}>Apply Now <ArrowDownRight/></a></div><span>COHORT 09 · SEPTEMBER 2026</span></motion.div>}</AnimatePresence>

    <section id="top" className="hero section-grid">
      <motion.div className="hero-copy" style={{y:heroY}}>
        <div className="eyebrow"><span>01</span><span>EXECUTIVE EDUCATION / CAREER ACCELERATOR</span></div>
        <h1><span>Learn what</span><em>moves you</em><span>forward.</span></h1>
        <p className="hero-lede">Intensive programs for people building teams, products, companies and careers in a changing world.</p>
        <div className="hero-actions"><a className="button primary" href="#programs">Explore Programs <ArrowRight/></a><a className="text-link" href="#method">How NEXUS Works <ArrowDownRight/></a></div>
      </motion.div>
      <div className="hero-object-wrap">
        <div className="hero-meta"><div><b>COHORT 09</b><span>12 WEEKS</span></div><div><b>LIMITED</b><span>TO 24 PEOPLE</span></div><div><b>SEPTEMBER</b><span>2026</span></div></div>
        <motion.div className="nexus-orbit" animate={{rotate:360}} transition={{duration:45,repeat:Infinity,ease:'linear'}}><div className="orbit-line o1"/><div className="orbit-line o2"/><div className="orbit-line o3"/><div className="core"/><i className="node n1"/><i className="node n2"/><i className="node n3"/><i className="node n4"/><i className="node n5"/><i className="node n6"/></motion.div>
        <div className="object-label label-a">PEOPLE ↔ IDEAS</div><div className="object-label label-b">KNOWLEDGE / 09</div><div className="object-label label-c">LONDON · SINGAPORE · MUMBAI</div>
      </div>
      <div className="application-note">Applications open for September 2026 <span>↗</span></div>
    </section>

    <section className="statement section-grid"><div className="marker">01 / THE IDEA</div><div><h2>Information is everywhere.<br/><em>Progress isn&apos;t.</em></h2><p>NEXUS is designed for people who want to turn knowledge into better decisions, stronger leadership and measurable momentum.</p></div></section>

    <section id="programs" className="programs section-grid"><div className="section-intro"><div className="marker">02 / PROGRAMS</div><h2>Choose the problem<br/><em>you want to move.</em></h2><p>Small cohorts. Serious work. Every program is built around the decisions and challenges that show up in the real world.</p></div><div className="program-list">{programs.map((p,i)=><button className={'program-row '+(activeProgram===i?'active':'')} key={p.title} onMouseEnter={()=>setActiveProgram(i)} onFocus={()=>setActiveProgram(i)} onClick={()=>setActiveProgram(i)}><span className="program-number">{p.n}</span><span className="program-main"><b>{p.title}</b><small>{p.category}</small></span><span className="program-meta">{p.duration}<br/>{p.size}</span><span className="program-desc">{p.desc}</span><span className="program-arrow"><ArrowUpRight/></span></button>)}</div></section>

    <section className="featured"><div className="feature-top"><div><span className="marker">03 / FEATURED PROGRAM</span><p>THE LEADERSHIP LAB</p></div><div className="feature-location">10 WEEKS · 24 PEOPLE<br/>LONDON / HYBRID</div></div><div className="feature-body"><div className="feature-title"><h2>Leadership is a<br/><em>practice,</em> not a title.</h2><p>A rigorous operating system for people who already have responsibility—and want to become better at carrying it.</p><a href="#apply" className="text-link">Apply for the Leadership Lab <ArrowRight/></a></div><div className="week-detail"><div className="week-head"><span>{weeks[activeWeek][0]} / 10</span><span>CURRICULUM</span></div><AnimatePresence mode="wait"><motion.div key={activeWeek} initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-25}} transition={{duration:.3}}><h3>{weeks[activeWeek][1]}</h3><p>{weeks[activeWeek][2]}</p></motion.div></AnimatePresence><div className="week-list">{weeks.map((w,i)=><button key={w[0]} className={activeWeek===i?'selected':''} onClick={()=>setActiveWeek(i)}><span>{w[0]}</span><span>{w[1]}</span>{activeWeek===i?<Minus/>:<Plus/>}</button>)}</div></div></div></section>

    <section id="method" className="method section-grid"><div className="marker">04 / THE METHOD</div><div className="method-main"><div className="method-head"><h2>Learn<br/><em>differently.</em></h2><p>Not a library of content. A practice built around questions, application and reflection.</p></div><div className="method-line">{[['01','Question','Start with a real problem.'],['02','Learn','Understand the frameworks.'],['03','Apply','Use them immediately.'],['04','Reflect','Understand what worked.'],['05','Share','Learn from the cohort.'],['06','Repeat','Build lasting capability.']].map(m=><div className="method-node" key={m[0]}><span>{m[0]}</span><i/><b>{m[1]}</b><small>{m[2]}</small></div>)}</div></div></section>

    <section id="faculty" className="faculty section-grid"><div className="section-intro"><div className="marker">05 / FACULTY</div><h2>People with<br/><em>scar tissue.</em></h2><p>Practitioners who have carried the decisions they teach. Fictional concept faculty for this portfolio project.</p></div><div className="faculty-list">{faculty.map((f,i)=><article key={f[0]} className="faculty-item"><div className="portrait"><img src={f[5]} alt={`${f[0]} portrait`}/><span>0{i+1}</span></div><div className="faculty-copy"><h3>{f[0]}</h3><p>{f[1]}</p><div><b>{f[2]}</b><span>{f[3]}</span><span>{f[4]}</span></div></div><ArrowUpRight/></article>)}</div></section>

    <section className="experience"><div className="experience-head"><span className="marker">06 / INSIDE THE COHORT</span><h2>A day designed<br/>around <em>doing.</em></h2></div><div className="dayline">{[['09:00','Live session','A difficult idea, made practical.'],['11:30','Case studio','Work the problem with your peers.'],['14:00','Peer review','Make the thinking sharper.'],['16:30','Mentor office hours','Pressure-test the next move.'],['18:00','Reflection','Capture what changes tomorrow.']].map(d=><div className="day" key={d[0]}><span>{d[0]}</span><i/><b>{d[1]}</b><p>{d[2]}</p></div>)}</div></section>

    <section id="outcomes" className="outcomes section-grid"><div className="marker">07 / OUTCOMES</div><div className="outcomes-main"><h2>Leave with more than<br/><em>a certificate.</em></h2><div className="outcome-grid">{['A sharper point of view','A stronger network','A practical operating system','A body of work','More confident decisions','A clearer next move'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div><p className="concept-data">ILLUSTRATIVE CONCEPT DATA — 92% would recommend · 87% applied a new framework within 30 days · 4.8/5 cohort experience</p></div></section>

    <section className="capstone"><div className="capstone-art"><div className="capstone-index">CAPSTONE / 01</div><div className="paper"><span>PROJECT BRIEF</span><b>REBUILDING<br/>PRODUCT STRATEGY</b><small>Participant: Product Lead · London<br/>Duration: 6 weeks</small><div className="paper-line"/></div></div><div className="capstone-copy"><span className="marker">08 / CAPSTONE</span><h2>Bring a<br/><em>real problem.</em></h2><p>Every participant finishes with a project connected to their work or career. The output is designed to travel beyond the cohort.</p><ul>{['Rebuilding a product strategy','Designing a new business model','Leading a transformation','Preparing for a board presentation','Building an AI adoption roadmap'].map(x=><li key={x}><Check/>{x}</li>)}</ul></div></section>

    <section className="community"><div className="community-copy"><span className="marker">09 / COMMUNITY</span><h2>Your cohort becomes<br/><em>your network.</em></h2><p>Not a directory. A room full of people with different contexts, useful questions and a shared appetite to move.</p></div><div className="network"><div className="net-center">NEXUS<br/><small>COHORT 09</small></div>{['FOUNDER','PRODUCT LEAD','CONSULTANT','DESIGNER','OPERATOR','INVESTOR','MARKETING DIRECTOR','ENGINEER'].map((x,i)=><div key={x} className={'net-node nn'+i}>{x}</div>)}<svg viewBox="0 0 700 520" aria-hidden="true"><line x1="350" y1="260" x2="115" y2="90"/><line x1="350" y1="260" x2="575" y2="85"/><line x1="350" y1="260" x2="70" y2="255"/><line x1="350" y1="260" x2="630" y2="250"/><line x1="350" y1="260" x2="115" y2="430"/><line x1="350" y1="260" x2="575" y2="430"/><line x1="350" y1="260" x2="350" y2="55"/><line x1="350" y1="260" x2="350" y2="470"/></svg></div></section>

    <section className="career"><div className="career-head"><span className="marker">10 / CAREER PATH</span><h2>Where could<br/><em>this take you?</em></h2></div><div className="career-tabs">{['MANAGER → LEADER → EXECUTIVE','SPECIALIST → STRATEGIST → ADVISOR','BUILDER → FOUNDER → OPERATOR'].map((x,i)=><button className={career===i?'on':''} key={x} onClick={()=>setCareer(i)}>{x}</button>)}</div><div className="career-path">{[['Manager','Leader','Executive'],['Specialist','Strategist','Advisor'],['Builder','Founder','Operator']][career].map((x,i)=><div className="career-step" key={x}><span>0{i+1}</span><b>{x}</b><small>{['Lead yourself','Shape the system','Carry the decision'][i]}</small>{i<2&&<ArrowRight/>}</div>)}</div></section>

    <section id="journal" className="journal section-grid"><div className="section-intro"><div className="marker">11 / JOURNAL</div><h2>Ideas worth<br/><em>taking with you.</em></h2><p>Notes on decisions, leadership, technology and ambitious careers. A fictional editorial publication for this concept.</p></div><div className="article-list">{articles.map((a,i)=><a href="#apply" className="article" key={a[1]}><div className={'article-image ai'+i}><span>{a[0]}</span></div><div><small>{a[0]} · {a[2]} · {a[3]}</small><h3>{a[1]}</h3><ArrowUpRight/></div></a>)}</div></section>

    <section id="apply" className="apply section-grid"><div className="apply-copy"><span className="marker">12 / APPLICATION</span><h2>Ready for your<br/><em>next move?</em></h2><p>Tell us what you are trying to change. The application is deliberately short; the conversation can be deeper.</p><div className="apply-facts"><span>SEPTEMBER 2026</span><span>18–24 PEOPLE</span><span>LONDON · SINGAPORE · MUMBAI</span></div></div><div className="form-wrap">{submitted?<motion.div className="success" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}><div className="success-mark"><Check/></div><span>APPLICATION RECEIVED</span><h3>Good. Now let&apos;s talk about the next move.</h3><p>This concept form is local-only. A real backend can be connected to the same submit boundary later.</p><button className="button primary" onClick={()=>setSubmitted(false)}>Send another application <ArrowRight/></button></motion.div>:<form onSubmit={e=>{e.preventDefault();setSubmitted(true)}}><div className="form-grid"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Current role<input required name="role" placeholder="Product Lead, Founder, Consultant…"/></label><label>Experience level<select defaultValue=""><option value="" disabled>Select one</option><option>Early career</option><option>Manager</option><option>Senior leader</option><option>Founder / operator</option></select></label><label>Program<select defaultValue=""><option value="" disabled>Choose a program</option>{programs.map(p=><option key={p.title}>{p.title}</option>)}</select></label><label>Why NEXUS?<textarea required name="why" placeholder="What would you like to become better at?"/></label><label className="wide">What are you trying to change?<textarea required name="change" placeholder="A decision, a team, a product, a career move…"/></label></div><button className="button primary" type="submit">Submit Application <ArrowRight/></button></form>}</div></section>

    <section className="cohort-info"><div><span className="marker">13 / NEXT COHORT</span><h2>September<br/><em>2026.</em></h2></div><div className="info-grid"><div><small>DURATION</small><b>6–12 weeks</b><span>Depending on program</span></div><div><small>FORMAT</small><b>Hybrid</b><span>Designed for working people</span></div><div><small>LOCATIONS</small><b>London · Singapore · Mumbai</b><span>Selected sessions in person</span></div><div><small>CLASS SIZE</small><b>18–24 people</b><span>Application-led cohorts</span></div></div></section>

    <section className="final-cta"><span className="marker">14 / THE NEXT CHAPTER</span><h2>Your next chapter deserves<br/><em>a better system.</em></h2><p>Choose a program, bring a real problem and build the capability to move it forward.</p><div><a className="button light" href="#apply">Apply Now <ArrowRight/></a><a className="text-link light-link" href="#programs">Explore Programs <ArrowDownRight/></a></div></section>

    <footer id="about"><div className="footer-top"><div><a className="footer-logo" href="#top">NEXUS<span>•</span></a><p>EXECUTIVE EDUCATION<br/>CAREER ACCELERATOR</p></div><div className="footer-locations"><span>London</span><span>Singapore</span><span>Mumbai</span></div><div className="footer-links"><a href="#programs">Programs</a><a href="#method">Method</a><a href="#faculty">Faculty</a><a href="#outcomes">Outcomes</a><a href="#journal">Journal</a><a href="#about">About</a></div></div><div className="footer-bottom"><div><span>hello@nexus.example</span><span>+44 20 0000 0000</span></div><div><a href="#about">LinkedIn</a><a href="#about">Instagram</a><a href="#about">YouTube</a></div><div><a href="#about">Privacy</a><a href="#about">Terms</a></div></div></footer>
  </main>
}

function ArrowUpRight(){ return <ExternalLink size={18} strokeWidth={1.7}/> }
