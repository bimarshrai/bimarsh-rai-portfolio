import type { Metadata } from "next";
import VerdictPage from "@/components/verdict/VerdictPage";

export const metadata: Metadata = {
  title: "VERDICT — Specialist Law Firm",
  description: "International legal advisory concept. Explore this specialist law firm concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/verdict",
  },
  openGraph: {
    title: "VERDICT — Specialist Law Firm",
    description: "International legal advisory concept. Explore this specialist law firm concept by Bimarsh Rai.",
    url: "/work/verdict",
    type: "website",
  },
};

export default function VerdictProject() {
  return <VerdictPage />;
}
