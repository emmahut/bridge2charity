import Link from "next/link"
import Image from "next/image"

const cards = [
  {
    title: "Home",
    description: "Return to the main Bridge2Charity page.",
    href: "/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Programs",
    description: "Explore Back to School, English Enhancement, and One Hen Per Child.",
    href: "/programs",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
  },
  {
    title: "News",
    description: "Read current stories and field updates.",
    href: "/news",
    highlight: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a4 4 0 01-4-4V6" />
        <path d="M8 6h8M8 10h8M8 14h4" />
      </svg>
    ),
  },
  {
    title: "About",
    description: "Meet the mission, story, and people behind the foundation.",
    href: "/about",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function NotFound() {
  return (
    <main style={{ backgroundColor: "#050A30", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-center"
        style={{ minHeight: "62vh", padding: "120px 24px 80px" }}
      >
        {/* Background photo at low opacity */}
        <Image
          src="/images/programs/bts-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.12 }}
          priority
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(5,10,48,0.5) 0%, rgba(5,10,48,0.97) 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-0">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-8"
            style={{
              backgroundColor: "rgba(201,96,28,0.1)",
              border: "1px solid rgba(201,96,28,0.4)",
              borderRadius: "999px",
              padding: "6px 14px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#C9601C",
                flexShrink: 0,
              }}
            />
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
              404 · Coming Soon
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 800,
              color: "white",
              fontFamily: "var(--font-montserrat)",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            This page is<br />almost ready.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: 40,
              fontFamily: "var(--font-nunito)",
            }}
          >
            We&apos;re still preparing this part of the Bridge2Charity site.
            While it takes shape, you can continue through the pages that are live now.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#C9601C",
                borderRadius: "999px",
                padding: "12px 28px",
                color: "white",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "var(--font-montserrat)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Go Home →
            </Link>
            <Link
              href="/programs"
              className="hover:bg-white/10 transition-colors"
              style={{
                border: "1.5px solid rgba(255,255,255,0.3)",
                borderRadius: "999px",
                padding: "12px 28px",
                color: "white",
                fontWeight: 600,
                fontSize: 15,
                fontFamily: "var(--font-montserrat)",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Navigation cards ──────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group hover:scale-[1.02] transition-transform duration-200"
              style={{
                backgroundColor: card.highlight
                  ? "rgba(255,255,255,0.09)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  card.highlight
                    ? "rgba(255,255,255,0.16)"
                    : "rgba(255,255,255,0.07)"
                }`,
                borderRadius: 16,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(201,96,28,0.15)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9601C",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <p
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: "var(--font-jakarta)",
                }}
                className="group-hover:text-orange-400 transition-colors"
              >
                {card.title}
              </p>

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  lineHeight: 1.65,
                  fontFamily: "var(--font-nunito)",
                }}
              >
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
