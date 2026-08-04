import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/site.config";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

  // Honeypot — if filled, it's a bot
  if (website) {
    console.log(`[SPAM] Honeypot filled: ${name} / ${phone}`);
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone, and message are required." },
      { status: 400 }
    );
  }

  const toEmail = process.env[siteConfig.ownerEmailEnvKey];
  const bccEmail = process.env[siteConfig.bccEmailEnvKey];

  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL not set");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const from = process.env.RESEND_FROM || `${siteConfig.businessName} <noreply@bigbeartruckrepair.com>`;

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = email ? escapeHtml(email) : "Not provided";
  const safeMessage = escapeHtml(message);

  const text = `New contact form submission from ${siteConfig.businessName} website

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Message:
${message}`;

  const html = `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1C1E22; border-bottom: 2px solid #F0A500; padding-bottom: 8px;">
    New Website Inquiry
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="padding: 8px 0; color: #5F6B7A; font-weight: bold; width: 80px;">Name</td>
      <td style="padding: 8px 0; color: #1C1E22;">${safeName}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #5F6B7A; font-weight: bold;">Phone</td>
      <td style="padding: 8px 0; color: #1C1E22;">
        <a href="tel:${safePhone}" style="color: #1C1E22;">${safePhone}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #5F6B7A; font-weight: bold;">Email</td>
      <td style="padding: 8px 0; color: #1C1E22;">${safeEmail}</td>
    </tr>
  </table>
  <div style="margin-top: 16px; padding: 16px; background: #F5F0E8; border-radius: 8px;">
    <p style="margin: 0 0 8px; color: #5F6B7A; font-weight: bold;">Message</p>
    <p style="margin: 0; color: #1C1E22; white-space: pre-wrap;">${safeMessage}</p>
  </div>
</div>`;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to: toEmail,
      ...(bccEmail ? { bcc: bccEmail } : {}),
      subject: `[${siteConfig.businessName}] New Inquiry — ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please call us instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
