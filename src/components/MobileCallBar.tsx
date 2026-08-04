import { siteConfig } from "@/site.config";
import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={`tel:${siteConfig.phoneE164}`}
        data-cta="call"
        className="flex items-center justify-center gap-3 bg-safety-amber px-4 py-4 font-display text-lg font-bold text-asphalt transition-opacity duration-200 active:opacity-90"
      >
        <Phone size={22} aria-hidden="true" />
        <span>Call Now {siteConfig.phoneDisplay}</span>
      </a>
    </div>
  );
}
