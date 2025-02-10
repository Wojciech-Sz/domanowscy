import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants";
import ROUTES from "@/constants/routes";

import SocialLinks from "./SocialLinks";

const NavLinks = ({
  closeMenu,
}: {
  closeMenu: () => void;
}) => {
  return (
    <>
      <ul className="section-container mx-auto justify-between pb-5 md:flex-row">
        {navLinks.map(({ href, name }) =>
          name === "Realizacje" ? (
            <li className="flex flex-col gap-3" key={name}>
              <Link
                href={href}
                className="nav-link group"
                scroll
                onClick={closeMenu}
              >
                {name}

                <div className="animated-border separator" />
              </Link>
              <ul className="flex flex-col gap-2 text-lg/none tracking-tighter lg:text-xl/none">
                {ROUTES.PROJECTS.map(({ href, name }) => (
                  <li className="group w-max" key={name}>
                    <Link href={href} onClick={closeMenu}>
                      {name}
                      <div className="animated-border separator" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              key={name}
              className="nav-link group h-full"
            >
              <Link href={href} onClick={closeMenu}>
                {name}
                <div className="animated-border separator" />
              </Link>
            </li>
          )
        )}
        <SocialLinks className="flex gap-2 sm:hidden" />
      </ul>
    </>
  );
};

export default NavLinks;
