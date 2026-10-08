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
          <section id="about" className="cosmic-section-divider py-20 sm:py-28">
            <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-[.72fr_1.28fr] md:px-10 lg:px-16">
              <div><About /></div>
              <div id="services"><Services /></div>
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </PageLoader>
    </>
  );
}
