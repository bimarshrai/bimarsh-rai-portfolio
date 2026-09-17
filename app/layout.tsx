import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "@/components/orbit/orbit.css";
import "@/components/verdict/verdict.css";
import "@/components/forma/forma.css";
import "@/components/muse/muse.css";
import "@/components/frame/frame.css";
import "@/components/nexus/nexus.css";
import "@/components/solaire/solaire.css";
import "@/components/vow/vow.css";
import "@/components/aurelia/aurelia.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bimarsh Rai — Web Designer & Developer",
  description:
    "Modern, high-performance websites designed for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
