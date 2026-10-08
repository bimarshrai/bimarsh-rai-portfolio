import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Journal from "@/components/sections/Journal";
import Explorations from "@/components/sections/Explorations";
import CosmicStats from "@/components/sections/CosmicStats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <PageLoader>
        <Navbar />
        <main id="main-content">
          <Hero />
          <SelectedWork />
          <Journal />
          <Explorations />
          <CosmicStats />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </PageLoader>
    </>
  );
}
