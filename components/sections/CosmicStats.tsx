import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [["04+","Years creating digital work"],["35+","Projects shipped"],["100%","Curious about the next thing"]];

export default function CosmicStats() {
  return (
    <section className="cosmic-section-divider bg-[#0a0a0a] py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {stats.map(([number,label],index)=>(
            <motion.div key={number} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,delay:index*.05}} className="border-t border-[#1f1f1f] pt-6">
              <p className="cosmic-display text-6xl italic leading-none md:text-8xl">{number}</p>
              <p className="mt-4 text-[10px] uppercase tracking-[.22em] text-[#858585]">{label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
