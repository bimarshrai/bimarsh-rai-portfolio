"use client";

import { ArrowUpRight, Loader2, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/constants";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your enquiry.");
    }
  }

  const buttonLabel = status === "sending" ? "Sending..." : status === "success" ? "Sent" : "Send Inquiry";

  return (
    <section id="contact" className="section-divider py-24 sm:py-32">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface">
          <div className="grid gap-14 p-6 sm:p-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16 lg:p-12">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Have a project in mind?"
                description="Tell me a little about what you want to build. I'll get back to you with the next steps."
              />
              <div className="mt-9 space-y-3">
                <a href={`mailto:${siteConfig.email}`} className="contact-link">
                  <span className="flex items-center gap-3"><Mail size={17} />{siteConfig.email}</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={`https://wa.me/91${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="flex items-center gap-3"><MessageCircle size={17} />WhatsApp</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-background p-5 sm:p-7">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                  <Field label="Business / Company" name="company" placeholder="Company name" />
                  <Select label="What do you need?" name="need" options={["New Website", "Redesign", "Landing Page", "Other"]} />
                  <Select label="Budget" name="budget" options={["₹5k–₹10k", "₹10k–₹20k", "₹20k–₹40k", "₹40k+"]} className="sm:col-span-2" />
                  <label className="block sm:col-span-2">
                    <span className="field-label">Message</span>
                    <textarea name="message" rows={5} minLength={10} placeholder="Tell me about your project..." className="field-input resize-none" required />
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div aria-live="polite" className="max-w-md text-xs leading-5 text-muted-foreground">
                    {status === "success" && "Thanks — your enquiry has been sent. I’ll get back to you soon."}
                    {status === "error" && <span className="text-red-400">{errorMessage}</span>}
                    {status === "idle" && "Your enquiry goes directly to my inbox."}
                    {status === "sending" && "Sending your enquiry securely..."}
                  </div>
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={16} />}
                    {buttonLabel}
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="block"><span className="field-label">{label}</span><input name={name} type={type} placeholder={placeholder} required={required} className="field-input" /></label>;
}

function Select({ label, name, options, className = "" }: { label: string; name: string; options: string[]; className?: string }) {
  return <label className={`block ${className}`}><span className="field-label">{label}</span><select name={name} defaultValue={options[0]} className="field-input">{options.map(option => <option key={option}>{option}</option>)}</select></label>;
}
