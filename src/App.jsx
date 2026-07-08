import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import MarqueeStrip from "./sections/MarqueeStrip";
import Coverage from "./sections/Coverage";
import Process from "./sections/Process";
import Fleet from "./sections/Fleet";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Membership from "./sections/Membership";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="grain bg-obsidian">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Coverage />
        <Process />
        <Fleet />
        <Stats />
        <Testimonials />
        <Membership />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
