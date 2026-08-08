import crypto from "node:crypto";

export const SESSION_COOKIE = "client_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 dias

interface SessionPayload {
  codigo: string;
  exp: number;
}

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET não está configurado");
  return secret;
}

function sign(data: string): string {
  return crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
}

export function createSessionToken(codigo: string): string {
  const payload: SessionPayload = { codigo, exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000 };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${data}.${sign(data)}`;
}

export function verifySessionToken(token: string | undefined): string | null {
  if (!token) return null;
  const [data, signature] = token.split(".");
  if (!data || !signature) return null;

  const expected = sign(data);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const payload: SessionPayload = JSON.parse(Buffer.from(data, "base64url").toString());
    if (typeof payload.codigo !== "string" || payload.exp < Date.now()) return null;
    return payload.codigo;
  } catch {
    return null;
  }
}
