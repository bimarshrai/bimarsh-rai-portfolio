import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <About />
        <Process />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
