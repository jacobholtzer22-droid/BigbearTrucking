"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/site.config";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
      website: data.get("website") as string,
    };

    try {
      const res = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-display text-xl font-bold text-green-800">
          Message Sent
        </p>
        <p className="mt-2 font-body text-green-700">
          Thank you — we&apos;ll get back to you soon. For urgent repairs, call{" "}
          <a
            href={`tel:${siteConfig.phoneE164}`}
            data-cta="call"
            className="font-bold underline"
          >
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 font-body text-sm text-green-600 underline transition-colors duration-200 hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {/* Honeypot — hidden from real users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block font-body text-sm font-medium text-asphalt"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-smoke/40 bg-bone px-3 py-2.5 font-body text-asphalt placeholder:text-smoke focus:border-safety-amber focus:outline-none focus:ring-1 focus:ring-safety-amber"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block font-body text-sm font-medium text-asphalt"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-lg border border-smoke/40 bg-bone px-3 py-2.5 font-body text-asphalt placeholder:text-smoke focus:border-safety-amber focus:outline-none focus:ring-1 focus:ring-safety-amber"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-body text-sm font-medium text-asphalt"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-lg border border-smoke/40 bg-bone px-3 py-2.5 font-body text-asphalt placeholder:text-smoke focus:border-safety-amber focus:outline-none focus:ring-1 focus:ring-safety-amber"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-asphalt"
        >
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-lg border border-smoke/40 bg-bone px-3 py-2.5 font-body text-asphalt placeholder:text-smoke focus:border-safety-amber focus:outline-none focus:ring-1 focus:ring-safety-amber"
          placeholder="Describe what you need — truck type, problem, location if roadside..."
        />
      </div>

      {state === "error" && (
        <p className="font-body text-sm text-red-600" role="alert">
          {errorMsg || "Something went wrong. Please try again or call us."}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-safety-amber px-6 py-3 font-display text-lg font-bold text-asphalt transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
