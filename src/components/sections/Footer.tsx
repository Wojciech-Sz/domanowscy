import Link from "next/link";
import React from "react";

import { socialMedia } from "@/constants";

const Footer = () => {
  return (
    <footer className="section-px flex w-full justify-center bg-foreground py-5 font-museoSansCyrl text-white lg:py-8">
      <div className="relative flex w-full max-w-7xl items-center gap-3 max-sm:flex-col sm:justify-between">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center justify-center"
          title="White Hill"
          scroll
        >
          <span className="text-2xl/none  font-bold">White Hill</span>
        </Link>
        <p className="block text-center leading-none sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          © {new Date().getFullYear()} White Hill.
          <br />
          Wszelkie prawa zastrzeżone.
        </p>

        <ul className="flex gap-2">
          {socialMedia.map((link, i) => (
            <li
              key={link.name + i}
              className="flex size-full text-white hover:text-primary"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                title={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
