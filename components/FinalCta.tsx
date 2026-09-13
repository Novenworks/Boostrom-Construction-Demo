"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

const projectTypes = [
  "Kitchen remodeling",
  "Bathroom remodeling",
  "Indoor / outdoor living",
  "Whole-home remodeling",
  "Pool or deck",
  "Something else",
] as const;

type ProjectType = (typeof projectTypes)[number];

function projectTypeLabel(value: ProjectType): string {
  switch (value) {
    case "Kitchen remodeling":
    case "Bathroom remodeling":
    case "Indoor / outdoor living":
    case "Whole-home remodeling":
    case "Pool or deck":
    case "Something else":
      return value;
    default: {
      const exhaustive: never = value;
      return exhaustive;
    }
  }
}

export function FinalCta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState<ProjectType>(projectTypes[0]);
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project: ${projectTypeLabel(projectType)}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Estimate request — ${projectTypeLabel(projectType)}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-espresso text-paper-50">
      <Image
        src="/images/bedroom-custom.jpg"
        alt=""
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-espresso/75" />
      <div className="relative mx-auto grid max-w-page gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-5">
          <p className="section-label text-brass">Let&apos;s talk about your project</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{site.primaryCta}</h2>
          <p className="text-sm leading-relaxed text-paper-100/85">
            This form opens your email to {site.email}. It does not submit into a fake inbox. You
            can also call.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex min-h-12 items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 font-semibold hover:border-brass"
          >
            <Phone className="h-4 w-4 text-brass" aria-hidden />
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-12 items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 font-semibold hover:border-brass"
          >
            <Mail className="h-4 w-4 text-brass" aria-hidden />
            {site.email}
          </a>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 space-y-4 rounded-sm border border-white/15 bg-espresso/80 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 min-h-11 w-full rounded-sm border border-white/20 bg-espresso px-3 text-paper-50"
                autoComplete="name"
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 min-h-11 w-full rounded-sm border border-white/20 bg-espresso px-3 text-paper-50"
                autoComplete="email"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Phone
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-1 min-h-11 w-full rounded-sm border border-white/20 bg-espresso px-3 text-paper-50"
                autoComplete="tel"
              />
            </label>
            <label className="block text-sm font-medium">
              Project
              <select
                value={projectType}
                onChange={(event) => setProjectType(event.target.value as ProjectType)}
                className="mt-1 min-h-11 w-full rounded-sm border border-white/20 bg-espresso px-3 text-paper-50"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="block text-sm font-medium">
            What are you thinking about?
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-1 min-h-32 w-full rounded-sm border border-white/20 bg-espresso px-3 py-2 text-paper-50"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center rounded-sm bg-clay-500 px-5 text-sm font-semibold text-white hover:bg-clay-600"
          >
            {site.primaryCta}
          </button>
        </form>
      </div>
    </section>
  );
}
