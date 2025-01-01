import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const ShimmerButton = ({ text }: { text: string }) => {
  const shimmer = useRef(null);
  useGSAP(() => {
    gsap.to(shimmer.current, {
      backgroundPositionX: "-200%",
      duration: 2.5,
      ease: "linear",
      repeat: -1,
    });
  });
  return (
    <div
      ref={shimmer}
      className="inline-flex h-12 w-max items-center justify-center overflow-hidden border border-border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%] px-6 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      {text}
    </div>
  );
};

export default ShimmerButton;
