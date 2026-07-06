import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Back to School Program",
  description:
    "Bridge2Charity's Back to School Program covers school fees, learning materials, mentorship, and follow-up care for primary students in Rwanda.",
}

export default function BackToSchoolLayout({ children }: { children: ReactNode }) {
  return children
}
