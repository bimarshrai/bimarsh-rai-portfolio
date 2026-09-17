# Contact system setup

The portfolio contact form now posts to `/api/contact`. The server sends the enquiry through Resend and, when the optional Twilio variables are configured, sends a WhatsApp notification too.

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Put your Resend API key in `RESEND_API_KEY`. Never commit `.env.local`.
3. Keep `CONTACT_TO_EMAIL` as `bimarshwebsite@gmail.com`.
4. For initial Resend testing, `CONTACT_FROM_EMAIL` can use `onboarding@resend.dev` subject to Resend account restrictions. For production, use a sender address on a verified domain.
5. Start the app with `npm run dev` and submit the form.

## WhatsApp

Automatic WhatsApp alerts require a configured WhatsApp sender/provider. This implementation supports Twilio's WhatsApp messaging API. Set the four `TWILIO_*` / `WHATSAPP_TO` variables only after the sender is configured. If they are not configured, email delivery still works and the visible WhatsApp button remains a normal click-to-chat link.

## Production

Set the same variables in Vercel Project Settings → Environment Variables. Do not put API keys in the repository.
