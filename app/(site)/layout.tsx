import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./play-to-play.css";
import TopBar from "@/components/site/TopBar";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Play to Play — Produção de Vídeo para Redes Sociais | Uberlândia e Remoto",
  description:
    "Produção e edição de vídeo para redes sociais: reels, institucional, produto e depoimento. Captação em Uberlândia-MG, edição para todo o Brasil. Vídeos a partir de R$300.",
  keywords:
    "produção de vídeo, edição de vídeo, editor de vídeo Uberlândia, reels, vídeo para redes sociais, vídeo institucional, filmmaker Uberlândia, editor de vídeo freelancer",
  authors: [{ name: "Play to Play" }],
  alternates: { canonical: "https://play-to-play.netlify.app/" },
  openGraph: {
    type: "website",
    title: "Play to Play — Produção de Vídeo para Redes Sociais",
    description: "Reels, institucional, produto e depoimento. Captação em Uberlândia-MG, edição remota para todo o Brasil.",
    locale: "pt_BR",
    siteName: "Play to Play",
  },
  twitter: {
    card: "summary",
    title: "Play to Play — Produção de Vídeo para Redes Sociais",
    description: "Reels, institucional, produto e depoimento. Captação em Uberlândia-MG, edição remota para todo o Brasil.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Play to Play",
  description: "Produção e edição de vídeo para redes sociais: reels, institucional, produto e depoimento.",
  areaServed: [
    { "@type": "City", name: "Uberlândia" },
    { "@type": "Country", name: "Brasil" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Uberlândia",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  telephone: "+55-34-99139-6892",
  priceRange: "R$300 - R$4500",
  makesOffer: [
    { "@type": "Offer", name: "Vídeo avulso", price: "300", priceCurrency: "BRL" },
    { "@type": "Offer", name: "Pacote de 5 vídeos", price: "1350", priceCurrency: "BRL" },
    { "@type": "Offer", name: "Pacote de 10 vídeos", price: "2550", priceCurrency: "BRL" },
    { "@type": "Offer", name: "Pacote de 20 vídeos", price: "4500", priceCurrency: "BRL" },
  ],
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-ptp">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <div className="bg-grain" />
      <div className="bg-scanlines" />
      <div className="bg-vignette" />

      <TopBar />
      {children}
      <SiteFooter />
    </div>
  );
}
