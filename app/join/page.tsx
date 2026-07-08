import type { Metadata } from "next"
import JoinPageClient from "./JoinPageClient"

export const metadata: Metadata = {
  title: "Join the Team | Bridge2Charity",
  description: "Explore open positions at Bridge2Charity Foundation in Kigali, Rwanda.",
}

export default function Page() {
  return <JoinPageClient />
}
