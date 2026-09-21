import "@/components/aurelia/aurelia.css";
import type { Metadata } from "next";
import { AureliaPage } from "@/components/aurelia/AureliaPage";

export const metadata: Metadata = {
  title: "AURELIA — Private Medicine",
  description: "Private medicine and specialist care. Explore this private medicine concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/aurelia",
  },
  openGraph: {
    title: "AURELIA — Private Medicine",
    description: "Private medicine and specialist care. Explore this private medicine concept by Bimarsh Rai.",
    url: "/work/aurelia",
    type: "website",
  },
};

export default function AureliaProject() {
  return <AureliaPage />;
}
