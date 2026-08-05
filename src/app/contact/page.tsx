import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "@/components/PhoneLink";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact | Truck Repair in ${siteConfig.city}`,
  description: `Contact ${siteConfig.businessName} for 24-hour commercial truck repair across West Michigan. Call ${siteConfig.phoneDisplay} any time Monday through Saturday, or send a message.`,
  alternates: { canonical: "./" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h1 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-smoke">
            Need a repair now? Call us directly. For non-urgent inquiries, send
            us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-asphalt">
                Fastest Way to Reach Us
              </h2>
              <p className="mt-2 font-body text-steel">
                For emergencies and breakdowns, always call. We answer 24 hours
                a day, Monday through Saturday.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-asphalt">
                    Phone
                  </p>
                  <div className="mt-2">
                    <PhoneLink size="lg" className="text-dark-amber" />
                  </div>
                </div>

                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-asphalt">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 inline-flex items-center gap-2 font-body text-steel transition-colors duration-200 hover:text-asphalt"
                  >
                    <Mail size={16} className="flex-shrink-0" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-asphalt">
                    Service Area
                  </p>
                  <p className="mt-2 flex items-start gap-2 font-body text-steel">
                    <MapPin
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    Based in {siteConfig.city}, MI — serving all of West Michigan
                  </p>
                </div>

                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-asphalt">
                    Hours
                  </p>
                  <ul className="mt-2 space-y-1 font-body text-sm text-steel">
                    <li>Monday–Saturday: 24 hours</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-bone bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-bold text-asphalt">
                  Send a Message
                </h2>
                <p className="mt-2 font-body text-sm text-steel">
                  We&apos;ll get back to you as soon as possible. For urgent
                  repairs, please call.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
