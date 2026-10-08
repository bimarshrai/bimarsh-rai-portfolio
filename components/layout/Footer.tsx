import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a] py-7">
      <Container>
        <div className="flex flex-col gap-5 text-xs text-[#858585] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            <a href={"mailto:" + siteConfig.email} className="transition hover:text-white">Email</a>
            <a href={"https://wa.me/91" + siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp</a>
          </div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-[#a7e48a]"/>Available for projects</div>
          <span className="inline-flex items-center gap-1">© 2026 Bimarsh Rai <ArrowUpRight size={12}/></span>
        </div>
      </Container>
    </footer>
  );
}
