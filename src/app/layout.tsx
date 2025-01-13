import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

import { montserrat, museoSansCyrl } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Domanowscy Architekci | Budynki & Wnętrza",
    template: "Domanowscy Architekci | %s",
  },
  description:
    "Oferujemy kompleksowe usługi architektoniczne obejmujące projektowanie całych obiektów oraz aranżację wnętrz. Stawiamy na funkcjonalność i estetykę.",
  keywords: [
    "budynki",
    "wnętrza",
    "Domanowscy Architekci",
    "budynki mieszkalne",
    "budynki usługowe",
    "architekt białystok",
    "architekt polska",
    "architektura",
    "architekt",
    "architekt wnętrz",
  ],
  openGraph: {
    title: "Domanowscy Architekci | Budynki & Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynków i wnętrz dostosowane do Twoich potrzeb.",
    url: "https://white-hill-two.vercel.app/",
    siteName: "Domanowscy Architekci",
    images: [
      {
        url: "https://white-hill-two.vercel.app/Domanowscy.webp",
        alt: "Domanowscy Architekci | Budynki & Wnętrza",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domanowscy Architekci | Budynki & Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynów i wnętrz dostosowane do Twoich potrzeb.",
    images: [
      {
        url: "https://white-hill-two.vercel.app/Domanowscy.webp",
        alt: "Domanowscy Architekci | Budynki & Wnętrza",
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
        <main className="flex min-h-screen flex-col">
          <Navbar />
          <section className="flex w-full flex-1 flex-col items-center">
            {children}
          </section>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
