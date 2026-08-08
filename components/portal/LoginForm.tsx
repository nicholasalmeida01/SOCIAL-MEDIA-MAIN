"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { whatsappLink } from "@/lib/whatsapp";

export default function LoginForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit() {
    const trimmed = code.trim();
    if (!trimmed) {
      setError("Digite seu código de acesso.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/client-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: trimmed }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        setError(body.error ?? "Código não encontrado. Verifique e tente novamente.");
        setLoading(false);
        return;
      }
      router.push("/area-cliente/dashboard");
      router.refresh();
    } catch {
      setError("Erro ao conectar. Tente novamente em instantes.");
      setLoading(false);
    }
  }

  return (
    <div className="client-login-wrap">
      <div className="client-login-box">
        <div className="rec">
          <span className="dot" /> ACESSO RESTRITO
        </div>
        <h2>
          Área do
          <br />
          Cliente
        </h2>
        <p>DIGITE SEU CÓDIGO DE ACESSO PARA VER SEUS PEDIDOS E VÍDEOS.</p>
        <input
          type="text"
          className="client-login-input"
          placeholder="CÓDIGO DE ACESSO"
          maxLength={20}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="client-login-btn" disabled={loading} onClick={handleSubmit}>
          {loading ? "VERIFICANDO..." : "ENTRAR"}
        </button>
        <div className="client-login-error">{error}</div>
        <div className="client-login-help">
          NÃO TEM UM CÓDIGO?{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            FALE COM A GENTE NO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}
