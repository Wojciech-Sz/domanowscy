"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { socialMedia } from "@/constants";

import NavLinks from "./NavLinks";
import MenuIcon from "../icons/MenuIcon";
import { Button } from "../ui/button";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleMenu = contextSafe(() => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // Animate to X
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(middleLine.current, {
        attr: { opacity: 0 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
    } else {
      // Animate to hamburger
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(middleLine.current, {
        attr: {
          y1: 12,
          y2: 12,
          x1: 1.2,
          x2: 22.8,
          opacity: 1,
        },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, toggleMenu]);
  return (
    <nav
      className={`section-px sticky top-0 z-50 h-16 w-full bg-background/90 ${!isOpen && "shadow-md"}`}
    >
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between">
        <button
          title="Menu"
          aria-label="Włacz menu"
          className="cursor-pointer p-0"
          onMouseDown={toggleMenu}
        >
          <MenuIcon
            topLine={topLine}
            middleLine={middleLine}
            bottomLine={bottomLine}
            className="size-7 text-foreground"
          />
        </button>
        <Link
          href="#hero"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-museoSansCyrl text-2xl font-black"
          prefetch={false}
          scroll
          title="Powrót na góre"
        >
          Domanowscy
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden gap-2 sm:flex">
            {socialMedia.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:text-secondary"
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <Link
            scroll
            href="/#contact"
            prefetch={false}
            className="flex items-center"
          >
            <Button className="btn">Kontakt</Button>
          </Link>
        </div>
      </div>
      <section
        className={`absolute inset-x-0 flex flex-col justify-between gap-5 overflow-hidden bg-background/90 px-5 font-museoSansCyrl uppercase shadow-md transition-all duration-300 ease-in-out sm:px-10 ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <NavLinks closeMenu={toggleMenu} />
      </section>
      <div
        className={`fixed ${isOpen ? "inset-x-0 bottom-0 top-16" : "hidden"} z-[-1]`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
