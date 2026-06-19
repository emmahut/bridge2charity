import type { Metadata } from "next"
import TeamSection from "@/components/about/TeamSection"

export const metadata: Metadata = {
  title: "Meet the Team — Bridge2Charity Foundation",
  description: "Meet the passionate young civic leaders powering Bridge2Charity Foundation across Rwanda.",
}

export default function MeetTheTeamPage() {
  return (
    <main className="pt-20">
      <TeamSection />
    </main>
  )
}
