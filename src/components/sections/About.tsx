import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";

import { aboutImages } from "@/constants/gallery";

const About = () => {
  return (
    <section id="about" className="section section-p-big">
      <div className="section-container">
        <div>
          <h2 className="section-title">O Nas</h2>
          <Separator className="border-b-2 border-foreground" />
        </div>
        <div className="section-grid">
          {aboutImages.map(({ image, name, position }) => (
            <div
              key={name}
              className="img-span-2 flex aspect-[7/10] max-h-[70vh] w-full flex-col gap-2 transition-all duration-500 hover:-translate-y-3 hover:scale-[103%] hover:shadow-lg"
            >
              <Image
                src={image}
                alt={name}
                width={1000}
                height={1000}
                className="size-full object-cover"
              />

              <div className="tracking-tighter">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl/none font-bold sm:text-xl/none xl:text-2xl/none">
                    {name}
                  </h3>
                  <p className="text-lg/none font-medium italic text-muted-foreground xs:text-xl/none sm:text-lg/none xl:text-xl/none">
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
