import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { getArticleBySlug, newsArticles } from "@/data/news"

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>
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

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Story Not Found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [getCoverImage(article)],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = newsArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2)

  return (
    <main className="bg-white">
      <article>
        <section className="relative min-h-[58vh] overflow-hidden bg-navy text-white">
          <Image
            src={getCoverImage(article)}
            alt={article.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/78 to-navy/35" />

          <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-5xl flex-col justify-end px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <Link
              href="/news"
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.16]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All stories
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              {article.programTags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tagColors[tag] ?? tagColors.general}`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {tagLabels[tag] ?? tag}
                </span>
              ))}
            </div>

            <h1
              className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-white/68">
              <span className="inline-flex items-center gap-2">
                <Calendar size={15} aria-hidden="true" />
                {formatDate(article.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-2">
                <User size={15} aria-hidden="true" />
                {article.author}
              </span>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
            <div>
              <p
                className="mb-8 border-l-4 border-orange pl-5 text-xl font-semibold leading-relaxed text-navy sm:text-2xl"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {article.excerpt}
              </p>

              <div
                className="space-y-6 text-lg leading-relaxed text-navy/72"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {article.content.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-navy/8 bg-cream p-5">
                <h2
                  className="text-base font-bold text-navy"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  More stories
                </h2>
                <div className="mt-5 space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/news/${related.slug}`}
                      className="block border-t border-navy/10 pt-4 first:border-t-0 first:pt-0"
                    >
                      <span
                        className="text-sm font-bold leading-snug text-navy transition-colors duration-200 hover:text-orange"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {related.title}
                      </span>
                      <span className="mt-2 block text-xs font-semibold text-navy/45">
                        {formatDate(related.publishedAt)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  )
}
