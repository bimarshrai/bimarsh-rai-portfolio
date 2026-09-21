import "@/components/vow/vow.css";
import type { Metadata } from "next";
import { VowPage } from "@/components/vow/VowPage";

export const metadata: Metadata = {
  title: "VOW — Destination Weddings",
  description: "Luxury wedding and event studio. Explore this destination weddings concept by Bimarsh Rai.",
  alternates: { canonical: "/work/vow" },
  openGraph: {
    title: "VOW — Destination Weddings",
    description: "Luxury wedding and event studio. Explore this destination weddings concept by Bimarsh Rai.",
    url: "/work/vow",
    type: "website",
  },
};

export default function VowProject() {
  return <VowPage />;
}
