import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Video Coming Soon | Bridge2Charity",
  description: "This video is on its way — check back soon.",
}

export default function VideoComingSoonPage() {
  return (
    <main
      className="flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#050A30", minHeight: "70vh", padding: "80px 24px" }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 84,
          height: 84,
          borderRadius: "50%",
          backgroundColor: "rgba(201,96,28,0.12)",
          border: "1px solid rgba(201,96,28,0.35)",
          marginBottom: 32,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C9601C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>

      <div
        className="inline-flex items-center gap-2 mb-6"
        style={{
          backgroundColor: "rgba(201,96,28,0.1)",
          border: "1px solid rgba(201,96,28,0.4)",
          borderRadius: "999px",
          padding: "6px 14px",
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#C9601C" }} />
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#C9601C",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontFamily: "var(--font-jakarta)",
          }}
        >
          Coming Soon
        </span>
      </div>

      <h1
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          color: "#ffffff",
          fontFamily: "var(--font-montserrat)",
          lineHeight: 1.2,
          marginBottom: 16,
        }}
      >
        This video hasn&apos;t been uploaded yet.
      </h1>

      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.75,
          maxWidth: 480,
          marginBottom: 40,
          fontFamily: "var(--font-nunito)",
        }}
      >
        We&apos;re still putting this one together. Check back soon — in the meantime, feel free
        to explore the rest of the site.
      </p>

      <Link
        href="/"
        className="hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        style={{
          backgroundColor: "#C9601C",
          borderRadius: "999px",
          padding: "12px 28px",
          color: "white",
          fontWeight: 700,
          fontSize: 15,
          fontFamily: "var(--font-montserrat)",
        }}
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </main>
  )
}
