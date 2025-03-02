import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "404: Strona nie została znaleziona" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <section className="section section-pb section-pt-small flex flex-col items-center justify-center">
      <div className="section-container flex flex-col items-center justify-center text-center">
        <h1 className="mb-2 text-8xl font-bold">404</h1>
        <h2 className="mb-8 text-2xl font-semibold">
          Strona nie została znaleziona
        </h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          Przepraszamy, ale strona której szukasz nie
          istnieje lub została przeniesiona.
        </p>
        <Button asChild>
          <Link href="/">Wróć do strony głównej</Link>
        </Button>
      </div>
    </section>
  );
}
