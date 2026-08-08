export default function Nav() {
  return (
    <nav className="topnav">
      <div className="wrap topnav-inner">
        <div className="logo">
          Isack <span>Nícholas</span>
        </div>
        <div className="topnav-links">
          <a href="#sobre">Sobre</a>
          <a href="#especialidade">Áreas de atuação</a>
          <a href="#blog">Blog</a>
          <a href="#pacotes">Pacotes</a>
        </div>
        <a href="#contato" className="btn btn-primary btn-sm">
          Agendar avaliação
        </a>
      </div>
    </nav>
  );
}
