import { NextRequest, NextResponse } from "next/server";
import { getClientDashboard } from "@/lib/supabase/server";
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE_SECONDS } from "@/lib/session";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const codigo = typeof body?.codigo === "string" ? body.codigo.trim().toUpperCase() : "";

  if (!codigo) {
    return NextResponse.json({ error: "Digite seu código de acesso." }, { status: 400 });
  }

  const dashboard = await getClientDashboard(codigo);
  if (!dashboard) {
    return NextResponse.json({ error: "Código não encontrado. Verifique e tente novamente." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(codigo), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
  });
  return response;
}
