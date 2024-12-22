"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { projectsImages } from "@/constants/gallery";
import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section id="projects" className="section section-p-big">
      <div className="section-container">
        <div className="relative flex w-full flex-col">
          <div className="flex h-max w-full flex-row items-center justify-between gap-2">
            <h2 className="section-title">Realizacje</h2>
            <Button className="btn" onClick={() => setVisible(!visible)}>
              Więcej
            </Button>
          </div>
          <div
            className={`flex w-max justify-center gap-1 self-center transition-all duration-300 sm:gap-2 md:w-full md:justify-between md:px-5 lg:px-10 ${visible ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
          >
            {ROUTES.PROJECTS.map((link, i) => (
              <div key={link.name} className="flex items-center gap-1 sm:gap-2">
                <Link
                  href={link.href}
                  className="group w-min text-center font-museoSansCyrl text-sm/none font-light uppercase tracking-tighter hover:text-foreground/80 xs:w-auto xs:text-base sm:text-lg/none md:text-xl/none xl:text-2xl/none"
                  title={link.name}
                >
                  {link.name}
                  <div className="animated-border" />
                </Link>
                <Separator
                  orientation="vertical"
                  className={`${ROUTES.PROJECTS.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-primary-foreground md:hidden`}
                />
              </div>
            ))}
          </div>
          <Separator className="border-b-2 border-foreground" />
        </div>

        <div className="section-grid">
          {projectsImages.map(({ imgUrl, title }) => (
            <Link
              key={title}
              href={ROUTES.PROJECT(title).href}
              className="img-span-2 group relative aspect-[7/10] size-full max-h-[70vh] overflow-hidden"
            >
              <Image
                src={imgUrl}
                alt={title}
                width={1920}
                height={1080}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-[1] bg-background/30 transition-opacity duration-500 group-hover:opacity-0" />
              <h3 className="absolute bottom-10 left-8 z-[2] pr-4 font-montserrat text-2xl/none font-extralight text-white  transition-transform duration-500 group-hover:translate-x-2 md:text-3xl/none lg:text-2xl/none 2xl:text-3xl/none">
                {title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
