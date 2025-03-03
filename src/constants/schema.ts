export const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Domanowscy Architekci",
  image: "https://white-hill-two.vercel.app/LogoOG2.webp",
  "@id": "https://white-hill-two.vercel.app/",
  url: "https://white-hill-two.vercel.app/",
  telephone: "+48501458229",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dobra 10",
    addressLocality: "Białystok",
    postalCode: "15-037",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.13737654485485,
    longitude: 23.182649453373447,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/whitehill.architecture/?locale=pl_PL",
    "https://www.instagram.com/whitehill.architecture/",
  ],
  email: "biuro@wharchitecture.pl",
  description:
    "Projekty budowlane, projekty wnętrz, projekty ogrodów, adaptacje projektów, wsparcie przy procedurach administracyjnych, wizualizacje",
};
