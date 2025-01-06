"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import ROUTES from "@/constants/routes";

import { Separator } from "../ui/separator";

const GalleryHeroTitle = ({ title }: { title: string }) => {
  const [isDown, setIsDown] = useState(false);
  const handleClick = () => {
    setIsDown(!isDown);
  };
  return (
    <div className="section-px relative flex size-full max-w-7xl flex-col items-center justify-center text-white">
      <div className="grid w-max grid-rows-[1fr_auto_1fr] justify-center lg:w-full lg:justify-normal">
        <div />
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">{title}</h2>
          <ChevronDown
            id="chevron"
            onMouseDown={() => handleClick()}
            className="hero-navigation-chevron"
          />
        </div>
        <div
          className={`hero-navigation-links_container ${isDown ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
        >
          {ROUTES.PROJECTS.map((link, i) => (
            <div key={link.name} className="flex items-center gap-1 sm:gap-2">
              <Link
                href={link.href}
                className="hero-navigation-link group"
                title={link.name}
              >
                {link.name}
                <div className="animated-border border-b-2 border-white" />
              </Link>
              <Separator
                orientation="vertical"
                className={`${ROUTES.PROJECTS.length - 1 === i ? "h-0" : "h-7 "} border-l-2 border-white lg:hidden`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryHeroTitle;
