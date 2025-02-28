import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logo2.svg";
import SocialLinks from "../navigation/SocialLinks";

const Footer = () => {
  return (
    <footer className="section-px flex min-h-24 w-full justify-center bg-foreground py-5 font-museoSansCyrl text-white lg:py-8">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
        <Link
          href="/"
          prefetch={false}
          className="-mb-5 -mt-2 h-12 w-64 md:-ml-3 md:-mt-3 lg:-mb-3 lg:-ml-3.5 lg:w-80"
          scroll
        >
          <Image
            src={logo}
            title="Home"
            alt="Domanowscy Architekci"
            className=""
          />
        </Link>
        <p className="block text-center leading-none md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
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
