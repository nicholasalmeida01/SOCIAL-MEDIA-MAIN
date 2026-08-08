import type { Metadata } from "next";
import RecBadge from "@/components/site/RecBadge";

export const metadata: Metadata = {
  title: "Sobre — Play to Play",
};

const PROCESS = [
  {
    step: "01 / BRIEFING",
    title: "Você me conta o que precisa",
    text: "Chamada rápida ou mensagem de voz — quero entender seu público antes de abrir o editor.",
  },
  {
    step: "02 / ROTEIRO",
    title: "Eu escrevo o esqueleto",
    text: "Formato, duração e referência definidos antes de qualquer gravação começar.",
  },
  {
    step: "03 / PRODUÇÃO",
    title: "Corto, coloro, finalizo",
    text: "Trilha, legenda e cor — o vídeo sai pronto pra postar, sem trabalho extra do seu lado.",
  },
  {
    step: "04 / ENTREGA",
    title: "Você aprova ou pede ajuste",
    text: "2 rodadas de revisão inclusas — sem letra miúda, sem cobrança extra.",
  },
];

export default function SobrePage() {
  return (
    <div className="about-sec" style={{ paddingTop: 160, position: "relative" }}>
      <span className="floating-tc" style={{ top: 40, right: 60 }}>
        00:04:12:08
      </span>
      <span className="floating-tc" style={{ bottom: 30, left: 40 }}>
        REC ● 24FPS
      </span>
      <div className="about-grid reveal">
        <div>
          <RecBadge style={{ marginBottom: 24 }}>SOBRE</RecBadge>
          <h2 className="about-big">
            Edito vídeo desde que aprendi que ninguém assiste até o fim por <em>obrigação.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.7, marginTop: 28 }}>
            Já cortei vídeo pra clínica, pra igreja, pra criador de conteúdo, pra empresário que nunca tinha gravado
            nada na vida. O que muda é o roteiro. O que não muda é o cuidado com cada corte.
          </p>
        </div>
        <div className="process-list reveal">
          {PROCESS.map((item) => (
            <div className="process-item" key={item.step}>
              <div className="process-num">{item.step}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
