import React from "react";

import HeroNavigation from "@/components/navigation/HeroNavigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import { galleryHeroImages, galleryImages } from "@/constants/gallery";

const Gallery = () => {
  return (
    <>
      <Hero className="hero-gallery" heroImages={galleryHeroImages}>
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
