import Image from "next/image";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { galleryImages } from "@/constants/gallery";

interface ProjectGalleryProps {
  params: Promise<{
    projectTitle: string;
  }>;
}

const ProjectGallery = async ({ params }: ProjectGalleryProps) => {
  const { projectTitle } = await params;

  const project = galleryImages.find(
    (project) => project.route === projectTitle
  );
  const projectImages = project?.images || [];

  return (
    <section className="section section-pb section-pt-small relative">
      <div id="hero" className="absolute -top-16" />
      <div className="section-container">
        <div>
          <h2 className="section-title">{project?.title}</h2>
          <Separator className="separator" />
        </div>
        <div className="section-gap grid w-full grid-cols-1 md:grid-flow-row-dense md:grid-cols-2 2xl:grid-cols-3">
          {projectImages.flatMap((image, i) => (
            <Image
              src={image.imgUrl}
              alt={projectTitle}
              width={image.width}
              height={image.height}
              key={projectTitle + i}
              className="aspect-[7/10] size-full max-h-[80vh] object-cover md:odd:col-span-2 2xl:[&:nth-child(2)]:col-span-3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
