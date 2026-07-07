"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, triggered = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, triggered])
  return count
}

// ── Arrow circle icon ────────────────────────────────────────────────────────
function ArrowCircle() {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: "#f16927" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────
const focuses = [
  {
    title: "Access to Education",
    description:
      "Every child deserves a seat in the classroom. Through the Back to School Program, Bridge2Charity covers school fees and provides essential learning materials — school bags, books, and pens — for primary students who would otherwise be left behind. We believe that financial hardship should never determine a child's future, and this program ensures it doesn't. By removing the barriers that stand between a child and their Education, we give each student the foundation they need to show up, participate, and grow.",
  },
  {
    title: "English Literacy & Communication",
    description:
      "Language is power. Through the English Enhancement Program, students develop the English literacy, communication skills, and critical thinking they need to engage confidently in Rwanda's evolving Education system and beyond. Sessions are led by dedicated volunteers and teachers who meet students where they are, using an engaging, simplified approach designed not just to teach English, but to help students fall in love with learning it.",
  },
  {
    title: "Holistic Student Development",
    description:
      "Academic support alone is not enough. Bridge2Charity invests in the whole child — their confidence, their mindset, and their sense of belonging. Through personalized encouragement letters filled with practical learning tips and a learning environment built on warmth and intentionality, we make sure every student knows they are seen, valued, and believed in.",
  },
  {
    title: "Continuous Follow-Up & Care",
    description:
      "Our commitment to each student does not end when the term begins. Bridge2Charity conducts school visits during the second semester to check on every student's progress and well-being, sitting with them, listening to their stories, and making sure nothing is quietly holding them back. We stay close, we check in, and we show up — because that consistency is often what makes the difference.",
  },
]

const approaches = [
  {
    title: "We Invest Before We Expect",
    description:
      "Every student receives all met needs before we expect anything of them — school fees covered, books provided, and a place secured. We believe that a child cannot focus on learning when they are unsure about them affording to stay in a school for another day.",
  },
  {
    title: "We Teach With Intention",
    description:
      "In our English Enhancement Program, students build literacy, communication, and critical thinking skills through our curriculum, and mentorship. We simplify, adapt, and show up until learning actually lands through our one-on-one sessions with our students.",
  },
  {
    title: "We Stay",
    description:
      "We move past school presence and, visits to share a meal with the family. We write personal letters and check in every now and then. Showing up consistently is what, to us, is our way of felling a child, they are worth everything.",
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BackToSchoolPage() {
  const [triggered, setTriggered] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const studentsCount = useCountUp(23, 2000, triggered)
  const schoolsCount = useCountUp(7, 2000, triggered)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-navy overflow-hidden">
        <Image
          src="/images/programs/bts-hero.jpg"
          alt="Back to School Program"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-28 max-w-3xl mx-auto">
          <p
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-light italic leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
          </p>
          <p
            className="text-orange font-semibold text-base sm:text-lg tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            — Mahatma Gandhi
          </p>
        </div>
      </section>

      {/* ── What Sets Us Apart ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/programs/bts-three-program.jpg"
                alt="Bridge2Charity programs"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right — text */}
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                What Sets Us Apart
              </h2>
              <p
                className="text-navy/70 text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Bridge2Charity exposes primary students to ideas that spark their curiosity and
                prompt them to question, helping them examine their potential at an early age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Focus ────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-center mb-10">
            <span
              className="inline-block bg-orange text-white font-bold text-base px-8 py-2.5 rounded-full tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Focus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focuses.map((focus) => (
              <div key={focus.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowCircle />
                  <h3
                    className="text-olive font-bold text-sm uppercase leading-tight"
                    style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "2px" }}
                  >
                    {focus.title}
                  </h3>
                </div>
                <p
                  className="text-navy/65 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Students — photo + stats ────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md">

            {/* Left — photo (user will add image here) */}
            <div className="relative min-h-[420px] lg:min-h-0">
              <Image
                src="/images/programs/bts-meet-students.jpg"
                alt="Bridge2Charity students in Burera"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right — navy panel */}
            <div className="bg-navy flex flex-col justify-center px-10 py-12">

              {/* Heading inside the navy panel */}
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Meet Our Students
              </h2>

              {/* Count-up stats */}
              <div ref={statsRef} className="flex gap-12">
                <div>
                  <p
                    className="text-5xl font-bold text-orange leading-none"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {studentsCount}+
                  </p>
                  <p
                    className="text-white/60 text-sm mt-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Students Reached
                  </p>
                </div>
                <div>
                  <p
                    className="text-5xl font-bold text-orange leading-none"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {schoolsCount}+
                  </p>
                  <p
                    className="text-white/60 text-sm mt-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Primary Schools Represented
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cohort section — dark bg, white buttons ──────────────────────────── */}
      <section className="py-14 lg:py-16" style={{ backgroundColor: "#1c1c1c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">

            {/* Cohort 1 — active */}
            <Link
              href="/scholars/cohort-1"
              className="inline-block bg-white text-navy font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Meet Cohort 1
            </Link>

            {/* Cohort 2, 3, 4, 5 — uncomment when confirmed */}
            {false && (
              <>
                <Link href="/scholars/cohort-2" className="inline-block bg-white text-navy font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200" style={{ fontFamily: "var(--font-jakarta)" }}>Meet Cohort 2</Link>
                <Link href="/scholars/cohort-3" className="inline-block bg-white text-navy font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200" style={{ fontFamily: "var(--font-jakarta)" }}>Meet Cohort 3</Link>
                <Link href="/scholars/cohort-4" className="inline-block bg-white text-navy font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200" style={{ fontFamily: "var(--font-jakarta)" }}>Meet Cohort 4</Link>
                <Link href="/scholars/cohort-5" className="inline-block bg-white text-navy font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200" style={{ fontFamily: "var(--font-jakarta)" }}>Meet Cohort 5</Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Our Approach to Student Support ─────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Approach to Student Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach) => (
              <div key={approach.title} className="bg-white rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowCircle />
                  <h3
                    className="text-olive font-bold text-xs uppercase leading-tight"
                    style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "2px" }}
                  >
                    {approach.title}
                  </h3>
                </div>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)", fontSize: "16px" }}
                >
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Help a Child Stay in School
          </h2>
          <p
            className="text-white/60 text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every contribution helps us cover another child's school fees, provide their books,
            and make sure they show up tomorrow — and every day after that.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/volunteer"
              className="px-8 py-3 bg-orange hover:bg-orange-light text-white font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="px-8 py-3 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Support This Program
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
