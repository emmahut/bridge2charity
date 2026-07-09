import type { Metadata } from "next"
import NewsHero from "@/components/news/NewsHero"
import NewsletterSection from "@/components/news/NewsletterSection"
import NewsArticlesSection from "@/components/news/NewsArticlesSection"

export const metadata: Metadata = {
  title: { absolute: "News | Bridge2Charity" },
  description:
    "Program milestones, student moments, and community updates from the people building practical changes across Rwanda.",
}

export default function NewsPage() {
  return (
    <main className="bg-white">
      <NewsHero />
      <NewsletterSection />
      <NewsArticlesSection />
    </main>
  )
}
