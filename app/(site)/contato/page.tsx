import type { Metadata } from "next";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato — Play to Play",
};

export default function ContatoPage() {
  return (
    <div className="contact-sec" style={{ position: "relative" }}>
      <span className="floating-tc" style={{ top: 30, left: "50%", transform: "translateX(-50%)" }}>
        FADE OUT — 00:00:00:00
      </span>
      <div className="contact-eyebrow">
        <span className="rec">
          <span className="dot" />
        </span>{" "}
        VAMOS GRAVAR?
      </div>
      <h2 className="contact-title reveal">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          FALAR NO
          <br />
          WHATSAPP
        </a>
      </h2>
      <div className="contact-meta">
        <span>{WHATSAPP_DISPLAY}</span>
        <span>RESPOSTA EM ATÉ 24H</span>
        <span>UBERLÂNDIA — MG</span>
      </div>
    </div>
  );
}
