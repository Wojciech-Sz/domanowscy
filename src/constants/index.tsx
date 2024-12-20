import { FacebookIcon, InstagramIcon } from "@/components/icons";

import ROUTES from "./routes";

export const socialMedia = [
  {
    href: "https://www.facebook.com/",
    name: "Facebook",
    icon: <FacebookIcon width="28" height="28" />,
  },

  {
    href: "https://www.instagram.com/",
    name: "Instagram",
    icon: <InstagramIcon width="28" height="28" />,
  },
];

export const navLinks = [
  {
    href: ROUTES.HOME.href,
    name: ROUTES.HOME.name,
  },
  {
    href: "/#office",
    name: "Pracownia",
  },
  {
    href: "/#projects",
    name: "Realizacje",
  },
  {
    href: "/#about",
    name: "O Nas",
  },
  {
    href: "/#contact",
    name: "Kontakt",
  },
  {
    href: ROUTES.APPOINTMENT.href,
    name: ROUTES.APPOINTMENT.name,
  },
];
