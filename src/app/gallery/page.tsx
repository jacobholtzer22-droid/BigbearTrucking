import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "@/components/PhoneLink";
import { galleryData } from "../../../content/gallery";

export const metadata: Metadata = {
  title: "Our Work",
  description: `See real repairs by ${siteConfig.businessName} — brake jobs, suspension work, belt replacements, and roadside service across West Michigan. Call ${siteConfig.phoneDisplay}.`,
  alternates: { canonical: "./" },
};

export default function GalleryPage() {
  const totalPhotos = galleryData.reduce(
    (sum, cat) => sum + cat.groups.reduce((g, group) => g + group.images.length, 0),
    0
  );

  return (
    <>
      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h1 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-smoke">
            {totalPhotos} photos from real jobs — brakes, suspension, belts,
            roadside repairs, and more. This is what we do every day.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content space-y-16">
          {galleryData.map((category) => (
            <div key={category.slug}>
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-2xl font-bold text-asphalt sm:text-3xl">
                  {category.name}
                </h2>
                <Link
                  href={`/services/${category.slug}`}
                  className="font-body text-sm font-medium text-dark-amber transition-colors duration-200 hover:text-safety-amber"
                >
                  View service &rarr;
                </Link>
              </div>

              <div className="mt-6 space-y-10">
                {category.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-display text-lg font-bold text-asphalt">
                      {group.title}
                    </h3>
                    <div
                      className={`mt-4 grid gap-4 ${
                        group.images.length === 1
                          ? "max-w-sm"
                          : "grid-cols-2 sm:grid-cols-2"
                      }`}
                    >
                      {group.images.map((img) => (
                        <div key={img.src} className="overflow-hidden rounded-lg">
                          <div className="relative aspect-[3/4]">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                              sizes={
                                group.images.length === 1
                                  ? "(max-width: 768px) 100vw, 384px"
                                  : "(max-width: 768px) 50vw, 400px"
                              }
                            />
                          </div>
                          {img.label && (
                            <div className="bg-asphalt px-3 py-1.5">
                              <span className="font-display text-sm font-bold text-bone">
                                {img.label}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-asphalt px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
            Need a Repair?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-smoke">
            {siteConfig.businessName} — {siteConfig.hoursDisplay}.
          </p>
          <div className="mt-8">
            <PhoneLink size="xl" className="text-safety-amber" />
          </div>
        </div>
      </section>
    </>
  );
}
