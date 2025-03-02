"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    heroImages.forEach((image, i) => {
      tl.to(
        `#${image.id}`,
        {
          scale: 1.1,
          duration: 10,
          ease: "none",
        },
        i > 0 ? ">-3" : ""
      )
        .to(
          `#${image.id}`,
          {
            opacity: 0,
            duration: 3,
            ease: "power1.inOut",
          },
          ">-3"
        )
        .to(
          `#${heroImages[i + 1] ? heroImages[i + 1].id : heroImages[0].id}`,
          {
            opacity: 1,
            duration: 3,
            ease: "power1.inOut",
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
        <div
          key={image.id}
          id={image.id}
          style={{
            backgroundImage: `url(${image.imgUrl})`,
          }}
          className={`absolute inset-0 bg-cover bg-bottom bg-no-repeat transition-transform will-change-transform ${
            i !== 0 ? "opacity-0" : ""
          }`}
          role="img"
          aria-label={image.id}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/50" />
      {children}
    </section>
  );
};

export default Hero;
