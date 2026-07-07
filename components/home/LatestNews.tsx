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

export default function LatestNews() {
  const latest = newsArticles.slice(0, 3)

  return (
    <section className="py-12 lg:py-16 bg-cream" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section label — centered */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-8 bg-orange" />
        <span className="text-orange text-sm font-lato font-semibold tracking-widest uppercase">
          Latest Updates
        </span>
        <div className="h-px w-8 bg-orange" />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight">
          News &amp; Stories from the Field
        </h2>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-orange font-lato font-semibold text-sm hover:gap-3 transition-all duration-200 whitespace-nowrap"
        >
          All articles <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latest.map((article, index) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-navy/5 hover:border-orange/20 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Cover image */}
            <div className="relative h-48 overflow-hidden bg-navy/5">
              {article.coverImage ? (
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${
                  index === 1 ? "bg-olive/10" : "bg-maroon/5"
                }`}>
                  <span className="font-playfair text-7xl font-bold text-navy/5">B</span>
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
                    className={`text-xs font-lato font-bold px-2.5 py-1 rounded-full ${tagColors[tag] ?? "bg-navy/10 text-navy"}`}
                  >
                    {tagLabels[tag] ?? tag}
                  </span>
                ))}
              </div>

              <h3 className="font-playfair text-navy font-bold text-lg leading-snug mb-3 group-hover:text-orange transition-colors duration-200 flex-1">
                {article.title}
              </h3>

              <p className="text-navy/60 font-lato text-sm leading-relaxed mb-5 line-clamp-2">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-navy/40 text-xs font-lato pt-4 border-t border-navy/5">
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
