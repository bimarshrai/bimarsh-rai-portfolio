import type { Metadata } from "next";
import OrbitPage from "@/components/orbit/OrbitPage";

export const metadata: Metadata = {
  title: "ORBIT — SaaS / AI",
  description: "Command-center product experience. Explore this saas / ai concept by Bimarsh Rai.",
  alternates: {
    canonical: "/work/orbit",
  },
  openGraph: {
    title: "ORBIT — SaaS / AI",
    description: "Command-center product experience. Explore this saas / ai concept by Bimarsh Rai.",
    url: "/work/orbit",
    type: "website",
  },
};

export default function OrbitProject() {
  return <OrbitPage />;
}
