"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Briefcase } from "lucide-react"

// ── EDIT ANIMATED WORDS HERE ─────────────────────────────────────────
const animatedWords = [
  "Civic Leaders",
  "Result-Driven",
  "Passionate",
]
// ─────────────────────────────────────────────────────────────────────

// ── ADD NEW JOB LISTINGS HERE ────────────────────────────────────────
const openPositions: {
  title: string
  location: string
  deadline: string
  link: string
}[] = [
  // {
  //   title: "Role Title Here",
  //   location: "Kigali, Rwanda",
  //   deadline: "Applications close: DD Month YYYY",
  //   link: "https://forms.gle/t66GaooP3hgGZ96E6",
  // },
]
// ─────────────────────────────────────────────────────────────────────

function AnimatedWord({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion) return
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % animatedWords.length)
        setVisible(true)
      }, 600)
    }, 2600)
    return () => clearInterval(cycle)
  }, [prefersReducedMotion])

  return (
    <span
      style={{
        color: "#C9601C",
        display: "inline-block",
        transition: prefersReducedMotion ? "none" : "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
      }}
    >
      {animatedWords[index]}
    </span>
  )
}

export default function JoinPageClient() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div>
      {/* ── SECTION 1: Hero with Animated Text ────────────────────── */}
      <section
        className="flex flex-col items-center justify-center text-center"
        style={{ minHeight: "85vh", backgroundColor: "#050A30", padding: "80px 24px" }}
      >
        <div className="max-w-4xl mx-auto">
          <h1
            style={{
              color: "#ffffff",
              fontWeight: 800,
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Join Our Team of
            <br />
            <AnimatedWord prefersReducedMotion={prefersReducedMotion} />
          </h1>
          <p
            style={{
              color: "#FBF6F0",
              fontSize: 16,
              letterSpacing: "1px",
              fontFamily: "var(--font-jakarta)",
            }}
          >
            Bridge2Charity Foundation | Kigali, Rwanda
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Open Positions ──────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              color: "#C9601C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta)",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            OPEN POSITIONS
          </p>

          {openPositions.length > 0 ? (
            /* Job listing cards — shown when openPositions array has entries */
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {openPositions.map((job) => (
                <div
                  key={job.title}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E5E5E5",
                    borderRadius: 12,
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  {/* B2C logo icon */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      overflow: "hidden",
                      flexShrink: 0,
                      backgroundColor: "rgba(5,10,48,0.06)",
                    }}
                  >
                    <Image src="/images/logo/icon.png" alt="B2C" width={40} height={40} style={{ objectFit: "contain" }} />
                  </div>
                  {/* Job info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        color: "#050A30",
                        fontWeight: 700,
                        fontSize: 20,
                        fontFamily: "var(--font-montserrat)",
                        marginBottom: 4,
                      }}
                    >
                      {job.title}
                    </p>
                    <p style={{ color: "#888", fontSize: 14, fontFamily: "var(--font-nunito)" }}>
                      {job.location} · {job.deadline}
                    </p>
                  </div>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#C9601C",
                      fontWeight: 600,
                      fontSize: 14,
                      fontFamily: "var(--font-jakarta)",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state — shown when no positions are listed */
            <div
              style={{
                backgroundColor: "#FBF6F0",
                borderRadius: 16,
                padding: "60px 40px",
                border: "1px solid #E5E5E5",
                textAlign: "center",
              }}
            >
              <Briefcase
                size={64}
                style={{ color: "#C9601C", margin: "0 auto 24px" }}
              />
              <h2
                style={{
                  color: "#050A30",
                  fontWeight: 700,
                  fontSize: 24,
                  marginBottom: 12,
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                No current positions available.
              </h2>
              <p
                style={{
                  color: "#3A3A3A",
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: 480,
                  margin: "0 auto",
                  fontFamily: "var(--font-nunito)",
                }}
              >
                We are not actively hiring at this time. Check back soon or follow us on social
                media to be the first to know when new roles open up.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 3: Footer CTA ──────────────────────────────────── */}
      <section style={{ backgroundColor: "#050A30", padding: "60px 24px", textAlign: "center" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            style={{
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 28,
              marginBottom: 16,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Interested in volunteering instead?
          </h2>
          <p
            style={{
              color: "#FBF6F0",
              fontSize: 16,
              lineHeight: 1.75,
              marginBottom: 32,
              fontFamily: "var(--font-nunito)",
            }}
          >
            If you are passionate about Education and community impact, our BIV Volunteer Program
            may be the right fit for you.
          </p>
          <Link
            href="/volunteer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#C9601C",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              borderRadius: "999px",
              padding: "14px 36px",
              textDecoration: "none",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Become a Volunteer →
          </Link>
        </div>
      </section>
    </div>
  )
}
