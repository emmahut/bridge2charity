"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeartHandshake } from "lucide-react"

// ── ADD NEW CARDS HERE — add a new object to this array ──────────────
const donationItems = [
  {
    id: 1,
    title: "MP3",
    description:
      "Support a student with audio tools that improve their English comprehension and speaking skills. Audio learning tools provide an accessible, hands-on way for primary students to build language fluency and confidence in the classroom and at home.",
    price: "$30",
    photo: "/images/pages/support/support-card-1.jpg",
  },
  {
    id: 2,
    title: "Sponsor a Student",
    description:
      "Sponsors top-performing primary school students with the resources and materials needed to thrive in their education. Those resources can cover full year tuition fees, books, meals and school essential materials like uniforms, and shoes.",
    price: "$150",
    photo: "/images/pages/support/support-card-2.jpg",
  },
  {
    id: 3,
    title: "Kindles and EEP Session Support",
    description:
      "Provides Kindles — the digital tools required for a 21st-century education — and covers volunteer coordination and learning materials for primary students enrolled in the English Enhancement Program.",
    price: "$250",
    photo: "/images/pages/support/support-card-3.jpg",
  },
  {
    id: 4,
    title: "Follow-up Visits and Volunteerism Support",
    description:
      "Provides daily meals and transportation for program volunteers, opens access to valuable volunteer experience in the field, and ensures efficient beneficiary follow-ups across all Bridge2Charity programs.",
    price: "$150 per Semester",
    photo: "/images/pages/support/support-card-4.jpg",
  },
  {
    id: 5,
    title: "Buy a Hen",
    description:
      "Provide a hen and poultry feed to a child to fight malnutrition. Part of the One Hen Per Child Program, each hen provides ongoing nutritional support for the child and their family throughout the year.",
    price: "$40 per Hen",
    photo: "/images/pages/support/support-card-5.jpg",
  },
  {
    id: 6,
    title: "Sponsor Parent Workshop",
    description:
      "Empower parents through a six-month Social Enterprise Workshop Program designed to strengthen entrepreneurial skills, promote financial independence, and improve household livelihoods — so the whole family benefits.",
    price: "$600",
    photo: "/images/pages/support/support-card-6.jpg",
  },
]
// ─────────────────────────────────────────────────────────────────────

function DonationCard({
  title,
  description,
  price,
  photo,
}: {
  title: string
  description: string
  price: string
  photo: string
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #E5E5E5",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Photo */}
      <div style={{ height: 240, overflow: "hidden", flexShrink: 0 }}>
        {imgError ? (
          <div
            style={{
              height: "100%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        ) : (
          <img
            src={photo}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            color: "#C9601C",
            fontWeight: 700,
            fontSize: 20,
            textAlign: "center",
            marginBottom: 12,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#3A3A3A",
            fontSize: 15,
            lineHeight: 1.6,
            textAlign: "center",
            marginBottom: 16,
            flex: 1,
            fontFamily: "var(--font-nunito)",
          }}
        >
          {description}
        </p>
        <p
          style={{
            color: "#050A30",
            fontWeight: 700,
            fontSize: 18,
            textAlign: "center",
            marginBottom: 16,
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {price}
        </p>
        <Link
          href="/donate/ways-to-give"
          className="donate-card-btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            backgroundColor: "#050A30",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: 15,
            borderRadius: 8,
            padding: "14px 0",
            textDecoration: "none",
            fontFamily: "var(--font-montserrat)",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C9601C")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#050A30")}
        >
          <HeartHandshake size={17} />
          Donate Now
        </Link>
      </div>
    </div>
  )
}

export default function DonatePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "62vh", backgroundColor: "#050A30", padding: "80px 24px" }}
      >
        <Image
          src="/images/pages/support/support-hero.jpg"
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
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta)",
              marginBottom: 20,
            }}
          >
            Support a Student
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 36,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            How to Make a Difference
          </h1>
          <Link
            href="/donate/ways-to-give"
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
            DONATE TO B2C TODAY
          </Link>
        </div>
      </section>

      {/* ── Our Current Needs ──────────────────────────────────────── */}
      <section id="current-needs" style={{ backgroundColor: "#FBF6F0", padding: "56px 24px" }}>
        <div className="max-w-3xl mx-auto text-center">
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
            Our Current Needs
          </p>
          <h2
            style={{
              color: "#050A30",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 24,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Investing Directly in Students
          </h2>
          <p
            style={{
              color: "#3A3A3A",
              fontSize: 16,
              lineHeight: 1.75,
              marginBottom: 12,
              fontFamily: "var(--font-nunito)",
            }}
          >
            The current needs listed below are made up of much-needed items that will directly
            impact the education and well-being of Rwanda&apos;s top-performing students.
          </p>
          <p style={{ color: "#3A3A3A", fontSize: 16, lineHeight: 1.75, fontFamily: "var(--font-nunito)" }}>
            Your gift can open doors of opportunity for students through access to critical
            digital learning tools, professional development opportunities, and school fees.
          </p>
        </div>
      </section>

      {/* ── Donation Cards ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {donationItems.map((item) => (
              <DonationCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Interested in Learning More ────────────────────────────── */}
      <section style={{ backgroundColor: "#050A30", padding: "56px 24px", textAlign: "center" }}>
        <div className="max-w-2xl mx-auto">
          <p
            style={{
              color: "#C9601C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "var(--font-jakarta)",
              marginBottom: 20,
            }}
          >
            Interested in Learning More?
          </p>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: 20,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Other Ways to Help Bridge2Charity Scale Its Impact
          </h2>
          <p style={{ color: "rgba(251,246,240,0.8)", fontSize: 16, lineHeight: 1.75, fontFamily: "var(--font-nunito)" }}>
            Contact{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>David Ishimwe</span>, Managing Director, at{" "}
            <a
              href="mailto:ishimwedavidclever@gmail.com"
              style={{ color: "#C9601C", textDecoration: "underline" }}
            >
              ishimwedavidclever@gmail.com
            </a>{" "}
            to learn about other opportunities to help Bridge2Charity scale its impact.
          </p>
        </div>
      </section>
    </div>
  )
}
