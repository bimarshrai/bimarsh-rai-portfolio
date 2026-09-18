import "@/components/frame/frame.css";
import type { Metadata } from "next";
import FramePage from "@/components/frame/FramePage";

export const metadata: Metadata = {
  title: "FRAME — Photography Studio",
  description: "Editorial creative studio experience. Explore this photography studio concept by Bimarsh Rai.",
  alternates: { canonical: "/work/frame" },
  openGraph: {
    title: "FRAME — Photography Studio",
    description: "Editorial creative studio experience. Explore this photography studio concept by Bimarsh Rai.",
    url: "/work/frame",
    type: "website",
  },
};

export default function FrameProject() {
  return <FramePage />;
}
