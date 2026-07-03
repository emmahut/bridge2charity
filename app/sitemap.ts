import type { MetadataRoute } from "next"
import { boardMembers, getActiveTeamMembers } from "@/data/team"
import { newsArticles } from "@/data/news"

const siteUrl = "https://bridge2charity.org"

const staticRoutes = [
  "",
  "/about",
  "/about/team",
  "/about/board",
  "/programs",
  "/programs/back-to-school",
  "/programs/english-enhancement",
  "/programs/one-hen-per-child",
  "/news",
  "/scholars",
  "/scholars/cohort-1",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const teamRoutes = [...getActiveTeamMembers(), ...boardMembers].map(
    (member) => `/team/${member.slug}`
  )
  const newsRoutes = newsArticles.map((article) => `/news/${article.slug}`)

  return [...staticRoutes, ...newsRoutes, ...teamRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
