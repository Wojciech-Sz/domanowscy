import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logo2.svg";
import SocialLinks from "../navigation/SocialLinks";

const Footer = () => {
  return (
    <footer className="section-px flex w-full justify-center bg-foreground py-5 font-museoSansCyrl text-white lg:h-24 lg:py-8">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-between gap-3 lg:flex-row">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center justify-center"
          scroll
        >
          <Image
            src={logo}
            alt="Domanowscy Architekci"
            className="-mt-8 h-24 w-80 lg:-ml-6 lg:mt-0"
          />
        </Link>
        <p className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-center leading-none">
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
