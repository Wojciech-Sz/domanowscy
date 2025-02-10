import Link from "next/link";
import React from "react";

import SocialLinks from "../navigation/SocialLinks";

const Footer = () => {
  return (
    <footer className="section-px flex w-full justify-center bg-foreground py-5 font-museoSansCyrl text-white lg:py-8">
      <div className="relative flex w-full max-w-7xl items-center gap-3 max-sm:flex-col sm:justify-between">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center justify-center"
          scroll
        >
          <span className="text-2xl/none font-bold">
            Domanowscy
          </span>
        </Link>
        <p className="block text-center leading-none sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          © {new Date().getFullYear()} Domanowscy.
          <br />
          Wszelkie prawa zastrzeżone.
        </p>

        <SocialLinks className="flex gap-2" />
      </div>
    </footer>
  );
};

export default Footer;
