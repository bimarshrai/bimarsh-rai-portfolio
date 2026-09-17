import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="services" className="section-divider py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow="Services" title="Everything you need to build a stronger online presence." /></Reveal>
          <div className="border-t border-border">
            {services.map((service, index) => <Reveal key={service.number} delay={index * .04}><div className="service-row group grid gap-4 border-b border-border py-7 sm:grid-cols-[4rem_1fr_auto] sm:gap-7 sm:py-8"><span className="text-xs text-violet-bright">{service.number}</span><div><h3 className="font-heading text-2xl font-medium">{service.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{service.description}</p></div><ArrowUpRight className="hidden text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-bright sm:block" size={19} /></div></Reveal>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
