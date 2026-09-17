import Link from "next/link";
import Container from "@/components/ui/Container";
import { navigation, siteConfig } from "@/lib/constants";

export default function Footer() {
  return <footer className="border-t border-border py-10"><Container><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="font-heading text-lg font-semibold">BIMARSH RAI</p><p className="mt-1 text-sm text-muted-foreground">{siteConfig.title}</p><p className="mt-4 text-xs text-muted-foreground">© 2026 Bimarsh Rai. All rights reserved.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">{navigation.map(item => <Link key={item.href} href={item.href} className="hover:text-foreground">{item.label}</Link>)}<a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a></div></div></Container></footer>;
}
