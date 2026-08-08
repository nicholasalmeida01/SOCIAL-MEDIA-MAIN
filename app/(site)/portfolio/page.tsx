import type { Metadata } from "next";
import RecBadge from "@/components/site/RecBadge";
import PortfolioBrowser from "@/components/site/PortfolioBrowser";
import { VIDEOS } from "@/lib/data/videos";

export const metadata: Metadata = {
  title: "Portfólio — Play to Play",
};

export default function PortfolioPage() {
  return (
    <div className="sec" style={{ paddingTop: 160 }}>
      <div className="portfolio-header reveal">
        <RecBadge>ARQUIVO COMPLETO</RecBadge>
        <h2 className="portfolio-title">
          TODO O
          <br />
          <span className="grad-text">PORTFÓLIO.</span>
        </h2>
        <p className="portfolio-sub">
          ORGANIZADO POR FORMATO. CLIQUE EM QUALQUER LINHA PARA ASSISTIR ao vídeo completo.
        </p>
      </div>
      <PortfolioBrowser videos={VIDEOS} />
    </div>
  );
}
