import { Code2, MonitorSmartphone, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  { icon: MonitorSmartphone, title: "Responsive by default", text: "Layouts that feel intentional from phone to desktop." },
  { icon: Zap, title: "Performance-minded", text: "Fast interfaces without unnecessary visual baggage." },
  { icon: Code2, title: "Modern frontend", text: "Clean, maintainable builds using current web tooling." },
];

export default function About() {
  return (
    <section id="about" className="section-divider py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow="About Me" title="Design with purpose. Build with care." /></Reveal>
          <Reveal delay={.08}>
            <div className="max-w-3xl">
              <p className="font-heading text-2xl leading-relaxed tracking-tight sm:text-3xl">I&apos;m Bimarsh, a web designer and developer focused on creating modern websites that help growing businesses look credible, communicate clearly, and make a stronger first impression.</p>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground">I combine visual design, thoughtful user experience, and modern frontend development to create websites that feel distinctive without sacrificing speed, responsiveness, or usability.</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">{highlights.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-border bg-surface/60 p-4"><Icon size={17} className="text-violet-bright" /><p className="mt-5 font-heading text-sm font-medium">{title}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p></div>)}</div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
