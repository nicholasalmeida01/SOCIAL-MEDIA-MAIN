import Eyebrow from "./Eyebrow";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <Eyebrow color="var(--amber)">Sobre</Eyebrow>
        <h2 style={{ maxWidth: "32ch", margin: "16px 0 42px" }}>
          Fisioterapia técnica, com escuta de quem acompanha cada etapa da recuperação.
        </h2>
        <div className="pillar-grid">
          <div className="pillar-item">
            <svg className="pillar-svg" viewBox="0 0 40 40" fill="none" stroke="var(--amber)" strokeWidth={1.6}>
              <rect x="9" y="6" width="22" height="28" rx="2" />
              <path d="M15 4h10v5H15z" />
              <path d="M14 17l4 4 8-8" stroke="var(--paper)" />
            </svg>
            <b>Avaliação individual</b>
            <span>Cada plano parte do seu corpo, não de um protocolo padrão.</span>
          </div>
          <div className="pillar-item">
            <svg className="pillar-svg" viewBox="0 0 40 40" fill="none" stroke="var(--amber)" strokeWidth={1.6}>
              <circle cx="20" cy="20" r="14" />
              <path d="M20 12v8l6 4" stroke="var(--paper)" />
            </svg>
            <b>Acompanhamento de perto</b>
            <span>Ajuste contínuo conforme sua evolução real, sessão a sessão.</span>
          </div>
          <div className="pillar-item">
            <svg className="pillar-svg" viewBox="0 0 40 40" fill="none" stroke="var(--amber)" strokeWidth={1.6}>
              <path d="M20 5v6M13 9l3 5M27 9l-3 5" />
              <path d="M10 34h20l-3-11a7 7 0 0 0-14 0z" stroke="var(--paper)" />
            </svg>
            <b>Prática baseada em evidência</b>
            <span>
              União entre a melhor evidência científica disponível, a experiência clínica e as necessidades de cada
              paciente — modelo de Sackett (1996), adotado pelo COFFITO.
            </span>
          </div>
          <div className="pillar-item">
            <img className="pillar-img" src="/images/pillar-icon.png" alt="Universidade Federal de Uberlândia" />
            <b>Formação</b>
            <span>Universidade Federal de Uberlândia (UFU)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
