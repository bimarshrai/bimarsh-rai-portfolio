import type { Metadata } from "next";
import MonumentPage from "@/components/monument/MonumentPage";

export const metadata: Metadata = {
  title: "MONUMENT — Architecture & Real Estate",
  description: "Spatial property presentation concept. Explore this architecture & real estate concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/monument",
  },
  openGraph: {
    title: "MONUMENT — Architecture & Real Estate",
    description: "Spatial property presentation concept. Explore this architecture & real estate concept by Bimarsh Rai.",
    url: "/work/monument",
    type: "website",
  },
};

export default function MonumentProject() {
  return <MonumentPage />;
}
