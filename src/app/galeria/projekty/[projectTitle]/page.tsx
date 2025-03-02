import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { galleryImages } from "@/constants/gallery";

interface ProjectGalleryProps {
  params: Promise<{
    projectTitle: string;
  }>;
}

export async function generateMetadata(props: {
  params: Promise<{
    projectTitle: string;
  }>;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const params = await props.params;

  const { projectTitle } = params;
  const project = galleryImages.find(
    (project) => project.route === projectTitle
  );
  if (!project)
    return {
      title: {
        default: "Strona nie istnieje",
        absolute: "Strona nie istnieje",
      },
      robots: {
        index: false,
        follow: true,
        googleBot: {
          index: false,
          follow: true,
        },
      },
    };
  const imgUrl =
    project.imgUrl ||
    "https://white-hill-two.vercel.app/LogoTC.webp";

  return {
    title: projectTitle,
    description: `${projectTitle} - Kompleksowa galeria zdjęć.`,
    alternates: {
      canonical: `https://white-hill-two.vercel.app/galeria/projekty/${projectTitle}`,
    },
    openGraph: {
      url: `https://white-hill-two.vercel.app/galeria/projekty/${projectTitle}`,
      siteName: "Domanowscy Architekci",
      images: [
        {
          url: imgUrl,
          alt: `Domanowscy Architekci | ${projectTitle}`,
          width: 1200,
          height: 630,
          type: "image/webp",
        },
      ],
      type: "website",
      locale: "pl_PL",
    },
    twitter: {
      card: "summary_large_image",
      title: projectTitle,
      description: `${projectTitle} - Kompleksowa galeria zdjęć.`,
      images: [
        {
          url: imgUrl,
          alt: `Domanowscy Architekci | ${projectTitle}`,
        },
      ],
    },
  };
}

const ProjectGallery = async ({
  params,
}: ProjectGalleryProps) => {
  const { projectTitle } = await params;

  const project = galleryImages.find(
    (project) => project.route === projectTitle
  );
  if (!project) return notFound();

  const projectImages = project.images;

  return (
    <section className="section section-pb section-pt-small relative">
      <div id="hero" className="absolute -top-16" />
      <div className="section-container">
        <div>
          <h1 className="section-title">
            {project?.title}
          </h1>
          <Separator className="separator" />
        </div>
        <div className="section-gap grid w-full grid-cols-1 md:grid-flow-row-dense md:grid-cols-2 2xl:grid-cols-3">
          {projectImages.map((image, i) => (
            <Image
              src={image.imgUrl}
              alt={projectTitle}
              width={image.width}
              height={image.height}
              key={projectTitle + i}
              className="img-size object-cover md:odd:col-span-2 2xl:[&:nth-child(2)]:col-span-3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
