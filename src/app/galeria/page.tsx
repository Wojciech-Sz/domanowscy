import { Metadata } from "next";
import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import {
  galleryHeroImages,
  galleryImages,
} from "@/constants/gallery";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Galeria naszych najlepszych projektów: Wnętrza, Budynki Mieszkalne i Usługowe.",
  alternates: {
    canonical: "https://white-hill-two.vercel.app/galeria",
  },
  openGraph: {
    url: "https://white-hill-two.vercel.app/galeria",
    siteName: "Domanowscy Architekci",
    images: [
      {
        url: "https://white-hill-two.vercel.app/Galeria.webp",
        alt: "Domanowscy Architekci | Galeria",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    images: [
      {
        url: "https://white-hill-two.vercel.app/Galeria.webp",
        alt: "Domanowscy Architekci | Galeria",
      },
    ],
  },
};

const Gallery = () => {
  return (
    <>
      <Hero
        className="hero-gallery"
        heroImages={galleryHeroImages}
      >
        <HeroNavigation title="Galeria" />
      </Hero>
      <section className="section section-pb section-pt-small">
        <div className="section-container">
          <Separator className="separator" />
          <ProjectsGallery projectsImages={galleryImages} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
