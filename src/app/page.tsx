import { Metadata } from "next";

import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Office from "@/components/sections/Office";
import Projects from "@/components/sections/Projects";
import { heroImages } from "@/constants/gallery";

export const metadata: Metadata = {
  description:
    "Oferujemy kompleksowe usługi architektoniczne obejmujące projektowanie całych obiektów oraz aranżację wnętrz. Nasze biuro znajduje się w Białymstoku, ale realizujemy projekty na terenie całej Polski.",
  keywords: [
    "budynki",
    "wnętrza",
    "Domanowscy Architekci",
    "budynki mieszkalne",
    "budynki usługowe",
    "architekt białystok",
    "architekt polska",
    "architektura",
    "architekt",
    "architekt wnętrz",
  ],
  openGraph: {
    title: "Domanowscy Architekci | Budynki & Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynków i wnętrz dostosowane do Twoich potrzeb.",
    url: "https://white-hill-two.vercel.app/",
    siteName: "Domanowscy Architekci",
    images: [
      {
        url: "https://white-hill-two.vercel.app/LogoOG2.webp",
        alt: "Domanowscy Architekci | Budynki & Wnętrza",
        width: 1200,
        height: 630,
        type: "image/webp",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    title: "Domanowscy Architekci | Budynki & Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynów i wnętrz dostosowane do Twoich potrzeb.",
    images: [
      {
        url: "https://white-hill-two.vercel.app/LogoTC2.webp",
        alt: "Domanowscy Architekci | Budynki & Wnętrza",
      },
    ],
  },
  alternates: {
    canonical: "https://white-hill-two.vercel.app/",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        className="hero h-[83vh]"
        heroImages={heroImages}
      >
        <div className="hero-text">
          <h1>Architektura / Wnętrza</h1>
          <p className="max-w-[30ch] text-balance">
            Pomożemy Wam stworzyć Waszą niepowtarzalną
            przestrzeń
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
