import type { Metadata } from "next";
import NoirPage from "@/components/noir/NoirPage";

export const metadata: Metadata = {
  title: "NOIR — Luxury Restaurant",
  description: "Cinematic hospitality concept. Explore this luxury restaurant concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/noir",
  },
  openGraph: {
    title: "NOIR — Luxury Restaurant",
    description: "Cinematic hospitality concept. Explore this luxury restaurant concept by Bimarsh Rai.",
    url: "/work/noir",
    type: "website",
  },
};

export default function NoirProject() {
  return <NoirPage />;
}
