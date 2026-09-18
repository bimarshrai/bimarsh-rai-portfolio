import type { Metadata } from "next";
import MusePage from "@/components/muse/MusePage";

export const metadata: Metadata = {
  title: "MUSE — Beauty Atelier",
  description: "Editorial beauty and atelier experience. Explore this beauty atelier concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/muse",
  },
  openGraph: {
    title: "MUSE — Beauty Atelier",
    description: "Editorial beauty and atelier experience. Explore this beauty atelier concept by Bimarsh Rai.",
    url: "/work/muse",
    type: "website",
  },
};

export default function MuseProject() {
  return <MusePage />;
}
