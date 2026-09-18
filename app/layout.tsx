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

const siteUrl = "https://bimarsh-rai-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bimarsh Rai — Web Designer & Developer",
    template: "%s | Bimarsh Rai",
  },
  description:
    "Bimarsh Rai is a web designer and developer creating modern, high-performance websites for growing businesses.",
  keywords: [
    "Bimarsh Rai",
    "web designer",
    "web developer",
    "freelance web designer",
    "freelance web developer",
    "website design",
    "Next.js developer",
    "India",
  ],
  authors: [{ name: "Bimarsh Rai" }],
  creator: "Bimarsh Rai",
  publisher: "Bimarsh Rai",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bimarsh Rai — Web Designer & Developer",
    title: "Bimarsh Rai — Web Designer & Developer",
    description:
      "Modern, high-performance websites designed for growing businesses.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Bimarsh Rai — Web Designer & Developer",
    description:
      "Modern, high-performance websites designed for growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bimarsh Rai",
  url: siteUrl,
  jobTitle: "Web Designer & Developer",
  email: "mailto:bimarshwebsite@gmail.com",
  sameAs: ["https://github.com/bimarshrai"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bimarsh Rai — Web Designer & Developer",
  url: siteUrl,
  description:
    "Modern, high-performance websites designed for growing businesses.",
  publisher: {
    "@type": "Person",
    name: "Bimarsh Rai",
  },
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
      <body className="min-h-full bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
