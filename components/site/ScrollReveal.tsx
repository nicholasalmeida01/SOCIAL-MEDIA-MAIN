"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = parseInt(el.dataset.revealIdx || "0", 10);
          window.setTimeout(() => el.classList.add("visible"), idx * 90);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
    els.forEach((el, i) => {
      if (!el.dataset.revealIdx) el.dataset.revealIdx = String(i % 4);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
