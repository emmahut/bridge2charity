import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, Users, Award, CheckCircle2 } from "lucide-react"
import VolunteersReachedCard from "@/components/volunteer/VolunteersReachedCard"

export const metadata: Metadata = {
  title: "Become a Volunteer | Bridge2Charity",
  description: "Join Bridge2Charity's BIV Volunteer Program and make a direct impact on Rwanda's most vulnerable primary school children.",
}

const opportunityCards = [
  {
    icon: <Briefcase size={28} style={{ color: "#C9601C" }} />,
    title: "Professional Development & Mentorship",
    description:
      "Build real, transferable skills through hands-on program delivery, community engagement, and social impact work, guided by B2C's team.",
  },
  {
    icon: <Users size={28} style={{ color: "#C9601C" }} />,
    title: "Cross-Functional Collaboration",
    description:
      "Work across B2C's program areas, from English Enhancement to Back To School to One Hen Per Child; gaining a broad view of how to give back.",
  },
  {
    icon: <Award size={28} style={{ color: "#C9601C" }} />,
    title: "Recognition & Leadership Pipeline",
    description:
      "Receive a certificate of participation at the end of every completed cycle. High-performing volunteers may be offered expanded leadership responsibilities in future cycles.",
  },
]

const eligibilityCards = [
  {
    title: "Students & Young Professionals",
    description:
      "Civic leaders and recent graduates from any field of study are strongly encouraged to apply.",
  },
  {
    title: "Language",
    description:
      "All applicants must have good spoken and written English skills. Kinyarwanda is an added advantage for field-facing roles.",
  },
  {
    title: "Digital Literacy",
    description:
      "Familiarity with basic digital tools — Google Docs, Sheets, Forms, and WhatsApp — is required for all roles.",
  },
  {
    title: "Nationality",
    description:
      "Applicants of all nationalities are eligible. Priority is given to applicants based in or willing to work in Kigali, Rwanda.",
  },
  {
    title: "Cycle Duration & Commitment",
    description:
      "Volunteers commit to either the Short Cycle (3 months) or the Long Cycle (6 months).",
  },
  {
    title: "Values Alignment",
    description:
      "Applicants must genuinely share B2C's commitment to integrity, reliability, collaboration, and service to vulnerable students.",
  },
]

const whatYouGain = [
  "Hands-on experience in non-profit program delivery and community engagement",
  "Transferable professional skills: communication, coordination, facilitation, data reporting, and leadership",
  "A certificate of participation at the end of every completed cycle",
  "Public recognition on B2C's platforms (with your consent)",
  "Access to professional development workshops and guest speaker sessions each cycle",
  "A community of mission-aligned peers and meaningful working relationships with B2C's staff and network",
  "High-performing volunteers may be offered expanded leadership responsibilities in future cycles",
]

const impactBlocks = [
  {
    title: "English Enhancement Program",
    description:
      "Develop and facilitate English packages for primary students, complete session logs, and support beneficiary follow-up in partner schools.",
  },
  {
    title: "Back to School Program",
    description:
      "Support school visits, distribute learning materials, and document beneficiary interactions and progress across enrolled students.",
  },
  {
    title: "Governance & Support",
    description:
      "Execute coordination tasks, maintain program documents, track milestones.",
  },
]

// ── PASTE VOLUNTEER APPLICATION FORM LINK HERE ────────────────────────
const VOLUNTEER_FORM_LINK = "https://forms.gle/t66GaooP3hgGZ96E6"
// ─────────────────────────────────────────────────────────────────────

export default function VolunteerPage() {
  return (
    <div>
      {/* ── SECTION 1: Hero ──────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "70vh", backgroundColor: "#050A30", padding: "80px 24px" }}
      >
        <Image
          src="/images/pages/volunteer-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(5,10,48,0.4), rgba(5,10,48,0.85))",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            style={{
              color: "#C9601C",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta)",
              marginBottom: 12,
            }}
          >
            BECOME A
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(40px, 6vw, 70px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 28,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            B2C Volunteer
          </h1>
          <div style={{ marginBottom: 36 }}>
            <p style={{ color: "#FBF6F0", fontSize: 16, fontFamily: "var(--font-nunito)", marginBottom: 8 }}>
              ● 3 Months Volunteer Long: February – April
            </p>
            <p style={{ color: "#FBF6F0", fontSize: 16, fontFamily: "var(--font-nunito)" }}>
              ● 6 Months Volunteer Long: June – November
            </p>
          </div>
          <a
            href={VOLUNTEER_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
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
              letterSpacing: "1px",
            }}
          >
            APPLY NOW
          </a>
        </div>
      </section>

      {/* ── SECTION 2: Program Introduction (no visible title) ─────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "56px 24px" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              style={{
                color: "#050A30",
                fontSize: "clamp(18px, 1.6vw, 20px)",
                fontWeight: 800,
                lineHeight: 1.75,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Bridge2Charity&apos;s BIV Program is calling young people driven by purpose to join a
              mission-driven volunteer community working directly with Rwanda&apos;s most vulnerable
              primary school children.
            </h2>
          </div>
          <div>
            <p
              style={{
                color: "#3A3A3A",
                fontSize: 17,
                lineHeight: 1.75,
                fontFamily: "var(--font-nunito)",
              }}
            >
              The BIV Program offers a hands-on volunteering experience where you contribute to real
              program delivery, from facilitating English sessions for primary students to coordinating
              field visits, managing communications, and building the systems that keep this
              organization running and growing. This is not a passive opportunity. It demands
              initiative, reliability, and a genuine passion for B2C&apos;s mission.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Opportunities to Serve ─────────────────────── */}
      <section style={{ backgroundColor: "#FBF6F0", padding: "56px 24px" }}>
        <div className="max-w-5xl mx-auto">
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
            OPPORTUNITIES TO SERVE
          </p>
          <h2
            style={{
              color: "#050A30",
              fontSize: "clamp(20px, 2.2vw, 24px)",
              fontWeight: 800,
              lineHeight: 1.5,
              textAlign: "center",
              fontFamily: "var(--font-montserrat)",
              maxWidth: 720,
              margin: "0 auto 40px",
            }}
          >
            Volunteers take an active role in meaningful work, gaining access to opportunities
            designed to develop them personally and professionally.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunityCards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  padding: "32px 24px",
                  border: "1px solid #E5E5E5",
                }}
              >
                <div style={{ marginBottom: 16 }}>{card.icon}</div>
                <h3
                  style={{
                    color: "#050A30",
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 12,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#3A3A3A", fontSize: 15, lineHeight: 1.65, fontFamily: "var(--font-nunito)" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA Banner (no visible section title) ───────── */}
      <section style={{ backgroundColor: "#050A30", padding: "56px 24px" }}>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(20px, 2.2vw, 24px)",
                fontWeight: 800,
                lineHeight: 1.5,
                marginBottom: 16,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Are you passionate about Education, community-building, and making a direct difference
              in the lives of Rwanda&apos;s children?
            </h2>
            <VolunteersReachedCard />
          </div>
          <div style={{ flexShrink: 0 }}>
            <a
              href={VOLUNTEER_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#C9601C",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: "999px",
                padding: "16px 40px",
                textDecoration: "none",
                fontFamily: "var(--font-montserrat)",
                whiteSpace: "nowrap",
              }}
            >
              APPLY TO VOLUNTEER
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Areas of Impact ─────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "56px 24px" }}>
        <div className="max-w-5xl mx-auto">
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
            AREAS OF IMPACT
          </p>
          <h2
            style={{
              color: "#050A30",
              fontSize: "clamp(20px, 2.2vw, 24px)",
              fontWeight: 800,
              lineHeight: 1.5,
              textAlign: "center",
              marginBottom: 40,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Where volunteers make a difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactBlocks.map((block) => (
              <div
                key={block.title}
                style={{
                  backgroundColor: "#050A30",
                  borderRadius: 16,
                  padding: "32px 24px",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 12,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    color: "rgba(251,246,240,0.75)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    fontFamily: "var(--font-nunito)",
                  }}
                >
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Volunteer Eligibility ───────────────────────── */}
      <section style={{ backgroundColor: "#FBF6F0", padding: "56px 24px" }}>
        <div className="max-w-5xl mx-auto">
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
            VOLUNTEER ELIGIBILITY
          </p>
          <h2
            style={{
              color: "#050A30",
              fontSize: "clamp(19px, 2vw, 22px)",
              fontWeight: 800,
              lineHeight: 1.55,
              textAlign: "center",
              maxWidth: 780,
              margin: "0 auto 40px",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            We are looking for individuals who demonstrate self-motivation, a passion for driving
            community change, and a commitment to showing up consistently for the students we serve.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eligibilityCards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  padding: "24px",
                  border: "1px solid #E5E5E5",
                }}
              >
                <h3
                  style={{
                    color: "#C9601C",
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 10,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#3A3A3A",
                    fontSize: 14,
                    lineHeight: 1.65,
                    fontFamily: "var(--font-nunito)",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: What You Gain ────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "56px 24px" }}>
        <div className="max-w-3xl mx-auto">
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
            WHAT YOU GAIN
          </p>
          <h2
            style={{
              color: "#050A30",
              fontSize: "clamp(20px, 2.2vw, 24px)",
              fontWeight: 800,
              lineHeight: 1.5,
              textAlign: "center",
              marginBottom: 32,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            This is not just volunteering.
            <br />
            It is professional formation.
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {whatYouGain.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} style={{ color: "#C9601C", flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#3A3A3A", fontSize: 16, lineHeight: 1.65, fontFamily: "var(--font-nunito)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 8: Final CTA ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#050A30", padding: "56px 24px", textAlign: "center" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: 20,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Ready to invest in Rwanda&apos;s highest-performing primary school students from
            low-income communities?
          </h2>
          <p
            style={{
              color: "rgba(251,246,240,0.75)",
              fontSize: 17,
              lineHeight: 1.75,
              marginBottom: 36,
              fontFamily: "var(--font-nunito)",
            }}
          >
            Applications are reviewed on a rolling basis.
            <br />
            Apply early — spots are limited each cycle.
          </p>
          <a
            href={VOLUNTEER_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#C9601C",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              borderRadius: "999px",
              padding: "16px 48px",
              textDecoration: "none",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "1px",
            }}
          >
            APPLY NOW →
          </a>
        </div>
      </section>
    </div>
  )
}
