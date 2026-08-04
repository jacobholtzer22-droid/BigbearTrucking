import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "@/components/PhoneLink";
import { JsonLd } from "@/components/JsonLd";

interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServiceContent {
  heading: string;
  intro: string;
  sections: { title: string; body: string }[];
  cta: string;
  faqs: ServiceFaq[];
}

const serviceContent: Record<string, ServiceContent> = {
  "truck-repair": {
    heading: "General Truck Repairs",
    intro: `When your commercial truck needs work — from routine brake jobs to major engine overhauls — ${siteConfig.businessName} has the tools and experience to handle it. We work on the full range of commercial vehicles, and we do it 24 hours a day, Monday through Saturday.`,
    sections: [
      {
        title: "Engine & Drivetrain",
        body: "Complete engine diagnostics and repair, transmission service, clutch replacement, and driveline work. We identify the root cause before we start turning wrenches, so you only pay for the repair you actually need.",
      },
      {
        title: "Brakes & Suspension",
        body: "Brake system service including pads, rotors, drums, air brake systems, and ABS diagnostics. Suspension repair covers leaf springs, air ride systems, shock absorbers, and steering components.",
      },
      {
        title: "Electrical & Cooling Systems",
        body: "From alternator and starter replacement to full wiring harness diagnostics. Cooling system service includes radiator repair, water pump replacement, thermostat service, and coolant leak diagnosis.",
      },
    ],
    cta: "Truck needs work? Call now for fast, honest repair.",
    faqs: [
      {
        question: "What types of truck repairs do you handle?",
        answer: "We handle a wide range of commercial truck repairs, from minor fixes to major overhauls. Whatever your truck needs, we have the tools and experience for it.",
      },
      {
        question: "Are you open for truck repairs at night?",
        answer: `Yes. We are open 24 hours a day, Monday through Saturday. Call ${siteConfig.phoneDisplay} any time and we will get to work on your truck.`,
      },
      {
        question: "Do you work on commercial trucks?",
        answer: "Yes. We are a commercial truck repair specialist and handle the full range of truck repairs, from minor fixes to major overhauls.",
      },
    ],
  },
  "truck-diagnostics": {
    heading: "Truck Diagnostics",
    intro: `Modern commercial trucks rely on complex electronic systems. ${siteConfig.businessName} uses advanced diagnostic technology to read fault codes, analyze engine performance, and pinpoint problems with precision — so you only pay for what actually needs fixing.`,
    sections: [
      {
        title: "Electronic Fault Code Analysis",
        body: "We connect directly to your truck's onboard computer systems to read and interpret diagnostic trouble codes. This identifies exactly which system is reporting a problem, eliminating guesswork and unnecessary repairs.",
      },
      {
        title: "Engine Performance Testing",
        body: "Comprehensive testing of fuel delivery, ignition timing, turbo boost pressure, and exhaust systems. We find the source of power loss, rough running, excessive smoke, or poor fuel economy.",
      },
      {
        title: "Pre-Purchase Inspections",
        body: "Buying a used truck? We perform a thorough mechanical and electronic inspection to identify existing problems and estimate remaining service life on major components. Know what you're buying before you sign.",
      },
    ],
    cta: "Check engine light on? Call us — we'll find the real problem.",
    faqs: [
      {
        question: "How do you diagnose truck problems?",
        answer: "We use advanced diagnostic technology and expert knowledge to pinpoint problems with precision, so you only pay for what actually needs fixing.",
      },
      {
        question: "Will I pay for repairs I don't need?",
        answer: "No. We identify the root cause before we start any work. If a requested repair is not necessary, we will tell you and recommend what actually needs to be done.",
      },
      {
        question: "When can I bring my truck in for diagnostics?",
        answer: `We are available for diagnostics 24 hours a day, Monday through Saturday. Call ${siteConfig.phoneDisplay} and we will pinpoint the problem.`,
      },
    ],
  },
  "fleet-maintenance": {
    heading: "Fleet Maintenance",
    intro: `Breakdowns cost more than repairs — they cost you loads, schedules, and customer trust. ${siteConfig.businessName} offers proactive maintenance programs designed to keep your fleet running and prevent problems before they strand a driver.`,
    sections: [
      {
        title: "Preventive Maintenance Programs",
        body: "Scheduled service intervals tailored to your fleet's operating conditions. Regular oil changes, fluid checks, belt and hose inspections, and brake adjustments keep your trucks in peak condition and extend their service life.",
      },
      {
        title: "Multi-Point Inspections",
        body: "Comprehensive inspections covering brakes, tires, lights, fluids, belts, suspension, and steering components. We document findings so you can plan repairs on your schedule instead of dealing with emergencies on the road.",
      },
      {
        title: "Flexible Scheduling",
        body: "With 24-hour availability Monday through Saturday, we work around your fleet's schedule. Bring trucks in during off-hours so maintenance never costs you a day of hauling.",
      },
    ],
    cta: "Keep your fleet running — call to set up a maintenance plan.",
    faqs: [
      {
        question: "What is fleet maintenance for?",
        answer: "Fleet maintenance keeps your vehicles operating efficiently and helps prevent breakdowns before they happen. Call us to discuss a program for your fleet.",
      },
      {
        question: "Can I bring trucks in for maintenance outside business hours?",
        answer: "Yes. We are open 24 hours a day, Monday through Saturday. Bring trucks in during off-hours so maintenance never costs you a day of hauling.",
      },
      {
        question: "When are you available for fleet maintenance?",
        answer: `We are available 24 hours a day, Monday through Saturday. Call ${siteConfig.phoneDisplay} any time to schedule maintenance around your fleet's needs.`,
      },
    ],
  },
  "roadside-assistance": {
    heading: "Roadside Assistance & Emergency Repair",
    intro: `Broken down on the highway? ${siteConfig.businessName} responds fast. Our roadside assistance gets a technician to your location with the tools and parts to get you moving again — day or night, Monday through Saturday.`,
    sections: [
      {
        title: "Emergency Breakdown Response",
        body: `Call ${siteConfig.phoneDisplay} and we dispatch immediately. We carry common parts and diagnostic equipment so many roadside repairs can be completed on-site without towing your truck to a shop.`,
      },
      {
        title: "On-Site Diagnostics & Repair",
        body: "From electrical failures and fuel system problems to air brake issues and coolant leaks, we diagnose and repair at your breakdown location whenever possible. If a shop repair is needed, we coordinate towing to our facility.",
      },
      {
        title: "Serving the Grand Rapids Metro",
        body: `We provide roadside assistance throughout ${siteConfig.serviceAreas.join(", ")}, and the surrounding West Michigan area. When you're stuck, we're the call to make.`,
      },
    ],
    cta: "Stranded? Call now — we're on our way.",
    faqs: [
      {
        question: "What happens when I call for roadside assistance?",
        answer: `Call ${siteConfig.phoneDisplay} and we will help with your breakdown. We offer roadside assistance to get you back on the road, available 24 hours a day, Monday through Saturday.`,
      },
      {
        question: "What areas do you cover for roadside service?",
        answer: "We provide roadside assistance in Wyoming, Grand Rapids, and the surrounding West Michigan area.",
      },
      {
        question: "Are you available for roadside emergencies at night?",
        answer: `Yes. Our roadside assistance is available 24 hours a day, Monday through Saturday. Day or night, call ${siteConfig.phoneDisplay} when you need help on the road.`,
      },
    ],
  },
};

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  if (!service) return {};

  const s = service as { name: string; description: string; metaTitle?: string; metaDescription?: string };

  return {
    title: s.metaTitle || s.name,
    description: s.metaDescription || s.description,
    alternates: { canonical: "./" },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  const content = serviceContent[params.slug];

  if (!service || !content) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Michigan" },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortName,
        item: `${siteConfig.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-body text-sm text-smoke">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-bone"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors duration-200 hover:text-bone"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">{service.shortName}</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            {content.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-smoke leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content space-y-10">
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-bold text-asphalt">
                {section.title}
              </h2>
              <p className="mt-3 font-body text-steel leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            {content.cta}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-smoke">
            {siteConfig.businessName} — {siteConfig.hoursDisplay}.
          </p>
          <div className="mt-8">
            <PhoneLink size="xl" className="text-safety-amber" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-2xl font-bold text-asphalt sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-8 max-w-3xl divide-y divide-bone">
            {content.faqs.map((faq) => (
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

      {/* Other services */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-xl font-bold text-asphalt">
            Other Services
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {siteConfig.services
              .filter((s) => s.slug !== params.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-lg border border-bone bg-white px-4 py-2 font-body text-sm text-steel shadow-sm transition-colors duration-200 hover:border-safety-amber hover:text-asphalt"
                >
                  {s.shortName}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
