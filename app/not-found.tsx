import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Newspaper, UsersRound } from "lucide-react"

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "This Bridge2Charity page is coming soon. Explore our programs, news, and ways to contact the team.",
}

const helpfulLinks = [
  {
    href: "/",
    label: "Home",
    description: "Return to the main Bridge2Charity page.",
    icon: Home,
  },
  {
    href: "/programs",
    label: "Programs",
    description: "Explore Back to School, English Enhancement, and One Hen Per Child.",
    icon: ArrowRight,
  },
  {
    href: "/news",
    label: "News",
    description: "Read current stories and field updates.",
    icon: Newspaper,
  },
  {
    href: "/about",
    label: "About",
    description: "Meet the mission, story, and people behind the foundation.",
    icon: UsersRound,
  },
]

export default function NotFound() {
  return (
    <main className="bg-navy text-white">
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden lg:min-h-[calc(100svh-5rem)]">
        <Image
          src="/images/programs/eep-classroom-1.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/55" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:56px_56px]"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/15 px-4 py-2 text-orange backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange" />
              <span
                className="text-xs font-bold uppercase tracking-wide sm:text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                404 · Coming soon
              </span>
            </div>

            <h1
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              This page is almost ready.
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              We&apos;re still preparing this part of the Bridge2Charity site. While it takes shape,
              you can continue through the pages that are live now.
            </p>

            <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-orange/30"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Go Home
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-base font-bold text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 hover:text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <nav className="mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Helpful pages">
            {helpfulLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/35 hover:bg-white/[0.1]"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-orange/15 text-orange transition-colors duration-200 group-hover:bg-orange/25">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span
                    className="block text-base font-bold text-white"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="mt-2 block text-sm leading-relaxed text-white/58"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {link.description}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>
      </section>
    </main>
  )
}
