"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FinalCta({ asPage = false }: { asPage?: boolean }) {
  const Title = asPage ? "h1" : "h2";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    if (!trimmedPhone && !trimmedEmail) {
      setError("Add a phone number or email so we can follow up.");
      return;
    }
    setError("");
    const body = [
      `Name: ${name}`,
      trimmedEmail ? `Email: ${trimmedEmail}` : null,
      trimmedPhone ? `Phone: ${trimmedPhone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Estimate request — ${site.name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-espresso text-paper-50">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <div className="space-y-5 lg:col-span-5">
          <p className="section-label text-brass">Free estimate</p>
          <Title className="font-display text-3xl font-semibold sm:text-4xl">{site.primaryCta}</Title>
          <p className="text-base leading-relaxed text-paper-50/88">
            Tell us what you are considering. Call, email, or send a note — whichever is easier.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex min-h-12 items-center gap-3 rounded-sm border border-white/25 bg-white/5 px-4 text-base font-semibold hover:border-brass"
          >
            <Phone className="h-4 w-4 text-brass" aria-hidden />
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-12 items-center gap-3 rounded-sm border border-white/25 bg-white/5 px-4 text-base font-semibold hover:border-brass"
          >
            <Mail className="h-4 w-4 text-brass" aria-hidden />
            {site.email}
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-sm border border-white/15 bg-black/20 p-5 sm:p-6 lg:col-span-7"
        >
          <label className="block text-[0.9375rem] font-medium">
            Name
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1.5 min-h-12 w-full rounded-sm border border-white/25 bg-espresso px-3 text-base text-paper-50"
              autoComplete="name"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-[0.9375rem] font-medium">
              Phone
              <input
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  if (error) setError("");
                }}
                className="mt-1.5 min-h-12 w-full rounded-sm border border-white/25 bg-espresso px-3 text-base text-paper-50"
                autoComplete="tel"
              />
            </label>
            <label className="block text-[0.9375rem] font-medium">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError("");
                }}
                className="mt-1.5 min-h-12 w-full rounded-sm border border-white/25 bg-espresso px-3 text-base text-paper-50"
                autoComplete="email"
              />
            </label>
          </div>
          <p className="text-[0.9375rem] text-paper-50/75">Phone or email — whichever you prefer.</p>
          <label className="block text-[0.9375rem] font-medium">
            What are you considering?
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-1.5 min-h-28 w-full rounded-sm border border-white/25 bg-espresso px-3 py-2.5 text-base text-paper-50"
            />
          </label>
          {error ? (
            <p className="text-[0.9375rem] text-brass" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="inline-flex min-h-12 items-center rounded-sm bg-clay-500 px-5 text-base font-semibold text-white hover:bg-clay-600"
          >
            {site.primaryCta}
          </button>
        </form>
      </div>
    </section>
  );
}
