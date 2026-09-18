import type { Metadata } from "next";
import NexusPage from "@/components/nexus/NexusPage";

export const metadata: Metadata = {
  title: "NEXUS — Executive Education",
  description: "Premium cohort and career accelerator. Explore this executive education concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/nexus",
  },
  openGraph: {
    title: "NEXUS — Executive Education",
    description: "Premium cohort and career accelerator. Explore this executive education concept by Bimarsh Rai.",
    url: "/work/nexus",
    type: "website",
  },
};

export default function NexusProject() {
  return <NexusPage />;
}
