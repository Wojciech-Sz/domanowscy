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
