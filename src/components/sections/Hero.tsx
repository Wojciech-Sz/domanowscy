"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(useGSAP);

interface HeroProps {
  heroImages: {
    imgUrl: string;
    id: string;
  }[];
  className?: string;
  children?: React.ReactNode;
}

const Hero = ({
  heroImages,
  className,
  children,
}: HeroProps) => {
  const tl = gsap.timeline({
    repeat: -1,
  });

  useGSAP(() => {
    heroImages.forEach((image, i) => {
      tl.to(
        `#${image.id}`,
        {
          scale: 1.1,
          duration: 10,
          ease: "linear",
        },
        i > 0 ? ">-3" : ""
      )
        .to(
          `#${image.id}`,
          {
            opacity: 0,
            duration: 3,
            ease: "linear",
          },
          ">-3"
        )
        .to(
          `#${heroImages[i + 1] ? heroImages[i + 1].id : heroImages[0].id}`,
          {
            opacity: 1,
            duration: 3,
            ease: "linear",
          },
          "<"
        )
        .set(`#${image.id}`, {
          scale: 1,
        });
    });
  }, []);

  return (
    <section className={className}>
      <div id="hero" className="absolute -top-16" />
      {heroImages.map((image, i) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.imgUrl}
          alt={image.id}
          priority
          width={1920}
          height={1080}
          className={`absolute size-full object-cover object-bottom ${
            i !== 0 ? "opacity-0" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/50" />
      {children}
    </section>
  );
};

export default Hero;
