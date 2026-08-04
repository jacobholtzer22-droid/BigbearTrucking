import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "@/components/PhoneLink";
import { Wrench, ScanSearch, Truck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Truck Repair Services",
  description: `${siteConfig.businessName} offers 24-hour truck repair, diagnostics, fleet maintenance, and roadside assistance in ${siteConfig.city}, ${siteConfig.state}. Call ${siteConfig.phoneDisplay}.`,
  alternates: { canonical: "./" },
};

const serviceIcons = [Wrench, ScanSearch, Truck, Clock];

const serviceDetails: Record<
  string,
  { bullets: string[] }
> = {
  "truck-repair": {
    bullets: [
      "Engine and transmission repairs",
      "Brake system service and replacement",
      "Electrical system diagnostics and repair",
      "Suspension and steering work",
      "Cooling system and radiator service",
    ],
  },
  "truck-diagnostics": {
    bullets: [
      "Electronic fault code reading and analysis",
      "Engine performance testing",
      "Emissions system diagnostics",
      "Electrical and wiring troubleshooting",
      "Pre-purchase inspections",
    ],
  },
  "fleet-maintenance": {
    bullets: [
      "Scheduled preventive maintenance programs",
      "Oil changes and fluid services",
      "Brake inspections and adjustments",
      "Tire checks and rotation",
      "Comprehensive multi-point inspections",
    ],
  },
  "roadside-assistance": {
    bullets: [
      "24-hour emergency dispatch",
      "On-site breakdown repair",
      "Jump starts and battery service",
      "Fuel delivery",
      "Towing coordination",
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-smoke">
            Full-service commercial truck repair, available 24 hours a day,
            Monday through Saturday. Whatever the problem, we have the tools and
            experience to fix it right.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content space-y-12">
          {siteConfig.services.map((service, i) => {
            const Icon = serviceIcons[i];
            const details = serviceDetails[service.slug];
            return (
              <div
                key={service.slug}
                className="rounded-lg border border-bone bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-safety-amber/10">
                    <Icon
                      size={24}
                      className="text-safety-amber"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-asphalt sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-2 font-body text-steel leading-relaxed">
                      {service.description}
                    </p>
                    {details && (
                      <ul className="mt-4 space-y-2">
                        {details.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 font-body text-sm text-steel"
                          >
                            <span
                              className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-safety-amber"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 inline-block font-display text-sm font-bold text-dark-amber transition-colors duration-200 hover:text-safety-amber"
                    >
                      Learn more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            Need a Repair Now?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-smoke">
            Call {siteConfig.businessName} for fast, honest commercial truck
            repair — available 24 hours, Monday through Saturday.
          </p>
          <div className="mt-8">
            <PhoneLink size="xl" className="text-safety-amber" />
          </div>
        </div>
      </section>
    </>
  );
}
