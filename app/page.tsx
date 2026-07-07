import type { Metadata } from "next"
import Hero from "@/components/home/Hero"
import MissionSection from "@/components/home/MissionSection"
import ChallengeSection from "@/components/home/ChallengeSection"
import ProgramsOverview from "@/components/home/ProgramsOverview"
import ImpactNumbers from "@/components/home/ImpactNumbers"
import LatestNews from "@/components/home/LatestNews"
import VolunteerCTA from "@/components/home/VolunteerCTA"

export const metadata: Metadata = {
  title: "Bridge2Charity Foundation — Empowering Rwanda's Primary Students",
  description:
    "At B2C, we are improving primary students' lives through sustainable community initiatives, and everyone can be part of that mission.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ChallengeSection />
      <ProgramsOverview />
      <ImpactNumbers />
      <LatestNews />
      <VolunteerCTA />
    </>
  )
}
