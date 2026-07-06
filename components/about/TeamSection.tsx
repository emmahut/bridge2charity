"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { getActiveTeamMembers } from "@/data/team"
import type { Variants } from "framer-motion"
import type { TeamMember, TeamCategory } from "@/types/team"

type RosterTabValue = Exclude<TeamCategory, "collage"> | "all"

const tabs: { label: string; value: RosterTabValue }[] = [
  { label: "All", value: "all" },
  { label: "Leadership", value: "executive" },
  { label: "BTS Team", value: "bts" },
  { label: "OHPC Team", value: "ohpc" },
  { label: "Communication Team", value: "communications" },
  { label: "Support & Operations", value: "operations" },
]

const categoryLabels: Record<Exclude<TeamCategory, "collage">, string> = {
  executive: "Leadership",
  bts: "Back To School",
  ohpc: "One Hen Per Child",
  communications: "Communications",
  operations: "Operations",
}

const categoryDescriptions: Record<RosterTabValue, string> = {
  all: "Every active role behind Bridge2Charity, from classroom support to field follow-up and communications.",
  executive: "The leadership roles that keep the mission focused, accountable, and moving.",
  bts: "The team leading education access, student follow-up, and English learning support.",
  ohpc: "The team supporting nutrition, family training, and sustainable food security.",
  communications: "The storytellers shaping public trust, updates, and the Bridge2Charity voice.",
  operations: "The people who coordinate volunteers, logistics, data, and program delivery.",
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const BIO_TRUNCATE_LENGTH = 100

function truncate(str: string, length: number) {
  if (str.length <= length) return str
  return str.substring(0, length) + "..."
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-navy/8 bg-white shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/25 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--color-navy)_0%,var(--color-navy-light)_64%,var(--color-orange)_160%)]">
            <span
              className="text-5xl font-bold text-white/24"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {member.initials}
            </span>
          </div>
        )}
        <span
          className="absolute left-4 top-4 rounded-full border border-white/12 bg-navy/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white/80 backdrop-blur-md"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {categoryLabels[member.category as Exclude<TeamCategory, "collage">]}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <div>
          <h3
            className="text-xl font-bold leading-tight text-navy"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {member.name}
          </h3>
          <p
            className="mt-2 text-sm font-semibold leading-snug text-orange"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {member.role}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-navy/68">
            {truncate(member.bio, BIO_TRUNCATE_LENGTH)}
          </p>
        </div>

        <div className="mt-auto flex w-full items-center justify-between pt-5">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy/50 transition-colors duration-200 hover:border-orange/30 hover:bg-orange/10 hover:text-orange"
              aria-label={`Email ${member.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
          <Link
            href={`/team/${member.slug}`}
            className="ml-auto flex min-h-10 items-center text-sm font-bold text-navy transition-colors duration-200 group-hover:text-orange"
            aria-label={`View profile for ${member.name}`}
          >
            View Profile
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<RosterTabValue>("all")
  const prefersReducedMotion = useReducedMotion()

  const allActive = getActiveTeamMembers()
  const filtered =
    activeTab === "all"
      ? allActive
      : allActive.filter((m) => m.category === activeTab)

  return (
    <section className="bg-cream">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-navy px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-light/50 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-orange-light" />
              <span
                className="text-xs font-semibold uppercase tracking-widest text-orange-light"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Meet Our Team
              </span>
            </div>
            <h1
              className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              The young civic leaders moving the mission from idea to fieldwork.
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Bridge2Charity is run by program leads, teaching fellows, communicators, and operations
              builders who stay close to students, families, and partner schools.
            </p>
          </div>

          <dl className="grid grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] backdrop-blur-md">
            {[
              [String(allActive.length).padStart(2, "0"), "active members"],
              ["05", "work streams"],
              ["01", "shared mission"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
                <dt
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {value}
                </dt>
                <dd
                  className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/50"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest text-orange"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Browse by function
            </p>
            <p
              className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/65 sm:text-base"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {categoryDescriptions[activeTab]}
            </p>
          </div>
          <p
            className="text-sm font-bold text-navy/60"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {filtered.length} {filtered.length === 1 ? "profile" : "profiles"}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              aria-pressed={activeTab === tab.value}
              className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ease-in-out sm:text-base ${
                activeTab === tab.value
                  ? "bg-orange text-white shadow-lg shadow-orange/30"
                  : "bg-white text-navy/80 hover:bg-navy-50 border border-navy/10 shadow-sm"
              }`}
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
          >
            {filtered.map((member, i) => (
              <motion.div
                key={member.id}
                variants={prefersReducedMotion ? undefined : cardVariants}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? { opacity: 1 } : "visible"}
                custom={i}
                transition={{ delay: prefersReducedMotion ? 0 : i * 0.1, ease: "easeInOut" }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
