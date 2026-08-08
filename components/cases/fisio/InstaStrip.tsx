import Eyebrow from "./Eyebrow";

export default function InstaStrip() {
  return (
    <section className="insta">
      <div className="wrap">
        <Eyebrow>Instagram</Eyebrow>
        <div className="insta-profile">
          <img className="insta-avatar" src="/images/insta-avatar.jpg" alt="Isack Nícholas no Instagram" />
          <div className="insta-profile-info">
            <div className="insta-handle-row">
              <h2>@isack.almeida</h2>
              <a href="https://instagram.com/isack.almeida" target="_blank" rel="noopener noreferrer" className="insta-follow-btn">
                Seguir
              </a>
            </div>
            <div className="insta-stats">
              <span>
                <b>[X]</b> publicações
              </span>
              <span>
                <b>[X]</b> seguidores
              </span>
              <span>
                <b>[X]</b> seguindo
              </span>
            </div>
            <p className="insta-bio">Fisioterapeuta ortopédico &amp; esportivo · Uberlândia, MG</p>
          </div>
        </div>
        <div className="insta-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="insta-tile" key={i} />
          ))}
        </div>
        <p className="insta-note">[Grade conectada ao Instagram assim que o site for pro ar]</p>
      </div>
    </section>
  );
}
