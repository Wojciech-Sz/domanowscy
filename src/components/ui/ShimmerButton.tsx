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
    <div ref={shimmer} className="shimmer">
      {text}
    </div>
  );
};

export default ShimmerButton;
