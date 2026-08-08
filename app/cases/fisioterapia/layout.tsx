import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./fisio.css";

export const metadata: Metadata = {
  title: "Isack Nícholas — Fisioterapia Ortopédica & Reabilitação de Amputados",
};

export default function FisioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-fisio">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Fraunces:ital,wght@1,400;1,500&display=swap"
        rel="stylesheet"
      />
      {children}
    </div>
  );
}
