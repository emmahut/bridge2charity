import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "One Hen Per Child",
  description:
    "Bridge2Charity's One Hen Per Child program supports student nutrition through hens, mushroom seedlings, parent training, and community follow-up.",
}

export default function OneHenPerChildLayout({ children }: { children: ReactNode }) {
  return children
}
