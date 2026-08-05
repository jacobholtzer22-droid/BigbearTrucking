import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";

const CRM_URL = "https://www.alignandacquire.com/api/contact";

export async function POST(req: Request) {
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, email, message, website } = body;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone, and message are required." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email: email || undefined,
        message,
        website,
        businessSlug: siteConfig.crmBusinessSlug,
        smsConsent: true,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`CRM responded ${res.status}: ${text}`);
      return NextResponse.json(
        { error: "Failed to send message. Please call us instead." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to forward to CRM:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
