"use client";

import Link from "next/link";
import React, { useState } from "react";

import { projectsImages } from "@/constants/gallery";
import ROUTES from "@/constants/routes";

import ProjectsGallery from "../ProjectsGallery";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section id="projects" className="section section-pt-big">
      <div className="section-container">
        <div className="relative flex w-full flex-col">
          <div className="flex h-max w-full flex-row items-center justify-between gap-2">
            <h2 className="section-title">Realizacje</h2>
            <Button className="btn" onClick={() => setVisible(!visible)}>
              Więcej
            </Button>
          </div>
          <div
            className={`projects-links_container ${visible ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
          >
            {ROUTES.PROJECTS.map((link, i) => (
              <div key={link.name} className="flex items-center gap-1 sm:gap-2">
                <Link
                  href={link.href}
                  className="projects-link group"
                  title={link.name}
                >
                  {link.name}
                  <div className="animated-border separator" />
                </Link>
                <Separator
                  orientation="vertical"
                  className={`${ROUTES.PROJECTS.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-primary-foreground md:hidden`}
                />
              </div>
            ))}
          </div>
          <Separator className="separator" />
        </div>

        <ProjectsGallery projectsImages={projectsImages} />
      </div>
    </section>
  );
};

export default Projects;
