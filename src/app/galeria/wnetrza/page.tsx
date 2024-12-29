import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import { interiorsHeroImages, interiorsImages } from "@/constants/gallery";

const Wnetrza = () => {
  return (
    <>
      <Hero className="hero-gallery" heroImages={interiorsHeroImages}>
        <HeroNavigation title="Wnętrza" />
      </Hero>
      <section className="section section-container section-pb section-pt-small">
        <Separator className="separator" />
        <ProjectsGallery projectsImages={interiorsImages} />
      </section>
    </>
  );
};

export default Wnetrza;
