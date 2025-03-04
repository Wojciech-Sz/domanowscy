import Image from "next/image";
import React from "react";

import { aboutImages } from "@/constants/gallery";

import { Separator } from "../ui/separator";

const About = () => {
  return (
    <section
      id="about"
      className="section section-pt-big pb-20"
    >
      <div className="section-container">
        <div>
          <h2 className="section-title">O Nas</h2>
          <Separator className="separator" />
        </div>
        <div className="section-grid">
          {aboutImages.map(({ image, name, position }) => (
            <div
              key={name}
              className="img-span-2 flex size-full flex-col gap-2 pb-2 transition-all duration-500 hover:-translate-y-3 hover:scale-[103%] hover:shadow-lg"
            >
              <Image
                src={image}
                alt={name}
                width={1000}
                height={1000}
                className="img-size object-cover"
              />

              <div className="tracking-tighter">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl/none font-bold">
                    {name}
                  </h3>
                  <p className="text-lg/none font-medium italic text-muted-foreground">
                    {position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
