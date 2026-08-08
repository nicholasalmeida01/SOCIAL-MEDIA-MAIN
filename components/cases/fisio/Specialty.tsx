import Eyebrow from "./Eyebrow";

export default function Specialty() {
  return (
    <section className="specialty" id="especialidade">
      <div className="wrap specialty-grid">
        <div>
          <Eyebrow>Áreas de atuação</Eyebrow>
          <h2 style={{ maxWidth: "20ch" }}>Fisioterapia pensada pra cada tipo de recuperação</h2>
          <p className="lead">
            Cada corpo chega em uma fase diferente. O acompanhamento se ajusta a isso — seja voltando de uma lesão,
            se preparando pra competir, ou reaprendendo a se mover.
          </p>
        </div>
        <div className="gait-visual">
          <svg viewBox="0 0 200 200" fill="none" stroke="#5C7080" strokeWidth={2}>
            <path d="M40,170 Q60,60 100,60 Q140,60 160,170" strokeDasharray="4 6" />
            <circle cx="40" cy="170" r="5" fill="#D98B3F" stroke="none" />
            <circle cx="160" cy="170" r="5" fill="#D98B3F" stroke="none" />
            <circle cx="100" cy="60" r="5" fill="#10202C" stroke="none" />
          </svg>
        </div>
      </div>
      <div className="wrap">
        <div className="areas-grid">
          <a href="#" className="area-card">
            <h3>Ortopedia</h3>
            <p>Lesões musculoesqueléticas, dores articulares (ombro, joelho, coluna) e pós-operatório.</p>
          </a>
          <a href="#" className="area-card">
            <h3>Esportiva</h3>
            <p>Prevenção, readequação de treino e retorno seguro ao esporte após lesão.</p>
          </a>
          <a href="#" className="area-card area-card-featured">
            <span className="eyebrow" style={{ color: "var(--amber)", marginBottom: 10 }}>
              Em destaque
            </span>
            <h3>Reabilitação de amputados</h3>
            <p>Uma área de dedicação especial — da adaptação à prótese ao retorno ao movimento.</p>
            <span className="area-link">Conhecer essa atuação →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
