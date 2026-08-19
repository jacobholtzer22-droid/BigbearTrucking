"use client";

import { useEffect } from "react";

export function CallTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href^="tel:"]');
      if (!link) return;
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", {
          send_to: "AW-18373116344/3A50CNqtj90cELiD_rhE",
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
