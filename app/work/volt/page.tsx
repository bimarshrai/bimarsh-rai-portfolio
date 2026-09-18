import type { Metadata } from "next";
import VoltPage from "@/components/volt/VoltPage";

export const metadata: Metadata = {
  title: "VOLT — Performance & Fitness",
  description: "High-performance training experience. Explore this performance & fitness concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/volt",
  },
  openGraph: {
    title: "VOLT — Performance & Fitness",
    description: "High-performance training experience. Explore this performance & fitness concept by Bimarsh Rai.",
    url: "/work/volt",
    type: "website",
  },
};

export default function VoltProject() {
  return <VoltPage />;
}
