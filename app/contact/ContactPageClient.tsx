"use client"

import { useState } from "react"
import Image from "next/image"

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Bridge2CharityFoundation", // B2C YouTube
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bridge2charity/", // B2C Instagram
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/bridge2charity/", // B2C X / Twitter
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18Xzni4fs1/?mibextid=wwXIfr", // B2C Facebook
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bridge2charity-foundation-21046840b/", // B2C LinkedIn
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]
// ─────────────────────────────────────────────────────────────────────

const areaOfInterestOptions = [
  "Back To School Program",
  "English Enhancement Program (EEP)",
  "One Hen Per Child Program",
  "Volunteering & BIV Program",
  "Donations & Support",
  "General Inquiry",
  "Other",
]

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #CCCCCC",
  borderRadius: 6,
  padding: "12px 14px",
  fontSize: 15,
  color: "#3A3A3A",
  outline: "none",
  fontFamily: "var(--font-nunito)",
  backgroundColor: "#ffffff",
  boxSizing: "border-box",
}

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", area: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const focusBorder = (field: string): React.CSSProperties =>
    focusedField === field ? { borderColor: "#C9601C" } : {}

  return (
    <div>
      {/* ── SECTION 1: Hero ──────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-center"
        style={{ minHeight: "62vh", backgroundColor: "#050A30", padding: "80px 24px" }}
      >
        {/* ── PASTE HERO IMAGE HERE ───────────────────────────────── */}
        {/* Replace placeholder path with the actual B2C contact hero image */}
        {/* Image provided: /images/pages/contact-hero.jpg             */}
        {/* ─────────────────────────────────────────────────────────── */}
        <Image
          src="/images/pages/contact-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.22 }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(5,10,48,0.35), rgba(5,10,48,0.88))",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto w-full">
          <p
            style={{
              color: "#C9601C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta)",
              marginBottom: 16,
            }}
          >
            CONTACT US
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.05,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Hello!
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: Contact Form ───────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              color: "#C9601C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta)",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            REACH OUT
          </p>
          <h2
            style={{
              color: "#050A30",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: 16,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Get in Touch!
          </h2>
          <p
            style={{
              color: "#3A3A3A",
              fontSize: 16,
              lineHeight: 1.7,
              textAlign: "center",
              marginBottom: 48,
              fontFamily: "var(--font-nunito)",
            }}
          >
            Let us know if you have a question or how we can help you. Our team will reach you as
            soon as possible.
          </p>

          {status === "success" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "48px 24px",
                textAlign: "center",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3 style={{ color: "#050A30", fontWeight: 700, fontSize: 22, fontFamily: "var(--font-montserrat)" }}>
                Thank you for reaching out!
              </h3>
              <p style={{ color: "#3A3A3A", fontSize: 16, fontFamily: "var(--font-nunito)" }}>
                A member of our team will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ display: "block", color: "#050A30", fontWeight: 700, fontSize: 14, marginBottom: 8, fontFamily: "var(--font-jakarta)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle, ...focusBorder("name") }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", color: "#050A30", fontWeight: 700, fontSize: 14, marginBottom: 8, fontFamily: "var(--font-jakarta)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle, ...focusBorder("email") }}
                />
              </div>

              {/* Area of Interest */}
              <div>
                <label
                  htmlFor="area"
                  style={{ display: "block", color: "#050A30", fontWeight: 700, fontSize: 14, marginBottom: 8, fontFamily: "var(--font-jakarta)" }}
                >
                  Area of Interest
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  value={form.area}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("area")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle, ...focusBorder("area"), appearance: "auto" }}
                >
                  <option value="" disabled>Select an area of interest...</option>
                  {areaOfInterestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{ display: "block", color: "#050A30", fontWeight: 700, fontSize: 14, marginBottom: 8, fontFamily: "var(--font-jakarta)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle, ...focusBorder("message"), minHeight: 140, resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p style={{ color: "#dc2626", fontSize: 14, fontFamily: "var(--font-nunito)" }}>
                  Something went wrong. Please try again or email us directly at info@bridge2charity.org
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  backgroundColor: status === "sending" ? "#a0522d" : "#C9601C",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: 8,
                  padding: "16px 0",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-montserrat)",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") e.currentTarget.style.backgroundColor = "#a0522d"
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending") e.currentTarget.style.backgroundColor = "#C9601C"
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── SECTION 3: Social Media ───────────────────────────────── */}
      <section style={{ backgroundColor: "#050A30", padding: "70px 24px", textAlign: "center" }}>
        <p
          style={{
            color: "#C9601C",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontFamily: "var(--font-jakarta)",
            marginBottom: 16,
          }}
        >
          STAY CONNECTED
        </p>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 800,
            marginBottom: 48,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          Follow Our Socials To Stay Updated
        </h2>
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: "40px" }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Bridge2Charity on ${s.label}`}
              className="social-icon-link"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                color: "#ffffff",
                textDecoration: "none",
                transition: "color 0.3s ease",
                minWidth: 48,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9601C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48 }}>
                {s.icon}
              </span>
              <span
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontFamily: "var(--font-jakarta)",
                }}
              >
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
