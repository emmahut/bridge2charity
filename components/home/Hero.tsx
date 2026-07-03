"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { ArrowRight, GraduationCap, Sprout, UsersRound } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const heroStats = [
  {
    icon: GraduationCap,
    value: "23",
    label: "students supported",
  },
  {
    icon: UsersRound,
    value: "7",
    label: "partner schools",
  },
  {
    icon: Sprout,
    value: "90+",
    label: "seedlings planted",
  },
]

function AnimatedHeadline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const prefersReducedMotion = useReducedMotion()
  const initialState = prefersReducedMotion ? false : "hidden"
  const animateState = inView || prefersReducedMotion ? "visible" : "hidden"

  return (
    <div ref={ref} className="mb-6">
      <motion.h1
        variants={containerVariants}
        initial={initialState}
        animate={animateState}
        className="mx-auto max-w-5xl text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-7xl"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {/* Empowering */}
        <span className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span variants={wordVariants} className="inline-block">
            Empowering
          </motion.span>
        </span>
        {" "}
        {/* Rwanda’s */}
        <span className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span variants={wordVariants} className="inline-block text-orange-light">
            Rwanda&apos;s
          </motion.span>
        </span>
        {" "}
        {/* Next Generation. — wrapped together with hand-drawn underline */}
        <span className="relative inline-block">
          <span className="inline-block overflow-hidden align-bottom pb-1">
            <motion.span variants={wordVariants} className="inline-block">
              Next
            </motion.span>
          </span>
          {" "}
          <span className="inline-block overflow-hidden align-bottom pb-1">
            <motion.span variants={wordVariants} className="inline-block">
              Generation.
            </motion.span>
          </span>
          {/* Hand-drawn marker underline — two overlapping imperfect strokes */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 hidden w-full overflow-visible sm:block"
            style={{ bottom: "-4px" }}
            viewBox="0 0 400 14"
            preserveAspectRatio="none"
          >
            <path
              d="M 3 5 C 35 2, 85 9, 140 5 C 195 1, 255 10, 310 5 C 348 1, 375 8, 397 5"
              stroke="var(--color-orange-light)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 6 10 C 55 7, 110 12, 170 9 C 230 5, 280 12, 335 8 C 362 6, 385 11, 397 9"
              stroke="var(--color-orange-light)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
        </span>
      </motion.h1>
      <motion.span
        className="mx-auto mt-3 block h-[3px] max-w-xl rounded-sm bg-orange-light"
        initial={{ width: "0%" }}
        animate={inView || prefersReducedMotion ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
      />
    </div>
  )
}

function AnimatedQuote() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const prefersReducedMotion = useReducedMotion()
  const quoteText =
    "“At B2C, we improve primary students’ lives through sustainable community initiatives, and everyone can be part of that mission.”"

  return (
    <div ref={ref} className="mb-4">
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={inView || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
        className="mx-auto max-w-4xl text-sm font-light italic leading-relaxed text-white/85 sm:text-base"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {quoteText}
      </motion.p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden lg:min-h-[calc(100svh-5rem)]">
      <Image
        src="/images/programs/eep-volunteer-selfie.jpg"
        alt="Bridge2Charity volunteers with students at EP Kirambo"
        fill
        className="object-cover object-[32%_center] sm:object-center"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/72 to-navy/30" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(5,10,48,0.82),rgba(5,10,48,0))]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-light/50 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      >
        <span className="h-24 w-px bg-white/18" />
        <span
          className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold uppercase tracking-[0.32em] text-white/45"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Burera / Bugesera / Rwanda
        </span>
        <span className="h-24 w-px bg-white/18" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">

        <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-light/40 bg-orange-light/20 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-orange-light" />
          <span
            className="truncate text-xs font-semibold uppercase tracking-wide text-orange-light sm:text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Education. Nutrition. Community.
          </span>
        </div>

        <AnimatedHeadline />
        <AnimatedQuote />

        <div className="mx-auto mb-8 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button href="/volunteer" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>Become a Volunteer</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
          <Button
            href="/programs"
            variant="outline"
            size="lg"
            className="w-full border-white/30 text-white/85 hover:border-white/60 hover:bg-white/10 hover:text-white sm:w-auto"
          >
            Explore Our Programs
          </Button>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-lg border border-white/12 bg-white/[0.07] text-left shadow-2xl shadow-navy/25 backdrop-blur-md sm:grid-cols-3">
          {heroStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 border-b border-white/10 px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-light/15 text-orange-light">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span
                    className="block text-2xl font-extrabold leading-none text-white"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-white/55"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {stat.label}
                  </span>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
