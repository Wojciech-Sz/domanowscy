import { ClockIcon, MailIcon, Mails, MapPinIcon, Phone } from "lucide-react";
import React from "react";

import ContactForm from "../forms/ContactForm";
import SvgBackground from "../SvgBackground";

const Contact = () => {
  return (
    <section className="section section-pt-small relative gap-9 pb-14 md:pb-20">
      <div className="z-[1] flex flex-col gap-1">
        <h2 className="section-title text-center">Kontakt</h2>
        <p className="w-full max-w-[60ch] text-center font-museoSansCyrl text-lg/none sm:text-xl/none lg:text-2xl/none">
          Nasze biuro stacjonarne mieści się w Białymstoku. Projekty realizujemy
          na terenie całego kraju oraz poza jego granicami.
        </p>
      </div>
      <div className="z-[1] flex w-auto flex-col-reverse items-center justify-center gap-7 xs:gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:gap-4 lg:text-left">
          <h3 className="font-museoSansCyrl text-xl font-bold">
            Informacje Kontaktowe
          </h3>
          <address className="flex w-full flex-col items-center justify-center gap-2 font-montserrat text-base  font-normal not-italic lg:items-start">
            <a
              aria-label="Zadzwoń 501-458-229"
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              rel="noreferrer noopener"
            >
              <div className="flex items-center gap-2 hover:text-foreground/70">
                <Phone className="size-5 shrink-0" />
                501-458-229
              </div>
            </a>
            <a
              aria-label="Napisz do nas biuro@wharchitecture.pl"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              rel="noreferrer noopener"
            >
              <div className="flex items-center gap-2 hover:text-foreground/70">
                <MailIcon className="size-5 shrink-0 " strokeWidth="2.5" />
                biuro@wharchitecture.pl
              </div>
            </a>
            <a
              href="https://maps.google.com/maps?hl=pl&gl=pl&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x471ffff413081853:0x2a68fbc7479fa52f"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex items-center gap-2 hover:text-foreground/70">
                <MapPinIcon className="size-5 shrink-0" />
                ul. Dobra 10 lok. 76, Białystok
              </div>
            </a>
            <div className="flex items-center gap-2">
              <ClockIcon className="size-5 shrink-0" />
              <div className="flex gap-2">
                <p className="">pon - pt:</p>
                <p className="">9:00 - 17:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="flex items-center gap-2">
                <Mails className="size-5 shrink-0" />
                Korespondencja:
              </span>
              <p>ul. Piastowska 13a/1, 15-207 Białystok</p>
            </div>
          </address>
        </div>
        <ContactForm />
      </div>
      <SvgBackground />
    </section>
  );
};

export default Contact;
