import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { teamMembers, boardMembers, getActiveTeamMembers } from "@/data/team"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const teamSlugs = getActiveTeamMembers().map((m) => ({ slug: m.slug }))
  const boardSlugs = boardMembers.map((m) => ({ slug: m.slug }))
  return [...teamSlugs, ...boardSlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const member =
    teamMembers.find((m) => m.slug === slug) ??
    boardMembers.find((m) => m.slug === slug)
  if (!member) return { title: "Team Member — Bridge2Charity Foundation" }
  return {
    title: `${"name" in member ? member.name : ""} — Bridge2Charity Foundation`,
    description: member.bio.slice(0, 155),
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params

  const teamMember = teamMembers.find((m) => m.slug === slug && m.category !== "collage")
  const boardMember = !teamMember ? boardMembers.find((m) => m.slug === slug) : null

  if (!teamMember && !boardMember) notFound()

  const isBoard = !!boardMember
  const member = teamMember ?? boardMember!

  const firstName = member.firstName
  const lastName = member.lastName
  const name = member.name
  const bio = member.bio
  const photo = member.photo
  const initials = member.initials
  const role = isBoard ? (boardMember!.title) : (teamMember!.role)
  const email = !isBoard && teamMember?.email ? teamMember.email : null

  const backHref = isBoard ? "/about/board" : "/about/team"
  const backLabel = isBoard ? "Board of Directors" : "All Team Members"

  return (
    <main className="min-h-screen bg-navy">

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors duration-200 group"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform duration-200">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Left — circular photo + quick info */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            {/* Circular photo */}
            <div
              className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-6 flex-shrink-0 flex items-center justify-center"
              style={{ border: "2px solid #e0e0e0", background: "linear-gradient(135deg, #0d1240 60%, #1a2050)" }}
            >
              {photo ? (
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span
                  className="text-5xl font-bold text-white/15 select-none"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {initials}
                </span>
              )}
            </div>

            {/* Email icon only */}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200 group"
                aria-label={`Email ${firstName}`}
              >
                <div className="w-9 h-9 rounded-full border border-white/15 group-hover:border-white/40 flex items-center justify-center transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </a>
            )}
          </div>

          {/* Right — name, role, bio */}
          <div className="lg:col-span-2 pt-1">
            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-white">{firstName}</span>
              {" "}
              <span style={{ color: "#4f6815" }}>{lastName}</span>
            </h1>

            {/* Role — bold sharp white */}
            <p
              className="text-white font-bold text-base sm:text-lg mb-8"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {role}
            </p>

            {/* Bio */}
            <div
              className="text-white/65 text-base leading-relaxed space-y-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Back button */}
            <div className="mt-10">
              <Link
                href={backHref}
                className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/8 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/10 transition-all duration-200 text-sm"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {backLabel}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
