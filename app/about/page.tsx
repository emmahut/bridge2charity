import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import TeamCollage from "@/components/about/TeamCollage"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bridge2Charity Foundation's story, mission, team, and the civic leaders driving change in Rwanda.",
}

const values = [
  {
    label: "Activeness",
    description: "We are a committed team working towards solutions that can make Rwanda and Africa flourish.",
    color: "bg-orange/10 text-orange",
  },
  {
    label: "Courageous",
    description: "We work collectively, encouraging one another to accomplish a common goal.",
    color: "bg-olive/10 text-olive",
  },
  {
    label: "All In",
    description: "We are committed to working together without leaving anyone behind, and we believe in partnering with others to accomplish a common goal.",
    color: "bg-maroon/10 text-maroon",
  },
  {
    label: "Results-driven",
    description: "We believe in results, and we believe that results should speak louder than words.",
    color: "bg-navy/10 text-navy",
  },
]

export default function AboutPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/programs/eep-volunteer-selfie.jpg"
            alt="Bridge2Charity volunteers with primary students at a partner school"
            fill
            sizes="100vw"
            className="object-cover object-[58%_center]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/36" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/72 via-navy/10 to-navy/20" />
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-hero-grid" width="72" height="72" patternUnits="userSpaceOnUse">
                <path d="M 72 0 L 0 0 0 72" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-light via-olive to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-orange-light" />
              <span
                className="text-orange-light text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                About Bridge2Charity
              </span>
            </div>
            <h1
              className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Rwanda will be built by{" "}
              <span className="text-orange-light">Rwandan youth</span>, for Rwandans.
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/76 sm:text-lg"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Bridge2Charity is powered by a team of young Rwandan civic leaders who bring
              both lived experience and professional dedication to this mission.
            </p>

            <dl className="mt-8 grid max-w-3xl grid-cols-1 gap-4 border-y border-white/12 py-5 sm:grid-cols-3">
              {[
                ["2022", "Founded through service"],
                ["Youth-led", "Built from lived experience"],
                ["Rwanda", "Community-rooted change"],
              ].map(([value, label]) => (
                <div key={value} className="min-w-0">
                  <dt
                    className="text-2xl font-bold leading-none text-white sm:text-3xl"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {value}
                  </dt>
                  <dd
                    className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/52"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* Story text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-orange" />
                <span
                  className="text-orange text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Story
                </span>
              </div>
              <div
                className="space-y-4 text-navy/70 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                <p>
                  Bridge2Charity Foundation was not born in a boardroom. It was born in a community in the
                  quiet recognition that the children around us deserved more than what circumstance had
                  given them, and in the conviction that young people, when given structure and purpose,
                  could be the ones to change that.
                </p>
                <p>
                  In 2022, a group of Isomo Academy scholars gathered — as they had been trained to do — to
                  look honestly at the challenges facing their communities. What they saw was urgent: children
                  dropping out of school because their families could not afford a uniform or a notebook. Young
                  learners who could not read in their own language, let alone in English. According to UNICEF
                  Rwanda, 33% of Primary 3 students cannot read grade-level text in Kinyarwanda, and nearly
                  90% struggle in English.
                </p>
                <p>
                  Driven by that conviction, Bridge2Charity was born. Founded through the community service
                  initiative of Isomo Academy and Bridge2Rwanda, B2C was built on a simple yet radical premise:
                  sustainable change does not come from the outside in. It comes from within communities, led
                  by people who understand the problem because they have lived near it.
                </p>
              </div>
            </div>

            {/* Video placeholder */}
            <div>
              <div className="w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-navy/15 bg-cream">
                <div className="w-14 h-14 rounded-full bg-navy/8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-navy/55 text-xs text-center px-6" style={{ fontFamily: "var(--font-nunito)" }}>
                  B2C origin video coming soon
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission, Vision & Values ─────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange" />
            <span
              className="text-orange text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What We Believe
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Mission, Vision &amp; Values
          </h2>

          {/* Mission / Vision / Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-navy/5">
              <div className="w-8 h-1 bg-orange rounded mb-4" />
              <h3 className="text-navy text-base font-bold mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>Our Mission</h3>
              <p className="text-navy/65 text-sm leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
                To improve the livelihoods of primary school students and their communities through
                sustainable, community-driven initiatives that create lasting change.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-6 shadow-sm">
              <div className="w-8 h-1 bg-orange rounded mb-4" />
              <h3 className="text-white text-base font-bold mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>Our Vision</h3>
              <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
                A Rwanda where every primary school student has access to quality education,
                proper nutrition, and a community that supports their growth.
              </p>
            </div>
            <div className="bg-olive/10 rounded-xl p-6 border border-olive/20">
              <div className="w-8 h-1 bg-olive rounded mb-4" />
              <h3 className="text-navy text-base font-bold mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>Our Alignment</h3>
              <p className="text-navy/65 text-sm leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
                Aligned with Rwanda&apos;s National Strategy for Transformation (NST1 &amp; 2) —
                investing in a child&apos;s education, nutrition, and belonging changes the trajectory
                of a family, a community, and a country.
              </p>
            </div>
          </div>

          {/* Values */}
          <h3 className="text-navy text-lg font-bold mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>Our Values</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-white rounded-xl p-5 shadow-sm border border-navy/5"
              >
                <div className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide mb-3 ${v.color}`}>
                  {v.label}
                </div>
                <p className="text-navy/65 text-xs leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Drives Us ───────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-orange" />
                <span
                  className="text-orange text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Purpose
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-navy leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                What Drives Us
              </h2>
              <div
                className="space-y-4 text-navy/70 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                <p>
                  Rwanda is a country in transformation. Its ambitions are bold: a knowledge-based economy,
                  a healthy, educated population, and a generation of young leaders ready to compete and
                  contribute on the global stage. B2C exists to ensure that transformation reaches the
                  children most at risk of being left behind.
                </p>
                <p>
                  We are not a large organization. But we are an intentional one. Every program we run,
                  every volunteer we train, every student we support is part of a deliberate strategy to
                  build something scalable, credible, and deeply rooted in the communities we serve.
                </p>
                <p className="font-semibold text-navy text-sm">
                  We are active. We are courageous. We go all in. And we believe results should speak
                  louder than words.
                </p>
              </div>
            </div>

            {/* NST video placeholder */}
            <div>
              <div className="w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-navy/15 bg-cream">
                <div className="w-14 h-14 rounded-full bg-navy/8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-navy/55 text-xs text-center px-6" style={{ fontFamily: "var(--font-nunito)" }}>
                  Rwanda NST video coming soon
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Team Collage ─────────────────────────────────────────────────────── */}
      <TeamCollage />

      {/* Divider */}
      <div className="w-full h-0.5 bg-navy/10" />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-14 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Join the Mission
          </h2>
          <p
            className="text-navy/70 text-sm sm:text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Whether you give, volunteer, or share our story — every action moves Rwanda forward.
          </p>
          <div className="flex justify-center">
            <Link
              href="/volunteer"
              className="px-8 py-3 bg-orange hover:bg-orange-dark text-white font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
