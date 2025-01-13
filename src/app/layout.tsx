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
