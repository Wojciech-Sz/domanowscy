import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";

const Appointment = () => {
  return (
    <section
      id="contact"
      className="flex min-h-max w-full flex-col items-center justify-center gap-6 py-52"
    >
      <div
        style={{
          backgroundImage:
            "url(https://utfs.io/f///e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
        }}
        className="fixed inset-0 -z-20 min-h-screen bg-[#9B9A99] bg-cover bg-center bg-no-repeat bg-blend-multiply"
      />
      <p className="max-w-[50ch] px-6 text-center font-montserrat text-2xl/none  text-white  lg:text-3xl/none">
        Odrobinę nas poznaliście. Jeśli chcecie zaprosić nas do pracy nad Waszą
        wymarzoną przestrzenią, jesteśmy gotowi.
      </p>

      <Link href={ROUTES.APPOINTMENT.href} className="flex items-center">
        <Button className="btn-contact">SKONTAKUJ SIĘ Z NAMI</Button>
      </Link>
    </section>
  );
};

export default Appointment;
