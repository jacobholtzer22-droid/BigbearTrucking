import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Wrench, ScanSearch, Truck, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import reviews from "../../content/reviews.json";

const homeFaqs = [
  {
    question: "What are your hours of operation?",
    answer: `We are open 24 hours a day, Monday through Saturday. Sunday we are closed. Whether your truck breaks down at 2 PM or 2 AM, call ${siteConfig.phoneDisplay} and we will get to work.`,
  },
  {
    question: "Where is Big Bear Truck Repair located?",
    answer: `We are based in ${siteConfig.city}, Michigan and serve the entire state. Whether your truck breaks down in Grand Rapids, Detroit, Lansing, or anywhere in between, we will get to you.`,
  },
  {
    question: "What kind of trucks do you work on?",
    answer: "We are a commercial truck repair specialist. We handle a wide range of truck repairs, from minor fixes to major overhauls.",
  },
  {
    question: "Do you offer roadside assistance?",
    answer: `Yes. We come to you. We offer roadside assistance when breakdowns happen on the road. Call ${siteConfig.phoneDisplay} — we are available 24 hours a day, Monday through Saturday.`,
  },
  {
    question: "How do I get a repair?",
    answer: `Call us at ${siteConfig.phoneDisplay} any time we are open — 24 hours a day, Monday through Saturday.`,
  },
];

const serviceIcons = [Wrench, ScanSearch, Truck, Clock];

const serviceCardImages = [
  { src: "/images/card-truck-repair-768w.webp", alt: "Brake rotor and hub with wheel removed for truck brake repair" },
  { src: "/images/card-diagnostics-768w.webp", alt: "PACCAR engine compartment with coolant reservoir and alternator during diagnostics" },
  { src: "/images/card-fleet-768w.webp", alt: "White Ford F-650 box truck in a commercial parking lot" },
  { src: "/images/hero-roadside-snow-768w.webp", alt: "Red semi cab on a snowy highway shoulder waiting for roadside repair" },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeFaqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-asphalt">
        <Image
          src="/images/hero-trucks-warehouse-1920w.webp"
          alt="Red semi cab and white box truck parked at a warehouse with roll-up doors"
          width={1920}
          height={1076}
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-asphalt/50" />
        <div className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-content text-center">
            <h1 className="font-display text-4xl font-bold leading-tight text-bone sm:text-5xl lg:text-6xl">
              24-Hour Truck Repair
              <br />
              <span className="text-safety-amber">
                in {siteConfig.city}, {siteConfig.state}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-smoke sm:text-xl">
              Commercial truck breakdowns don&apos;t wait for business hours.
              Neither do we. Call Big Bear for fast, honest repairs — Monday
              through Saturday, any hour.
            </p>
            <div className="mt-10">
              <PhoneLink size="xl" className="text-safety-amber" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Big Bear */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="text-center font-display text-3xl font-bold text-asphalt sm:text-4xl">
            Why Truckers Trust Big Bear
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-bone bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-safety-amber/10">
                <Clock size={24} className="text-safety-amber" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-asphalt">
                Open When You Need Us
              </h3>
              <p className="mt-2 font-body text-steel">
                24-hour service, Monday through Saturday. Whether it&apos;s 2
                PM or 2 AM, we answer the phone and get to work.
              </p>
            </div>
            <div className="rounded-lg border border-bone bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-safety-amber/10">
                <Wrench size={24} className="text-safety-amber" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-asphalt">
                Honest Diagnostics
              </h3>
              <p className="mt-2 font-body text-steel">
                We fix what needs fixing — nothing more. If the repair
                isn&apos;t necessary, we&apos;ll tell you before we touch a
                wrench.
              </p>
            </div>
            <div className="rounded-lg border border-bone bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-safety-amber/10">
                <Truck size={24} className="text-safety-amber" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-asphalt">
                Commercial Truck Experts
              </h3>
              <p className="mt-2 font-body text-steel">
                From box trucks to semis, we have the tools and experience for
                the full range of commercial truck repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-concrete px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="text-center font-display text-3xl font-bold text-bone sm:text-4xl">
            Our Services
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {siteConfig.services.map((service, i) => {
              const Icon = serviceIcons[i];
              const cardImg = serviceCardImages[i];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-lg border border-asphalt bg-asphalt transition-colors duration-200 hover:border-safety-amber"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={cardImg.src}
                      alt={cardImg.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-safety-amber/10">
                      <Icon
                        size={20}
                        className="text-safety-amber"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-xl font-bold text-bone group-hover:text-safety-amber">
                      {service.name}
                    </h3>
                    <p className="mt-2 font-body text-sm text-smoke">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-safety-amber px-6 py-3 font-display font-bold text-asphalt transition-opacity duration-200 hover:opacity-90"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="text-center font-display text-3xl font-bold text-asphalt sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-center font-body text-lg text-steel">
            5.0 on Google across 13 reviews
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(["Veronica Ceja", "D B", "Rosie Bernal", "Maria G", "Matthew Patrickson", "Spencer H."] as const).map((name) => {
              const review = reviews.find((r) => r.name === name);
              if (!review) return null;
              return (
                <blockquote
                  key={review.name}
                  className="rounded-lg border border-bone bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <span key={j} className="text-safety-amber" aria-hidden="true">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-steel leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <footer className="mt-4 font-body text-sm text-asphalt">
                    <strong>{review.name}</strong>
                    <span className="text-smoke"> — {review.source}</span>
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Photos */}
      <section className="bg-concrete px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/engine-detail-blue-hose-640w.webp"
                alt="Close-up of a truck engine bay showing power steering reservoir and fuel filter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 400px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/red-kenworth-snow-640w.webp"
                alt="Red Kenworth T880 with cab tilted forward exposing the Cummins engine in snow"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 400px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/roadside-car-carrier-640w.webp"
                alt="Car-carrier trailer on a snowy highway shoulder during a roadside assistance call"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-concrete px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            Serving All of Michigan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-smoke">
            {siteConfig.businessName} is based in {siteConfig.city}, Michigan
            and provides 24-hour commercial truck repair across the entire
            state. Wherever your truck breaks down, we will get to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {siteConfig.serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-lg border border-asphalt bg-asphalt px-4 py-2 font-body text-bone"
              >
                <MapPin size={16} className="text-safety-amber" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="text-center font-display text-3xl font-bold text-asphalt sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mx-auto mt-10 max-w-3xl divide-y divide-bone">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <dt className="font-display text-lg font-bold text-asphalt">
                  {faq.question}
                </dt>
                <dd className="mt-2 font-body text-steel leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            Truck Trouble? Call Now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-smoke">
            Don&apos;t wait for the shop to open. {siteConfig.businessName} is
            available 24 hours a day, Monday through Saturday.
          </p>
          <div className="mt-8">
            <PhoneLink size="xl" className="text-safety-amber" />
          </div>
        </div>
      </section>
    </>
  );
}
