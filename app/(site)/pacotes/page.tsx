import type { Metadata } from "next";
import RecBadge from "@/components/site/RecBadge";
import SectionHead from "@/components/site/SectionHead";
import PriceStrip from "@/components/site/PriceStrip";
import { PACKAGES } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Pacotes — Play to Play",
};

const PILLARS = [
  {
    title: "Roteiro antes da câmera",
    text: "Toda gravação sai de um roteiro fechado: gancho nos primeiros 2 segundos, corte no tempo certo, call to action no fim. Isso é o que separa vídeo que viraliza de vídeo que passa despercebido.",
  },
  {
    title: "Seu jeito, não um molde",
    text: "Uso referência pra calibrar ritmo e formato. O resultado sai com a sua voz, seu jeito de falar, sua marca — cliente reconhece o vídeo antes de ver a logo.",
  },
  {
    title: "Calendário fechado",
    text: 'Você recebe uma data de entrega por vídeo, não uma promessa vaga de "logo logo". Pacote fechado vem com cronograma real, direto no seu WhatsApp.',
  },
];

export default function PacotesPage() {
  return (
    <div className="sec" style={{ paddingTop: 160 }}>
      <SectionHead
        title={
          <>
            Valor de
            <br />
            investimento
          </>
        }
        description="QUANTO MAIOR O PACOTE, MENOR O VALOR POR VÍDEO. SEM FIDELIDADE."
      />

      <PriceStrip packages={PACKAGES} />

      <div className="price-note">
        <RecBadge />
        TODOS OS PACOTES INCLUEM ROTEIRO, EDIÇÃO COMPLETA E ATÉ 2 RODADAS DE AJUSTE. ENTREGA MÉDIA: 5 DIAS ÚTEIS /
        VÍDEO.
      </div>

      <div className="pillars-grid reveal">
        {PILLARS.map((pillar, i) => (
          <div className="pillar-card" key={pillar.title}>
            <span className="pillar-num mono">{String(i + 1).padStart(2, "0")}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
