"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Mail, ArrowRight, User } from "lucide-react"
import { getActiveTeamMembers } from "@/data/team"
import type { Variants } from "framer-motion"
import type { TeamMember, TeamCategory } from "@/types/team"

const tabs: { label: string; value: TeamCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "BTS Team", value: "bts" },
  { label: "OHPC Team", value: "ohpc" },
  { label: "Communication Team", value: "communications" },
  { label: "Support & Operations", value: "operations" },
]

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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-soft-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange/20 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="w-full pt-[100%] relative">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-navy-50">
            <User className="w-16 h-16 text-navy/32" />
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div>
          <h3
            className="text-xl font-bold text-navy leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {member.name}
          </h3>
          <p
            className="text-orange text-sm font-semibold mt-1"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {member.role}
          </p>
          <p className="text-navy/68 text-sm mt-3 leading-relaxed">
            {truncate(member.bio, BIO_TRUNCATE_LENGTH)}
          </p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between w-full">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-navy/45 hover:text-orange transition-colors duration-200"
              aria-label={`Email ${member.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
          <Link
            href={`/team/${member.slug}`}
            className="flex items-center text-sm font-bold text-navy group-hover:text-orange transition-colors duration-200"
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
  const [activeTab, setActiveTab] = useState<TeamCategory | "all">("all")
  const prefersReducedMotion = useReducedMotion()

  const allActive = getActiveTeamMembers()
  const filtered =
    activeTab === "all"
      ? allActive
      : allActive.filter((m) => m.category === activeTab)

  return (
    <section className="bg-cream">
      {/* Hero Section */}
      <div className="text-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-navy">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Meet Our Team
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/70">
          We are a passionate team of young civic leaders dedicated to creating lasting change in Rwandan communities through education and sustainable development.
        </p>
        <div className="mt-8 h-1.5 w-24 bg-orange-light mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              aria-pressed={activeTab === tab.value}
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ease-in-out ${
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10"
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
