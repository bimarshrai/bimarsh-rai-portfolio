import "@/components/solaire/solaire.css";
import type { Metadata } from "next";
import { SolairePage } from "@/components/solaire/SolairePage";

export const metadata: Metadata = {
  title: "SOLAIRE — Luxury Resort",
  description: "Destination hospitality experience. Explore this luxury resort concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/solaire",
  },
  openGraph: {
    title: "SOLAIRE — Luxury Resort",
    description: "Destination hospitality experience. Explore this luxury resort concept by Bimarsh Rai.",
    url: "/work/solaire",
    type: "website",
  },
};

export default function SolaireProject() {
  return <SolairePage />;
}
