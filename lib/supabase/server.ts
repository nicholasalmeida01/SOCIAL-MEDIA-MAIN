import { createClient } from "@supabase/supabase-js";

export interface ClientVideo {
  titulo: string;
  link_drive: string;
}

export interface ClientOrder {
  id: string;
  pacote: string;
  quantidade: number;
  valor: number;
  status: string;
  criado_em: string;
  videos: ClientVideo[];
}

export interface ClientDashboard {
  nome: string;
  pedidos: ClientOrder[];
}

// Server-only: reads SUPABASE_URL / SUPABASE_ANON_KEY from the environment, never bundled for the browser.
// The RPC below is a narrow, security-definer Postgres function — it returns only the data belonging to
// the client whose access code matches, so the anon key here can't be used to enumerate other clients.
export async function getClientDashboard(codigo: string): Promise<ClientDashboard | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("SUPABASE_URL/SUPABASE_ANON_KEY não configurados");

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase.rpc("get_client_dashboard", { p_codigo: codigo });
  if (error) throw error;
  return (data as ClientDashboard | null) ?? null;
}
