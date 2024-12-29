import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import { homesHeroImages, homesImages } from "@/constants/gallery";

const Mieszkalne = () => {
  return (
    <>
      <Hero className="hero-gallery" heroImages={homesHeroImages}>
        <HeroNavigation title="Mieszkalne" />
      </Hero>
      <section className="section section-container section-pb section-pt-small">
        <Separator className="separator" />
        <ProjectsGallery projectsImages={homesImages} />
      </section>
    </>
  );
};

export default Mieszkalne;
