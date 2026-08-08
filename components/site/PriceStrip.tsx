import type { Package } from "@/lib/data/packages";
import { formatBRL } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";

export default function PriceStrip({ packages }: { packages: Package[] }) {
  return (
    <div className="price-strip reveal">
      {packages.map((p, i) => {
        const total = p.qty * p.per;
        const numStr = String(i + 1).padStart(2, "0");
        return (
          <div className={`price-card ${p.featured ? "featured" : ""}`} key={p.name}>
            {p.featured && <div className="price-badge">MAIS ESCOLHIDO</div>}
            <div className="pnum mono">{numStr}</div>
            <div className="pname">{p.name}</div>
            <div className="pqty">
              {p.qty} VÍDEO{p.qty > 1 ? "S" : ""}
            </div>
            <div className="pval mono">{formatBRL(total)}</div>
            <div className="pper">R${p.per}/VÍDEO</div>
            {p.save ? <span className="psave">{p.save}</span> : <div style={{ height: 22 }} />}
            <a href={whatsappLink(p.msg)} target="_blank" rel="noopener noreferrer" className="price-btn-row">
              ESCOLHER →
            </a>
          </div>
        );
      })}
    </div>
  );
}
