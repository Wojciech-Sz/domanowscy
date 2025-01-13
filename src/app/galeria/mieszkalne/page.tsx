import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import { homesHeroImages, homesImages } from "@/constants/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mieszkalne",
  description: "Galeria naszych najlepszych projektów budynków mieszkalnych.",
  alternates: {
    canonical: "https://white-hill-two.vercel.app/galeria/mieszkalne",
  },
  openGraph: {
    url: "https://white-hill-two.vercel.app/galeria/mieszkalne",
    siteName: "Domanowscy Architekci",
    images: [
      {
        url: "https://white-hill-two.vercel.app/Mieszkalne.webp",
        alt: "Domanowscy Architekci | Mieszkalne",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    images: [
      {
        url: "https://white-hill-two.vercel.app/Mieszkalne.webp",
        alt: "Domanowscy Architekci | Mieszkalne",
      },
    ],
  },
};

const Mieszkalne = () => {
  return (
    <>
      <Hero className="hero-gallery" heroImages={homesHeroImages}>
        <HeroNavigation title="Mieszkalne" />
      </Hero>
      <section className="section section-pb section-pt-small">
        <div className="section-container">
          <Separator className="separator" />
          <ProjectsGallery
            projectsImages={homesImages}
            projectType="mieszkalne"
          />
        </div>
      </section>
    </>
  );
};

export default Mieszkalne;
