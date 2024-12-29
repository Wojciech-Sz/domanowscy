import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Office from "@/components/sections/Office";
import Projects from "@/components/sections/Projects";
import { heroImages } from "@/constants/gallery";

export default function Home() {
  return (
    <>
      <Hero className="hero h-[83vh]" heroImages={heroImages}>
        <div className="hero-text">
          <h1>Architektura / Wnętrza</h1>
          <p className="max-w-[30ch] text-balance">
            Pomożemy Wam stworzyć Waszą niepowtarzalną przestrzeń
          </p>
        </div>
      </Hero>
      <Office />
      <Projects />
      <About />
      <Appointment />
      <Contact />
    </>
  );
}
