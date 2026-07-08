import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Bridge2Charity",
  description: "Get in touch with Bridge2Charity Foundation. We'd love to hear from you.",
}

export default function Page() {
  return <ContactPageClient />
}
