import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/work/ProjectCard";
import Reveal from "@/components/ui/Reveal";

export default function SelectedWork() {
  return <section id="work" className="section-divider py-24 sm:py-32">
    <Container>
      <Reveal><SectionHeading eyebrow="Selected work" title="Twelve digital worlds. One obsession with detail." description="A collection of concept experiences across industries I want to work with — each designed with its own visual language, interaction model, and business goal." /></Reveal>
      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project,index)=><Reveal key={project.slug} delay={index*0.035}><ProjectCard project={project} index={index}/></Reveal>)}
      </div>
    </Container>
  </section>;
}
