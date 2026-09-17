import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { process } from "@/lib/data/process";

export default function Process() {
  return (
    <section className="section-divider py-24 sm:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow="Process" title="A clear path from first conversation to launch." /></Reveal>
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-border sm:grid-cols-5">
          {process.map((step, index) => <Reveal key={step.number} delay={index * .05}><div className={`min-h-52 bg-surface/45 p-6 sm:min-h-64 sm:p-7 ${index !== 0 ? "border-t sm:border-l sm:border-t-0" : ""} border-border`}><span className="text-xs text-violet-bright">{step.number}</span><h3 className="mt-12 font-heading text-xl font-medium">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p></div></Reveal>)}
        </div>
      </Container>
    </section>
  );
}
