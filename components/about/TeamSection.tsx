"use client"

import { useState } from "react"
import Link from "next/link"
import { getActiveTeamMembers } from "@/data/team"
import type { TeamMember, TeamCategory } from "@/types/team"

const tabs: { label: string; value: TeamCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "BTS Team", value: "bts" },
  { label: "OHPC Team", value: "ohpc" },
  { label: "Communication Team", value: "communications" },
  { label: "Support & Operations", value: "operations" },
]

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Circular photo */}
      <div
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 flex-shrink-0 flex items-center justify-center"
        style={{ border: "2px solid #e0e0e0", background: "#f5f5f5" }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            className="text-2xl font-bold select-none"
            style={{ color: "#050a30", opacity: 0.25, fontFamily: "var(--font-montserrat)" }}
          >
            {member.initials}
          </span>
        )}
      </div>

      <p
        className="text-navy font-bold text-sm leading-tight group-hover:text-orange transition-colors duration-200 px-1"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {member.name}
      </p>
      <p
        className="text-navy/50 text-xs mt-0.5 leading-tight px-1"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {member.role}
      </p>
    </Link>
  )
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<TeamCategory | "all">("all")

  const allActive = getActiveTeamMembers()
  const filtered =
    activeTab === "all"
      ? allActive
      : allActive.filter((m) => m.category === activeTab)

  return (
    <section className="py-12 lg:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Meet Our Team
        </h1>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-navy text-white shadow-md shadow-navy/20"
                  : "bg-white text-navy/60 hover:text-navy border border-navy/10 hover:border-navy/30"
              }`}
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-8">
          {filtered.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  )
}
