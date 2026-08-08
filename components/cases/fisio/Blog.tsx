import Eyebrow from "./Eyebrow";
import { ARTICLES } from "@/lib/data/fisio";

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Eyebrow>Conteúdo científico</Eyebrow>
            <h2>Resenha científica</h2>
          </div>
          <a href="#">Ver todas as resenhas →</a>
        </div>
      </div>
      <div className="blog-carousel">
        {ARTICLES.map((article) => (
          <article className="article" key={article.title}>
            <div className="article-media" />
            <div className="article-body">
              <span className="tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="wrap">
        <span className="swipe-hint">← arraste para o lado →</span>
      </div>
    </section>
  );
}
