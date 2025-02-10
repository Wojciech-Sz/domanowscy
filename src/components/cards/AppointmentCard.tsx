"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

gsap.registerPlugin(useGSAP);

interface AppointmentCardProps {
  appointment: {
    title: string;
    description: string;
    content: {
      text: string;
    };
  };
  id: number;
}
const AppointmentCard = ({
  appointment,
  id,
}: AppointmentCardProps) => {
  const [isDown, setIsDown] = useState<{
    [key: string]: boolean;
  }>({
    chevron0: false,
    chevron1: false,
    chevron2: false,
  });
  const { contextSafe } = useGSAP();

  const showAppointment = contextSafe(
    (chevronTarget: string, contentTarget: string) => {
      setIsDown((prev) => ({
        ...prev,
        [chevronTarget]: !prev[chevronTarget],
      }));

      gsap.to(`#${chevronTarget}`, {
        rotate: isDown[chevronTarget] ? 0 : 90,
        duration: 0.2,
        ease: "linear",
      });

      gsap.to(`#${contentTarget}`, {
        height: isDown[chevronTarget] ? "0" : "200",
        overflowY: isDown[chevronTarget]
          ? "hidden"
          : "auto",
        duration: 0.2,
        ease: "linear",
      });
    }
  );

  return (
    <div
      key={appointment.title}
      className="flex h-max w-full cursor-pointer flex-col gap-3 bg-white px-2 py-3 hover:shadow-md hover:shadow-gray-600"
      onMouseDown={() =>
        showAppointment(`chevron${id}`, `content${id}`)
      }
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">
          {appointment.title}
        </h2>
        <ChevronRight id={`chevron${id}`} />
      </div>
      <p>{appointment.description}</p>

      <div
        id={`content${id}`}
        className="left-0 h-0 w-full overflow-hidden bg-white px-2"
      >
        <p>{appointment.content.text}</p>
        <p>Dane do przelewu:</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
