import type { Metadata } from "next"
import Link from "next/link"
import { Smartphone, CreditCard, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Ways to Give | Bridge2Charity",
  description: "Choose how you'd like to donate to Bridge2Charity — Mobile Money, PayPal, and more.",
}

export default function WaysToGivePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: "#050A30", padding: "72px 24px" }}
      >
        <div className="max-w-2xl mx-auto">
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
            Ways to Give
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: 16,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Choose How You&apos;d Like to Donate
          </h1>
          <ul
            style={{
              textAlign: "left",
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#C9601C",
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
              <span style={{ color: "rgba(251,246,240,0.75)", fontSize: 14, lineHeight: 1.7, fontFamily: "var(--font-nunito)" }}>
                Bridge2Charity is in the process of becoming a formally registered organization in
                Rwanda. While we finalize that process, donations are received through Mobile Money
                (MoMo) and handled with the same care and accountability we bring to everything we
                do; every donation goes directly toward supporting the students at the heart of our
                mission.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#C9601C",
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
              <span style={{ color: "rgba(251,246,240,0.75)", fontSize: 14, lineHeight: 1.7, fontFamily: "var(--font-nunito)" }}>
                The number is registered to our Managing Director, David Ishimwe.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Payment Methods ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FBF6F0", padding: "56px 24px" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Mobile Money card */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 16,
              padding: "32px 28px",
              border: "1px solid #E5E5E5",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: "rgba(201,96,28,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Smartphone size={24} style={{ color: "#C9601C" }} />
            </div>
            <h2
              style={{
                color: "#050A30",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Mobile Money (MTN MoMo)
            </h2>
            <p style={{ color: "#3A3A3A", fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontFamily: "var(--font-nunito)" }}>
              Send your donation directly via MTN Mobile Money using the number below.
            </p>

            <div
              style={{
                backgroundColor: "#FBF6F0",
                borderRadius: 10,
                padding: "14px 16px",
                border: "1px solid rgba(201,96,28,0.3)",
              }}
            >
              <p
                style={{
                  color: "#C9601C",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 6,
                  fontFamily: "var(--font-jakarta)",
                }}
              >
                Dial to Donate
              </p>
              <p
                style={{
                  color: "#050A30",
                  fontSize: 19,
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                *182*1*1*0793529307#
              </p>
            </div>
          </div>

          {/* PayPal card — coming soon */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 16,
              padding: "32px 28px",
              border: "1px solid #E5E5E5",
              opacity: 0.6,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: "rgba(5,10,48,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <CreditCard size={24} style={{ color: "#050A30" }} />
            </div>
            <h2
              style={{
                color: "#050A30",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                fontFamily: "var(--font-montserrat)",
              }}
            >
              PayPal
            </h2>
            <p style={{ color: "#3A3A3A", fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontFamily: "var(--font-nunito)" }}>
              Card and international donations via PayPal.
            </p>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#050A30",
                color: "#ffffff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: 999,
                padding: "6px 14px",
                fontFamily: "var(--font-jakarta)",
              }}
            >
              Coming Soon
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto" style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ color: "#3A3A3A", fontSize: 15, lineHeight: 1.75, fontFamily: "var(--font-nunito)" }}>
            Prefer another way to give? Contact{" "}
            <a href="mailto:info@bridge2charity.org" style={{ color: "#C9601C", fontWeight: 600 }}>
              info@bridge2charity.org
            </a>{" "}
            and we&apos;ll help you get it done.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2"
            style={{
              marginTop: 24,
              color: "#050A30",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "var(--font-montserrat)",
            }}
          >
            <ArrowLeft size={16} />
            Back to Support Us
          </Link>
        </div>
      </section>
    </div>
  )
}
