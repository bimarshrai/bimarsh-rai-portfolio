# WhatsApp Cloud API setup

The contact API now supports Meta WhatsApp Cloud API in addition to Resend. WhatsApp is optional: email remains the primary channel and will still work if WhatsApp is not configured.

## 1. Create/configure the Meta WhatsApp app

In Meta for Developers, create a business app and add the WhatsApp product. From the WhatsApp API setup screen, collect:

- `WHATSAPP_PHONE_NUMBER_ID` — the ID of the WhatsApp Business phone number used for sending.
- `WHATSAPP_ACCESS_TOKEN` — a server-side access token with permission to send WhatsApp messages.

Do not put the token in the frontend or commit it to GitHub.

## 2. Create an approved template

Because a website form submission is a business-initiated notification to your own WhatsApp number, use an approved WhatsApp message template. Create a template named `portfolio_enquiry` (or change `WHATSAPP_TEMPLATE_NAME`) with language `English (US)` / `en_US` and six body variables in this order:

1. `{{1}}` — Name
2. `{{2}}` — Email
3. `{{3}}` — Company
4. `{{4}}` — Need
5. `{{5}}` — Budget
6. `{{6}}` — Message

Example body:

New portfolio enquiry\nName: {{1}}\nEmail: {{2}}\nCompany: {{3}}\nNeed: {{4}}\nBudget: {{5}}\nMessage: {{6}}

Wait for Meta to approve the template before testing.

## 3. Configure `.env.local`

```env
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=bimarshwebsite@gmail.com
CONTACT_FROM_EMAIL="Bimarsh Rai <onboarding@resend.dev>"

WHATSAPP_ACCESS_TOKEN=your_meta_access_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_TO=917061659010
WHATSAPP_TEMPLATE_NAME=portfolio_enquiry
WHATSAPP_TEMPLATE_LANGUAGE=en_US
WHATSAPP_GRAPH_API_VERSION=v23.0
```

Use the exact international number for `WHATSAPP_TO`, without `+`, spaces, brackets or dashes.

## 4. Restart Next.js

Environment variables are loaded when the server starts. After editing `.env.local`, restart:

```bash
Ctrl+C
npm run dev
```

Then submit the portfolio contact form.

## Important

The implementation sends a WhatsApp **template message**, not an arbitrary free-form message. This is intentional for business-initiated notifications and avoids relying on an open customer-service window.
