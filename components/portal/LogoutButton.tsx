"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/client-logout", { method: "POST" });
    router.push("/area-cliente");
    router.refresh();
  }

  return (
    <button className="client-dash-logout" onClick={handleLogout}>
      SAIR
    </button>
  );
}
