import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User } from "lucide-react"
import { newsArticles } from "@/data/news"

const tagLabels: Record<string, string> = {
  eep: "English Enhancement",
  bts: "Back to School",
  ohpc: "One Hen Per Child",
  general: "General",
}

const tagColors: Record<string, string> = {
  eep: "bg-orange/10 text-orange",
  bts: "bg-olive/10 text-olive",
  ohpc: "bg-maroon/10 text-maroon",
  general: "bg-navy/10 text-navy",
}

const fallbackImages: Record<string, string> = {
  eep: "/images/programs/eep-students-outside.jpg",
  bts: "/images/programs/bts-hero.jpg",
  ohpc: "/images/programs/ohpc-hero.jpg",
  general: "/images/programs/eep-volunteer-selfie.jpg",
}

export default function LatestNews() {
  const latest = newsArticles.slice(0, 3)

  return (
    <section className="bg-cream py-16 lg:py-24" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-orange" />
          <span
            className="text-sm font-semibold uppercase tracking-widest text-orange"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Latest Updates
          </span>
          <div className="h-px w-8 bg-orange" />
        </div>

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            News &amp; Stories from the Field
          </h2>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-orange transition-all duration-200 hover:gap-3"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            All articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latest.map((article, index) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-navy/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/20 hover:shadow-xl hover:shadow-navy/5"
            >
              {/* Cover image */}
              <div className="relative h-48 overflow-hidden bg-navy/5">
                {article.coverImage || article.programTags[0] ? (
                  <Image
                    src={article.coverImage ?? fallbackImages[article.programTags[0]] ?? fallbackImages.general}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    index === 1 ? "bg-olive/10" : "bg-maroon/5"
                  }`}>
                    <span
                      className="text-7xl font-bold text-navy/5"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      B
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.programTags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${tagColors[tag] ?? "bg-navy/10 text-navy"}`}
                    >
                      {tagLabels[tag] ?? tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="mb-3 flex-1 text-lg font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-orange"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {article.title}
                </h3>

                <p
                  className="mb-5 line-clamp-2 text-sm leading-relaxed text-navy/60"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 border-t border-navy/5 pt-4 text-xs text-navy/40">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5 truncate">
                    <User size={12} />
                    {article.author.replace("Bridge2Charity ", "")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
