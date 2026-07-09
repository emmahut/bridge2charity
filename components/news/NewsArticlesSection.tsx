import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Newspaper } from "lucide-react"
import { newsArticles } from "@/data/news"

const tagLabels: Record<string, string> = {
  eep: "English Enhancement",
  bts: "Back to School",
  ohpc: "One Hen Per Child",
  general: "General",
}

const fallbackImages: Record<string, string> = {
  eep: "/images/programs/eep-students-outside.jpg",
  bts: "/images/programs/bts-hero.jpg",
  ohpc: "/images/programs/ohpc-hero.jpg",
  general: "/images/programs/eep-volunteer-selfie.jpg",
}

function getCoverImage(article: (typeof newsArticles)[number]) {
  const primaryTag = article.programTags[0] ?? "general"
  return article.coverImage ?? fallbackImages[primaryTag] ?? fallbackImages.general
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function NewsArticlesSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-orange" />
          <span
            className="text-sm font-semibold uppercase tracking-[3px] text-orange"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Field Updates &amp; Stories
          </span>
          <div className="h-px w-8 bg-orange" />
        </div>

        {/* ─── ARTICLE GRID / EMPTY STATE ──────────────────────────
            Switches automatically based on data/news.ts. Add articles
            there and this grid appears; remove them all and the empty
            state below returns — no manual toggling needed.
        ───────────────────────────────────────────────────────── */}
        {newsArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group overflow-hidden rounded-lg border border-navy/8 bg-white shadow-sm transition-colors duration-200 hover:border-orange/25"
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={getCoverImage(article)}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold">
                    <span className="text-navy/45">{formatDate(article.publishedAt)}</span>
                    <span className="text-navy/20">|</span>
                    <span className="text-orange">
                      {tagLabels[article.programTags[0]] ?? tagLabels.general}
                    </span>
                  </div>
                  <h3
                    className="mb-4 text-lg font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-orange"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-orange">
                    Read More <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-[600px] rounded-2xl border border-[#EEEEEE] bg-cream px-10 py-[60px] text-center">
            <Newspaper size={64} className="mx-auto mb-6 text-orange" aria-hidden="true" />
            <h3
              className="mb-3 text-2xl font-bold text-navy"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Stories are coming soon.
            </h3>
            <p className="text-navy/55" style={{ fontFamily: "var(--font-nunito)" }}>
              We are documenting our work across programs. Check back soon for field updates,
              volunteer stories, and program highlights from the B2C team.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
