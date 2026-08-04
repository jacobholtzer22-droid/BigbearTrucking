import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: `About | Truck Repair in ${siteConfig.city}, ${siteConfig.state}`,
  description: `${siteConfig.businessName} is a 24-hour commercial truck repair shop in ${siteConfig.city}, ${siteConfig.state}. Honest diagnostics, around-the-clock service, Monday through Saturday.`,
  alternates: { canonical: "./" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h1 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            About {siteConfig.businessName}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-smoke">
            Commercial truck repair you can count on — any hour, any day except
            Sunday.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-3xl space-y-6 font-body text-steel leading-relaxed">
            <p>
              {siteConfig.businessName} is a commercial truck repair shop based
              in {siteConfig.city}, Michigan, serving the greater Grand Rapids
              area and West Michigan. We work on commercial trucks of all sizes
              — from box trucks and delivery vans to full-size semis and
              trailers.
            </p>
            <p>
              We are open 24 hours a day, Monday through Saturday. Truck
              breakdowns don&apos;t follow a 9-to-5 schedule, and neither do we.
              Whether it&apos;s the middle of the night or a Saturday afternoon,
              we answer the phone and get to work.
            </p>
            <p>
              Our approach is simple: diagnose honestly, fix what needs fixing,
              and don&apos;t charge for work that isn&apos;t necessary. When our
              technicians inspect your truck and find that the originally
              requested repair isn&apos;t needed, they&apos;ll tell you — and
              fix the actual problem instead.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-bone bg-white p-6 shadow-sm text-center">
              <p className="font-display text-3xl font-bold text-safety-amber">
                24-Hour
              </p>
              <p className="mt-1 font-body text-sm text-steel">
                Availability Mon–Sat
              </p>
            </div>
            <div className="rounded-lg border border-bone bg-white p-6 shadow-sm text-center">
              <p className="font-display text-3xl font-bold text-safety-amber">
                Commercial
              </p>
              <p className="mt-1 font-body text-sm text-steel">
                Truck Specialists
              </p>
            </div>
            <div className="rounded-lg border border-bone bg-white p-6 shadow-sm text-center">
              <p className="font-display text-3xl font-bold text-safety-amber">
                Honest
              </p>
              <p className="mt-1 font-body text-sm text-steel">
                Diagnostics & Pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-concrete px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl font-body text-smoke">
            We offer a full range of commercial truck services. Visit our{" "}
            <Link
              href="/services"
              className="text-safety-amber transition-colors duration-200 hover:text-amber-glow"
            >
              services page
            </Link>{" "}
            for details, or call to discuss your specific needs.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {siteConfig.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 font-body text-smoke transition-colors duration-200 hover:text-bone"
                >
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-safety-amber"
                    aria-hidden="true"
                  />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-3xl font-bold text-asphalt sm:text-4xl">
            Service Area
          </h2>
          <p className="mt-4 max-w-2xl font-body text-steel leading-relaxed">
            {siteConfig.businessName} serves{" "}
            {siteConfig.serviceAreas.join(", ")}, and the surrounding West
            Michigan area. We also provide roadside assistance for breakdowns in
            the greater Grand Rapids metro.
          </p>
        </div>
      </section>

      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-smoke">
            Call us any time, or{" "}
            <Link
              href="/contact"
              className="text-safety-amber transition-colors duration-200 hover:text-amber-glow"
            >
              send a message
            </Link>{" "}
            and we&apos;ll get back to you.
          </p>
          <div className="mt-8">
            <PhoneLink size="xl" className="text-safety-amber" />
          </div>
        </div>
      </section>
    </>
  );
}
