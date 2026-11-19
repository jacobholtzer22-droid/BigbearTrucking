import Link from "next/link";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "./PhoneLink";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-concrete bg-asphalt">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold text-bone">
              {siteConfig.businessName}
            </p>
            <p className="mt-2 font-body text-sm text-smoke">
              {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
            </p>
            <div className="mt-3">
              <PhoneLink size="md" className="text-safety-amber" />
            </div>
            <p className="mt-2 font-body text-sm text-smoke">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors duration-200 hover:text-bone"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-bone">
              Services
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-sm text-smoke transition-colors duration-200 hover:text-bone"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-bone">
              Hours
            </p>
            <ul className="mt-3 space-y-1 font-body text-sm text-smoke">
              <li>Monday–Saturday: 24 hours</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-bone">
              Service Area
            </p>
            <p className="mt-3 font-body text-sm text-smoke">
              Based in {siteConfig.city}, MI — serving all of West Michigan
            </p>
            <div className="mt-4 flex gap-4">
              {siteConfig.sameAs.map((url) => {
                const label = url.includes("facebook")
                  ? "Facebook"
                  : url.includes("yelp")
                    ? "Yelp"
                    : "Link";
                return (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-smoke transition-colors duration-200 hover:text-bone"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-concrete pt-6">
          <p className="text-center font-body text-xs text-steel">
            © {currentYear} {siteConfig.businessName} · {siteConfig.city},{" "}
            {siteConfig.state} ·{" "}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              data-cta="call"
              className="transition-colors duration-200 hover:text-bone"
            >
              {siteConfig.phoneDisplay}
            </a>
            {" "}·{" "}
            <Link href="/privacy" className="transition-colors duration-200 hover:text-bone">Privacy</Link>
            <span hidden data-aa-cookie-wrap>{" "}·{" "}<a href="#" data-aa-cookie-settings className="transition-colors duration-200 hover:text-bone">Cookie settings</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
