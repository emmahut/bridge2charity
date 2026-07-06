import type { Metadata } from "next"
import TeamSection from "@/components/about/TeamSection"

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the passionate young civic leaders powering Bridge2Charity Foundation across Rwanda.",
}

export default function MeetTheTeamPage() {
  return (
    <main>
      <TeamSection />
    </main>
  )
}
