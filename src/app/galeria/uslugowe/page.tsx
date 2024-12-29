import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import { officesHeroImages, officesImages } from "@/constants/gallery";

const Uslugowe = () => {
  return (
    <>
      <Hero className="hero-gallery" heroImages={officesHeroImages}>
        <HeroNavigation title="Usługowe" />
      </Hero>
      <section className="section section-container section-pb section-pt-small">
        <Separator className="separator" />
        <ProjectsGallery projectsImages={officesImages} />
      </section>
    </>
  );
};

export default Uslugowe;
