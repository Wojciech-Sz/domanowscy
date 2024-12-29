import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

interface ProjectsGalleryProps {
  projectsImages: {
    imgUrl: string;
    title: string;
  }[];
}

const ProjectsGallery = ({ projectsImages }: ProjectsGalleryProps) => {
  return (
    <div className="section-grid">
      {projectsImages.map(({ imgUrl, title }) => (
        <Link
          key={title}
          href={ROUTES.PROJECT(title).href}
          className={`${projectsImages.length % 2 !== 0 ? "img-span-2" : ""} group relative aspect-[7/10] size-full max-h-[70vh] overflow-hidden`}
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
  );
};

export default ProjectsGallery;
