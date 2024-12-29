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
            className="relative -top-2 z-[1] size-8 translate-x-[.5px] cursor-pointer transition-transform duration-300 hover:translate-y-2 hover:scale-125 xs:translate-x-[2.5px] sm:size-10 sm:translate-x-0 lg:size-14"
          />
        </div>
        <div
          className={`relative -top-3 flex w-max translate-x-[-2.5px] justify-center gap-1 transition-all duration-300 sm:translate-x-[-2.5px] sm:gap-2 md:w-full md:translate-x-[-3.5px] md:justify-between md:px-5 lg:-translate-x-2.5 lg:px-10 ${isDown ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
        >
          {ROUTES.PROJECTS.map((link, i) => (
            <div key={link.name} className="flex items-center gap-1 sm:gap-2">
              <Link
                href={link.href}
                className="group w-min text-center font-museoSansCyrl text-sm/none font-light uppercase tracking-tighter xs:w-auto  xs:text-base sm:text-lg/none md:text-xl/none xl:text-2xl/none"
                title={link.name}
              >
                {link.name}
                <div className="animated-border border-b-2 border-white" />
              </Link>
              <Separator
                orientation="vertical"
                className={`${ROUTES.PROJECTS.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-white/70 lg:hidden`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryHeroTitle;
