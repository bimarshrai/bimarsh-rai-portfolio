import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 4000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getEnv(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

async function sendEmail({
  name,
  email,
  company,
  need,
  budget,
  message,
}: {
  name: string;
  email: string;
  company: string;
  need: string;
  budget: string;
  message: string;
}) {
  const apiKey = getEnv("RESEND_API_KEY");
  const to = getEnv("CONTACT_TO_EMAIL") ?? "bimarshwebsite@gmail.com";
  const from = getEnv("CONTACT_FROM_EMAIL") ?? "Bimarsh Rai <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New portfolio enquiry — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#18181b;max-width:680px;margin:auto">
          <h2 style="margin-bottom:24px">New website enquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:700;width:150px">Name</td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Email</td><td>${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Company</td><td>${escapeHtml(company || "Not provided")}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Need</td><td>${escapeHtml(need)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Budget</td><td>${escapeHtml(budget)}</td></tr>
          </table>
          <div style="margin-top:24px;padding:18px;background:#f4f4f5;border-radius:12px">
            <div style="font-weight:700;margin-bottom:8px">Message</div>
            <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend request failed: ${response.status} ${details}`);
  }
}

async function sendWhatsApp({
  name,
  email,
  company,
  need,
  budget,
  message,
}: {
  name: string;
  email: string;
  company: string;
  need: string;
  budget: string;
  message: string;
}) {
  const accessToken = getEnv("WHATSAPP_ACCESS_TOKEN");
  const phoneNumberId = getEnv("WHATSAPP_PHONE_NUMBER_ID");
  const recipient = getEnv("WHATSAPP_TO");
  const templateName = getEnv("WHATSAPP_TEMPLATE_NAME");
  const templateLanguage = getEnv("WHATSAPP_TEMPLATE_LANGUAGE") ?? "en_US";
  const graphVersion = getEnv("WHATSAPP_GRAPH_API_VERSION") ?? "v23.0";

  // WhatsApp Cloud API is optional until the Meta app, phone number,
  // recipient and approved message template are configured.
  if (!accessToken || !phoneNumberId || !recipient || !templateName) {
    return false;
  }

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipient.replace(/[^0-9]/g, ""),
        type: "template",
        template: {
          name: templateName,
          language: { code: templateLanguage },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name },
                { type: "text", text: email },
                { type: "text", text: company || "Not provided" },
                { type: "text", text: need },
                { type: "text", text: budget },
                { type: "text", text: message.slice(0, 900) },
              ],
            },
          ],
        },
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`WhatsApp request failed: ${response.status} ${details}`);
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, unknown>;

    // Honeypot: bots should fill this, real users never see it.
    if (clean(data.website)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(data.name);
    const email = clean(data.email);
    const company = clean(data.company);
    const need = clean(data.need);
    const budget = clean(data.budget);
    const message = clean(data.message);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!need || !budget || message.length < 10) {
      return NextResponse.json(
        { error: "Please complete the project details and add a little more about the project." },
        { status: 400 },
      );
    }

    await sendEmail({ name, email, company, need, budget, message });

    let whatsappSent = false;
    try {
      whatsappSent = await sendWhatsApp({ name, email, company, need, budget, message });
    } catch (error) {
      // Email is the primary delivery channel. Do not make a successful enquiry fail
      // just because the optional WhatsApp channel is unavailable.
      console.error("WhatsApp notification failed:", error);
    }

    return NextResponse.json({ ok: true, whatsappSent });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry. Please try again or email me directly." },
      { status: 500 },
    );
  }
}
