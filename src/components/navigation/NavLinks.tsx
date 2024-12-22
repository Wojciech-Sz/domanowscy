import Link from "next/link";
import React from "react";

import { navLinks, socialMedia } from "@/constants";
import ROUTES from "@/constants/routes";

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <ul className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 pb-5 lg:max-w-7xl lg:flex-row">
        {navLinks.map(({ href, name }) =>
          name === "Realizacje" ? (
            <li
              className="flex h-full flex-col gap-2 tracking-tighter hover:text-foreground/90"
              key={name}
            >
              <Link
                href={href}
                className="group w-max text-2xl font-bold hover:text-foreground/90"
                prefetch={false}
                scroll
                title={name}
                onClick={closeMenu}
              >
                {name}

                <div className="w-0 border-b-2 border-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
              <ul className="flex flex-col gap-2 text-xl">
                {ROUTES.PROJECTS.map(({ href, name }) => (
                  <li className="group h-full w-max" key={name}>
                    <Link href={href} title={name} onClick={closeMenu}>
                      {name}
                      <div className="w-0 border-b-2 border-foreground transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              key={name}
              className="group h-full w-max text-2xl font-bold tracking-tighter hover:text-foreground/90"
            >
              <Link href={href} onClick={closeMenu} className="">
                {name}
                <div className="w-0 border-b-2 border-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          )
        )}
        <div className="flex gap-2 sm:hidden">
          {socialMedia.map(({ href, name, icon }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-foreground hover:text-secondary"
            >
              {icon}
            </Link>
          ))}
        </div>
      </ul>
    </>
  );
};

export default NavLinks;
