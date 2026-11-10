"use client";

import { FormEvent, useState } from "react";

type FormState = { name: string; email: string; subject: string; message: string; website: string; };
const initialForm: FormState = { name: "", email: "", subject: "", message: "", website: "", };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${baseUrl.replace(/\/$/, "")}/enquiries/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("We could not send your enquiry right now.");
      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-shell bg-white">
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="eyebrow text-[var(--aqua)]">Start a conversation</p>
          <h2 className="font-display mt-5 text-4xl leading-[1.05] text-[var(--navy)] sm:text-6xl">Tell us where<br /><em className="font-editorial text-[var(--aqua)]">you want to go.</em></h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[var(--ink-soft)]">Have a destination in mind or just a feeling? Share a few details and our travel designers will be in touch.</p>
          <div className="mt-10 space-y-5 border-t border-[var(--line)] pt-7 text-sm">
            <a href="tel:+919964855315" className="block text-[var(--navy)] transition-colors hover:text-[var(--aqua)]"><span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">Call us</span>+91 9964855315</a>
            <a href="mailto:info@alviontravels.in" className="block text-[var(--navy)] transition-colors hover:text-[var(--aqua)]"><span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">Email us</span>info@alviontravels.in</a>
          </div>
        </div>

        <form onSubmit={submitEnquiry} className="border-t-2 border-[var(--navy)] pt-7">
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="website">Leave this field empty</label>
            <input
              id="website"
              name="company_website_check"
              type="text"
              tabIndex={-1}
              autoComplete="new-password"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="field-label">Full name<input required value={form.name} onChange={(event) => updateField("name", event.target.value)} name="name" autoComplete="name" placeholder="Your name" className="field-input" /></label>
            <label className="field-label">Email address<input required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} name="email" autoComplete="email" placeholder="you@example.com" className="field-input" /></label>
          </div>
          <label className="field-label mt-6">Subject<input required value={form.subject} onChange={(event) => updateField("subject", event.target.value)} name="subject" placeholder="What are you dreaming about?" className="field-input" /></label>
          <label className="field-label mt-6">Message<textarea required value={form.message} onChange={(event) => updateField("message", event.target.value)} name="message" rows={5} placeholder="Tell us a little about your plans..." className="field-input resize-y" /></label>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === "submitting"} className="button-primary w-fit disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? "Sending..." : "Send enquiry"} <span aria-hidden="true">↗</span></button>
            <p role="status" className={`text-sm ${status === "error" ? "text-red-700" : "text-[var(--aqua)]"}`}>{status === "success" ? "Thanks — we will be in touch shortly." : status === "error" ? errorMessage : ""}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
