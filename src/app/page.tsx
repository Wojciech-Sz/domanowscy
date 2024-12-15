import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Office from "@/components/sections/Office";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Office />
      <Projects />
      <About />
      <Appointment />
      <Footer />
    </>
  );
}
