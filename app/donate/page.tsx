import type { Metadata } from "next"
import DonatePage from "./DonatePage"

export const metadata: Metadata = {
  title: "Support a Student | Bridge2Charity",
  description: "Support Bridge2Charity students through donations for MP3s, school fees, Kindles, and more.",
}

export default function Page() {
  return <DonatePage />
}
