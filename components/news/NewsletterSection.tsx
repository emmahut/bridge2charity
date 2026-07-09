"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"

type NewsletterFormState = {
  firstName: string
  lastName: string
  email: string
}

const emptyForm: NewsletterFormState = { firstName: "", lastName: "", email: "" }

function FormField({
  label,
  type,
  value,
  onChange,
}: {
  label: string
  type: "text" | "email"
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-sm font-bold text-navy"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {label}
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-[#CCCCCC] px-3 py-3 text-[15px] text-navy outline-none transition-shadow duration-150 focus:border-orange focus:ring-4 focus:ring-orange/15"
      />
    </div>
  )
}

function NewsletterForm({ listName }: { listName: string }) {
  const [form, setForm] = useState<NewsletterFormState>(emptyForm)
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, list: listName }),
      })
    } catch {
      // Phase 1: subscription still confirms visually even if the request fails to reach the console log
    }
    setStatus("success")
    setForm(emptyForm)
  }

  if (status === "success") {
    return (
      <div
        className="flex items-start gap-3 rounded-lg bg-orange/10 p-4 text-sm font-semibold text-navy"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
        <span>You&apos;re subscribed! Thank you for joining the B2C community.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      <FormField
        label="First Name"
        type="text"
        value={form.firstName}
        onChange={(v) => setForm((f) => ({ ...f, firstName: v }))}
      />
      <FormField
        label="Last Name"
        type="text"
        value={form.lastName}
        onChange={(v) => setForm((f) => ({ ...f, lastName: v }))}
      />
      <FormField
        label="Email"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
      />
      <div>
        <span
          className="mb-1.5 block select-none text-sm font-bold text-transparent"
          aria-hidden="true"
        >
          Subscribe
        </span>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-orange px-3 py-3 text-[15px] font-bold text-white transition-all duration-150 hover:brightness-90 disabled:opacity-70"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </form>
  )
}

export default function NewsletterSection() {
  return (
    <section className="bg-cream py-10 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-8 text-center text-3xl font-bold leading-tight text-navy sm:text-4xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Subscribe to B2C Newsletters
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* ───────────────────────────────────────────────────────
              CARD 1 — B2C MONTHLY LETTER
          ─────────────────────────────────────────────────────── */}
          <div className="w-full rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:max-w-[480px]">
            <h3
              className="mb-6 text-center text-xl font-bold leading-snug text-navy"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Stay in the know about all of B2C&apos;s programs and the impact we are creating
              across Rwanda.
            </h3>
            <NewsletterForm listName="monthly-letter" />
          </div>

          {/* ─── SECOND NEWSLETTER CARD ──────────
              This card is hidden intentionally.
              To make it visible when a second newsletter is launched,
              remove "hidden" from the wrapper div below.
              Update the heading and form action before activating.
          ───────────────────────────────────────── */}
          <div className="hidden w-full rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:max-w-[480px]">
            <h3
              className="mb-6 text-center text-xl font-bold leading-snug text-navy"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Coming Soon
            </h3>
            <NewsletterForm listName="second-newsletter" />
          </div>
        </div>
      </div>
    </section>
  )
}
