import { formatBRL, formatDateBR } from "@/lib/format";
import type { ClientOrder } from "@/lib/supabase/server";

export default function OrderCard({ pedido }: { pedido: ClientOrder }) {
  const entregues = pedido.videos.length;
  const total = pedido.quantidade;
  const pct = total > 0 ? Math.min(100, Math.round((entregues / total) * 100)) : 0;
  const completo = entregues >= total;

  return (
    <div className="order-card">
      <div className="order-card-head">
        <h3>{pedido.pacote}</h3>
        <span className={`order-status ${completo ? "entregue" : ""}`}>
          {completo ? "CONCLUÍDO" : "EM PRODUÇÃO"}
        </span>
      </div>
      <div className="order-meta">
        {formatBRL(Number(pedido.valor))} · PEDIDO EM {formatDateBR(pedido.criado_em)}
      </div>
      <div className="order-progress">
        <div className="order-progress-head">
          <span className="order-progress-count">
            {entregues} DE {total} VÍDEOS PRONTOS
          </span>
          <span className="order-progress-pct mono">{pct}%</span>
        </div>
        <div className="order-progress-bar">
          <span style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="order-videos">
        {pedido.videos.length > 0 ? (
          pedido.videos.map((v, i) => (
            <div className="order-video-row" key={i}>
              <span className="vtitle">{v.titulo || "Vídeo"}</span>
              <a href={v.link_drive} target="_blank" rel="noopener noreferrer">
                ABRIR NO DRIVE →
              </a>
            </div>
          ))
        ) : (
          <div className="order-video-row">
            <span className="vtitle" style={{ color: "var(--text-faint)" }}>
              Vídeos ainda não disponibilizados
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
