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

export const office = [
  {
    title: "KIM JESTEŚMY?",
    info: [
      {
        title: "Justyna - ",
        description:
          "Znakomita projektantka wnętrz, która z wielką uwagą podchodzi do każdego projektu. Jej umiejętność słuchania potrzeb klientów i łączenia ich z najnowszymi trendami wnętrzarskimi sprawia, że tworzone przez nią przestrzenie są unikalne i pełne charakteru.",
      },
      {
        title: "Piotr - ",
        description:
          "Architekt urbanista o szerokim spektrum doświadczenia w projektowaniu zarówno dużych obiektów przemysłowych, jak i kameralnych przestrzeni mieszkalnych. Jego projekty są zawsze harmonijnie wpisane w otoczenie, łącząc nowoczesność z funkcjonalnością.",
      },
    ],
  },
  {
    title: "Co zyskasz współpracując z Nami?",
    info: [
      {
        title: "Dedykowane rozwiązania projektowe: ",
        description:
          "Nasz zespół specjalistów dokładnie analizuje Twoje potrzeby i preferencje, tworząc projekty, które są idealnie dopasowane do Twojego stylu życia. Każdy detal ma dla nas znaczenie, dlatego dbamy o to, aby Twoje wnętrza były unikalne i funkcjonalne.",
      },
      {
        title: "Zaawansowana technologia i innowacja: ",
        description:
          "Korzystamy z najnowszych narzędzi i technologii projektowych, co pozwala nam na tworzenie nowoczesnych i trwałych rozwiązań. Twoje projekty będą zgodne z najnowszymi trendami, ale jednocześnie wyjątkowe i ponadczasowe.",
      },
      {
        title: "Zaufanie i relacje partnerskie: ",
        description:
          "Nasza współpraca opiera się na zaufaniu i partnerskiej relacji. Jesteśmy otwarci na dialog i gotowi, aby sprostać Twoim oczekiwaniom, tworząc przestrzenie, które staną się miejscem spełniania Twoich marzeń.",
      },
      {
        title: "Dbałość o szczegóły: ",
        description:
          "W Domanowscy Architekci wiemy, że diabeł tkwi w szczegółach. Dlatego z wielką starannością podchodzimy do każdego etapu projektu, dbając o to, aby każdy element spełniał Twoje najwyższe oczekiwania.",
      },
      {
        title: "Zarządzanie projektem od A do Z: ",
        description:
          "Zajmujemy się kompleksową realizacją projektów, co oznacza, że możesz liczyć na naszą pomoc i wsparcie na każdym etapie, od wstępnych koncepcji po finalne wykończenie. Jesteśmy z Tobą przez cały czas, zapewniając płynność realizacji i spełnienie Twoich oczekiwań.",
      },
      {
        title: "Tworzenie przestrzeni dla emocji i marzeń: ",
        description:
          "Nasze projekty to nie tylko funkcjonalne rozwiązania, ale także miejsca, gdzie rodzą się emocje, a marzenia stają się rzeczywistością. Z nami zyskujesz przestrzeń, która inspiruje i wzbogaca życie codzienne.",
      },
    ],
  },
  {
    title: "Nasze Projekty",
    info: [
      {
        title: "",
        description:
          "Od lat z sukcesem realizujemy różnorodne projekty w obiektach publicznych, prywatnych, przemysłowych i usługowych. Dzięki współpracy z najlepszymi branżystami oraz dostawcami, zapewniamy kompleksowe usługi projektowe, które spełniają oczekiwania nawet najbardziej wymagających klientów.",
      },
    ],
  },
  {
    title: "Nasza Wizja",
    info: [
      {
        title: "",
        description:
          "Naszym celem jest tworzenie przestrzeni, które inspirują i spełniają marzenia ich użytkowników. Wierzymy, że architektura i projektowanie wnętrz to sztuka, która powinna być dostosowana do indywidualnych potrzeb i stylu życia. Dlatego stawiamy na kreatywność, funkcjonalność i wyjątkowy charakter każdego projektu.",
      },
    ],
  },
];

export const appointments = [
  {
    title: "Konsultacja - 15 min",
    description:
      "Konsultacje projektowe to czas w którym służymy Państwu swoim doświadczeniem i wiedzą",
    content: {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae itaque, saepe enim ipsam quod minima nulla deserunt animi nesciunt veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae itaque, saepe enim ipsam quod minima nulla deserunt animi nesciunt veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae itaque, saepe enim ipsam quod minima nulla deserunt animi nesciunt veritatis.",
    },
  },
  {
    title: "Konsultacja - 1 h - 300zł",
    description:
      "Konsultacje projektowe to czas w którym służymy Państwu swoim doświadczeniem i wiedzą",
    content: {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae itaque, saepe enim ipsam quod minima nulla deserunt animi nesciunt veritatis.",
    },
  },
  {
    title: "Konsultacja - 2 h - 500zł",
    description:
      "Konsultacje projektowe to czas w którym służymy Państwu swoim doświadczeniem i wiedzą",
    content: {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae itaque, saepe enim ipsam quod minima nulla deserunt animi nesciunt veritatis.",
    },
  },
];

export const approach = {
  mieszkalne: {
    title: "Nasze podejście",
    subtitle: "Budynki mieszkalne",
    description: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
    ],
  },
  wnętrza: {
    title: "Nasze podejście",
    subtitle: "Wnętrza",
    description: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente omnis ratiodne cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsumdd, dolor sit amet consectetur adipisicidng elit. Quam sapiednte omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Lorem ipsum, dolor sit amet consecdtetur adipisicing elit. Quam sdapiente omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
    ],
  },
  usługowe: {
    title: "Nasze podejście",
    subtitle: "Budynki usługowe",
    description: [
      "Loraem ipsum, dolor sit amet consectetur adipisaicing elit. Quam sapiente omnias ratione cum doloremque caumque provident iure minima aliquid voluptas.",
      "Lorem ipasum, dolor sit aamet consectetur adipisicing elit. Quam sapientaae omnis ratione cum doloremque cumque provident iure minima aliquid voluptas.",
      "Loraem ipsum, dolor sit amet consectetur adipisiacing elit. Quam sapiente omnis ratione cuma doloremque cumque proviaadent iure minima aliquid voluptas.",
    ],
  },
};
