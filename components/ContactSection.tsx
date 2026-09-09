"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:joshua@boostromconstruction.com?subject=${encodeURIComponent(
      "Estimate request from website"
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-cream md:py-24">
      <img
        src="/images/project-05.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            Let’s talk about your project
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
            Request a free estimate.
          </h2>
          <p className="mt-4 max-w-md text-sand">
            Same contact paths as the current site. This form opens your email
            client — it does not drop the lead into a silent inbox.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p>
              <a className="text-white underline" href="tel:949-500-1851">
                949-500-1851
              </a>
            </p>
            <p>
              <a
                className="text-white underline"
                href="mailto:joshua@boostromconstruction.com"
              >
                joshua@boostromconstruction.com
              </a>
            </p>
            <p className="text-sand">Orange County · License #789193</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="space-y-3 rounded-sm bg-cream p-6 text-ink"
        >
          <label className="block text-sm">
            Name
            <input name="name" required className="mt-1 w-full rounded border border-sand bg-white px-3 py-2.5" />
          </label>
          <label className="block text-sm">
            Phone
            <input name="phone" type="tel" required className="mt-1 w-full rounded border border-sand bg-white px-3 py-2.5" />
          </label>
          <label className="block text-sm">
            Email
            <input name="email" type="email" required className="mt-1 w-full rounded border border-sand bg-white px-3 py-2.5" />
          </label>
          <label className="block text-sm">
            Project
            <textarea name="message" rows={4} className="mt-1 w-full rounded border border-sand bg-white px-3 py-2.5" placeholder="Kitchen, bath, outdoor living, addition…" />
          </label>
          <button type="submit" className="w-full rounded bg-copper py-3 font-semibold text-white hover:bg-copperDark">
            Email the estimate request
          </button>
          {sent && (
            <p className="text-sm text-stone">
              If your mail app did not open, write Joshua directly at
              joshua@boostromconstruction.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
