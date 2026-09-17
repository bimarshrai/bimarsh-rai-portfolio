'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Menu, X, Plus, Minus, MapPin, CalendarDays, Users } from 'lucide-react';

const img = (id:string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2200&q=85`;
const images = {
  hero: img('photo-1533104816931-20fa691ff6ca'),
  arrive: img('photo-1516483638261-f4dbaf036963'),
  detail: img('photo-1498307833015-e7b400441eb8'),
  terrace: img('photo-1600607687920-4e2a09cf159d'),
  sea: img('photo-1507525428034-b723cf961d3e'),
  villa: img('photo-1600210492486-724fe5c67fb0'),
  boat: img('photo-1500534623283-312aade485b7'),
  food: img('photo-1414235077428-338989a2e8c0'),
  spa: img('photo-1540555700478-4be289fbecef'),
  capri: img('photo-1530789253388-582c481c54b0'),
  ravello: img('photo-1528127269322-539801943592'),
  lemon: img('photo-1590502593747-42a996133562'),
  sunset: img('photo-1507525428034-b723cf961d3e'),
};

const resort = [
  ['THE HOUSE','Limestone walls, linen, quiet courtyards and rooms that open towards the water.',images.arrive],
  ['THE GARDEN','Lemon trees, rosemary and terraces stitched into the hillside above the coast.',images.lemon],
  ['THE SEA','A private ladder into blue water, reached before breakfast and kept until sunset.',images.sea],
  ['THE TERRACE','Breakfast beneath lemon trees, afternoons beneath linen umbrellas, evenings lit by the last light of the coast.',images.terrace],
];
const stays = [
  ['CASA MARE','Sea View Suite','72 m²','2 guests','Panoramic sea view','Private terrace · Breakfast included',images.sea,'From €1,250 / night'],
  ['CASA LIMONE','Garden Suite','64 m²','2 guests','Lemon garden','Outdoor shower · Private courtyard',images.lemon,'From €980 / night'],
  ['LA TORRE','Private Residence','128 m²','4 guests','Coastal panorama','Two terraces · Library · Butler service',images.villa,'From €2,400 / night'],
  ['THE VILLA','Entire Estate','410 m²','8 guests','Sea & mountain view','Private pool · Chef kitchen · Dedicated host',images.arrive,'From €4,800 / night'],
];
const experiences = [
  ['01','A private boat to Capri','A slow crossing to the island, with a captain who knows the quiet coves.',images.boat],
  ['02','Sunrise on the Path of the Gods','First light over the cliffs, followed by coffee on a hillside terrace.',images.ravello],
  ['03','Lemon grove breakfast','Warm pastries, citrus, ricotta and espresso beneath the trees.',images.lemon],
  ['04','Amalfi cooking table','A long lunch shaped by market produce and recipes passed through generations.',images.food],
  ['05','Private wine tasting','Volcanic whites and old-vine reds poured at golden hour.',images.villa],
  ['06','Sunset sail','Leave the coast behind for an hour of sea, wind and disappearing light.',images.sunset],
  ['07','Ceramic workshop','Shape a small piece with a local master in a sunlit studio.',images.detail],
  ['08','Hidden cove swim','A private swim reached by boat, towel and fruit waiting on the rocks.',images.sea],
];
const destinations = [
  ['AMALFI','25 min by car','Cathedral steps, fishermen’s lanes and the original paper mills.','The coast in its most intimate form.',images.arrive],
  ['POSITANO','18 min by boat','A vertical town of painted facades, boutiques and sea-facing terraces.','Come for the view, stay after the crowds leave.',images.hero],
  ['CAPRI','45 min by private boat','An island day without the crowds, timed around the changing light.','Blue water, stone paths, long lunch.',images.capri],
  ['RAVELLO','35 min by car','Gardens, music and mountain views above the sea.','A quieter altitude on the same coast.',images.ravello],
];
const seasons = [
  ['SPRING','Lemon blossom','Soft mornings','Long lunches',images.lemon],
  ['SUMMER','Sea days','Late dinners','Golden evenings',images.sea],
  ['AUTUMN','Warm stone','Quiet terraces','Harvest tables',images.villa],
  ['WINTER','Private stays','Firelight','Empty coastline',images.spa],
];

export function SolairePage() {
  const [scrolled,setScrolled]=useState(false), [menu,setMenu]=useState(false), [resortIndex,setResortIndex]=useState(3), [stayIndex,setStayIndex]=useState(0), [experience,setExperience]=useState(0), [destination,setDestination]=useState(2), [season,setSeason]=useState(0), [guests,setGuests]=useState(2), [notice,setNotice]=useState(false);
  const mx=useMotionValue(0), my=useMotionValue(0); const sx=useSpring(mx,{stiffness:70,damping:20}), sy=useSpring(my,{stiffness:70,damping:20});
  useEffect(()=>{const on=()=>setScrolled(window.scrollY>40);window.addEventListener('scroll',on);return()=>window.removeEventListener('scroll',on)},[]);
  const go=(id:string)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
  return <main className="project-solaire" onMouseMove={e => { mx.set((e.clientX / window.innerWidth - .5) * 8); my.set((e.clientY / window.innerHeight - .5) * 8); }} >
    <nav className={scrolled?'nav solid':'nav'}><button className="logo" onClick={()=>go('top')}>SOLAIRE</button><div className="navlinks">{[['The Resort','resort'],['Stay','stay'],['Experiences','experiences'],['Dining','dining'],['Wellness','wellness'],['Journal','journal']].map(([t,id])=><button key={id} onClick={()=>go(id)}>{t}</button>)}</div><div className="navright"><span>AMALFI COAST · ITALY</span><button className="reserve" onClick={()=>go('reserve')}>Reserve <ArrowUpRight size={15}/></button></div><button className="menub" aria-label="Open menu" onClick={()=>setMenu(true)}><Menu/></button></nav>
    <AnimatePresence>{menu&&<motion.div className="mobilemenu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><button className="close" onClick={()=>setMenu(false)}><X/></button><div className="mobilebrand">SOLAIRE</div><div className="mobilelinks">{[['The Resort','resort'],['Stay','stay'],['Experiences','experiences'],['Dining','dining'],['Wellness','wellness'],['Journal','journal']].map(([t,id])=><button key={id} onClick={()=>go(id)}>{t}<ArrowUpRight size={18}/></button>)}</div><p>AMALFI COAST · ITALY</p></motion.div>}</AnimatePresence>

    <section id="top" className="hero"><motion.div className="heroimg" style={{x:sx,y:sy}} initial={{scale:1.08}} animate={{scale:1}} transition={{duration:2.2,ease:[.16,1,.3,1]}}/><div className="heroShade"/><div className="heroMeta left"><span>POSITANO · AMALFI COAST</span><span>36°32&apos;N · 14°29&apos;E</span></div><div className="heroCopy"><motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.5}}>A PRIVATE COASTAL RETREAT</motion.p><motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.7,duration:1}}>Between<br/><em>sea and sky.</em></motion.h1><motion.div className="heroActions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.05}}><button onClick={()=>go('reserve')}>Reserve your stay <ArrowUpRight size={17}/></button><button onClick={()=>go('resort')} className="ghost">Explore the resort <ArrowDownRight size={17}/></button></motion.div></div><div className="heroMeta right"><span>SEPTEMBER · 2026</span><span className="scroll">SCROLL <i/></span></div></section>

    <section className="opening section-pad"><div className="eyebrow">01 — ARRIVAL</div><div className="openingGrid"><div><h2>Arrive<br/><em>slowly.</em></h2><p className="lead">Hidden above the Mediterranean, SOLAIRE is designed for the rare moments when nothing needs to happen.</p><p className="bodycopy">There is no lobby to cross and no schedule to keep. Just stone warmed by the sun, the scent of citrus in the garden and a horizon that seems to widen each morning.</p></div><div className="openingVisual"><div className="image tall" style={{backgroundImage:`url(${images.arrive})`}}/><div className="image small" style={{backgroundImage:`url(${images.detail})`}}/></div></div></section>

    <section id="resort" className="resort dark"><div className="section-head"><span>02 — THE RESORT</span><span>A HOUSE ABOVE THE WATER</span></div><div className="resortGrid"><div className="resortImage"><AnimatePresence mode="wait"><motion.div key={resortIndex} className="image full" style={{backgroundImage:`url(${resort[resortIndex][2]})`}} initial={{opacity:0,scale:1.04}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.7}}/></AnimatePresence><div className="imageCaption">SOLAIRE / {String(resortIndex+1).padStart(2,'0')}</div></div><div className="resortCopy"><div className="resortCount">0{resortIndex+1} / 04</div><h2>{resort[resortIndex][0]}</h2><p>{resort[resortIndex][1]}</p><div className="resortTabs">{resort.map((r,i)=><button key={r[0]} onClick={()=>setResortIndex(i)} className={i===resortIndex?'active':''}>{r[0]}<span>{String(i+1).padStart(2,'0')}</span></button>)}</div></div></div></section>

    <section id="stay" className="stay section-pad"><div className="section-head light"><span>03 — STAY</span><span>FOUR WAYS TO ARRIVE</span></div><div className="stayIntro"><h2>Rooms that<br/><em>open to blue.</em></h2><p>Each room is less a category than a way of inhabiting the landscape. Doors open onto terraces, gardens or the full sweep of the coast.</p></div><div className="stayBrowser"><div className="stayImage" style={{backgroundImage:`url(${stays[stayIndex][5]})`}}/><div className="stayInfo"><span className="eyebrow">{stays[stayIndex][0]}</span><h3>{stays[stayIndex][1]}</h3><div className="facts"><span>{stays[stayIndex][2]}</span><span>{stays[stayIndex][3]}</span><span>{stays[stayIndex][4]}</span></div><p>{stays[stayIndex][5]}</p><strong>{stays[stayIndex][6]}</strong><button onClick={()=>setNotice(true)}>Explore this stay <ArrowUpRight size={16}/></button></div></div><div className="stayIndex">{stays.map((s,i)=><button key={s[0]} onClick={()=>setStayIndex(i)} className={i===stayIndex?'active':''}><span>0{i+1}</span><span>{s[0]}</span><span>{s[1]}</span><ArrowUpRight size={15}/></button>)}</div></section>

    <section className="villa"><div className="villaBg" style={{backgroundImage:`url(${images.villa})`}}/><div className="villaShade"/><div className="villaCopy"><span className="eyebrow">04 — SIGNATURE RESIDENCE</span><h2>The Villa</h2><p>A private world above the sea.</p><div className="villaFacts"><span>4 bedrooms</span><span>Private pool</span><span>Chef&apos;s kitchen</span><span>Dedicated host</span></div><div className="villaPrice"><strong>From €4,800 / night</strong><small>Minimum 3 nights · Fictional concept content</small></div><button onClick={()=>setNotice(true)}>Explore the Villa <ArrowUpRight size={16}/></button></div></section>

    <section id="experiences" className="experiences dark"><div className="section-head"><span>05 — EXPERIENCES</span><span>THE DAYS ARE YOURS</span></div><div className="experienceGrid"><div className="experienceVisual"><AnimatePresence mode="wait"><motion.div key={experience} className="image full" style={{backgroundImage:`url(${experiences[experience][3]})`}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.5}}/></AnimatePresence><span>{experiences[experience][0]}</span></div><div className="experienceList">{experiences.map((e,i)=><motion.button key={e[1]} onMouseEnter={()=>setExperience(i)} onClick={()=>setExperience(i)} className={i===experience?'active':''}><span>{e[0]}</span><strong>{e[1]}</strong><motion.div animate={{height:i===experience?'auto':0,opacity:i===experience?1:0}}><p>{e[2]}</p></motion.div><ArrowUpRight size={17}/></motion.button>)}</div></div></section>

    <section id="dining" className="dining section-pad"><div className="diningVisual" style={{backgroundImage:`url(${images.food})`}}><span>IL LUOGO / 07:42 PM</span></div><div className="diningCopy"><div className="eyebrow">06 — DINING</div><h2>Il<br/><em>Luogo.</em></h2><p className="lead">Mediterranean cuisine shaped by the coast.</p><p className="bodycopy">Produce arrives from the hills above us and the sea below. The menu follows the seasons rather than the clock.</p><div className="menuLines">{[['RAW','Citrus · Sea Bream · Basil'],['PASTA','Lemon · Ricotta · Wild Herbs'],['FIRE','Local Catch · Olive · Charred Fennel'],['DOLCE','Almond · Fig · Sea Salt']].map(x=><div key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong></div>)}</div><button onClick={()=>setNotice(true)}>Discover IL LUOGO <ArrowUpRight size={16}/></button></div></section>

    <section id="wellness" className="wellness dark"><div className="wellnessBg" style={{backgroundImage:`url(${images.spa})`}}/><div className="wellnessShade"/><div className="wellnessCopy"><div className="eyebrow">07 — WELLNESS</div><h2>Make space<br/><em>for nothing.</em></h2><p>Morning yoga, private massage, Mediterranean sauna and rituals shaped around the rhythm of the sea.</p></div><div className="wellnessIndex">{['Morning yoga','Private massage','Mediterranean sauna','Breathwork','Cold-water ritual','Personal training'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><ArrowUpRight size={15}/></div>)}</div></section>

    <section className="topo section-pad"><div className="section-head light"><span>08 — A SENSE OF PLACE</span><span>THE HOUSE / THE LAND</span></div><div className="topoGrid"><div><h2>A landscape<br/><em>you can touch.</em></h2><p>The coast is not a backdrop at SOLAIRE. It is the architecture: mountain, limestone, sea and a house suspended between them.</p></div><div className="topographic" style={{transform:`rotateX(${18+Number(sy.get())}deg) rotateY(${Number(sx.get())}deg)`}}><div className="seaPlate"/><div className="layer l1"/><div className="layer l2"/><div className="layer l3"/><div className="layer l4"/><div className="pin"><MapPin size={18}/><span>SOLAIRE</span></div></div></div></section>

    <section className="coast dark"><div className="section-head"><span>09 — THE COAST</span><span>PART OF THE STAY</span></div><div className="coastTop"><h2>The coast is<br/><em>part of the stay.</em></h2><p>Four places, four tempos. Leave when you want, return before the light changes.</p></div><div className="destination"><div className="destinationImage" style={{backgroundImage:`url(${destinations[destination][4]})`}}/><div className="destinationInfo"><span className="eyebrow">{destinations[destination][0]}</span><h3>{destinations[destination][1]}</h3><p>{destinations[destination][3]}</p><small>{destinations[destination][2]}</small><div className="destinationTabs">{destinations.map((d,i)=><button key={d[0]} onClick={()=>setDestination(i)} className={i===destination?'active':''}>{d[0]}</button>)}</div></div></div></section>

    <section id="journal" className="journal section-pad"><div className="section-head light"><span>10 — JOURNAL</span><span>NOTES FROM THE COAST</span></div><div className="journalGrid">{[['Where the mountains meet the sea','FIELD NOTES · 12 SEP 2026','6 MIN','Ravello',images.ravello],['An afternoon in Ravello','PLACES · 04 SEP 2026','4 MIN','Ravello',images.arrive],['The quiet side of Capri','GUIDES · 28 AUG 2026','7 MIN','Capri',images.capri],['Cooking with Amalfi lemons','TABLE · 16 AUG 2026','5 MIN','Amalfi',images.lemon]].map((a,i)=><article key={a[0]} className={i===0?'featured':''}><div className="journalImage" style={{backgroundImage:`url(${a[4]})`}}/><div className="articleMeta"><span>{a[1]}</span><span>{a[2]}</span></div><h3>{a[0]}</h3><p>{a[3]} <ArrowUpRight size={15}/></p></article>)}</div></section>

    <section className="seasons dark"><div className="section-head"><span>11 — SEASONS</span><span>THE HOUSE, FOUR WAYS</span></div><div className="seasonVisual"><div className="seasonImage" style={{backgroundImage:`url(${seasons[season][4]})`}}/><div className="seasonOverlay"><span>0{season+1} / 04</span><h2>{seasons[season][0]}</h2><p>{seasons[season][1]} · {seasons[season][2]} · {seasons[season][3]}</p></div></div><div className="seasonTabs">{seasons.map((s,i)=><button key={s[0]} onClick={()=>setSeason(i)} className={i===season?'active':''}><span>{s[0]}</span><small>{s[1]}<br/>{s[2]}<br/>{s[3]}</small></button>)}</div></section>

    <section id="reserve" className="reserveSection section-pad"><div className="reserveIntro"><div className="eyebrow">12 — RESERVATIONS</div><h2>Your time<br/><em>begins here.</em></h2><p>Tell us when you&apos;d like to arrive and our reservations team will take care of the rest.</p></div><div className="booking"><label>ARRIVAL <CalendarDays size={17}/><input type="date" defaultValue="2026-10-14"/></label><label>DEPARTURE <CalendarDays size={17}/><input type="date" defaultValue="2026-10-18"/></label><label>GUESTS <Users size={17}/><div className="guest"><button onClick={()=>setGuests(Math.max(1,guests-1))}><Minus size={15}/></button><span>{guests} guests</span><button onClick={()=>setGuests(Math.min(8,guests+1))}><Plus size={15}/></button></div></label><button className="check" onClick={()=>setNotice(true)}>Check availability <ArrowUpRight size={16}/></button><small>Concept interface — no live availability is connected.</small></div></section>

    <section className="location dark"><div className="locationCopy"><div className="eyebrow">13 — FIND US</div><h2>Above the<br/><em>blue.</em></h2><p>Via della Marina<br/>Amalfi Coast<br/>Italy</p><div className="arrivalModes"><span>Naples Airport <b>1h 20</b></span><span>Private transfer <b>Door to door</b></span><span>Ferry <b>Seasonal</b></span><span>Helicopter <b>On request</b></span></div></div><div className="map"><div className="coastline c1"/><div className="coastline c2"/><div className="coastline c3"/><div className="mapLabel resortPin">SOLAIRE</div><div className="mapLabel amalfi">AMALFI</div><div className="mapLabel capriLabel">CAPRI</div><div className="route r1"/><div className="route r2"/></div></section>

    <section className="finalCta"><div className="finalBg" style={{backgroundImage:`url(${images.sunset})`}}/><div className="finalShade"/><div className="finalCopy"><span>AMALFI COAST · ITALY</span><h2>Leave the<br/><em>ordinary behind.</em></h2><p>Come for the view. Stay for everything between.</p><div><button onClick={()=>go('reserve')}>Reserve your stay <ArrowUpRight size={17}/></button><button className="ghost" onClick={()=>go('resort')}>Explore the resort <ArrowDownRight size={17}/></button></div></div></section>

    <footer><div className="footerBrand">SOLAIRE<span>PRIVATE COASTAL RETREAT</span></div><div className="footerCol"><span>AMALFI COAST · ITALY</span>{[['The Resort','resort'],['Stay','stay'],['Experiences','experiences'],['Dining','dining'],['Wellness','wellness'],['Journal','journal']].map(([t,id])=><button key={id} onClick={()=>go(id)}>{t}</button>)}</div><div className="footerCol"><span>RESERVATIONS</span><a href="mailto:stay@solaire.example">stay@solaire.example</a><a href="tel:+390000000000">+39 000 000 0000</a><span>SOCIAL</span><a href="#">Instagram</a><a href="#">Pinterest</a></div><div className="footerBottom"><span>© 2026 SOLAIRE · FICTIONAL CONCEPT</span><span>Privacy · Terms</span></div></footer>
    <AnimatePresence>{notice&&<motion.div className="toast" initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{y:30,opacity:0}}><div><strong>SOLAIRE is a concept experience.</strong><p>This interaction is visual only — no real availability or reservation is being submitted.</p></div><button onClick={()=>setNotice(false)}><X size={16}/></button></motion.div>}</AnimatePresence>
  </main>
}
