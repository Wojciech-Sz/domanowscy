"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

import { approach } from "@/constants";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ShimmerButton from "../ui/ShimmerButton";

interface Card3DProps {
  projectType: keyof typeof approach;
}

const Card3D: React.FC<Card3DProps> = ({ projectType }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotationX = gsap.utils.mapRange(
        -height / 2,
        height / 2,
        5,
        -5,
        mouseY
      );
      const rotationY = gsap.utils.mapRange(
        -width / 2,
        width / 2,
        -5,
        5,
        mouseX
      );

      gsap.to(card, {
        rotationX,
        rotationY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 1000,
        ease: "elastic.out(1, 0.3)",
        duration: 0.7,
      });
    };
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="card-3d img-size relative flex cursor-default flex-col gap-6 bg-background p-6 hover:shadow-2xl"
    >
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <div className="flex flex-col gap-2">
          <h3 className="card-title">{approach[projectType].title}</h3>
          <h4 className="card-subtitle">{approach[projectType].subtitle}</h4>
        </div>
        <div className="flex flex-col gap-2 overflow-auto">
          {approach[projectType].description.map((desc, index) => (
            <p key={index} className="card-description">
              {desc}
            </p>
          ))}
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="self-end">
          <ShimmerButton text="Dowiedz się więcej" />
        </DialogTrigger>
        <DialogContent className="img-size overflow-hidden">
          <DialogHeader>
            <DialogTitle className="card-title">
              {approach[projectType].title}
            </DialogTitle>
            <DialogDescription className="card-subtitle">
              {approach[projectType].subtitle}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 overflow-auto">
            {approach[projectType].description.map((desc, index) => (
              <p key={index} className="card-description">
                {desc}
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Card3D;
