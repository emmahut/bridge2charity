import type { Metadata } from "next"
import Image from "next/image"
import { scholarCohorts } from "@/data/scholars"
import CohortGallery from "./CohortGallery"

export const metadata: Metadata = {
  title: "Cohort 1 Scholars — Bridge2Charity Foundation",
  description: "Meet the Cohort 1 scholars supported by Bridge2Charity's Back to School Program in Burera District.",
}

export default function Cohort1Page() {
  const students = scholarCohorts.find(c => c.id === "cohort-1")?.scholars ?? []

  return (
    <main className="min-h-screen bg-cream pt-20">

      {/* ── Pencil image banner ───────────────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "300px" }}>
        <Image
          src="/images/scholars/cohort-1/cover.jpg"
          alt="Cohort 1 — Burera Scholars"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── Interactive gallery (client component) ───────────────────────────── */}
      <CohortGallery students={students} />

    </main>
  )
}
