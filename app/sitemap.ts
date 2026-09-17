import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
 const base="https://bimarsh-rai-portfolio.vercel.app";
 return [{url:base,lastModified:new Date()},...projects.map(p=>({url:`${base}/work/${p.slug}`,lastModified:new Date()}))];
}
