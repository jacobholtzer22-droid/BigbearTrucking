import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content text-center">
        <p className="font-display text-6xl font-bold text-safety-amber sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-asphalt sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md font-body text-steel">
          The page you&apos;re looking for doesn&apos;t exist. If you need truck
          repair, call us directly — we&apos;re here 24 hours, Monday through
          Saturday.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-asphalt px-6 py-3 font-display font-bold text-bone transition-opacity duration-200 hover:opacity-90"
          >
            Back to Home
          </Link>
          <PhoneLink size="lg" className="text-dark-amber" />
        </div>
      </div>
    </section>
  );
}
