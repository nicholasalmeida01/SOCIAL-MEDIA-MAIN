"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import SoundControl from "./SoundControl";
import { playShutter } from "@/lib/shutterSound";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/pacotes", label: "Pacotes" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function TopBar() {
  const pathname = usePathname();
  const [clock, setClock] = useState("00:00:00");

  useEffect(() => {
    function tick() {
      const d = new Date();
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function isActive(href: string): boolean {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <div className="topbar">
      <div className="topbar-logo">
        <LogoMark idPrefix="topbarLogoGrad" className="logo-mark" />
        <span className="logo-word">
          PLAY <span className="logo-word-dim">TO</span> PLAY
        </span>
      </div>
      <div className="topbar-tabs">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`topbar-tab ${isActive(item.href) ? "active" : ""}`}
            onClick={() => playShutter()}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/area-cliente"
          className={`topbar-tab topbar-tab-client ${pathname.startsWith("/area-cliente") ? "active" : ""}`}
          onClick={() => playShutter()}
        >
          Área do Cliente
        </Link>
      </div>
      <div className="topbar-clock mono">{clock}</div>
      <SoundControl />
    </div>
  );
}
