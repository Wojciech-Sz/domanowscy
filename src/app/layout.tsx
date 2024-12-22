import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

import { montserrat, museoSansCyrl } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "WhiteHill Architecture | Budynki & Wnętrza",
    template: "WhiteHill Architecture | %s",
  },
  description:
    "Oferujemy kompleksowe usługi architektoniczne obejmujące projektowanie całych obiektów oraz aranżację wnętrz. Stawiamy na funkcjonalność i estetykę.",
  keywords: [
    "budynki",
    "wnętrza",
    "whitehill",
    "whitehill architecture",
    "budynki mieszkalne",
    "budynki usługowe",
    "architekt białystok",
    "architekt polska",
    "architektura",
    "architekt",
    "architekt wnętrz",
  ],

  openGraph: {
    title: "WhiteHill Architecture | Budynki & Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynków i wnętrz dostosowane do Twoich potrzeb.",
    url: "https://white-hill-two.vercel.app/",
    siteName: "WhiteHill Architecture",
    images: [
      {
        url: "https://utfs.io/f///5b304e99-9833-4093-9c2a-78ece5c5c6aa-rcqaza.png",
        alt: "WhiteHill Architecture | Budynki & Wnętrza",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteHill Architecture | Budynki & Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynów i wnętrz dostosowane do Twoich potrzeb.",
    images: [
      {
        url: "https://utfs.io/f///5b304e99-9833-4093-9c2a-78ece5c5c6aa-rcqaza.png",
        alt: "WhiteHill Architecture | Budynki & Wnętrza",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: "#e4e3e2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.className} ${museoSansCyrl.variable} antialiased`}
      >
        <main className="flex flex-col">
          <Navbar />
          <section className="flex min-h-screen w-full flex-col items-center">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
