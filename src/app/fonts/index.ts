import localFont from "next/font/local";

export const muesoSansCyrl = localFont({
  src: [
    {
      path: "./Museo Sans Cyrl/Museo Sans Cyrl 700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Museo Sans Cyrl/Museo Sans Cyrl 500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Museo Sans Cyrl/Museo Sans Cyrl 500 Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Museo Sans Cyrl/Museo Sans Cyrl 300.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-museo-sans-cyrl",
});

export const montserrat = localFont({
  src: [
    {
      path: "./Montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});
