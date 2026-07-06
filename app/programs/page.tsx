import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Programs — Bridge2Charity Foundation",
  description:
    "Explore Bridge2Charity's three programs: Back to School, English Enhancement, and One Hen Per Child — each designed to create lasting change in Rwandan communities.",
}

const programs = [
  {
    slug: "back-to-school",
    title: "Back to School",
    label: "Education",
    description:
      "Covering school fees and providing essential learning materials for 23 students across 7 schools in Burera District, ensuring financial hardship never determines a child's future.",
    stats: [{ value: "23+", label: "Students Supported" }, { value: "7", label: "Schools Reached" }],
    color: "bg-orange",
    accent: "border-orange",
  },
  {
    slug: "english-enhancement",
    title: "English Enhancement",
    label: "Literacy",
    description:
      "Building English literacy, communication, and critical thinking for primary students at EP Kirambo — preparing a generation ready to compete and contribute on the global stage.",
    stats: [{ value: "15", label: "Students Enrolled" }, { value: "EP Kirambo", label: "Location" }],
    color: "bg-olive",
    accent: "border-olive",
  },
  {
    slug: "one-hen-per-child",
    title: "One Hen Per Child",
    label: "Nutrition",
    description:
      "Tackling child malnutrition through nutrition training and sustainable food sources for families in Bugesera District — solutions that continue to give long after we leave.",
    stats: [{ value: "15+", label: "Families Reached" }, { value: "2", label: "ECD Centres" }],
    color: "bg-maroon",
    accent: "border-maroon",
  },
]

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-cream pt-20">

      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange" />
            <span
              className="text-orange text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What We Do
            </span>
            <div className="h-px w-8 bg-orange" />
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Programs Built for <span className="text-orange">Lasting Change</span>
          </h1>
          <p
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every program we run is designed to solve an immediate problem and build something
            that lasts — for the student, the family, and the community.
          </p>
        </div>
      </section>

      {/* ── Program Cards ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.slug}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border-t-4 ${program.accent} flex flex-col`}
              >
                {/* Label */}
                <div className="px-7 pt-7 pb-0">
                  <span
                    className={`inline-block text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${program.color}`}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {program.label}
                  </span>
                </div>

                {/* Content */}
                <div className="px-7 pt-5 pb-7 flex flex-col flex-1">
                  <h2
                    className="text-navy text-xl font-bold mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {program.title}
                  </h2>
                  <p
                    className="text-navy/65 text-sm leading-relaxed mb-6 flex-1"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {program.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-7 py-4 border-t border-navy/8">
                    {program.stats.map((s) => (
                      <div key={s.label}>
                        <p
                          className="text-orange text-2xl font-bold"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {s.value}
                        </p>
                        <p
                          className="text-navy/50 text-xs"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-navy hover:bg-navy-light text-white text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Want to support these programs?
          </h2>
          <p
            className="text-white/60 text-base mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Whether through volunteering, donating, or sharing our story — every action makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/volunteer"
              className="px-8 py-3 bg-orange hover:bg-orange-light text-white font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="px-8 py-3 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
