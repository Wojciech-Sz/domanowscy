import { Metadata } from "next";

import AppointmentCard from "@/components/cards/AppointmentCard";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { appointments } from "@/constants";

export const metadata: Metadata = {
  title: "Umów spotkanie",
  description:
    "Umów się na konsultacje. Wypełnij prosty formularz i zarezerwuj termin spotkania w naszym biurze. ",
  alternates: {
    canonical:
      "https://white-hill-two.vercel.app/umow-spotkanie",
  },
  openGraph: {
    url: "https://white-hill-two.vercel.app/umow-spotkanie",
    siteName: "Domanowscy Architekci",
    images: [
      {
        url: "https://white-hill-two.vercel.app/LogoOG.webp",
        alt: "Domanowscy Architekci | Umów spotkanie",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
    images: [
      {
        url: "https://white-hill-two.vercel.app/LogoOG.webp",
        alt: "Domanowscy Architekci | Umów spotkanie",
      },
    ],
  },
};

const Appointment = () => {
  return (
    <section
      className="section-pt-small section-pb section-px relative"
      id="hero"
    >
      <div
        style={{
          backgroundImage:
            "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
        }}
        className="fixed inset-0 -z-10 min-h-screen bg-gray-500/80 bg-cover bg-center bg-no-repeat bg-blend-multiply"
      />
      <div className="section-gap grid max-w-7xl grid-cols-1 content-start justify-items-center lg:grid-cols-[1fr_auto]">
        <div className="grid h-max grid-cols-1 gap-1">
          {appointments.map((appointment, i) => (
            <AppointmentCard
              key={appointment.title}
              appointment={appointment}
              id={i}
            />
          ))}
        </div>
        <AppointmentForm />
      </div>
    </section>
  );
};

export default Appointment;
