import Image from "next/image";
import React from "react";

import { office } from "@/constants";

import { Separator } from "../ui/separator";

const Office = () => {
  return (
    <section className="section section-p-small relative">
      <div id="office" className="absolute -top-10" />
      <div className="section-container">
        <div>
          <h2 className="section-title">Pracownia</h2>
          <Separator className="border-b-2 border-foreground" />
        </div>
        <div className="section-gap grid h-min w-full grid-cols-1 lg:grid-cols-2">
          <div className="relative size-full overflow-hidden max-lg:h-[500px] max-lg:max-h-[70vh]">
            <Image
              src="https://utfs.io/f///cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg"
              alt="Pracownia"
              width={1000}
              height={1000}
              className="absolute size-full object-cover"
            />
          </div>
          <div className="font-montserrat text-lg/tight lg:text-xl/tight">
            <h3 className="text-xl/none font-semibold tracking-tighter lg:text-2xl/none">
              WHITEHILL
            </h3>
            <p className="mb-4">
              to biuro projektowe specjalizujące się w kompleksowym
              projektowaniu domów, obiektów usługowych oraz przemysłowych. Każdy
              projekt, który realizujemy, jest unikalną odpowiedzią na potrzeby
              naszych klientów, łącząc estetykę z funkcjonalnością. Projektujemy
              wnętrza, które nie tylko zachwycają swoim wyglądem, ale także
              stają się sceną dla życia codziennego i miejscem narodzin marzeń.
            </p>
            <p>
              Podczas współpracy z naszymi klientami stawiamy na zaufanie i
              budowanie partnerskiej relacji. Wierzymy, że najlepsze efekty
              osiąga się dzięki bliskiej współpracy i otwartości na potrzeby
              inwestorów. Naszym celem jest tworzenie przestrzeni, które będą
              inspirować i odpowiadać na wszystkie oczekiwania użytkowników.
            </p>
          </div>
        </div>
        <Separator className="w-0 border-b-2 border-foreground md:w-full" />
        {office.map((question) => (
          <article
            key={question.title}
            className="grid w-full grid-cols-1 md:grid-cols-[25%_1fr] md:gap-2"
          >
            <h4 className="self-center text-balance font-museoSansCyrl text-2xl/none font-bold tracking-tight">
              {question.title}
            </h4>
            <div className="section-gap flex flex-col items-center font-montserrat text-base/snug md:flex-row lg:text-lg/snug">
              <Separator className="border-b-2 border-foreground md:h-full md:w-0 md:border-l-2" />
              <div className="section-gap flex flex-col md:py-4">
                {question.info.map((info) => (
                  <div key={info.title} className="text-pretty">
                    {info.title && (
                      <span className="text-lg/none font-semibold lg:text-xl/none">
                        {info.title}{" "}
                      </span>
                    )}
                    <p className="inline tracking-tight">{info.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Office;
