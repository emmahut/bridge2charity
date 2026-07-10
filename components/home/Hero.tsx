"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

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

function AnimatedHeadline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-5">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
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
          <motion.span variants={wordVariants} className="inline-block text-orange">
            Rwanda&apos;s
          </motion.span>
        </span>
        {" "}
        {/* Next Generation. — wrapped together with hand-drawn underline */}
        <span className="relative inline-block whitespace-nowrap">
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
            className="absolute left-0 w-full overflow-visible pointer-events-none"
            style={{ bottom: "-4px" }}
            viewBox="0 0 400 14"
            preserveAspectRatio="none"
          >
            <path
              d="M 3 5 C 35 2, 85 9, 140 5 C 195 1, 255 10, 310 5 C 348 1, 375 8, 397 5"
              stroke="#C9601C"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 6 10 C 55 7, 110 12, 170 9 C 230 5, 280 12, 335 8 C 362 6, 385 11, 397 9"
              stroke="#C9601C"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
        </span>
      </motion.h1>
    </div>
  )
}

function AnimatedQuote() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const quoteText =
    "“At B2C, we are improving primary students’ lives through sustainable community initiatives, and everyone can be part of that mission.”"
  const words = quoteText.split(" ")

  return (
    <div ref={ref} className="mb-4">
      <motion.p
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-sm sm:text-base text-white/85 font-light leading-relaxed italic max-w-3xl mx-auto"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {words.map((word, i) => (
          <span key={i}>
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/programs/eep-volunteer-selfie.jpg"
        alt="Bridge2Charity volunteers with students at EP Kirambo"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/55 to-navy/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span
            className="text-orange text-sm font-semibold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Education. Nutrition. Community.
          </span>
        </div>

        <AnimatedHeadline />
        <AnimatedQuote />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button href="/volunteer" variant="primary" size="lg">
            Become a Volunteer
          </Button>
          <Button
            href="/programs"
            variant="outline"
            size="lg"
            className="border-white/30 text-white/80 hover:bg-white/10 hover:border-white/60 hover:text-white"
          >
            Explore Our Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
