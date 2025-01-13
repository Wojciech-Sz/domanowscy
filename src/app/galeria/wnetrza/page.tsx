import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import { interiorsHeroImages, interiorsImages } from "@/constants/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wnętrza",
  description: "Galeria naszych najlepszych projektów wnętrz.",
  alternates: {
    canonical: "https://white-hill-two.vercel.app/galeria/wnetrza",
  },
  openGraph: {
    url: "https://white-hill-two.vercel.app/galeria/wnetrza",
  },
};

const Wnetrza = () => {
  return (
    <>
      <Hero className="hero-gallery" heroImages={interiorsHeroImages}>
        <HeroNavigation title="Wnętrza" />
      </Hero>
      <section className="section section-pb section-pt-small">
        <div className="section-container">
          <Separator className="separator" />
          <ProjectsGallery
            projectsImages={interiorsImages}
            projectType="wnętrza"
          />
        </div>
      </section>
    </>
  );
};

export default Wnetrza;
