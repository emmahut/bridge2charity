import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { boardMembers } from "@/data/team"

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the Board of Directors of Bridge2Charity Foundation.",
}

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="relative overflow-hidden bg-navy px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-light/50 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-orange-light" />
              <span
                className="text-xs font-semibold uppercase tracking-widest text-orange-light"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Board of Directors
              </span>
            </div>
            <h1
              className="max-w-4xl text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Strategic oversight for a mission rooted in Rwandan communities.
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              The board safeguards Bridge2Charity&apos;s founding vision, accountability, and long-term
              commitment to students, families, and partner communities.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
            <ShieldCheck size={24} className="text-orange-light" aria-hidden="true" />
            <p
              className="mt-5 text-sm font-bold uppercase tracking-widest text-white/52"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Governance focus
            </p>
            <p
              className="mt-2 text-2xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Clarity, stewardship, and continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest text-orange"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Current board
              </p>
              <h2
                className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Leadership with founder-level context.
              </h2>
            </div>
            <p
              className="text-sm font-bold text-navy/55"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {boardMembers.length} {boardMembers.length === 1 ? "director" : "directors"}
            </p>
          </div>

          <div className="grid gap-6">
            {boardMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.slug}`}
                className="group grid overflow-hidden rounded-lg border border-navy/8 bg-white shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/25 hover:shadow-xl hover:shadow-navy/10 lg:grid-cols-[360px_minmax(0,1fr)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-navy lg:aspect-auto lg:min-h-[420px]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--color-navy)_0%,var(--color-navy-light)_64%,var(--color-orange)_160%)]">
                      <span
                        className="text-6xl font-bold text-white/24"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex min-h-full flex-col p-6 sm:p-8 lg:p-10">
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-orange"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Founder governance
                  </p>
                  <h3
                    className="mt-4 text-3xl font-bold leading-tight text-navy transition-colors duration-200 group-hover:text-orange sm:text-4xl"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="mt-3 text-base font-semibold leading-snug text-navy/70"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {member.title}
                  </p>
                  <p
                    className="mt-6 max-w-3xl text-base leading-relaxed text-navy/68"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {member.bio}
                  </p>
                  <span
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange transition-all duration-200 group-hover:gap-3"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    View Full Profile
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
