import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/session";
import { getClientDashboard } from "@/lib/supabase/server";
import OrderCard from "@/components/portal/OrderCard";
import LogoutButton from "@/components/portal/LogoutButton";

export const metadata: Metadata = {
  title: "Meus Pedidos — Play to Play",
};

export default async function ClientDashboardPage() {
  const cookieStore = await cookies();
  const codigo = verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
  if (!codigo) redirect("/area-cliente");

  const dashboard = await getClientDashboard(codigo);
  if (!dashboard) redirect("/area-cliente");

  return (
    <div className="client-dash">
      <div className="client-dash-head">
        <div>
          <div className="rec">
            <span className="dot" /> BEM-VINDO(A)
          </div>
          <h2>{dashboard.nome.toUpperCase()}</h2>
        </div>
        <LogoutButton />
      </div>

      {dashboard.pedidos.length === 0 ? (
        <div className="client-empty">
          Nenhum pedido encontrado ainda.
          <br />
          Assim que seu primeiro pacote for fechado, ele aparece aqui.
        </div>
      ) : (
        <div>
          {dashboard.pedidos.map((pedido) => (
            <OrderCard key={pedido.id} pedido={pedido} />
          ))}
        </div>
      )}
    </div>
  );
}
