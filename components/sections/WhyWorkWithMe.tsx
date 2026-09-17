import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  { title: "Design First", description: "Every build starts with a clear visual direction and user experience." },
  { title: "Built for Every Screen", description: "Responsive layouts that feel intentional on mobile, tablet, and desktop." },
  { title: "Performance Matters", description: "Clean implementation with speed and usability treated as part of the design." },
  { title: "Direct Communication", description: "Simple, transparent collaboration without unnecessary layers." },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section-divider py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow="Why Work With Me" title="A thoughtful approach to every build." /></Reveal>
          <Reveal delay={.08}>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
              {reasons.map((reason) => <div key={reason.title} className="group bg-background p-7 sm:p-8"><div className="flex items-center justify-between"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-violet-bright"><Check size={14} /></span><ArrowUpRight size={17} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-9 font-heading text-xl font-medium">{reason.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{reason.description}</p></div>)}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
