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

  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
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
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="0Zaow7prLExlvy4AJzZyZg"
          async
        ></script>
      </head>
      <body
        lang="pl"
        className={`${montserrat.className} ${museoSansCyrl.variable} antialiased`}
      >
        <section className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex w-full flex-1 flex-col items-center">
            {children}
          </main>
          <Footer />
        </section>
        <Toaster />
      </body>
    </html>
  );
}
