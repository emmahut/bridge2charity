import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { newsArticles } from "@/data/news"

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Read Bridge2Charity updates from the field, including program milestones, student stories, and community impact across Rwanda.",
}

const tagLabels: Record<string, string> = {
  eep: "English Enhancement",
  bts: "Back to School",
  ohpc: "One Hen Per Child",
  general: "General",
}

const tagColors: Record<string, string> = {
  eep: "bg-orange text-white",
  bts: "bg-olive text-white",
  ohpc: "bg-maroon text-white",
  general: "bg-navy text-white",
}

const fallbackImages: Record<string, string> = {
  eep: "/images/programs/eep-students-outside.jpg",
  bts: "/images/programs/bts-hero.jpg",
  ohpc: "/images/programs/ohpc-hero.jpg",
  general: "/images/programs/eep-volunteer-selfie.jpg",
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function getCoverImage(article: (typeof newsArticles)[number]) {
  const primaryTag = article.programTags[0] ?? "general"
  return article.coverImage ?? fallbackImages[primaryTag] ?? fallbackImages.general
}

export default function NewsPage() {
  const [featuredArticle, ...otherArticles] = newsArticles

  return (
    <main className="bg-cream">
      <section className="relative overflow-hidden bg-navy py-16 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-orange" />
            <span
              className="text-sm font-semibold uppercase tracking-widest text-orange"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Field Notes
            </span>
            <div className="h-px w-8 bg-orange" />
          </div>
          <h1
            className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            News &amp; Stories from Bridge2Charity
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/65 sm:text-lg"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Program milestones, student moments, and community updates from the people building
            practical change across Rwanda.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featuredArticle && (
            <Link
              href={`/news/${featuredArticle.slug}`}
              className="group grid overflow-hidden rounded-lg border border-navy/8 bg-white shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/25 hover:shadow-xl hover:shadow-navy/10 lg:grid-cols-[1.08fr_0.92fr]"
            >
              <div className="relative min-h-72 overflow-hidden lg:min-h-[430px]">
                <Image
                  src={getCoverImage(featuredArticle)}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent lg:hidden" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  {featuredArticle.programTags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tagColors[tag] ?? tagColors.general}`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {tagLabels[tag] ?? tag}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/45">
                    <Calendar size={13} aria-hidden="true" />
                    {formatDate(featuredArticle.publishedAt)}
                  </span>
                </div>
                <h2
                  className="text-2xl font-bold leading-tight text-navy transition-colors duration-200 group-hover:text-orange sm:text-3xl lg:text-4xl"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {featuredArticle.title}
                </h2>
                <p
                  className="mt-5 text-base leading-relaxed text-navy/65"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {featuredArticle.excerpt}
                </p>
                <span
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange transition-all duration-200 group-hover:gap-3"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Read the story <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          )}

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-navy/8 bg-white shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/25 hover:shadow-xl hover:shadow-navy/10 sm:flex-row"
              >
                <div className="relative min-h-56 overflow-hidden sm:min-h-full sm:w-56 sm:shrink-0">
                  <Image
                    src={getCoverImage(article)}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 224px, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    {article.programTags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${tagColors[tag] ?? tagColors.general}`}
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {tagLabels[tag] ?? tag}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="text-xl font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-orange"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {article.title}
                  </h2>
                  <p
                    className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy/60"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/45">
                      <Calendar size={13} aria-hidden="true" />
                      {formatDate(article.publishedAt)}
                    </span>
                    <ArrowRight size={16} className="text-orange transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
