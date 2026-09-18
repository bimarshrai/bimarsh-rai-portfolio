import type { Metadata } from "next";
import FormaPage from "@/components/forma/FormaPage";

export const metadata: Metadata = {
  title: "FORMA — Architecture + Construction",
  description: "Architecture and design-build studio. Explore this architecture + construction concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/forma",
  },
  openGraph: {
    title: "FORMA — Architecture + Construction",
    description: "Architecture and design-build studio. Explore this architecture + construction concept by Bimarsh Rai.",
    url: "/work/forma",
    type: "website",
  },
};

export default function FormaProject() {
  return <FormaPage />;
}
