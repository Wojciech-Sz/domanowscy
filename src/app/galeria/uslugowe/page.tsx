import { Metadata } from "next";
import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import {
  officesHeroImages,
  officesImages,
} from "@/constants/gallery";

export const metadata: Metadata = {
  title: "Usługowe",
  description:
    "Galeria naszych najlepszych projektów budynków usługowych.",
  alternates: {
    canonical:
      "https://white-hill-two.vercel.app/galeria/uslugowe",
  },
  openGraph: {
    url: "https://white-hill-two.vercel.app/galeria/uslugowe",
    siteName: "Domanowscy Architekci",
    images: [
      {
        url: "https://white-hill-two.vercel.app/LogoOG3.webp",
        alt: "Domanowscy Architekci | Usługowe",
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
    images: [
      {
        url: "https://white-hill-two.vercel.app/LogoTC2.webp",
        alt: "Domanowscy Architekci | Usługowe",
      },
    ],
  },
};

const Uslugowe = () => {
  return (
    <>
      <Hero
        className="hero-gallery"
        heroImages={officesHeroImages}
      >
        <HeroNavigation title="Usługowe" />
      </Hero>
      <section className="section section-pb section-pt-small">
        <div className="section-container">
          <Separator className="separator" />
          <ProjectsGallery
            projectsImages={officesImages}
            projectType="usługowe"
          />
        </div>
      </section>
    </>
  );
};

export default Uslugowe;
