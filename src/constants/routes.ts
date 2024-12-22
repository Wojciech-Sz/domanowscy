const ROUTES = {
  HOME: { href: "/", name: "Home" },
  PROJECTS: [
    { href: "/galeria", name: "Galeria" },
    { href: "/galeria/uslugowe", name: "Usługowe" },
    { href: "/galeria/wnetrza", name: "Wnętrza" },
    { href: "/galeria/mieszkalne", name: "Mieszkalne" },
  ],
  APPOINTMENT: { href: "/umow-spotkanie", name: "Umów Spotkanie" },
  PROJECT: (projectTitle: string) => ({
    href: `/galeria/projekty/${projectTitle}`,
  }),
};

export default ROUTES;
