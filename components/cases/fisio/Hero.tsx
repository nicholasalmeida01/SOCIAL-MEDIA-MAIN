import Eyebrow from "./Eyebrow";

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="wrap hero-split">
        <div className="hero-text">
          <Eyebrow>Fisioterapia ortopédica &amp; esportiva</Eyebrow>
          <h1>Isack Nícholas</h1>
          <p className="hero-subtitle">Movimento é o ponto de partida da recuperação</p>
          <p className="lead">
            Acompanhamento fisioterapêutico para quem quer voltar a se mover sem dor — de lesões esportivas a
            pós-operatórios, com um olhar também dedicado à reabilitação de pacientes amputados. Uberlândia, MG.
          </p>
          <div className="cta-row">
            <a href="#contato" className="btn btn-primary">
              Agendar avaliação
            </a>
            <a href="#blog" className="btn btn-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Ler o blog
            </a>
            <a href="https://instagram.com/isack.almeida" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-photo-card">
          <div className="hero-photo">
            <img src="/images/hero-photo.jpg" alt="Isack Nícholas, fisioterapeuta" />
          </div>
        </div>
      </div>
    </header>
  );
}
